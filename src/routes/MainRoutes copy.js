import React from 'react';

class MainRoutes1 extends React.Component {

    constructor(props) {
      super(props);
      this.state = {};
      this.isLanguageChanged = null;
    }
  
    componentDidMount() {
    }
  
    
    RWLCS = (matchProps, PassedComponent) => {
      const { match } = matchProps;
  
      const { IS_REMAIN_ON_SAME_PAGE_AFTER_LANGUAGE_CHANGE } = process.env;
      if (IS_REMAIN_ON_SAME_PAGE_AFTER_LANGUAGE_CHANGE && this.isLanguageChanged) {
        languageChangeSubscriber(match);
      }
  
      return <PassedComponent
        {...matchProps}
      />;
    }
  
    render() {
      const { defaultHome, t } = this.props;
  
      return (
        <Switch>
          <Route exact path={t('router./')}
            render={(matchProps) => this.RWLCS(matchProps, defaultHome)}
          // component={defaultHome}
          />
  
          <Route exact path={t('router.buyer')}
            render={(matchProps) => this.RWLCS(matchProps, Buyer)}
          // component={Buyer}
          />
  
          <Route exact path={t('router.seller')}
            render={(matchProps) => this.RWLCS(matchProps, Seller)}
          // component={Seller}
          />
  
          <Route exact path={t('router.unchain-immo')}
            render={(matchProps) => this.RWLCS(matchProps, Landing)}
          // component={Landing}
          />
  
          <Route exact path={t('router.our-teams')}
            render={(matchProps) => this.RWLCS(matchProps, OurTeams)}
          // component={OurTeams}
          />
  
          <Route exact path={t('router.properties')}
            render={(matchProps) => this.RWLCS(matchProps, ListingPage)}
          // component={ListingPage}
          />
  
          <Route exact path={t('router.last-minute')}
            render={(matchProps) => this.RWLCS(matchProps, LastChancePage)}
          // component={LastChancePage}
          />
          {/* <PrivateRoute exact path={t('router.sellerapp')} component={SellerApp} /> */}
          <PrivateRoute exact key="buyer-application" path={t('router.application/buyer')} component={SellerApp} />
          <PrivateRoute exact key="seller-application" path={t('router.application/seller')} component={SellerApp} />
  
          <Route exact path={t('router.properties') + '/:slug'}
            render={(matchProps) => this.RWLCS(matchProps, PropertyDetail)}
          // component={PropertyDetail}
          />
  
          <Route exact path={t('router.contact-us')}
            render={(matchProps) => this.RWLCS(matchProps, ContactUs)}
          // component={ContactUs}
          />
  
          <Route exact path={t('router.404')}
            render={(matchProps) => this.RWLCS(matchProps, ErrorPage)}
          // component={ErrorPage}
          />
  
          <Route exact path={t('router.faq')}
            render={(matchProps) => this.RWLCS(matchProps, FaqPage)}
          // component={FaqPage}
          />
  
          <Route exact path={t('router.news-tips')}
            render={(matchProps) => this.RWLCS(matchProps, NewsListing)}
          // component={NewsListing}
          />
  
          <Route exact path={t('router.news-tips') + '/:categoryName' + '/:slug'}
            render={(matchProps) => this.RWLCS(matchProps, NewsDetails)}
          // component={NewsDetails}
          />
  
          <PrivateRoute exact path={t('router.my-profile/search-filters')} component={MySearchFilters} />
          <PrivateRoute exact path={t('router.my-profile/contacts')} component={MyContracts} />
          <PrivateRoute exact path={t('router.my-profile/bills')} component={MyBills} />
          <PrivateRoute exact path={t('router.my-profile/change-password')} component={MyPassword} />
          <PrivateRoute exact path={t('router.my-profile')} component={Profile} socialLoginAccess="true" />
  
          <Route exact path={t('router.cookies')}
            render={(matchProps) => this.RWLCS(matchProps, Cookies)}
          // component={Cookies}
          />
  
          <Route exact path={t('router.privacy-policy')}
            render={(matchProps) => this.RWLCS(matchProps, PrivacyPolicy)}
          // component={PrivacyPolicy}
          />
  
          <Route exact path={t('router.terms')}
            render={(matchProps) => this.RWLCS(matchProps, Terms)}
          // component={Terms}
          />
  
          <Route exact path={t('router.forgotpassword')}
            render={(matchProps) => this.RWLCS(matchProps, ForgotPassword)}
          // component={ForgotPassword}
          />
  
          <Route exact path={t('router.resetpassword')}
            // render={(matchProps) => this.RWLCS(matchProps, ResetPassword)}
            component={ResetPassword}
          />
  
          <PrivateRoute exact path={t('router.my-auction/buyer')} component={AuctionBuyerList} />
          <PrivateRoute exact path={t('router.my-auction/seller')} component={AuctionSellerList} />
          <PrivateRoute exact path={t('router.my-auction/buyer') + '/:slug'} component={AuctionBuyerDetail} />
          <PrivateRoute exact path={t('router.my-auction/seller') + '/:slug'} component={AuctionSellerDetail} />
          <PrivateRoute exact key="buyer-calendar" path={t('router.calendar/buyer')} component={Calendar} />
          <PrivateRoute exact key="seller-calendar" path={t('router.calendar/seller')} component={Calendar} />
          <PrivateRoute exact path={t('router.sendmail')} component={SendMail} />
          <PrivateRoute exact path={t('router.message/inbox')} component={Inbox} />
          <PrivateRoute exact path={t('router.my-favourite')} component={MyFavourite} />
          <PrivateRoute exact path={t('router.my-properties/buyer')} component={MyPropertyBuyer} />
          <PrivateRoute exact path={t('router.my-properties/seller')} component={MyPropertySeller} />
  
          {/* static link to open user subscription popup */}
          <Route exact path={t('router.registerNow')}
            render={(matchProps) => this.RWLCS(matchProps, defaultHome)}
          />
  
          <Route exact path={t('router.join-us')}
            render={(matchProps) => this.RWLCS(matchProps, JoinUs)}
          // component={JoinUs}
          />
  
          <Route path={t('router.dev') + '/:slug?'}
            render={(matchProps) => this.RWLCS(matchProps, AuctionBuyerDetail)}
          // component={AuctionBuyerDetail}
          />
  
          <Route path={t('router.side')}
            render={(matchProps) => this.RWLCS(matchProps, SideBarPopup)}
          // component={SideBarPopup}
          />
  
          <Route
            render={(matchProps) => this.RWLCS(matchProps, ErrorPage)}
          // component={ErrorPage}
          />
        </Switch>
      );
    }
  }
  
  export default MainRoutes1;
  