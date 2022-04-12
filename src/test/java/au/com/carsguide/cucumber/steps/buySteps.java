package au.com.carsguide.cucumber.steps;

import au.com.carsguide.pages.HomePage;
import au.com.carsguide.pages.NewAndUsedCarSearchPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * By Bhoomi
 **/
public class buySteps {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
        System.out.println("I am on home page");
    }


    @When("^I mouse hover on \"([^\"]*)\" tab$")
    public void iMouseHoverOnTab(String menu){
        new HomePage().mouseHoverOnTopMenuList(menu);

    }

    @And("^I click \"([^\"]*)\" link$")
    public void iClickLink(String selectMenuBuyList){
        new HomePage().selectFromSubMenuBuyList(selectMenuBuyList);

    }

    @Then("^I navigate to \"([^\"]*)\" page$")
    public void iNavigateToPage(String text){
        new NewAndUsedCarSearchPage(). navigateToNewAndUsedCarTxt(text);

    }

    @And("^I select make \"([^\"]*)\"$")
    public void iSelectMake(String make){
        new NewAndUsedCarSearchPage().selectMake(make);


    }

    @And("^I select model \"([^\"]*)\"$")
    public void iSelectModel(String model){
        new NewAndUsedCarSearchPage().selectModel(model);

    }

    @And("^I select location \"([^\"]*)\"$")
    public void iSelectLocation(String location){
        new NewAndUsedCarSearchPage().selectLocation(location);

    }

    @And("^I select price \"([^\"]*)\"$")
    public void iSelectPrice(String value){
        new NewAndUsedCarSearchPage().selectPrices(value);

    }

    @And("^I click on Find My Next Car tab$")
    public void iClickOnFindMyNextCarTab() {
        new NewAndUsedCarSearchPage().clickOnFindMYCar();
    }

    @Then("^I should see the make \"([^\"]*)\" in results$")
    public void iShouldSeeTheMakeInResults(String make){
        new NewAndUsedCarSearchPage(). setMakeVerify( make);
    }




}
