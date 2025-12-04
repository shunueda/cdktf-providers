// https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgWlanPortalTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#org_id OrgWlanPortalTemplate#org_id}
  */
  readonly orgId: string;
  /**
  * Portal template wlan settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#portal_template OrgWlanPortalTemplate#portal_template}
  */
  readonly portalTemplate: OrgWlanPortalTemplatePortalTemplate;
  /**
  * Org WLAN ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#wlan_id OrgWlanPortalTemplate#wlan_id}
  */
  readonly wlanId: string;
}
export interface OrgWlanPortalTemplatePortalTemplateLocales {
  /**
  * Label for Amazon auth button
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#auth_button_amazon OrgWlanPortalTemplate#auth_button_amazon}
  */
  readonly authButtonAmazon?: string;
  /**
  * Label for Azure auth button
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#auth_button_azure OrgWlanPortalTemplate#auth_button_azure}
  */
  readonly authButtonAzure?: string;
  /**
  * Label for Email auth button
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#auth_button_email OrgWlanPortalTemplate#auth_button_email}
  */
  readonly authButtonEmail?: string;
  /**
  * Label for Facebook auth button
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#auth_button_facebook OrgWlanPortalTemplate#auth_button_facebook}
  */
  readonly authButtonFacebook?: string;
  /**
  * Label for Google auth button
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#auth_button_google OrgWlanPortalTemplate#auth_button_google}
  */
  readonly authButtonGoogle?: string;
  /**
  * Label for Microsoft auth button
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#auth_button_microsoft OrgWlanPortalTemplate#auth_button_microsoft}
  */
  readonly authButtonMicrosoft?: string;
  /**
  * Label for passphrase auth button
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#auth_button_passphrase OrgWlanPortalTemplate#auth_button_passphrase}
  */
  readonly authButtonPassphrase?: string;
  /**
  * Label for SMS auth button
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#auth_button_sms OrgWlanPortalTemplate#auth_button_sms}
  */
  readonly authButtonSms?: string;
  /**
  * Label for Sponsor auth button
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#auth_button_sponsor OrgWlanPortalTemplate#auth_button_sponsor}
  */
  readonly authButtonSponsor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#auth_label OrgWlanPortalTemplate#auth_label}
  */
  readonly authLabel?: string;
  /**
  * Label of the link to go back to /logon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#back_link OrgWlanPortalTemplate#back_link}
  */
  readonly backLink?: string;
  /**
  * Error message when company not provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#company_error OrgWlanPortalTemplate#company_error}
  */
  readonly companyError?: string;
  /**
  * Label of company field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#company_label OrgWlanPortalTemplate#company_label}
  */
  readonly companyLabel?: string;
  /**
  * Error message when a user has valid social login but doesn't match specified email domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#email_access_domain_error OrgWlanPortalTemplate#email_access_domain_error}
  */
  readonly emailAccessDomainError?: string;
  /**
  * Label for cancel confirmation code submission using email auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#email_cancel OrgWlanPortalTemplate#email_cancel}
  */
  readonly emailCancel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#email_code_cancel OrgWlanPortalTemplate#email_code_cancel}
  */
  readonly emailCodeCancel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#email_code_error OrgWlanPortalTemplate#email_code_error}
  */
  readonly emailCodeError?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#email_code_field_label OrgWlanPortalTemplate#email_code_field_label}
  */
  readonly emailCodeFieldLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#email_code_message OrgWlanPortalTemplate#email_code_message}
  */
  readonly emailCodeMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#email_code_submit OrgWlanPortalTemplate#email_code_submit}
  */
  readonly emailCodeSubmit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#email_code_title OrgWlanPortalTemplate#email_code_title}
  */
  readonly emailCodeTitle?: string;
  /**
  * Error message when email not provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#email_error OrgWlanPortalTemplate#email_error}
  */
  readonly emailError?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#email_field_label OrgWlanPortalTemplate#email_field_label}
  */
  readonly emailFieldLabel?: string;
  /**
  * Label of email field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#email_label OrgWlanPortalTemplate#email_label}
  */
  readonly emailLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#email_message OrgWlanPortalTemplate#email_message}
  */
  readonly emailMessage?: string;
  /**
  * Label for confirmation code submit button using email auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#email_submit OrgWlanPortalTemplate#email_submit}
  */
  readonly emailSubmit?: string;
  /**
  * Title for the Email registration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#email_title OrgWlanPortalTemplate#email_title}
  */
  readonly emailTitle?: string;
  /**
  * Error message when field1 not provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#field1error OrgWlanPortalTemplate#field1error}
  */
  readonly field1Error?: string;
  /**
  * Label of field1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#field1label OrgWlanPortalTemplate#field1label}
  */
  readonly field1Label?: string;
  /**
  * Error message when field2 not provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#field2error OrgWlanPortalTemplate#field2error}
  */
  readonly field2Error?: string;
  /**
  * Label of field2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#field2label OrgWlanPortalTemplate#field2label}
  */
  readonly field2Label?: string;
  /**
  * Error message when field3 not provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#field3error OrgWlanPortalTemplate#field3error}
  */
  readonly field3Error?: string;
  /**
  * Label of field3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#field3label OrgWlanPortalTemplate#field3label}
  */
  readonly field3Label?: string;
  /**
  * Error message when field4 not provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#field4error OrgWlanPortalTemplate#field4error}
  */
  readonly field4Error?: string;
  /**
  * Label of field4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#field4label OrgWlanPortalTemplate#field4label}
  */
  readonly field4Label?: string;
  /**
  * label of the link to go to /marketing_policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#marketing_policy_link OrgWlanPortalTemplate#marketing_policy_link}
  */
  readonly marketingPolicyLink?: string;
  /**
  * Whether marketing policy optin is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#marketing_policy_opt_in OrgWlanPortalTemplate#marketing_policy_opt_in}
  */
  readonly marketingPolicyOptIn?: boolean | cdktf.IResolvable;
  /**
  * label for marketing optin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#marketing_policy_opt_in_label OrgWlanPortalTemplate#marketing_policy_opt_in_label}
  */
  readonly marketingPolicyOptInLabel?: string;
  /**
  * marketing policy text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#marketing_policy_opt_in_text OrgWlanPortalTemplate#marketing_policy_opt_in_text}
  */
  readonly marketingPolicyOptInText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#message OrgWlanPortalTemplate#message}
  */
  readonly message?: string;
  /**
  * Error message when name not provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#name_error OrgWlanPortalTemplate#name_error}
  */
  readonly nameError?: string;
  /**
  * Label of name field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#name_label OrgWlanPortalTemplate#name_label}
  */
  readonly nameLabel?: string;
  /**
  * Label for Do Not Store My Personal Information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#optout_label OrgWlanPortalTemplate#optout_label}
  */
  readonly optoutLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#page_title OrgWlanPortalTemplate#page_title}
  */
  readonly pageTitle?: string;
  /**
  * Label for the Passphrase cancel button
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#passphrase_cancel OrgWlanPortalTemplate#passphrase_cancel}
  */
  readonly passphraseCancel?: string;
  /**
  * Error message when invalid passphrase is provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#passphrase_error OrgWlanPortalTemplate#passphrase_error}
  */
  readonly passphraseError?: string;
  /**
  * Passphrase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#passphrase_label OrgWlanPortalTemplate#passphrase_label}
  */
  readonly passphraseLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#passphrase_message OrgWlanPortalTemplate#passphrase_message}
  */
  readonly passphraseMessage?: string;
  /**
  * Label for the Passphrase submit button
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#passphrase_submit OrgWlanPortalTemplate#passphrase_submit}
  */
  readonly passphraseSubmit?: string;
  /**
  * Title for passphrase details page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#passphrase_title OrgWlanPortalTemplate#passphrase_title}
  */
  readonly passphraseTitle?: string;
  /**
  * Prefix of the label of the link to go to Privacy Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#privacy_policy_accept_label OrgWlanPortalTemplate#privacy_policy_accept_label}
  */
  readonly privacyPolicyAcceptLabel?: string;
  /**
  * Error message when Privacy Policy not accepted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#privacy_policy_error OrgWlanPortalTemplate#privacy_policy_error}
  */
  readonly privacyPolicyError?: string;
  /**
  * Label of the link to go to Privacy Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#privacy_policy_link OrgWlanPortalTemplate#privacy_policy_link}
  */
  readonly privacyPolicyLink?: string;
  /**
  * Text of the Privacy Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#privacy_policy_text OrgWlanPortalTemplate#privacy_policy_text}
  */
  readonly privacyPolicyText?: string;
  /**
  * Label to denote required field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#required_field_label OrgWlanPortalTemplate#required_field_label}
  */
  readonly requiredFieldLabel?: string;
  /**
  * Label of the button to signin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sign_in_label OrgWlanPortalTemplate#sign_in_label}
  */
  readonly signInLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sms_carrier_default OrgWlanPortalTemplate#sms_carrier_default}
  */
  readonly smsCarrierDefault?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sms_carrier_error OrgWlanPortalTemplate#sms_carrier_error}
  */
  readonly smsCarrierError?: string;
  /**
  * Label for mobile carrier drop-down list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sms_carrier_field_label OrgWlanPortalTemplate#sms_carrier_field_label}
  */
  readonly smsCarrierFieldLabel?: string;
  /**
  * Label for cancel confirmation code submission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sms_code_cancel OrgWlanPortalTemplate#sms_code_cancel}
  */
  readonly smsCodeCancel?: string;
  /**
  * Error message when confirmation code is invalid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sms_code_error OrgWlanPortalTemplate#sms_code_error}
  */
  readonly smsCodeError?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sms_code_field_label OrgWlanPortalTemplate#sms_code_field_label}
  */
  readonly smsCodeFieldLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sms_code_message OrgWlanPortalTemplate#sms_code_message}
  */
  readonly smsCodeMessage?: string;
  /**
  * Label for confirmation code submit button
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sms_code_submit OrgWlanPortalTemplate#sms_code_submit}
  */
  readonly smsCodeSubmit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sms_code_title OrgWlanPortalTemplate#sms_code_title}
  */
  readonly smsCodeTitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sms_country_field_label OrgWlanPortalTemplate#sms_country_field_label}
  */
  readonly smsCountryFieldLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sms_country_format OrgWlanPortalTemplate#sms_country_format}
  */
  readonly smsCountryFormat?: string;
  /**
  * Label for checkbox to specify that the user has access code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sms_have_access_code OrgWlanPortalTemplate#sms_have_access_code}
  */
  readonly smsHaveAccessCode?: string;
  /**
  * Format of access code sms message. {{code}} and {{duration}} are placeholders and should be retained as is.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sms_message_format OrgWlanPortalTemplate#sms_message_format}
  */
  readonly smsMessageFormat?: string;
  /**
  * Label for canceling mobile details for SMS auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sms_number_cancel OrgWlanPortalTemplate#sms_number_cancel}
  */
  readonly smsNumberCancel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sms_number_error OrgWlanPortalTemplate#sms_number_error}
  */
  readonly smsNumberError?: string;
  /**
  * Label for field to provide mobile number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sms_number_field_label OrgWlanPortalTemplate#sms_number_field_label}
  */
  readonly smsNumberFieldLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sms_number_format OrgWlanPortalTemplate#sms_number_format}
  */
  readonly smsNumberFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sms_number_message OrgWlanPortalTemplate#sms_number_message}
  */
  readonly smsNumberMessage?: string;
  /**
  * Label for submit button for code generation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sms_number_submit OrgWlanPortalTemplate#sms_number_submit}
  */
  readonly smsNumberSubmit?: string;
  /**
  * Title for phone number details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sms_number_title OrgWlanPortalTemplate#sms_number_title}
  */
  readonly smsNumberTitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sms_username_format OrgWlanPortalTemplate#sms_username_format}
  */
  readonly smsUsernameFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sponsor_back_link OrgWlanPortalTemplate#sponsor_back_link}
  */
  readonly sponsorBackLink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sponsor_cancel OrgWlanPortalTemplate#sponsor_cancel}
  */
  readonly sponsorCancel?: string;
  /**
  * Label for Sponsor Email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sponsor_email OrgWlanPortalTemplate#sponsor_email}
  */
  readonly sponsorEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sponsor_email_error OrgWlanPortalTemplate#sponsor_email_error}
  */
  readonly sponsorEmailError?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sponsor_info_approved OrgWlanPortalTemplate#sponsor_info_approved}
  */
  readonly sponsorInfoApproved?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sponsor_info_denied OrgWlanPortalTemplate#sponsor_info_denied}
  */
  readonly sponsorInfoDenied?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sponsor_info_pending OrgWlanPortalTemplate#sponsor_info_pending}
  */
  readonly sponsorInfoPending?: string;
  /**
  * Label for Sponsor Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sponsor_name OrgWlanPortalTemplate#sponsor_name}
  */
  readonly sponsorName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sponsor_name_error OrgWlanPortalTemplate#sponsor_name_error}
  */
  readonly sponsorNameError?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sponsor_note_pending OrgWlanPortalTemplate#sponsor_note_pending}
  */
  readonly sponsorNotePending?: string;
  /**
  * Submit button label request Wifi Access and notify sponsor about guest request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sponsor_request_access OrgWlanPortalTemplate#sponsor_request_access}
  */
  readonly sponsorRequestAccess?: string;
  /**
  * Text to display if sponsor approves request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sponsor_status_approved OrgWlanPortalTemplate#sponsor_status_approved}
  */
  readonly sponsorStatusApproved?: string;
  /**
  * Text to display when sponsor denies request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sponsor_status_denied OrgWlanPortalTemplate#sponsor_status_denied}
  */
  readonly sponsorStatusDenied?: string;
  /**
  * Text to display if request is still pending
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sponsor_status_pending OrgWlanPortalTemplate#sponsor_status_pending}
  */
  readonly sponsorStatusPending?: string;
  /**
  * Submit button label to notify sponsor about guest request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sponsor_submit OrgWlanPortalTemplate#sponsor_submit}
  */
  readonly sponsorSubmit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sponsors_error OrgWlanPortalTemplate#sponsors_error}
  */
  readonly sponsorsError?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sponsors_field_label OrgWlanPortalTemplate#sponsors_field_label}
  */
  readonly sponsorsFieldLabel?: string;
  /**
  * Prefix of the label of the link to go to tos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#tos_accept_label OrgWlanPortalTemplate#tos_accept_label}
  */
  readonly tosAcceptLabel?: string;
  /**
  * Error message when tos not accepted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#tos_error OrgWlanPortalTemplate#tos_error}
  */
  readonly tosError?: string;
  /**
  * Label of the link to go to tos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#tos_link OrgWlanPortalTemplate#tos_link}
  */
  readonly tosLink?: string;
  /**
  * Text of the Terms of Service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#tos_text OrgWlanPortalTemplate#tos_text}
  */
  readonly tosText?: string;
}

export function orgWlanPortalTemplatePortalTemplateLocalesToTerraform(struct?: OrgWlanPortalTemplatePortalTemplateLocales | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_button_amazon: cdktf.stringToTerraform(struct!.authButtonAmazon),
    auth_button_azure: cdktf.stringToTerraform(struct!.authButtonAzure),
    auth_button_email: cdktf.stringToTerraform(struct!.authButtonEmail),
    auth_button_facebook: cdktf.stringToTerraform(struct!.authButtonFacebook),
    auth_button_google: cdktf.stringToTerraform(struct!.authButtonGoogle),
    auth_button_microsoft: cdktf.stringToTerraform(struct!.authButtonMicrosoft),
    auth_button_passphrase: cdktf.stringToTerraform(struct!.authButtonPassphrase),
    auth_button_sms: cdktf.stringToTerraform(struct!.authButtonSms),
    auth_button_sponsor: cdktf.stringToTerraform(struct!.authButtonSponsor),
    auth_label: cdktf.stringToTerraform(struct!.authLabel),
    back_link: cdktf.stringToTerraform(struct!.backLink),
    company_error: cdktf.stringToTerraform(struct!.companyError),
    company_label: cdktf.stringToTerraform(struct!.companyLabel),
    email_access_domain_error: cdktf.stringToTerraform(struct!.emailAccessDomainError),
    email_cancel: cdktf.stringToTerraform(struct!.emailCancel),
    email_code_cancel: cdktf.stringToTerraform(struct!.emailCodeCancel),
    email_code_error: cdktf.stringToTerraform(struct!.emailCodeError),
    email_code_field_label: cdktf.stringToTerraform(struct!.emailCodeFieldLabel),
    email_code_message: cdktf.stringToTerraform(struct!.emailCodeMessage),
    email_code_submit: cdktf.stringToTerraform(struct!.emailCodeSubmit),
    email_code_title: cdktf.stringToTerraform(struct!.emailCodeTitle),
    email_error: cdktf.stringToTerraform(struct!.emailError),
    email_field_label: cdktf.stringToTerraform(struct!.emailFieldLabel),
    email_label: cdktf.stringToTerraform(struct!.emailLabel),
    email_message: cdktf.stringToTerraform(struct!.emailMessage),
    email_submit: cdktf.stringToTerraform(struct!.emailSubmit),
    email_title: cdktf.stringToTerraform(struct!.emailTitle),
    field1error: cdktf.stringToTerraform(struct!.field1Error),
    field1label: cdktf.stringToTerraform(struct!.field1Label),
    field2error: cdktf.stringToTerraform(struct!.field2Error),
    field2label: cdktf.stringToTerraform(struct!.field2Label),
    field3error: cdktf.stringToTerraform(struct!.field3Error),
    field3label: cdktf.stringToTerraform(struct!.field3Label),
    field4error: cdktf.stringToTerraform(struct!.field4Error),
    field4label: cdktf.stringToTerraform(struct!.field4Label),
    marketing_policy_link: cdktf.stringToTerraform(struct!.marketingPolicyLink),
    marketing_policy_opt_in: cdktf.booleanToTerraform(struct!.marketingPolicyOptIn),
    marketing_policy_opt_in_label: cdktf.stringToTerraform(struct!.marketingPolicyOptInLabel),
    marketing_policy_opt_in_text: cdktf.stringToTerraform(struct!.marketingPolicyOptInText),
    message: cdktf.stringToTerraform(struct!.message),
    name_error: cdktf.stringToTerraform(struct!.nameError),
    name_label: cdktf.stringToTerraform(struct!.nameLabel),
    optout_label: cdktf.stringToTerraform(struct!.optoutLabel),
    page_title: cdktf.stringToTerraform(struct!.pageTitle),
    passphrase_cancel: cdktf.stringToTerraform(struct!.passphraseCancel),
    passphrase_error: cdktf.stringToTerraform(struct!.passphraseError),
    passphrase_label: cdktf.stringToTerraform(struct!.passphraseLabel),
    passphrase_message: cdktf.stringToTerraform(struct!.passphraseMessage),
    passphrase_submit: cdktf.stringToTerraform(struct!.passphraseSubmit),
    passphrase_title: cdktf.stringToTerraform(struct!.passphraseTitle),
    privacy_policy_accept_label: cdktf.stringToTerraform(struct!.privacyPolicyAcceptLabel),
    privacy_policy_error: cdktf.stringToTerraform(struct!.privacyPolicyError),
    privacy_policy_link: cdktf.stringToTerraform(struct!.privacyPolicyLink),
    privacy_policy_text: cdktf.stringToTerraform(struct!.privacyPolicyText),
    required_field_label: cdktf.stringToTerraform(struct!.requiredFieldLabel),
    sign_in_label: cdktf.stringToTerraform(struct!.signInLabel),
    sms_carrier_default: cdktf.stringToTerraform(struct!.smsCarrierDefault),
    sms_carrier_error: cdktf.stringToTerraform(struct!.smsCarrierError),
    sms_carrier_field_label: cdktf.stringToTerraform(struct!.smsCarrierFieldLabel),
    sms_code_cancel: cdktf.stringToTerraform(struct!.smsCodeCancel),
    sms_code_error: cdktf.stringToTerraform(struct!.smsCodeError),
    sms_code_field_label: cdktf.stringToTerraform(struct!.smsCodeFieldLabel),
    sms_code_message: cdktf.stringToTerraform(struct!.smsCodeMessage),
    sms_code_submit: cdktf.stringToTerraform(struct!.smsCodeSubmit),
    sms_code_title: cdktf.stringToTerraform(struct!.smsCodeTitle),
    sms_country_field_label: cdktf.stringToTerraform(struct!.smsCountryFieldLabel),
    sms_country_format: cdktf.stringToTerraform(struct!.smsCountryFormat),
    sms_have_access_code: cdktf.stringToTerraform(struct!.smsHaveAccessCode),
    sms_message_format: cdktf.stringToTerraform(struct!.smsMessageFormat),
    sms_number_cancel: cdktf.stringToTerraform(struct!.smsNumberCancel),
    sms_number_error: cdktf.stringToTerraform(struct!.smsNumberError),
    sms_number_field_label: cdktf.stringToTerraform(struct!.smsNumberFieldLabel),
    sms_number_format: cdktf.stringToTerraform(struct!.smsNumberFormat),
    sms_number_message: cdktf.stringToTerraform(struct!.smsNumberMessage),
    sms_number_submit: cdktf.stringToTerraform(struct!.smsNumberSubmit),
    sms_number_title: cdktf.stringToTerraform(struct!.smsNumberTitle),
    sms_username_format: cdktf.stringToTerraform(struct!.smsUsernameFormat),
    sponsor_back_link: cdktf.stringToTerraform(struct!.sponsorBackLink),
    sponsor_cancel: cdktf.stringToTerraform(struct!.sponsorCancel),
    sponsor_email: cdktf.stringToTerraform(struct!.sponsorEmail),
    sponsor_email_error: cdktf.stringToTerraform(struct!.sponsorEmailError),
    sponsor_info_approved: cdktf.stringToTerraform(struct!.sponsorInfoApproved),
    sponsor_info_denied: cdktf.stringToTerraform(struct!.sponsorInfoDenied),
    sponsor_info_pending: cdktf.stringToTerraform(struct!.sponsorInfoPending),
    sponsor_name: cdktf.stringToTerraform(struct!.sponsorName),
    sponsor_name_error: cdktf.stringToTerraform(struct!.sponsorNameError),
    sponsor_note_pending: cdktf.stringToTerraform(struct!.sponsorNotePending),
    sponsor_request_access: cdktf.stringToTerraform(struct!.sponsorRequestAccess),
    sponsor_status_approved: cdktf.stringToTerraform(struct!.sponsorStatusApproved),
    sponsor_status_denied: cdktf.stringToTerraform(struct!.sponsorStatusDenied),
    sponsor_status_pending: cdktf.stringToTerraform(struct!.sponsorStatusPending),
    sponsor_submit: cdktf.stringToTerraform(struct!.sponsorSubmit),
    sponsors_error: cdktf.stringToTerraform(struct!.sponsorsError),
    sponsors_field_label: cdktf.stringToTerraform(struct!.sponsorsFieldLabel),
    tos_accept_label: cdktf.stringToTerraform(struct!.tosAcceptLabel),
    tos_error: cdktf.stringToTerraform(struct!.tosError),
    tos_link: cdktf.stringToTerraform(struct!.tosLink),
    tos_text: cdktf.stringToTerraform(struct!.tosText),
  }
}


export function orgWlanPortalTemplatePortalTemplateLocalesToHclTerraform(struct?: OrgWlanPortalTemplatePortalTemplateLocales | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_button_amazon: {
      value: cdktf.stringToHclTerraform(struct!.authButtonAmazon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_button_azure: {
      value: cdktf.stringToHclTerraform(struct!.authButtonAzure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_button_email: {
      value: cdktf.stringToHclTerraform(struct!.authButtonEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_button_facebook: {
      value: cdktf.stringToHclTerraform(struct!.authButtonFacebook),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_button_google: {
      value: cdktf.stringToHclTerraform(struct!.authButtonGoogle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_button_microsoft: {
      value: cdktf.stringToHclTerraform(struct!.authButtonMicrosoft),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_button_passphrase: {
      value: cdktf.stringToHclTerraform(struct!.authButtonPassphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_button_sms: {
      value: cdktf.stringToHclTerraform(struct!.authButtonSms),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_button_sponsor: {
      value: cdktf.stringToHclTerraform(struct!.authButtonSponsor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_label: {
      value: cdktf.stringToHclTerraform(struct!.authLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    back_link: {
      value: cdktf.stringToHclTerraform(struct!.backLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    company_error: {
      value: cdktf.stringToHclTerraform(struct!.companyError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    company_label: {
      value: cdktf.stringToHclTerraform(struct!.companyLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_access_domain_error: {
      value: cdktf.stringToHclTerraform(struct!.emailAccessDomainError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_cancel: {
      value: cdktf.stringToHclTerraform(struct!.emailCancel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_code_cancel: {
      value: cdktf.stringToHclTerraform(struct!.emailCodeCancel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_code_error: {
      value: cdktf.stringToHclTerraform(struct!.emailCodeError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_code_field_label: {
      value: cdktf.stringToHclTerraform(struct!.emailCodeFieldLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_code_message: {
      value: cdktf.stringToHclTerraform(struct!.emailCodeMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_code_submit: {
      value: cdktf.stringToHclTerraform(struct!.emailCodeSubmit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_code_title: {
      value: cdktf.stringToHclTerraform(struct!.emailCodeTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_error: {
      value: cdktf.stringToHclTerraform(struct!.emailError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_field_label: {
      value: cdktf.stringToHclTerraform(struct!.emailFieldLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_label: {
      value: cdktf.stringToHclTerraform(struct!.emailLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_message: {
      value: cdktf.stringToHclTerraform(struct!.emailMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_submit: {
      value: cdktf.stringToHclTerraform(struct!.emailSubmit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_title: {
      value: cdktf.stringToHclTerraform(struct!.emailTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field1error: {
      value: cdktf.stringToHclTerraform(struct!.field1Error),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field1label: {
      value: cdktf.stringToHclTerraform(struct!.field1Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field2error: {
      value: cdktf.stringToHclTerraform(struct!.field2Error),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field2label: {
      value: cdktf.stringToHclTerraform(struct!.field2Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field3error: {
      value: cdktf.stringToHclTerraform(struct!.field3Error),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field3label: {
      value: cdktf.stringToHclTerraform(struct!.field3Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field4error: {
      value: cdktf.stringToHclTerraform(struct!.field4Error),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field4label: {
      value: cdktf.stringToHclTerraform(struct!.field4Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    marketing_policy_link: {
      value: cdktf.stringToHclTerraform(struct!.marketingPolicyLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    marketing_policy_opt_in: {
      value: cdktf.booleanToHclTerraform(struct!.marketingPolicyOptIn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    marketing_policy_opt_in_label: {
      value: cdktf.stringToHclTerraform(struct!.marketingPolicyOptInLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    marketing_policy_opt_in_text: {
      value: cdktf.stringToHclTerraform(struct!.marketingPolicyOptInText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_error: {
      value: cdktf.stringToHclTerraform(struct!.nameError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_label: {
      value: cdktf.stringToHclTerraform(struct!.nameLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optout_label: {
      value: cdktf.stringToHclTerraform(struct!.optoutLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    page_title: {
      value: cdktf.stringToHclTerraform(struct!.pageTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passphrase_cancel: {
      value: cdktf.stringToHclTerraform(struct!.passphraseCancel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passphrase_error: {
      value: cdktf.stringToHclTerraform(struct!.passphraseError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passphrase_label: {
      value: cdktf.stringToHclTerraform(struct!.passphraseLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passphrase_message: {
      value: cdktf.stringToHclTerraform(struct!.passphraseMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passphrase_submit: {
      value: cdktf.stringToHclTerraform(struct!.passphraseSubmit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passphrase_title: {
      value: cdktf.stringToHclTerraform(struct!.passphraseTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privacy_policy_accept_label: {
      value: cdktf.stringToHclTerraform(struct!.privacyPolicyAcceptLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privacy_policy_error: {
      value: cdktf.stringToHclTerraform(struct!.privacyPolicyError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privacy_policy_link: {
      value: cdktf.stringToHclTerraform(struct!.privacyPolicyLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privacy_policy_text: {
      value: cdktf.stringToHclTerraform(struct!.privacyPolicyText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required_field_label: {
      value: cdktf.stringToHclTerraform(struct!.requiredFieldLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sign_in_label: {
      value: cdktf.stringToHclTerraform(struct!.signInLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_carrier_default: {
      value: cdktf.stringToHclTerraform(struct!.smsCarrierDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_carrier_error: {
      value: cdktf.stringToHclTerraform(struct!.smsCarrierError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_carrier_field_label: {
      value: cdktf.stringToHclTerraform(struct!.smsCarrierFieldLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_code_cancel: {
      value: cdktf.stringToHclTerraform(struct!.smsCodeCancel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_code_error: {
      value: cdktf.stringToHclTerraform(struct!.smsCodeError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_code_field_label: {
      value: cdktf.stringToHclTerraform(struct!.smsCodeFieldLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_code_message: {
      value: cdktf.stringToHclTerraform(struct!.smsCodeMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_code_submit: {
      value: cdktf.stringToHclTerraform(struct!.smsCodeSubmit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_code_title: {
      value: cdktf.stringToHclTerraform(struct!.smsCodeTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_country_field_label: {
      value: cdktf.stringToHclTerraform(struct!.smsCountryFieldLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_country_format: {
      value: cdktf.stringToHclTerraform(struct!.smsCountryFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_have_access_code: {
      value: cdktf.stringToHclTerraform(struct!.smsHaveAccessCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_message_format: {
      value: cdktf.stringToHclTerraform(struct!.smsMessageFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_number_cancel: {
      value: cdktf.stringToHclTerraform(struct!.smsNumberCancel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_number_error: {
      value: cdktf.stringToHclTerraform(struct!.smsNumberError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_number_field_label: {
      value: cdktf.stringToHclTerraform(struct!.smsNumberFieldLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_number_format: {
      value: cdktf.stringToHclTerraform(struct!.smsNumberFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_number_message: {
      value: cdktf.stringToHclTerraform(struct!.smsNumberMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_number_submit: {
      value: cdktf.stringToHclTerraform(struct!.smsNumberSubmit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_number_title: {
      value: cdktf.stringToHclTerraform(struct!.smsNumberTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_username_format: {
      value: cdktf.stringToHclTerraform(struct!.smsUsernameFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sponsor_back_link: {
      value: cdktf.stringToHclTerraform(struct!.sponsorBackLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sponsor_cancel: {
      value: cdktf.stringToHclTerraform(struct!.sponsorCancel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sponsor_email: {
      value: cdktf.stringToHclTerraform(struct!.sponsorEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sponsor_email_error: {
      value: cdktf.stringToHclTerraform(struct!.sponsorEmailError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sponsor_info_approved: {
      value: cdktf.stringToHclTerraform(struct!.sponsorInfoApproved),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sponsor_info_denied: {
      value: cdktf.stringToHclTerraform(struct!.sponsorInfoDenied),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sponsor_info_pending: {
      value: cdktf.stringToHclTerraform(struct!.sponsorInfoPending),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sponsor_name: {
      value: cdktf.stringToHclTerraform(struct!.sponsorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sponsor_name_error: {
      value: cdktf.stringToHclTerraform(struct!.sponsorNameError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sponsor_note_pending: {
      value: cdktf.stringToHclTerraform(struct!.sponsorNotePending),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sponsor_request_access: {
      value: cdktf.stringToHclTerraform(struct!.sponsorRequestAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sponsor_status_approved: {
      value: cdktf.stringToHclTerraform(struct!.sponsorStatusApproved),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sponsor_status_denied: {
      value: cdktf.stringToHclTerraform(struct!.sponsorStatusDenied),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sponsor_status_pending: {
      value: cdktf.stringToHclTerraform(struct!.sponsorStatusPending),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sponsor_submit: {
      value: cdktf.stringToHclTerraform(struct!.sponsorSubmit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sponsors_error: {
      value: cdktf.stringToHclTerraform(struct!.sponsorsError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sponsors_field_label: {
      value: cdktf.stringToHclTerraform(struct!.sponsorsFieldLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tos_accept_label: {
      value: cdktf.stringToHclTerraform(struct!.tosAcceptLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tos_error: {
      value: cdktf.stringToHclTerraform(struct!.tosError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tos_link: {
      value: cdktf.stringToHclTerraform(struct!.tosLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tos_text: {
      value: cdktf.stringToHclTerraform(struct!.tosText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgWlanPortalTemplatePortalTemplateLocalesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): OrgWlanPortalTemplatePortalTemplateLocales | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authButtonAmazon !== undefined) {
      hasAnyValues = true;
      internalValueResult.authButtonAmazon = this._authButtonAmazon;
    }
    if (this._authButtonAzure !== undefined) {
      hasAnyValues = true;
      internalValueResult.authButtonAzure = this._authButtonAzure;
    }
    if (this._authButtonEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.authButtonEmail = this._authButtonEmail;
    }
    if (this._authButtonFacebook !== undefined) {
      hasAnyValues = true;
      internalValueResult.authButtonFacebook = this._authButtonFacebook;
    }
    if (this._authButtonGoogle !== undefined) {
      hasAnyValues = true;
      internalValueResult.authButtonGoogle = this._authButtonGoogle;
    }
    if (this._authButtonMicrosoft !== undefined) {
      hasAnyValues = true;
      internalValueResult.authButtonMicrosoft = this._authButtonMicrosoft;
    }
    if (this._authButtonPassphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.authButtonPassphrase = this._authButtonPassphrase;
    }
    if (this._authButtonSms !== undefined) {
      hasAnyValues = true;
      internalValueResult.authButtonSms = this._authButtonSms;
    }
    if (this._authButtonSponsor !== undefined) {
      hasAnyValues = true;
      internalValueResult.authButtonSponsor = this._authButtonSponsor;
    }
    if (this._authLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.authLabel = this._authLabel;
    }
    if (this._backLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.backLink = this._backLink;
    }
    if (this._companyError !== undefined) {
      hasAnyValues = true;
      internalValueResult.companyError = this._companyError;
    }
    if (this._companyLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.companyLabel = this._companyLabel;
    }
    if (this._emailAccessDomainError !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAccessDomainError = this._emailAccessDomainError;
    }
    if (this._emailCancel !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailCancel = this._emailCancel;
    }
    if (this._emailCodeCancel !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailCodeCancel = this._emailCodeCancel;
    }
    if (this._emailCodeError !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailCodeError = this._emailCodeError;
    }
    if (this._emailCodeFieldLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailCodeFieldLabel = this._emailCodeFieldLabel;
    }
    if (this._emailCodeMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailCodeMessage = this._emailCodeMessage;
    }
    if (this._emailCodeSubmit !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailCodeSubmit = this._emailCodeSubmit;
    }
    if (this._emailCodeTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailCodeTitle = this._emailCodeTitle;
    }
    if (this._emailError !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailError = this._emailError;
    }
    if (this._emailFieldLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailFieldLabel = this._emailFieldLabel;
    }
    if (this._emailLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailLabel = this._emailLabel;
    }
    if (this._emailMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailMessage = this._emailMessage;
    }
    if (this._emailSubmit !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailSubmit = this._emailSubmit;
    }
    if (this._emailTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailTitle = this._emailTitle;
    }
    if (this._field1Error !== undefined) {
      hasAnyValues = true;
      internalValueResult.field1Error = this._field1Error;
    }
    if (this._field1Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.field1Label = this._field1Label;
    }
    if (this._field2Error !== undefined) {
      hasAnyValues = true;
      internalValueResult.field2Error = this._field2Error;
    }
    if (this._field2Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.field2Label = this._field2Label;
    }
    if (this._field3Error !== undefined) {
      hasAnyValues = true;
      internalValueResult.field3Error = this._field3Error;
    }
    if (this._field3Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.field3Label = this._field3Label;
    }
    if (this._field4Error !== undefined) {
      hasAnyValues = true;
      internalValueResult.field4Error = this._field4Error;
    }
    if (this._field4Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.field4Label = this._field4Label;
    }
    if (this._marketingPolicyLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.marketingPolicyLink = this._marketingPolicyLink;
    }
    if (this._marketingPolicyOptIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.marketingPolicyOptIn = this._marketingPolicyOptIn;
    }
    if (this._marketingPolicyOptInLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.marketingPolicyOptInLabel = this._marketingPolicyOptInLabel;
    }
    if (this._marketingPolicyOptInText !== undefined) {
      hasAnyValues = true;
      internalValueResult.marketingPolicyOptInText = this._marketingPolicyOptInText;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._nameError !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameError = this._nameError;
    }
    if (this._nameLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameLabel = this._nameLabel;
    }
    if (this._optoutLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.optoutLabel = this._optoutLabel;
    }
    if (this._pageTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.pageTitle = this._pageTitle;
    }
    if (this._passphraseCancel !== undefined) {
      hasAnyValues = true;
      internalValueResult.passphraseCancel = this._passphraseCancel;
    }
    if (this._passphraseError !== undefined) {
      hasAnyValues = true;
      internalValueResult.passphraseError = this._passphraseError;
    }
    if (this._passphraseLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.passphraseLabel = this._passphraseLabel;
    }
    if (this._passphraseMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.passphraseMessage = this._passphraseMessage;
    }
    if (this._passphraseSubmit !== undefined) {
      hasAnyValues = true;
      internalValueResult.passphraseSubmit = this._passphraseSubmit;
    }
    if (this._passphraseTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.passphraseTitle = this._passphraseTitle;
    }
    if (this._privacyPolicyAcceptLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.privacyPolicyAcceptLabel = this._privacyPolicyAcceptLabel;
    }
    if (this._privacyPolicyError !== undefined) {
      hasAnyValues = true;
      internalValueResult.privacyPolicyError = this._privacyPolicyError;
    }
    if (this._privacyPolicyLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.privacyPolicyLink = this._privacyPolicyLink;
    }
    if (this._privacyPolicyText !== undefined) {
      hasAnyValues = true;
      internalValueResult.privacyPolicyText = this._privacyPolicyText;
    }
    if (this._requiredFieldLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredFieldLabel = this._requiredFieldLabel;
    }
    if (this._signInLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.signInLabel = this._signInLabel;
    }
    if (this._smsCarrierDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsCarrierDefault = this._smsCarrierDefault;
    }
    if (this._smsCarrierError !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsCarrierError = this._smsCarrierError;
    }
    if (this._smsCarrierFieldLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsCarrierFieldLabel = this._smsCarrierFieldLabel;
    }
    if (this._smsCodeCancel !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsCodeCancel = this._smsCodeCancel;
    }
    if (this._smsCodeError !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsCodeError = this._smsCodeError;
    }
    if (this._smsCodeFieldLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsCodeFieldLabel = this._smsCodeFieldLabel;
    }
    if (this._smsCodeMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsCodeMessage = this._smsCodeMessage;
    }
    if (this._smsCodeSubmit !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsCodeSubmit = this._smsCodeSubmit;
    }
    if (this._smsCodeTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsCodeTitle = this._smsCodeTitle;
    }
    if (this._smsCountryFieldLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsCountryFieldLabel = this._smsCountryFieldLabel;
    }
    if (this._smsCountryFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsCountryFormat = this._smsCountryFormat;
    }
    if (this._smsHaveAccessCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsHaveAccessCode = this._smsHaveAccessCode;
    }
    if (this._smsMessageFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsMessageFormat = this._smsMessageFormat;
    }
    if (this._smsNumberCancel !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsNumberCancel = this._smsNumberCancel;
    }
    if (this._smsNumberError !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsNumberError = this._smsNumberError;
    }
    if (this._smsNumberFieldLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsNumberFieldLabel = this._smsNumberFieldLabel;
    }
    if (this._smsNumberFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsNumberFormat = this._smsNumberFormat;
    }
    if (this._smsNumberMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsNumberMessage = this._smsNumberMessage;
    }
    if (this._smsNumberSubmit !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsNumberSubmit = this._smsNumberSubmit;
    }
    if (this._smsNumberTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsNumberTitle = this._smsNumberTitle;
    }
    if (this._smsUsernameFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsUsernameFormat = this._smsUsernameFormat;
    }
    if (this._sponsorBackLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.sponsorBackLink = this._sponsorBackLink;
    }
    if (this._sponsorCancel !== undefined) {
      hasAnyValues = true;
      internalValueResult.sponsorCancel = this._sponsorCancel;
    }
    if (this._sponsorEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.sponsorEmail = this._sponsorEmail;
    }
    if (this._sponsorEmailError !== undefined) {
      hasAnyValues = true;
      internalValueResult.sponsorEmailError = this._sponsorEmailError;
    }
    if (this._sponsorInfoApproved !== undefined) {
      hasAnyValues = true;
      internalValueResult.sponsorInfoApproved = this._sponsorInfoApproved;
    }
    if (this._sponsorInfoDenied !== undefined) {
      hasAnyValues = true;
      internalValueResult.sponsorInfoDenied = this._sponsorInfoDenied;
    }
    if (this._sponsorInfoPending !== undefined) {
      hasAnyValues = true;
      internalValueResult.sponsorInfoPending = this._sponsorInfoPending;
    }
    if (this._sponsorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sponsorName = this._sponsorName;
    }
    if (this._sponsorNameError !== undefined) {
      hasAnyValues = true;
      internalValueResult.sponsorNameError = this._sponsorNameError;
    }
    if (this._sponsorNotePending !== undefined) {
      hasAnyValues = true;
      internalValueResult.sponsorNotePending = this._sponsorNotePending;
    }
    if (this._sponsorRequestAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.sponsorRequestAccess = this._sponsorRequestAccess;
    }
    if (this._sponsorStatusApproved !== undefined) {
      hasAnyValues = true;
      internalValueResult.sponsorStatusApproved = this._sponsorStatusApproved;
    }
    if (this._sponsorStatusDenied !== undefined) {
      hasAnyValues = true;
      internalValueResult.sponsorStatusDenied = this._sponsorStatusDenied;
    }
    if (this._sponsorStatusPending !== undefined) {
      hasAnyValues = true;
      internalValueResult.sponsorStatusPending = this._sponsorStatusPending;
    }
    if (this._sponsorSubmit !== undefined) {
      hasAnyValues = true;
      internalValueResult.sponsorSubmit = this._sponsorSubmit;
    }
    if (this._sponsorsError !== undefined) {
      hasAnyValues = true;
      internalValueResult.sponsorsError = this._sponsorsError;
    }
    if (this._sponsorsFieldLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.sponsorsFieldLabel = this._sponsorsFieldLabel;
    }
    if (this._tosAcceptLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.tosAcceptLabel = this._tosAcceptLabel;
    }
    if (this._tosError !== undefined) {
      hasAnyValues = true;
      internalValueResult.tosError = this._tosError;
    }
    if (this._tosLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.tosLink = this._tosLink;
    }
    if (this._tosText !== undefined) {
      hasAnyValues = true;
      internalValueResult.tosText = this._tosText;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgWlanPortalTemplatePortalTemplateLocales | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authButtonAmazon = undefined;
      this._authButtonAzure = undefined;
      this._authButtonEmail = undefined;
      this._authButtonFacebook = undefined;
      this._authButtonGoogle = undefined;
      this._authButtonMicrosoft = undefined;
      this._authButtonPassphrase = undefined;
      this._authButtonSms = undefined;
      this._authButtonSponsor = undefined;
      this._authLabel = undefined;
      this._backLink = undefined;
      this._companyError = undefined;
      this._companyLabel = undefined;
      this._emailAccessDomainError = undefined;
      this._emailCancel = undefined;
      this._emailCodeCancel = undefined;
      this._emailCodeError = undefined;
      this._emailCodeFieldLabel = undefined;
      this._emailCodeMessage = undefined;
      this._emailCodeSubmit = undefined;
      this._emailCodeTitle = undefined;
      this._emailError = undefined;
      this._emailFieldLabel = undefined;
      this._emailLabel = undefined;
      this._emailMessage = undefined;
      this._emailSubmit = undefined;
      this._emailTitle = undefined;
      this._field1Error = undefined;
      this._field1Label = undefined;
      this._field2Error = undefined;
      this._field2Label = undefined;
      this._field3Error = undefined;
      this._field3Label = undefined;
      this._field4Error = undefined;
      this._field4Label = undefined;
      this._marketingPolicyLink = undefined;
      this._marketingPolicyOptIn = undefined;
      this._marketingPolicyOptInLabel = undefined;
      this._marketingPolicyOptInText = undefined;
      this._message = undefined;
      this._nameError = undefined;
      this._nameLabel = undefined;
      this._optoutLabel = undefined;
      this._pageTitle = undefined;
      this._passphraseCancel = undefined;
      this._passphraseError = undefined;
      this._passphraseLabel = undefined;
      this._passphraseMessage = undefined;
      this._passphraseSubmit = undefined;
      this._passphraseTitle = undefined;
      this._privacyPolicyAcceptLabel = undefined;
      this._privacyPolicyError = undefined;
      this._privacyPolicyLink = undefined;
      this._privacyPolicyText = undefined;
      this._requiredFieldLabel = undefined;
      this._signInLabel = undefined;
      this._smsCarrierDefault = undefined;
      this._smsCarrierError = undefined;
      this._smsCarrierFieldLabel = undefined;
      this._smsCodeCancel = undefined;
      this._smsCodeError = undefined;
      this._smsCodeFieldLabel = undefined;
      this._smsCodeMessage = undefined;
      this._smsCodeSubmit = undefined;
      this._smsCodeTitle = undefined;
      this._smsCountryFieldLabel = undefined;
      this._smsCountryFormat = undefined;
      this._smsHaveAccessCode = undefined;
      this._smsMessageFormat = undefined;
      this._smsNumberCancel = undefined;
      this._smsNumberError = undefined;
      this._smsNumberFieldLabel = undefined;
      this._smsNumberFormat = undefined;
      this._smsNumberMessage = undefined;
      this._smsNumberSubmit = undefined;
      this._smsNumberTitle = undefined;
      this._smsUsernameFormat = undefined;
      this._sponsorBackLink = undefined;
      this._sponsorCancel = undefined;
      this._sponsorEmail = undefined;
      this._sponsorEmailError = undefined;
      this._sponsorInfoApproved = undefined;
      this._sponsorInfoDenied = undefined;
      this._sponsorInfoPending = undefined;
      this._sponsorName = undefined;
      this._sponsorNameError = undefined;
      this._sponsorNotePending = undefined;
      this._sponsorRequestAccess = undefined;
      this._sponsorStatusApproved = undefined;
      this._sponsorStatusDenied = undefined;
      this._sponsorStatusPending = undefined;
      this._sponsorSubmit = undefined;
      this._sponsorsError = undefined;
      this._sponsorsFieldLabel = undefined;
      this._tosAcceptLabel = undefined;
      this._tosError = undefined;
      this._tosLink = undefined;
      this._tosText = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authButtonAmazon = value.authButtonAmazon;
      this._authButtonAzure = value.authButtonAzure;
      this._authButtonEmail = value.authButtonEmail;
      this._authButtonFacebook = value.authButtonFacebook;
      this._authButtonGoogle = value.authButtonGoogle;
      this._authButtonMicrosoft = value.authButtonMicrosoft;
      this._authButtonPassphrase = value.authButtonPassphrase;
      this._authButtonSms = value.authButtonSms;
      this._authButtonSponsor = value.authButtonSponsor;
      this._authLabel = value.authLabel;
      this._backLink = value.backLink;
      this._companyError = value.companyError;
      this._companyLabel = value.companyLabel;
      this._emailAccessDomainError = value.emailAccessDomainError;
      this._emailCancel = value.emailCancel;
      this._emailCodeCancel = value.emailCodeCancel;
      this._emailCodeError = value.emailCodeError;
      this._emailCodeFieldLabel = value.emailCodeFieldLabel;
      this._emailCodeMessage = value.emailCodeMessage;
      this._emailCodeSubmit = value.emailCodeSubmit;
      this._emailCodeTitle = value.emailCodeTitle;
      this._emailError = value.emailError;
      this._emailFieldLabel = value.emailFieldLabel;
      this._emailLabel = value.emailLabel;
      this._emailMessage = value.emailMessage;
      this._emailSubmit = value.emailSubmit;
      this._emailTitle = value.emailTitle;
      this._field1Error = value.field1Error;
      this._field1Label = value.field1Label;
      this._field2Error = value.field2Error;
      this._field2Label = value.field2Label;
      this._field3Error = value.field3Error;
      this._field3Label = value.field3Label;
      this._field4Error = value.field4Error;
      this._field4Label = value.field4Label;
      this._marketingPolicyLink = value.marketingPolicyLink;
      this._marketingPolicyOptIn = value.marketingPolicyOptIn;
      this._marketingPolicyOptInLabel = value.marketingPolicyOptInLabel;
      this._marketingPolicyOptInText = value.marketingPolicyOptInText;
      this._message = value.message;
      this._nameError = value.nameError;
      this._nameLabel = value.nameLabel;
      this._optoutLabel = value.optoutLabel;
      this._pageTitle = value.pageTitle;
      this._passphraseCancel = value.passphraseCancel;
      this._passphraseError = value.passphraseError;
      this._passphraseLabel = value.passphraseLabel;
      this._passphraseMessage = value.passphraseMessage;
      this._passphraseSubmit = value.passphraseSubmit;
      this._passphraseTitle = value.passphraseTitle;
      this._privacyPolicyAcceptLabel = value.privacyPolicyAcceptLabel;
      this._privacyPolicyError = value.privacyPolicyError;
      this._privacyPolicyLink = value.privacyPolicyLink;
      this._privacyPolicyText = value.privacyPolicyText;
      this._requiredFieldLabel = value.requiredFieldLabel;
      this._signInLabel = value.signInLabel;
      this._smsCarrierDefault = value.smsCarrierDefault;
      this._smsCarrierError = value.smsCarrierError;
      this._smsCarrierFieldLabel = value.smsCarrierFieldLabel;
      this._smsCodeCancel = value.smsCodeCancel;
      this._smsCodeError = value.smsCodeError;
      this._smsCodeFieldLabel = value.smsCodeFieldLabel;
      this._smsCodeMessage = value.smsCodeMessage;
      this._smsCodeSubmit = value.smsCodeSubmit;
      this._smsCodeTitle = value.smsCodeTitle;
      this._smsCountryFieldLabel = value.smsCountryFieldLabel;
      this._smsCountryFormat = value.smsCountryFormat;
      this._smsHaveAccessCode = value.smsHaveAccessCode;
      this._smsMessageFormat = value.smsMessageFormat;
      this._smsNumberCancel = value.smsNumberCancel;
      this._smsNumberError = value.smsNumberError;
      this._smsNumberFieldLabel = value.smsNumberFieldLabel;
      this._smsNumberFormat = value.smsNumberFormat;
      this._smsNumberMessage = value.smsNumberMessage;
      this._smsNumberSubmit = value.smsNumberSubmit;
      this._smsNumberTitle = value.smsNumberTitle;
      this._smsUsernameFormat = value.smsUsernameFormat;
      this._sponsorBackLink = value.sponsorBackLink;
      this._sponsorCancel = value.sponsorCancel;
      this._sponsorEmail = value.sponsorEmail;
      this._sponsorEmailError = value.sponsorEmailError;
      this._sponsorInfoApproved = value.sponsorInfoApproved;
      this._sponsorInfoDenied = value.sponsorInfoDenied;
      this._sponsorInfoPending = value.sponsorInfoPending;
      this._sponsorName = value.sponsorName;
      this._sponsorNameError = value.sponsorNameError;
      this._sponsorNotePending = value.sponsorNotePending;
      this._sponsorRequestAccess = value.sponsorRequestAccess;
      this._sponsorStatusApproved = value.sponsorStatusApproved;
      this._sponsorStatusDenied = value.sponsorStatusDenied;
      this._sponsorStatusPending = value.sponsorStatusPending;
      this._sponsorSubmit = value.sponsorSubmit;
      this._sponsorsError = value.sponsorsError;
      this._sponsorsFieldLabel = value.sponsorsFieldLabel;
      this._tosAcceptLabel = value.tosAcceptLabel;
      this._tosError = value.tosError;
      this._tosLink = value.tosLink;
      this._tosText = value.tosText;
    }
  }

  // auth_button_amazon - computed: false, optional: true, required: false
  private _authButtonAmazon?: string; 
  public get authButtonAmazon() {
    return this.getStringAttribute('auth_button_amazon');
  }
  public set authButtonAmazon(value: string) {
    this._authButtonAmazon = value;
  }
  public resetAuthButtonAmazon() {
    this._authButtonAmazon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authButtonAmazonInput() {
    return this._authButtonAmazon;
  }

  // auth_button_azure - computed: false, optional: true, required: false
  private _authButtonAzure?: string; 
  public get authButtonAzure() {
    return this.getStringAttribute('auth_button_azure');
  }
  public set authButtonAzure(value: string) {
    this._authButtonAzure = value;
  }
  public resetAuthButtonAzure() {
    this._authButtonAzure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authButtonAzureInput() {
    return this._authButtonAzure;
  }

  // auth_button_email - computed: false, optional: true, required: false
  private _authButtonEmail?: string; 
  public get authButtonEmail() {
    return this.getStringAttribute('auth_button_email');
  }
  public set authButtonEmail(value: string) {
    this._authButtonEmail = value;
  }
  public resetAuthButtonEmail() {
    this._authButtonEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authButtonEmailInput() {
    return this._authButtonEmail;
  }

  // auth_button_facebook - computed: false, optional: true, required: false
  private _authButtonFacebook?: string; 
  public get authButtonFacebook() {
    return this.getStringAttribute('auth_button_facebook');
  }
  public set authButtonFacebook(value: string) {
    this._authButtonFacebook = value;
  }
  public resetAuthButtonFacebook() {
    this._authButtonFacebook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authButtonFacebookInput() {
    return this._authButtonFacebook;
  }

  // auth_button_google - computed: false, optional: true, required: false
  private _authButtonGoogle?: string; 
  public get authButtonGoogle() {
    return this.getStringAttribute('auth_button_google');
  }
  public set authButtonGoogle(value: string) {
    this._authButtonGoogle = value;
  }
  public resetAuthButtonGoogle() {
    this._authButtonGoogle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authButtonGoogleInput() {
    return this._authButtonGoogle;
  }

  // auth_button_microsoft - computed: false, optional: true, required: false
  private _authButtonMicrosoft?: string; 
  public get authButtonMicrosoft() {
    return this.getStringAttribute('auth_button_microsoft');
  }
  public set authButtonMicrosoft(value: string) {
    this._authButtonMicrosoft = value;
  }
  public resetAuthButtonMicrosoft() {
    this._authButtonMicrosoft = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authButtonMicrosoftInput() {
    return this._authButtonMicrosoft;
  }

  // auth_button_passphrase - computed: false, optional: true, required: false
  private _authButtonPassphrase?: string; 
  public get authButtonPassphrase() {
    return this.getStringAttribute('auth_button_passphrase');
  }
  public set authButtonPassphrase(value: string) {
    this._authButtonPassphrase = value;
  }
  public resetAuthButtonPassphrase() {
    this._authButtonPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authButtonPassphraseInput() {
    return this._authButtonPassphrase;
  }

  // auth_button_sms - computed: false, optional: true, required: false
  private _authButtonSms?: string; 
  public get authButtonSms() {
    return this.getStringAttribute('auth_button_sms');
  }
  public set authButtonSms(value: string) {
    this._authButtonSms = value;
  }
  public resetAuthButtonSms() {
    this._authButtonSms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authButtonSmsInput() {
    return this._authButtonSms;
  }

  // auth_button_sponsor - computed: false, optional: true, required: false
  private _authButtonSponsor?: string; 
  public get authButtonSponsor() {
    return this.getStringAttribute('auth_button_sponsor');
  }
  public set authButtonSponsor(value: string) {
    this._authButtonSponsor = value;
  }
  public resetAuthButtonSponsor() {
    this._authButtonSponsor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authButtonSponsorInput() {
    return this._authButtonSponsor;
  }

  // auth_label - computed: false, optional: true, required: false
  private _authLabel?: string; 
  public get authLabel() {
    return this.getStringAttribute('auth_label');
  }
  public set authLabel(value: string) {
    this._authLabel = value;
  }
  public resetAuthLabel() {
    this._authLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authLabelInput() {
    return this._authLabel;
  }

  // back_link - computed: false, optional: true, required: false
  private _backLink?: string; 
  public get backLink() {
    return this.getStringAttribute('back_link');
  }
  public set backLink(value: string) {
    this._backLink = value;
  }
  public resetBackLink() {
    this._backLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backLinkInput() {
    return this._backLink;
  }

  // company_error - computed: false, optional: true, required: false
  private _companyError?: string; 
  public get companyError() {
    return this.getStringAttribute('company_error');
  }
  public set companyError(value: string) {
    this._companyError = value;
  }
  public resetCompanyError() {
    this._companyError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyErrorInput() {
    return this._companyError;
  }

  // company_label - computed: false, optional: true, required: false
  private _companyLabel?: string; 
  public get companyLabel() {
    return this.getStringAttribute('company_label');
  }
  public set companyLabel(value: string) {
    this._companyLabel = value;
  }
  public resetCompanyLabel() {
    this._companyLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyLabelInput() {
    return this._companyLabel;
  }

  // email_access_domain_error - computed: false, optional: true, required: false
  private _emailAccessDomainError?: string; 
  public get emailAccessDomainError() {
    return this.getStringAttribute('email_access_domain_error');
  }
  public set emailAccessDomainError(value: string) {
    this._emailAccessDomainError = value;
  }
  public resetEmailAccessDomainError() {
    this._emailAccessDomainError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAccessDomainErrorInput() {
    return this._emailAccessDomainError;
  }

  // email_cancel - computed: false, optional: true, required: false
  private _emailCancel?: string; 
  public get emailCancel() {
    return this.getStringAttribute('email_cancel');
  }
  public set emailCancel(value: string) {
    this._emailCancel = value;
  }
  public resetEmailCancel() {
    this._emailCancel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailCancelInput() {
    return this._emailCancel;
  }

  // email_code_cancel - computed: false, optional: true, required: false
  private _emailCodeCancel?: string; 
  public get emailCodeCancel() {
    return this.getStringAttribute('email_code_cancel');
  }
  public set emailCodeCancel(value: string) {
    this._emailCodeCancel = value;
  }
  public resetEmailCodeCancel() {
    this._emailCodeCancel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailCodeCancelInput() {
    return this._emailCodeCancel;
  }

  // email_code_error - computed: false, optional: true, required: false
  private _emailCodeError?: string; 
  public get emailCodeError() {
    return this.getStringAttribute('email_code_error');
  }
  public set emailCodeError(value: string) {
    this._emailCodeError = value;
  }
  public resetEmailCodeError() {
    this._emailCodeError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailCodeErrorInput() {
    return this._emailCodeError;
  }

  // email_code_field_label - computed: false, optional: true, required: false
  private _emailCodeFieldLabel?: string; 
  public get emailCodeFieldLabel() {
    return this.getStringAttribute('email_code_field_label');
  }
  public set emailCodeFieldLabel(value: string) {
    this._emailCodeFieldLabel = value;
  }
  public resetEmailCodeFieldLabel() {
    this._emailCodeFieldLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailCodeFieldLabelInput() {
    return this._emailCodeFieldLabel;
  }

  // email_code_message - computed: false, optional: true, required: false
  private _emailCodeMessage?: string; 
  public get emailCodeMessage() {
    return this.getStringAttribute('email_code_message');
  }
  public set emailCodeMessage(value: string) {
    this._emailCodeMessage = value;
  }
  public resetEmailCodeMessage() {
    this._emailCodeMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailCodeMessageInput() {
    return this._emailCodeMessage;
  }

  // email_code_submit - computed: false, optional: true, required: false
  private _emailCodeSubmit?: string; 
  public get emailCodeSubmit() {
    return this.getStringAttribute('email_code_submit');
  }
  public set emailCodeSubmit(value: string) {
    this._emailCodeSubmit = value;
  }
  public resetEmailCodeSubmit() {
    this._emailCodeSubmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailCodeSubmitInput() {
    return this._emailCodeSubmit;
  }

  // email_code_title - computed: false, optional: true, required: false
  private _emailCodeTitle?: string; 
  public get emailCodeTitle() {
    return this.getStringAttribute('email_code_title');
  }
  public set emailCodeTitle(value: string) {
    this._emailCodeTitle = value;
  }
  public resetEmailCodeTitle() {
    this._emailCodeTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailCodeTitleInput() {
    return this._emailCodeTitle;
  }

  // email_error - computed: false, optional: true, required: false
  private _emailError?: string; 
  public get emailError() {
    return this.getStringAttribute('email_error');
  }
  public set emailError(value: string) {
    this._emailError = value;
  }
  public resetEmailError() {
    this._emailError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailErrorInput() {
    return this._emailError;
  }

  // email_field_label - computed: false, optional: true, required: false
  private _emailFieldLabel?: string; 
  public get emailFieldLabel() {
    return this.getStringAttribute('email_field_label');
  }
  public set emailFieldLabel(value: string) {
    this._emailFieldLabel = value;
  }
  public resetEmailFieldLabel() {
    this._emailFieldLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailFieldLabelInput() {
    return this._emailFieldLabel;
  }

  // email_label - computed: false, optional: true, required: false
  private _emailLabel?: string; 
  public get emailLabel() {
    return this.getStringAttribute('email_label');
  }
  public set emailLabel(value: string) {
    this._emailLabel = value;
  }
  public resetEmailLabel() {
    this._emailLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailLabelInput() {
    return this._emailLabel;
  }

  // email_message - computed: false, optional: true, required: false
  private _emailMessage?: string; 
  public get emailMessage() {
    return this.getStringAttribute('email_message');
  }
  public set emailMessage(value: string) {
    this._emailMessage = value;
  }
  public resetEmailMessage() {
    this._emailMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailMessageInput() {
    return this._emailMessage;
  }

  // email_submit - computed: false, optional: true, required: false
  private _emailSubmit?: string; 
  public get emailSubmit() {
    return this.getStringAttribute('email_submit');
  }
  public set emailSubmit(value: string) {
    this._emailSubmit = value;
  }
  public resetEmailSubmit() {
    this._emailSubmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailSubmitInput() {
    return this._emailSubmit;
  }

  // email_title - computed: false, optional: true, required: false
  private _emailTitle?: string; 
  public get emailTitle() {
    return this.getStringAttribute('email_title');
  }
  public set emailTitle(value: string) {
    this._emailTitle = value;
  }
  public resetEmailTitle() {
    this._emailTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailTitleInput() {
    return this._emailTitle;
  }

  // field1error - computed: false, optional: true, required: false
  private _field1Error?: string; 
  public get field1Error() {
    return this.getStringAttribute('field1error');
  }
  public set field1Error(value: string) {
    this._field1Error = value;
  }
  public resetField1Error() {
    this._field1Error = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get field1ErrorInput() {
    return this._field1Error;
  }

  // field1label - computed: false, optional: true, required: false
  private _field1Label?: string; 
  public get field1Label() {
    return this.getStringAttribute('field1label');
  }
  public set field1Label(value: string) {
    this._field1Label = value;
  }
  public resetField1Label() {
    this._field1Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get field1LabelInput() {
    return this._field1Label;
  }

  // field2error - computed: false, optional: true, required: false
  private _field2Error?: string; 
  public get field2Error() {
    return this.getStringAttribute('field2error');
  }
  public set field2Error(value: string) {
    this._field2Error = value;
  }
  public resetField2Error() {
    this._field2Error = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get field2ErrorInput() {
    return this._field2Error;
  }

  // field2label - computed: false, optional: true, required: false
  private _field2Label?: string; 
  public get field2Label() {
    return this.getStringAttribute('field2label');
  }
  public set field2Label(value: string) {
    this._field2Label = value;
  }
  public resetField2Label() {
    this._field2Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get field2LabelInput() {
    return this._field2Label;
  }

  // field3error - computed: false, optional: true, required: false
  private _field3Error?: string; 
  public get field3Error() {
    return this.getStringAttribute('field3error');
  }
  public set field3Error(value: string) {
    this._field3Error = value;
  }
  public resetField3Error() {
    this._field3Error = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get field3ErrorInput() {
    return this._field3Error;
  }

  // field3label - computed: false, optional: true, required: false
  private _field3Label?: string; 
  public get field3Label() {
    return this.getStringAttribute('field3label');
  }
  public set field3Label(value: string) {
    this._field3Label = value;
  }
  public resetField3Label() {
    this._field3Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get field3LabelInput() {
    return this._field3Label;
  }

  // field4error - computed: false, optional: true, required: false
  private _field4Error?: string; 
  public get field4Error() {
    return this.getStringAttribute('field4error');
  }
  public set field4Error(value: string) {
    this._field4Error = value;
  }
  public resetField4Error() {
    this._field4Error = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get field4ErrorInput() {
    return this._field4Error;
  }

  // field4label - computed: false, optional: true, required: false
  private _field4Label?: string; 
  public get field4Label() {
    return this.getStringAttribute('field4label');
  }
  public set field4Label(value: string) {
    this._field4Label = value;
  }
  public resetField4Label() {
    this._field4Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get field4LabelInput() {
    return this._field4Label;
  }

  // marketing_policy_link - computed: false, optional: true, required: false
  private _marketingPolicyLink?: string; 
  public get marketingPolicyLink() {
    return this.getStringAttribute('marketing_policy_link');
  }
  public set marketingPolicyLink(value: string) {
    this._marketingPolicyLink = value;
  }
  public resetMarketingPolicyLink() {
    this._marketingPolicyLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marketingPolicyLinkInput() {
    return this._marketingPolicyLink;
  }

  // marketing_policy_opt_in - computed: false, optional: true, required: false
  private _marketingPolicyOptIn?: boolean | cdktf.IResolvable; 
  public get marketingPolicyOptIn() {
    return this.getBooleanAttribute('marketing_policy_opt_in');
  }
  public set marketingPolicyOptIn(value: boolean | cdktf.IResolvable) {
    this._marketingPolicyOptIn = value;
  }
  public resetMarketingPolicyOptIn() {
    this._marketingPolicyOptIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marketingPolicyOptInInput() {
    return this._marketingPolicyOptIn;
  }

  // marketing_policy_opt_in_label - computed: false, optional: true, required: false
  private _marketingPolicyOptInLabel?: string; 
  public get marketingPolicyOptInLabel() {
    return this.getStringAttribute('marketing_policy_opt_in_label');
  }
  public set marketingPolicyOptInLabel(value: string) {
    this._marketingPolicyOptInLabel = value;
  }
  public resetMarketingPolicyOptInLabel() {
    this._marketingPolicyOptInLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marketingPolicyOptInLabelInput() {
    return this._marketingPolicyOptInLabel;
  }

  // marketing_policy_opt_in_text - computed: false, optional: true, required: false
  private _marketingPolicyOptInText?: string; 
  public get marketingPolicyOptInText() {
    return this.getStringAttribute('marketing_policy_opt_in_text');
  }
  public set marketingPolicyOptInText(value: string) {
    this._marketingPolicyOptInText = value;
  }
  public resetMarketingPolicyOptInText() {
    this._marketingPolicyOptInText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marketingPolicyOptInTextInput() {
    return this._marketingPolicyOptInText;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // name_error - computed: false, optional: true, required: false
  private _nameError?: string; 
  public get nameError() {
    return this.getStringAttribute('name_error');
  }
  public set nameError(value: string) {
    this._nameError = value;
  }
  public resetNameError() {
    this._nameError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameErrorInput() {
    return this._nameError;
  }

  // name_label - computed: false, optional: true, required: false
  private _nameLabel?: string; 
  public get nameLabel() {
    return this.getStringAttribute('name_label');
  }
  public set nameLabel(value: string) {
    this._nameLabel = value;
  }
  public resetNameLabel() {
    this._nameLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameLabelInput() {
    return this._nameLabel;
  }

  // optout_label - computed: false, optional: true, required: false
  private _optoutLabel?: string; 
  public get optoutLabel() {
    return this.getStringAttribute('optout_label');
  }
  public set optoutLabel(value: string) {
    this._optoutLabel = value;
  }
  public resetOptoutLabel() {
    this._optoutLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optoutLabelInput() {
    return this._optoutLabel;
  }

  // page_title - computed: false, optional: true, required: false
  private _pageTitle?: string; 
  public get pageTitle() {
    return this.getStringAttribute('page_title');
  }
  public set pageTitle(value: string) {
    this._pageTitle = value;
  }
  public resetPageTitle() {
    this._pageTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageTitleInput() {
    return this._pageTitle;
  }

  // passphrase_cancel - computed: false, optional: true, required: false
  private _passphraseCancel?: string; 
  public get passphraseCancel() {
    return this.getStringAttribute('passphrase_cancel');
  }
  public set passphraseCancel(value: string) {
    this._passphraseCancel = value;
  }
  public resetPassphraseCancel() {
    this._passphraseCancel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseCancelInput() {
    return this._passphraseCancel;
  }

  // passphrase_error - computed: false, optional: true, required: false
  private _passphraseError?: string; 
  public get passphraseError() {
    return this.getStringAttribute('passphrase_error');
  }
  public set passphraseError(value: string) {
    this._passphraseError = value;
  }
  public resetPassphraseError() {
    this._passphraseError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseErrorInput() {
    return this._passphraseError;
  }

  // passphrase_label - computed: false, optional: true, required: false
  private _passphraseLabel?: string; 
  public get passphraseLabel() {
    return this.getStringAttribute('passphrase_label');
  }
  public set passphraseLabel(value: string) {
    this._passphraseLabel = value;
  }
  public resetPassphraseLabel() {
    this._passphraseLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseLabelInput() {
    return this._passphraseLabel;
  }

  // passphrase_message - computed: false, optional: true, required: false
  private _passphraseMessage?: string; 
  public get passphraseMessage() {
    return this.getStringAttribute('passphrase_message');
  }
  public set passphraseMessage(value: string) {
    this._passphraseMessage = value;
  }
  public resetPassphraseMessage() {
    this._passphraseMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseMessageInput() {
    return this._passphraseMessage;
  }

  // passphrase_submit - computed: false, optional: true, required: false
  private _passphraseSubmit?: string; 
  public get passphraseSubmit() {
    return this.getStringAttribute('passphrase_submit');
  }
  public set passphraseSubmit(value: string) {
    this._passphraseSubmit = value;
  }
  public resetPassphraseSubmit() {
    this._passphraseSubmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseSubmitInput() {
    return this._passphraseSubmit;
  }

  // passphrase_title - computed: false, optional: true, required: false
  private _passphraseTitle?: string; 
  public get passphraseTitle() {
    return this.getStringAttribute('passphrase_title');
  }
  public set passphraseTitle(value: string) {
    this._passphraseTitle = value;
  }
  public resetPassphraseTitle() {
    this._passphraseTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseTitleInput() {
    return this._passphraseTitle;
  }

  // privacy_policy_accept_label - computed: false, optional: true, required: false
  private _privacyPolicyAcceptLabel?: string; 
  public get privacyPolicyAcceptLabel() {
    return this.getStringAttribute('privacy_policy_accept_label');
  }
  public set privacyPolicyAcceptLabel(value: string) {
    this._privacyPolicyAcceptLabel = value;
  }
  public resetPrivacyPolicyAcceptLabel() {
    this._privacyPolicyAcceptLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyPolicyAcceptLabelInput() {
    return this._privacyPolicyAcceptLabel;
  }

  // privacy_policy_error - computed: false, optional: true, required: false
  private _privacyPolicyError?: string; 
  public get privacyPolicyError() {
    return this.getStringAttribute('privacy_policy_error');
  }
  public set privacyPolicyError(value: string) {
    this._privacyPolicyError = value;
  }
  public resetPrivacyPolicyError() {
    this._privacyPolicyError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyPolicyErrorInput() {
    return this._privacyPolicyError;
  }

  // privacy_policy_link - computed: false, optional: true, required: false
  private _privacyPolicyLink?: string; 
  public get privacyPolicyLink() {
    return this.getStringAttribute('privacy_policy_link');
  }
  public set privacyPolicyLink(value: string) {
    this._privacyPolicyLink = value;
  }
  public resetPrivacyPolicyLink() {
    this._privacyPolicyLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyPolicyLinkInput() {
    return this._privacyPolicyLink;
  }

  // privacy_policy_text - computed: false, optional: true, required: false
  private _privacyPolicyText?: string; 
  public get privacyPolicyText() {
    return this.getStringAttribute('privacy_policy_text');
  }
  public set privacyPolicyText(value: string) {
    this._privacyPolicyText = value;
  }
  public resetPrivacyPolicyText() {
    this._privacyPolicyText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyPolicyTextInput() {
    return this._privacyPolicyText;
  }

  // required_field_label - computed: false, optional: true, required: false
  private _requiredFieldLabel?: string; 
  public get requiredFieldLabel() {
    return this.getStringAttribute('required_field_label');
  }
  public set requiredFieldLabel(value: string) {
    this._requiredFieldLabel = value;
  }
  public resetRequiredFieldLabel() {
    this._requiredFieldLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredFieldLabelInput() {
    return this._requiredFieldLabel;
  }

  // sign_in_label - computed: false, optional: true, required: false
  private _signInLabel?: string; 
  public get signInLabel() {
    return this.getStringAttribute('sign_in_label');
  }
  public set signInLabel(value: string) {
    this._signInLabel = value;
  }
  public resetSignInLabel() {
    this._signInLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signInLabelInput() {
    return this._signInLabel;
  }

  // sms_carrier_default - computed: false, optional: true, required: false
  private _smsCarrierDefault?: string; 
  public get smsCarrierDefault() {
    return this.getStringAttribute('sms_carrier_default');
  }
  public set smsCarrierDefault(value: string) {
    this._smsCarrierDefault = value;
  }
  public resetSmsCarrierDefault() {
    this._smsCarrierDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsCarrierDefaultInput() {
    return this._smsCarrierDefault;
  }

  // sms_carrier_error - computed: false, optional: true, required: false
  private _smsCarrierError?: string; 
  public get smsCarrierError() {
    return this.getStringAttribute('sms_carrier_error');
  }
  public set smsCarrierError(value: string) {
    this._smsCarrierError = value;
  }
  public resetSmsCarrierError() {
    this._smsCarrierError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsCarrierErrorInput() {
    return this._smsCarrierError;
  }

  // sms_carrier_field_label - computed: false, optional: true, required: false
  private _smsCarrierFieldLabel?: string; 
  public get smsCarrierFieldLabel() {
    return this.getStringAttribute('sms_carrier_field_label');
  }
  public set smsCarrierFieldLabel(value: string) {
    this._smsCarrierFieldLabel = value;
  }
  public resetSmsCarrierFieldLabel() {
    this._smsCarrierFieldLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsCarrierFieldLabelInput() {
    return this._smsCarrierFieldLabel;
  }

  // sms_code_cancel - computed: false, optional: true, required: false
  private _smsCodeCancel?: string; 
  public get smsCodeCancel() {
    return this.getStringAttribute('sms_code_cancel');
  }
  public set smsCodeCancel(value: string) {
    this._smsCodeCancel = value;
  }
  public resetSmsCodeCancel() {
    this._smsCodeCancel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsCodeCancelInput() {
    return this._smsCodeCancel;
  }

  // sms_code_error - computed: false, optional: true, required: false
  private _smsCodeError?: string; 
  public get smsCodeError() {
    return this.getStringAttribute('sms_code_error');
  }
  public set smsCodeError(value: string) {
    this._smsCodeError = value;
  }
  public resetSmsCodeError() {
    this._smsCodeError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsCodeErrorInput() {
    return this._smsCodeError;
  }

  // sms_code_field_label - computed: false, optional: true, required: false
  private _smsCodeFieldLabel?: string; 
  public get smsCodeFieldLabel() {
    return this.getStringAttribute('sms_code_field_label');
  }
  public set smsCodeFieldLabel(value: string) {
    this._smsCodeFieldLabel = value;
  }
  public resetSmsCodeFieldLabel() {
    this._smsCodeFieldLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsCodeFieldLabelInput() {
    return this._smsCodeFieldLabel;
  }

  // sms_code_message - computed: false, optional: true, required: false
  private _smsCodeMessage?: string; 
  public get smsCodeMessage() {
    return this.getStringAttribute('sms_code_message');
  }
  public set smsCodeMessage(value: string) {
    this._smsCodeMessage = value;
  }
  public resetSmsCodeMessage() {
    this._smsCodeMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsCodeMessageInput() {
    return this._smsCodeMessage;
  }

  // sms_code_submit - computed: false, optional: true, required: false
  private _smsCodeSubmit?: string; 
  public get smsCodeSubmit() {
    return this.getStringAttribute('sms_code_submit');
  }
  public set smsCodeSubmit(value: string) {
    this._smsCodeSubmit = value;
  }
  public resetSmsCodeSubmit() {
    this._smsCodeSubmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsCodeSubmitInput() {
    return this._smsCodeSubmit;
  }

  // sms_code_title - computed: false, optional: true, required: false
  private _smsCodeTitle?: string; 
  public get smsCodeTitle() {
    return this.getStringAttribute('sms_code_title');
  }
  public set smsCodeTitle(value: string) {
    this._smsCodeTitle = value;
  }
  public resetSmsCodeTitle() {
    this._smsCodeTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsCodeTitleInput() {
    return this._smsCodeTitle;
  }

  // sms_country_field_label - computed: false, optional: true, required: false
  private _smsCountryFieldLabel?: string; 
  public get smsCountryFieldLabel() {
    return this.getStringAttribute('sms_country_field_label');
  }
  public set smsCountryFieldLabel(value: string) {
    this._smsCountryFieldLabel = value;
  }
  public resetSmsCountryFieldLabel() {
    this._smsCountryFieldLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsCountryFieldLabelInput() {
    return this._smsCountryFieldLabel;
  }

  // sms_country_format - computed: false, optional: true, required: false
  private _smsCountryFormat?: string; 
  public get smsCountryFormat() {
    return this.getStringAttribute('sms_country_format');
  }
  public set smsCountryFormat(value: string) {
    this._smsCountryFormat = value;
  }
  public resetSmsCountryFormat() {
    this._smsCountryFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsCountryFormatInput() {
    return this._smsCountryFormat;
  }

  // sms_have_access_code - computed: false, optional: true, required: false
  private _smsHaveAccessCode?: string; 
  public get smsHaveAccessCode() {
    return this.getStringAttribute('sms_have_access_code');
  }
  public set smsHaveAccessCode(value: string) {
    this._smsHaveAccessCode = value;
  }
  public resetSmsHaveAccessCode() {
    this._smsHaveAccessCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsHaveAccessCodeInput() {
    return this._smsHaveAccessCode;
  }

  // sms_message_format - computed: false, optional: true, required: false
  private _smsMessageFormat?: string; 
  public get smsMessageFormat() {
    return this.getStringAttribute('sms_message_format');
  }
  public set smsMessageFormat(value: string) {
    this._smsMessageFormat = value;
  }
  public resetSmsMessageFormat() {
    this._smsMessageFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsMessageFormatInput() {
    return this._smsMessageFormat;
  }

  // sms_number_cancel - computed: false, optional: true, required: false
  private _smsNumberCancel?: string; 
  public get smsNumberCancel() {
    return this.getStringAttribute('sms_number_cancel');
  }
  public set smsNumberCancel(value: string) {
    this._smsNumberCancel = value;
  }
  public resetSmsNumberCancel() {
    this._smsNumberCancel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsNumberCancelInput() {
    return this._smsNumberCancel;
  }

  // sms_number_error - computed: false, optional: true, required: false
  private _smsNumberError?: string; 
  public get smsNumberError() {
    return this.getStringAttribute('sms_number_error');
  }
  public set smsNumberError(value: string) {
    this._smsNumberError = value;
  }
  public resetSmsNumberError() {
    this._smsNumberError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsNumberErrorInput() {
    return this._smsNumberError;
  }

  // sms_number_field_label - computed: false, optional: true, required: false
  private _smsNumberFieldLabel?: string; 
  public get smsNumberFieldLabel() {
    return this.getStringAttribute('sms_number_field_label');
  }
  public set smsNumberFieldLabel(value: string) {
    this._smsNumberFieldLabel = value;
  }
  public resetSmsNumberFieldLabel() {
    this._smsNumberFieldLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsNumberFieldLabelInput() {
    return this._smsNumberFieldLabel;
  }

  // sms_number_format - computed: false, optional: true, required: false
  private _smsNumberFormat?: string; 
  public get smsNumberFormat() {
    return this.getStringAttribute('sms_number_format');
  }
  public set smsNumberFormat(value: string) {
    this._smsNumberFormat = value;
  }
  public resetSmsNumberFormat() {
    this._smsNumberFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsNumberFormatInput() {
    return this._smsNumberFormat;
  }

  // sms_number_message - computed: false, optional: true, required: false
  private _smsNumberMessage?: string; 
  public get smsNumberMessage() {
    return this.getStringAttribute('sms_number_message');
  }
  public set smsNumberMessage(value: string) {
    this._smsNumberMessage = value;
  }
  public resetSmsNumberMessage() {
    this._smsNumberMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsNumberMessageInput() {
    return this._smsNumberMessage;
  }

  // sms_number_submit - computed: false, optional: true, required: false
  private _smsNumberSubmit?: string; 
  public get smsNumberSubmit() {
    return this.getStringAttribute('sms_number_submit');
  }
  public set smsNumberSubmit(value: string) {
    this._smsNumberSubmit = value;
  }
  public resetSmsNumberSubmit() {
    this._smsNumberSubmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsNumberSubmitInput() {
    return this._smsNumberSubmit;
  }

  // sms_number_title - computed: false, optional: true, required: false
  private _smsNumberTitle?: string; 
  public get smsNumberTitle() {
    return this.getStringAttribute('sms_number_title');
  }
  public set smsNumberTitle(value: string) {
    this._smsNumberTitle = value;
  }
  public resetSmsNumberTitle() {
    this._smsNumberTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsNumberTitleInput() {
    return this._smsNumberTitle;
  }

  // sms_username_format - computed: false, optional: true, required: false
  private _smsUsernameFormat?: string; 
  public get smsUsernameFormat() {
    return this.getStringAttribute('sms_username_format');
  }
  public set smsUsernameFormat(value: string) {
    this._smsUsernameFormat = value;
  }
  public resetSmsUsernameFormat() {
    this._smsUsernameFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsUsernameFormatInput() {
    return this._smsUsernameFormat;
  }

  // sponsor_back_link - computed: false, optional: true, required: false
  private _sponsorBackLink?: string; 
  public get sponsorBackLink() {
    return this.getStringAttribute('sponsor_back_link');
  }
  public set sponsorBackLink(value: string) {
    this._sponsorBackLink = value;
  }
  public resetSponsorBackLink() {
    this._sponsorBackLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sponsorBackLinkInput() {
    return this._sponsorBackLink;
  }

  // sponsor_cancel - computed: false, optional: true, required: false
  private _sponsorCancel?: string; 
  public get sponsorCancel() {
    return this.getStringAttribute('sponsor_cancel');
  }
  public set sponsorCancel(value: string) {
    this._sponsorCancel = value;
  }
  public resetSponsorCancel() {
    this._sponsorCancel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sponsorCancelInput() {
    return this._sponsorCancel;
  }

  // sponsor_email - computed: false, optional: true, required: false
  private _sponsorEmail?: string; 
  public get sponsorEmail() {
    return this.getStringAttribute('sponsor_email');
  }
  public set sponsorEmail(value: string) {
    this._sponsorEmail = value;
  }
  public resetSponsorEmail() {
    this._sponsorEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sponsorEmailInput() {
    return this._sponsorEmail;
  }

  // sponsor_email_error - computed: false, optional: true, required: false
  private _sponsorEmailError?: string; 
  public get sponsorEmailError() {
    return this.getStringAttribute('sponsor_email_error');
  }
  public set sponsorEmailError(value: string) {
    this._sponsorEmailError = value;
  }
  public resetSponsorEmailError() {
    this._sponsorEmailError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sponsorEmailErrorInput() {
    return this._sponsorEmailError;
  }

  // sponsor_info_approved - computed: false, optional: true, required: false
  private _sponsorInfoApproved?: string; 
  public get sponsorInfoApproved() {
    return this.getStringAttribute('sponsor_info_approved');
  }
  public set sponsorInfoApproved(value: string) {
    this._sponsorInfoApproved = value;
  }
  public resetSponsorInfoApproved() {
    this._sponsorInfoApproved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sponsorInfoApprovedInput() {
    return this._sponsorInfoApproved;
  }

  // sponsor_info_denied - computed: false, optional: true, required: false
  private _sponsorInfoDenied?: string; 
  public get sponsorInfoDenied() {
    return this.getStringAttribute('sponsor_info_denied');
  }
  public set sponsorInfoDenied(value: string) {
    this._sponsorInfoDenied = value;
  }
  public resetSponsorInfoDenied() {
    this._sponsorInfoDenied = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sponsorInfoDeniedInput() {
    return this._sponsorInfoDenied;
  }

  // sponsor_info_pending - computed: false, optional: true, required: false
  private _sponsorInfoPending?: string; 
  public get sponsorInfoPending() {
    return this.getStringAttribute('sponsor_info_pending');
  }
  public set sponsorInfoPending(value: string) {
    this._sponsorInfoPending = value;
  }
  public resetSponsorInfoPending() {
    this._sponsorInfoPending = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sponsorInfoPendingInput() {
    return this._sponsorInfoPending;
  }

  // sponsor_name - computed: false, optional: true, required: false
  private _sponsorName?: string; 
  public get sponsorName() {
    return this.getStringAttribute('sponsor_name');
  }
  public set sponsorName(value: string) {
    this._sponsorName = value;
  }
  public resetSponsorName() {
    this._sponsorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sponsorNameInput() {
    return this._sponsorName;
  }

  // sponsor_name_error - computed: false, optional: true, required: false
  private _sponsorNameError?: string; 
  public get sponsorNameError() {
    return this.getStringAttribute('sponsor_name_error');
  }
  public set sponsorNameError(value: string) {
    this._sponsorNameError = value;
  }
  public resetSponsorNameError() {
    this._sponsorNameError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sponsorNameErrorInput() {
    return this._sponsorNameError;
  }

  // sponsor_note_pending - computed: false, optional: true, required: false
  private _sponsorNotePending?: string; 
  public get sponsorNotePending() {
    return this.getStringAttribute('sponsor_note_pending');
  }
  public set sponsorNotePending(value: string) {
    this._sponsorNotePending = value;
  }
  public resetSponsorNotePending() {
    this._sponsorNotePending = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sponsorNotePendingInput() {
    return this._sponsorNotePending;
  }

  // sponsor_request_access - computed: false, optional: true, required: false
  private _sponsorRequestAccess?: string; 
  public get sponsorRequestAccess() {
    return this.getStringAttribute('sponsor_request_access');
  }
  public set sponsorRequestAccess(value: string) {
    this._sponsorRequestAccess = value;
  }
  public resetSponsorRequestAccess() {
    this._sponsorRequestAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sponsorRequestAccessInput() {
    return this._sponsorRequestAccess;
  }

  // sponsor_status_approved - computed: false, optional: true, required: false
  private _sponsorStatusApproved?: string; 
  public get sponsorStatusApproved() {
    return this.getStringAttribute('sponsor_status_approved');
  }
  public set sponsorStatusApproved(value: string) {
    this._sponsorStatusApproved = value;
  }
  public resetSponsorStatusApproved() {
    this._sponsorStatusApproved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sponsorStatusApprovedInput() {
    return this._sponsorStatusApproved;
  }

  // sponsor_status_denied - computed: false, optional: true, required: false
  private _sponsorStatusDenied?: string; 
  public get sponsorStatusDenied() {
    return this.getStringAttribute('sponsor_status_denied');
  }
  public set sponsorStatusDenied(value: string) {
    this._sponsorStatusDenied = value;
  }
  public resetSponsorStatusDenied() {
    this._sponsorStatusDenied = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sponsorStatusDeniedInput() {
    return this._sponsorStatusDenied;
  }

  // sponsor_status_pending - computed: false, optional: true, required: false
  private _sponsorStatusPending?: string; 
  public get sponsorStatusPending() {
    return this.getStringAttribute('sponsor_status_pending');
  }
  public set sponsorStatusPending(value: string) {
    this._sponsorStatusPending = value;
  }
  public resetSponsorStatusPending() {
    this._sponsorStatusPending = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sponsorStatusPendingInput() {
    return this._sponsorStatusPending;
  }

  // sponsor_submit - computed: false, optional: true, required: false
  private _sponsorSubmit?: string; 
  public get sponsorSubmit() {
    return this.getStringAttribute('sponsor_submit');
  }
  public set sponsorSubmit(value: string) {
    this._sponsorSubmit = value;
  }
  public resetSponsorSubmit() {
    this._sponsorSubmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sponsorSubmitInput() {
    return this._sponsorSubmit;
  }

  // sponsors_error - computed: false, optional: true, required: false
  private _sponsorsError?: string; 
  public get sponsorsError() {
    return this.getStringAttribute('sponsors_error');
  }
  public set sponsorsError(value: string) {
    this._sponsorsError = value;
  }
  public resetSponsorsError() {
    this._sponsorsError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sponsorsErrorInput() {
    return this._sponsorsError;
  }

  // sponsors_field_label - computed: false, optional: true, required: false
  private _sponsorsFieldLabel?: string; 
  public get sponsorsFieldLabel() {
    return this.getStringAttribute('sponsors_field_label');
  }
  public set sponsorsFieldLabel(value: string) {
    this._sponsorsFieldLabel = value;
  }
  public resetSponsorsFieldLabel() {
    this._sponsorsFieldLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sponsorsFieldLabelInput() {
    return this._sponsorsFieldLabel;
  }

  // tos_accept_label - computed: false, optional: true, required: false
  private _tosAcceptLabel?: string; 
  public get tosAcceptLabel() {
    return this.getStringAttribute('tos_accept_label');
  }
  public set tosAcceptLabel(value: string) {
    this._tosAcceptLabel = value;
  }
  public resetTosAcceptLabel() {
    this._tosAcceptLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosAcceptLabelInput() {
    return this._tosAcceptLabel;
  }

  // tos_error - computed: false, optional: true, required: false
  private _tosError?: string; 
  public get tosError() {
    return this.getStringAttribute('tos_error');
  }
  public set tosError(value: string) {
    this._tosError = value;
  }
  public resetTosError() {
    this._tosError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosErrorInput() {
    return this._tosError;
  }

  // tos_link - computed: false, optional: true, required: false
  private _tosLink?: string; 
  public get tosLink() {
    return this.getStringAttribute('tos_link');
  }
  public set tosLink(value: string) {
    this._tosLink = value;
  }
  public resetTosLink() {
    this._tosLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosLinkInput() {
    return this._tosLink;
  }

  // tos_text - computed: false, optional: true, required: false
  private _tosText?: string; 
  public get tosText() {
    return this.getStringAttribute('tos_text');
  }
  public set tosText(value: string) {
    this._tosText = value;
  }
  public resetTosText() {
    this._tosText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosTextInput() {
    return this._tosText;
  }
}

export class OrgWlanPortalTemplatePortalTemplateLocalesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OrgWlanPortalTemplatePortalTemplateLocales } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): OrgWlanPortalTemplatePortalTemplateLocalesOutputReference {
    return new OrgWlanPortalTemplatePortalTemplateLocalesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface OrgWlanPortalTemplatePortalTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#access_code_alternate_email OrgWlanPortalTemplate#access_code_alternate_email}
  */
  readonly accessCodeAlternateEmail?: string;
  /**
  * defines alignment on portal. enum: `center`, `left`, `right`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#alignment OrgWlanPortalTemplate#alignment}
  */
  readonly alignment?: string;
  /**
  * Label for Amazon auth button
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#auth_button_amazon OrgWlanPortalTemplate#auth_button_amazon}
  */
  readonly authButtonAmazon?: string;
  /**
  * Label for Azure auth button
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#auth_button_azure OrgWlanPortalTemplate#auth_button_azure}
  */
  readonly authButtonAzure?: string;
  /**
  * Label for Email auth button
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#auth_button_email OrgWlanPortalTemplate#auth_button_email}
  */
  readonly authButtonEmail?: string;
  /**
  * Label for Facebook auth button
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#auth_button_facebook OrgWlanPortalTemplate#auth_button_facebook}
  */
  readonly authButtonFacebook?: string;
  /**
  * Label for Google auth button
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#auth_button_google OrgWlanPortalTemplate#auth_button_google}
  */
  readonly authButtonGoogle?: string;
  /**
  * Label for Microsoft auth button
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#auth_button_microsoft OrgWlanPortalTemplate#auth_button_microsoft}
  */
  readonly authButtonMicrosoft?: string;
  /**
  * Label for passphrase auth button
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#auth_button_passphrase OrgWlanPortalTemplate#auth_button_passphrase}
  */
  readonly authButtonPassphrase?: string;
  /**
  * Label for SMS auth button
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#auth_button_sms OrgWlanPortalTemplate#auth_button_sms}
  */
  readonly authButtonSms?: string;
  /**
  * Label for Sponsor auth button
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#auth_button_sponsor OrgWlanPortalTemplate#auth_button_sponsor}
  */
  readonly authButtonSponsor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#auth_label OrgWlanPortalTemplate#auth_label}
  */
  readonly authLabel?: string;
  /**
  * Label of the link to go back to /logon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#back_link OrgWlanPortalTemplate#back_link}
  */
  readonly backLink?: string;
  /**
  * Portal main color
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#color OrgWlanPortalTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#color_dark OrgWlanPortalTemplate#color_dark}
  */
  readonly colorDark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#color_light OrgWlanPortalTemplate#color_light}
  */
  readonly colorLight?: string;
  /**
  * Whether company field is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#company OrgWlanPortalTemplate#company}
  */
  readonly company?: boolean | cdktf.IResolvable;
  /**
  * Error message when company not provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#company_error OrgWlanPortalTemplate#company_error}
  */
  readonly companyError?: string;
  /**
  * Label of company field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#company_label OrgWlanPortalTemplate#company_label}
  */
  readonly companyLabel?: string;
  /**
  * Whether email field is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#email OrgWlanPortalTemplate#email}
  */
  readonly email?: boolean | cdktf.IResolvable;
  /**
  * Error message when a user has valid social login but doesn't match specified email domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#email_access_domain_error OrgWlanPortalTemplate#email_access_domain_error}
  */
  readonly emailAccessDomainError?: string;
  /**
  * Label for cancel confirmation code submission using email auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#email_cancel OrgWlanPortalTemplate#email_cancel}
  */
  readonly emailCancel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#email_code_cancel OrgWlanPortalTemplate#email_code_cancel}
  */
  readonly emailCodeCancel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#email_code_error OrgWlanPortalTemplate#email_code_error}
  */
  readonly emailCodeError?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#email_code_field_label OrgWlanPortalTemplate#email_code_field_label}
  */
  readonly emailCodeFieldLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#email_code_message OrgWlanPortalTemplate#email_code_message}
  */
  readonly emailCodeMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#email_code_submit OrgWlanPortalTemplate#email_code_submit}
  */
  readonly emailCodeSubmit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#email_code_title OrgWlanPortalTemplate#email_code_title}
  */
  readonly emailCodeTitle?: string;
  /**
  * Error message when email not provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#email_error OrgWlanPortalTemplate#email_error}
  */
  readonly emailError?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#email_field_label OrgWlanPortalTemplate#email_field_label}
  */
  readonly emailFieldLabel?: string;
  /**
  * Label of email field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#email_label OrgWlanPortalTemplate#email_label}
  */
  readonly emailLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#email_message OrgWlanPortalTemplate#email_message}
  */
  readonly emailMessage?: string;
  /**
  * Label for confirmation code submit button using email auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#email_submit OrgWlanPortalTemplate#email_submit}
  */
  readonly emailSubmit?: string;
  /**
  * Title for the Email registration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#email_title OrgWlanPortalTemplate#email_title}
  */
  readonly emailTitle?: string;
  /**
  * Whether to ask field1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#field1 OrgWlanPortalTemplate#field1}
  */
  readonly field1?: boolean | cdktf.IResolvable;
  /**
  * Error message when field1 not provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#field1error OrgWlanPortalTemplate#field1error}
  */
  readonly field1Error?: string;
  /**
  * Label of field1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#field1label OrgWlanPortalTemplate#field1label}
  */
  readonly field1Label?: string;
  /**
  * Whether field1 is required field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#field1required OrgWlanPortalTemplate#field1required}
  */
  readonly field1Required?: boolean | cdktf.IResolvable;
  /**
  * Whether to ask field2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#field2 OrgWlanPortalTemplate#field2}
  */
  readonly field2?: boolean | cdktf.IResolvable;
  /**
  * Error message when field2 not provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#field2error OrgWlanPortalTemplate#field2error}
  */
  readonly field2Error?: string;
  /**
  * Label of field2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#field2label OrgWlanPortalTemplate#field2label}
  */
  readonly field2Label?: string;
  /**
  * Whether field2 is required field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#field2required OrgWlanPortalTemplate#field2required}
  */
  readonly field2Required?: boolean | cdktf.IResolvable;
  /**
  * Whether to ask field3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#field3 OrgWlanPortalTemplate#field3}
  */
  readonly field3?: boolean | cdktf.IResolvable;
  /**
  * Error message when field3 not provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#field3error OrgWlanPortalTemplate#field3error}
  */
  readonly field3Error?: string;
  /**
  * Label of field3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#field3label OrgWlanPortalTemplate#field3label}
  */
  readonly field3Label?: string;
  /**
  * Whether field3 is required field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#field3required OrgWlanPortalTemplate#field3required}
  */
  readonly field3Required?: boolean | cdktf.IResolvable;
  /**
  * Whether to ask field4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#field4 OrgWlanPortalTemplate#field4}
  */
  readonly field4?: boolean | cdktf.IResolvable;
  /**
  * Error message when field4 not provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#field4error OrgWlanPortalTemplate#field4error}
  */
  readonly field4Error?: string;
  /**
  * Label of field4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#field4label OrgWlanPortalTemplate#field4label}
  */
  readonly field4Label?: string;
  /**
  * Whether field4 is required field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#field4required OrgWlanPortalTemplate#field4required}
  */
  readonly field4Required?: boolean | cdktf.IResolvable;
  /**
  * Can be used to localize the portal based on the User Agent. Allowed property key values are:
  *   `ar`, `ca-ES`, `cs-CZ`, `da-DK`, `de-DE`, `el-GR`, `en-GB`, `en-US`, `es-ES`, `fi-FI`, `fr-FR`, 
  *   `he-IL`, `hi-IN`, `hr-HR`, `hu-HU`, `id-ID`, `it-IT`, `ja-J^`, `ko-KT`, `ms-MY`, `nb-NO`, `nl-NL`, 
  *   `pl-PL`, `pt-BR`, `pt-PT`, `ro-RO`, `ru-RU`, `sk-SK`, `sv-SE`, `th-TH`, `tr-TR`, `uk-UA`, `vi-VN`, 
  *   `zh-Hans`, `zh-Hant`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#locales OrgWlanPortalTemplate#locales}
  */
  readonly locales?: { [key: string]: OrgWlanPortalTemplatePortalTemplateLocales } | cdktf.IResolvable;
  /**
  * path to the background image file. File must be a `png` image less than 100kB and image dimension must be less 500px x 200px (width x height).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#logo OrgWlanPortalTemplate#logo}
  */
  readonly logo?: string;
  /**
  * label of the link to go to /marketing_policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#marketing_policy_link OrgWlanPortalTemplate#marketing_policy_link}
  */
  readonly marketingPolicyLink?: string;
  /**
  * Whether marketing policy optin is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#marketing_policy_opt_in OrgWlanPortalTemplate#marketing_policy_opt_in}
  */
  readonly marketingPolicyOptIn?: boolean | cdktf.IResolvable;
  /**
  * label for marketing optin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#marketing_policy_opt_in_label OrgWlanPortalTemplate#marketing_policy_opt_in_label}
  */
  readonly marketingPolicyOptInLabel?: string;
  /**
  * marketing policy text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#marketing_policy_opt_in_text OrgWlanPortalTemplate#marketing_policy_opt_in_text}
  */
  readonly marketingPolicyOptInText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#message OrgWlanPortalTemplate#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#multi_auth OrgWlanPortalTemplate#multi_auth}
  */
  readonly multiAuth?: boolean | cdktf.IResolvable;
  /**
  * Whether name field is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#name OrgWlanPortalTemplate#name}
  */
  readonly name?: boolean | cdktf.IResolvable;
  /**
  * Error message when name not provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#name_error OrgWlanPortalTemplate#name_error}
  */
  readonly nameError?: string;
  /**
  * Label of name field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#name_label OrgWlanPortalTemplate#name_label}
  */
  readonly nameLabel?: string;
  /**
  * Default value for the `Do not store` checkbox
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#opt_out_default OrgWlanPortalTemplate#opt_out_default}
  */
  readonly optOutDefault?: boolean | cdktf.IResolvable;
  /**
  * Whether to display Do Not Store My Personal Information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#optout OrgWlanPortalTemplate#optout}
  */
  readonly optout?: boolean | cdktf.IResolvable;
  /**
  * Label for Do Not Store My Personal Information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#optout_label OrgWlanPortalTemplate#optout_label}
  */
  readonly optoutLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#page_title OrgWlanPortalTemplate#page_title}
  */
  readonly pageTitle?: string;
  /**
  * Label for the Passphrase cancel button
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#passphrase_cancel OrgWlanPortalTemplate#passphrase_cancel}
  */
  readonly passphraseCancel?: string;
  /**
  * Error message when invalid passphrase is provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#passphrase_error OrgWlanPortalTemplate#passphrase_error}
  */
  readonly passphraseError?: string;
  /**
  * Passphrase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#passphrase_label OrgWlanPortalTemplate#passphrase_label}
  */
  readonly passphraseLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#passphrase_message OrgWlanPortalTemplate#passphrase_message}
  */
  readonly passphraseMessage?: string;
  /**
  * Label for the Passphrase submit button
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#passphrase_submit OrgWlanPortalTemplate#passphrase_submit}
  */
  readonly passphraseSubmit?: string;
  /**
  * Title for passphrase details page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#passphrase_title OrgWlanPortalTemplate#passphrase_title}
  */
  readonly passphraseTitle?: string;
  /**
  * Whether to show \"Powered by Mist\"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#powered_by OrgWlanPortalTemplate#powered_by}
  */
  readonly poweredBy?: boolean | cdktf.IResolvable;
  /**
  * Whether to require the Privacy Term acceptance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#privacy OrgWlanPortalTemplate#privacy}
  */
  readonly privacy?: boolean | cdktf.IResolvable;
  /**
  * Prefix of the label of the link to go to Privacy Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#privacy_policy_accept_label OrgWlanPortalTemplate#privacy_policy_accept_label}
  */
  readonly privacyPolicyAcceptLabel?: string;
  /**
  * Error message when Privacy Policy not accepted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#privacy_policy_error OrgWlanPortalTemplate#privacy_policy_error}
  */
  readonly privacyPolicyError?: string;
  /**
  * Label of the link to go to Privacy Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#privacy_policy_link OrgWlanPortalTemplate#privacy_policy_link}
  */
  readonly privacyPolicyLink?: string;
  /**
  * Text of the Privacy Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#privacy_policy_text OrgWlanPortalTemplate#privacy_policy_text}
  */
  readonly privacyPolicyText?: string;
  /**
  * Label to denote required field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#required_field_label OrgWlanPortalTemplate#required_field_label}
  */
  readonly requiredFieldLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#responsive_layout OrgWlanPortalTemplate#responsive_layout}
  */
  readonly responsiveLayout?: boolean | cdktf.IResolvable;
  /**
  * Label of the button to signin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sign_in_label OrgWlanPortalTemplate#sign_in_label}
  */
  readonly signInLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sms_carrier_default OrgWlanPortalTemplate#sms_carrier_default}
  */
  readonly smsCarrierDefault?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sms_carrier_error OrgWlanPortalTemplate#sms_carrier_error}
  */
  readonly smsCarrierError?: string;
  /**
  * Label for mobile carrier drop-down list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sms_carrier_field_label OrgWlanPortalTemplate#sms_carrier_field_label}
  */
  readonly smsCarrierFieldLabel?: string;
  /**
  * Label for cancel confirmation code submission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sms_code_cancel OrgWlanPortalTemplate#sms_code_cancel}
  */
  readonly smsCodeCancel?: string;
  /**
  * Error message when confirmation code is invalid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sms_code_error OrgWlanPortalTemplate#sms_code_error}
  */
  readonly smsCodeError?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sms_code_field_label OrgWlanPortalTemplate#sms_code_field_label}
  */
  readonly smsCodeFieldLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sms_code_message OrgWlanPortalTemplate#sms_code_message}
  */
  readonly smsCodeMessage?: string;
  /**
  * Label for confirmation code submit button
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sms_code_submit OrgWlanPortalTemplate#sms_code_submit}
  */
  readonly smsCodeSubmit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sms_code_title OrgWlanPortalTemplate#sms_code_title}
  */
  readonly smsCodeTitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sms_country_field_label OrgWlanPortalTemplate#sms_country_field_label}
  */
  readonly smsCountryFieldLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sms_country_format OrgWlanPortalTemplate#sms_country_format}
  */
  readonly smsCountryFormat?: string;
  /**
  * Label for checkbox to specify that the user has access code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sms_have_access_code OrgWlanPortalTemplate#sms_have_access_code}
  */
  readonly smsHaveAccessCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sms_is_twilio OrgWlanPortalTemplate#sms_is_twilio}
  */
  readonly smsIsTwilio?: boolean | cdktf.IResolvable;
  /**
  * Format of access code sms message. {{code}} and {{duration}} are placeholders and should be retained as is.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sms_message_format OrgWlanPortalTemplate#sms_message_format}
  */
  readonly smsMessageFormat?: string;
  /**
  * Label for canceling mobile details for SMS auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sms_number_cancel OrgWlanPortalTemplate#sms_number_cancel}
  */
  readonly smsNumberCancel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sms_number_error OrgWlanPortalTemplate#sms_number_error}
  */
  readonly smsNumberError?: string;
  /**
  * Label for field to provide mobile number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sms_number_field_label OrgWlanPortalTemplate#sms_number_field_label}
  */
  readonly smsNumberFieldLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sms_number_format OrgWlanPortalTemplate#sms_number_format}
  */
  readonly smsNumberFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sms_number_message OrgWlanPortalTemplate#sms_number_message}
  */
  readonly smsNumberMessage?: string;
  /**
  * Label for submit button for code generation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sms_number_submit OrgWlanPortalTemplate#sms_number_submit}
  */
  readonly smsNumberSubmit?: string;
  /**
  * Title for phone number details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sms_number_title OrgWlanPortalTemplate#sms_number_title}
  */
  readonly smsNumberTitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sms_username_format OrgWlanPortalTemplate#sms_username_format}
  */
  readonly smsUsernameFormat?: string;
  /**
  * How long confirmation code should be considered valid (in minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sms_validity_duration OrgWlanPortalTemplate#sms_validity_duration}
  */
  readonly smsValidityDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sponsor_back_link OrgWlanPortalTemplate#sponsor_back_link}
  */
  readonly sponsorBackLink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sponsor_cancel OrgWlanPortalTemplate#sponsor_cancel}
  */
  readonly sponsorCancel?: string;
  /**
  * Label for Sponsor Email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sponsor_email OrgWlanPortalTemplate#sponsor_email}
  */
  readonly sponsorEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sponsor_email_error OrgWlanPortalTemplate#sponsor_email_error}
  */
  readonly sponsorEmailError?: string;
  /**
  * HTML template to replace/override default sponsor email template 
  * Sponsor Email Template supports following template variables:
  *   * `approve_url`: Renders URL to approve the request; optionally &minutes=N query param can be appended to change the Authorization period of the guest, where N is a valid integer denoting number of minutes a guest remains authorized
  *   * `deny_url`: Renders URL to reject the request
  *   * `guest_email`: Renders Email ID of the guest
  *   * `guest_name`: Renders Name of the guest
  *   * `field1`: Renders value of the Custom Field 1
  *   * `field2`: Renders value of the Custom Field 2
  *   * `sponsor_link_validity_duration`: Renders validity time of the request (i.e. Approve/Deny URL)
  *   * `auth_expire_minutes`: Renders Wlan-level configured Guest Authorization Expiration time period (in minutes), If not configured then default (1 day in minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sponsor_email_template OrgWlanPortalTemplate#sponsor_email_template}
  */
  readonly sponsorEmailTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sponsor_info_approved OrgWlanPortalTemplate#sponsor_info_approved}
  */
  readonly sponsorInfoApproved?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sponsor_info_denied OrgWlanPortalTemplate#sponsor_info_denied}
  */
  readonly sponsorInfoDenied?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sponsor_info_pending OrgWlanPortalTemplate#sponsor_info_pending}
  */
  readonly sponsorInfoPending?: string;
  /**
  * Label for Sponsor Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sponsor_name OrgWlanPortalTemplate#sponsor_name}
  */
  readonly sponsorName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sponsor_name_error OrgWlanPortalTemplate#sponsor_name_error}
  */
  readonly sponsorNameError?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sponsor_note_pending OrgWlanPortalTemplate#sponsor_note_pending}
  */
  readonly sponsorNotePending?: string;
  /**
  * Submit button label request Wifi Access and notify sponsor about guest request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sponsor_request_access OrgWlanPortalTemplate#sponsor_request_access}
  */
  readonly sponsorRequestAccess?: string;
  /**
  * Text to display if sponsor approves request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sponsor_status_approved OrgWlanPortalTemplate#sponsor_status_approved}
  */
  readonly sponsorStatusApproved?: string;
  /**
  * Text to display when sponsor denies request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sponsor_status_denied OrgWlanPortalTemplate#sponsor_status_denied}
  */
  readonly sponsorStatusDenied?: string;
  /**
  * Text to display if request is still pending
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sponsor_status_pending OrgWlanPortalTemplate#sponsor_status_pending}
  */
  readonly sponsorStatusPending?: string;
  /**
  * Submit button label to notify sponsor about guest request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sponsor_submit OrgWlanPortalTemplate#sponsor_submit}
  */
  readonly sponsorSubmit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sponsors_error OrgWlanPortalTemplate#sponsors_error}
  */
  readonly sponsorsError?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#sponsors_field_label OrgWlanPortalTemplate#sponsors_field_label}
  */
  readonly sponsorsFieldLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#tos OrgWlanPortalTemplate#tos}
  */
  readonly tos?: boolean | cdktf.IResolvable;
  /**
  * Prefix of the label of the link to go to tos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#tos_accept_label OrgWlanPortalTemplate#tos_accept_label}
  */
  readonly tosAcceptLabel?: string;
  /**
  * Error message when tos not accepted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#tos_error OrgWlanPortalTemplate#tos_error}
  */
  readonly tosError?: string;
  /**
  * Label of the link to go to tos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#tos_link OrgWlanPortalTemplate#tos_link}
  */
  readonly tosLink?: string;
  /**
  * Text of the Terms of Service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#tos_text OrgWlanPortalTemplate#tos_text}
  */
  readonly tosText?: string;
}

export function orgWlanPortalTemplatePortalTemplateToTerraform(struct?: OrgWlanPortalTemplatePortalTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_code_alternate_email: cdktf.stringToTerraform(struct!.accessCodeAlternateEmail),
    alignment: cdktf.stringToTerraform(struct!.alignment),
    auth_button_amazon: cdktf.stringToTerraform(struct!.authButtonAmazon),
    auth_button_azure: cdktf.stringToTerraform(struct!.authButtonAzure),
    auth_button_email: cdktf.stringToTerraform(struct!.authButtonEmail),
    auth_button_facebook: cdktf.stringToTerraform(struct!.authButtonFacebook),
    auth_button_google: cdktf.stringToTerraform(struct!.authButtonGoogle),
    auth_button_microsoft: cdktf.stringToTerraform(struct!.authButtonMicrosoft),
    auth_button_passphrase: cdktf.stringToTerraform(struct!.authButtonPassphrase),
    auth_button_sms: cdktf.stringToTerraform(struct!.authButtonSms),
    auth_button_sponsor: cdktf.stringToTerraform(struct!.authButtonSponsor),
    auth_label: cdktf.stringToTerraform(struct!.authLabel),
    back_link: cdktf.stringToTerraform(struct!.backLink),
    color: cdktf.stringToTerraform(struct!.color),
    color_dark: cdktf.stringToTerraform(struct!.colorDark),
    color_light: cdktf.stringToTerraform(struct!.colorLight),
    company: cdktf.booleanToTerraform(struct!.company),
    company_error: cdktf.stringToTerraform(struct!.companyError),
    company_label: cdktf.stringToTerraform(struct!.companyLabel),
    email: cdktf.booleanToTerraform(struct!.email),
    email_access_domain_error: cdktf.stringToTerraform(struct!.emailAccessDomainError),
    email_cancel: cdktf.stringToTerraform(struct!.emailCancel),
    email_code_cancel: cdktf.stringToTerraform(struct!.emailCodeCancel),
    email_code_error: cdktf.stringToTerraform(struct!.emailCodeError),
    email_code_field_label: cdktf.stringToTerraform(struct!.emailCodeFieldLabel),
    email_code_message: cdktf.stringToTerraform(struct!.emailCodeMessage),
    email_code_submit: cdktf.stringToTerraform(struct!.emailCodeSubmit),
    email_code_title: cdktf.stringToTerraform(struct!.emailCodeTitle),
    email_error: cdktf.stringToTerraform(struct!.emailError),
    email_field_label: cdktf.stringToTerraform(struct!.emailFieldLabel),
    email_label: cdktf.stringToTerraform(struct!.emailLabel),
    email_message: cdktf.stringToTerraform(struct!.emailMessage),
    email_submit: cdktf.stringToTerraform(struct!.emailSubmit),
    email_title: cdktf.stringToTerraform(struct!.emailTitle),
    field1: cdktf.booleanToTerraform(struct!.field1),
    field1error: cdktf.stringToTerraform(struct!.field1Error),
    field1label: cdktf.stringToTerraform(struct!.field1Label),
    field1required: cdktf.booleanToTerraform(struct!.field1Required),
    field2: cdktf.booleanToTerraform(struct!.field2),
    field2error: cdktf.stringToTerraform(struct!.field2Error),
    field2label: cdktf.stringToTerraform(struct!.field2Label),
    field2required: cdktf.booleanToTerraform(struct!.field2Required),
    field3: cdktf.booleanToTerraform(struct!.field3),
    field3error: cdktf.stringToTerraform(struct!.field3Error),
    field3label: cdktf.stringToTerraform(struct!.field3Label),
    field3required: cdktf.booleanToTerraform(struct!.field3Required),
    field4: cdktf.booleanToTerraform(struct!.field4),
    field4error: cdktf.stringToTerraform(struct!.field4Error),
    field4label: cdktf.stringToTerraform(struct!.field4Label),
    field4required: cdktf.booleanToTerraform(struct!.field4Required),
    locales: cdktf.hashMapper(orgWlanPortalTemplatePortalTemplateLocalesToTerraform)(struct!.locales),
    logo: cdktf.stringToTerraform(struct!.logo),
    marketing_policy_link: cdktf.stringToTerraform(struct!.marketingPolicyLink),
    marketing_policy_opt_in: cdktf.booleanToTerraform(struct!.marketingPolicyOptIn),
    marketing_policy_opt_in_label: cdktf.stringToTerraform(struct!.marketingPolicyOptInLabel),
    marketing_policy_opt_in_text: cdktf.stringToTerraform(struct!.marketingPolicyOptInText),
    message: cdktf.stringToTerraform(struct!.message),
    multi_auth: cdktf.booleanToTerraform(struct!.multiAuth),
    name: cdktf.booleanToTerraform(struct!.name),
    name_error: cdktf.stringToTerraform(struct!.nameError),
    name_label: cdktf.stringToTerraform(struct!.nameLabel),
    opt_out_default: cdktf.booleanToTerraform(struct!.optOutDefault),
    optout: cdktf.booleanToTerraform(struct!.optout),
    optout_label: cdktf.stringToTerraform(struct!.optoutLabel),
    page_title: cdktf.stringToTerraform(struct!.pageTitle),
    passphrase_cancel: cdktf.stringToTerraform(struct!.passphraseCancel),
    passphrase_error: cdktf.stringToTerraform(struct!.passphraseError),
    passphrase_label: cdktf.stringToTerraform(struct!.passphraseLabel),
    passphrase_message: cdktf.stringToTerraform(struct!.passphraseMessage),
    passphrase_submit: cdktf.stringToTerraform(struct!.passphraseSubmit),
    passphrase_title: cdktf.stringToTerraform(struct!.passphraseTitle),
    powered_by: cdktf.booleanToTerraform(struct!.poweredBy),
    privacy: cdktf.booleanToTerraform(struct!.privacy),
    privacy_policy_accept_label: cdktf.stringToTerraform(struct!.privacyPolicyAcceptLabel),
    privacy_policy_error: cdktf.stringToTerraform(struct!.privacyPolicyError),
    privacy_policy_link: cdktf.stringToTerraform(struct!.privacyPolicyLink),
    privacy_policy_text: cdktf.stringToTerraform(struct!.privacyPolicyText),
    required_field_label: cdktf.stringToTerraform(struct!.requiredFieldLabel),
    responsive_layout: cdktf.booleanToTerraform(struct!.responsiveLayout),
    sign_in_label: cdktf.stringToTerraform(struct!.signInLabel),
    sms_carrier_default: cdktf.stringToTerraform(struct!.smsCarrierDefault),
    sms_carrier_error: cdktf.stringToTerraform(struct!.smsCarrierError),
    sms_carrier_field_label: cdktf.stringToTerraform(struct!.smsCarrierFieldLabel),
    sms_code_cancel: cdktf.stringToTerraform(struct!.smsCodeCancel),
    sms_code_error: cdktf.stringToTerraform(struct!.smsCodeError),
    sms_code_field_label: cdktf.stringToTerraform(struct!.smsCodeFieldLabel),
    sms_code_message: cdktf.stringToTerraform(struct!.smsCodeMessage),
    sms_code_submit: cdktf.stringToTerraform(struct!.smsCodeSubmit),
    sms_code_title: cdktf.stringToTerraform(struct!.smsCodeTitle),
    sms_country_field_label: cdktf.stringToTerraform(struct!.smsCountryFieldLabel),
    sms_country_format: cdktf.stringToTerraform(struct!.smsCountryFormat),
    sms_have_access_code: cdktf.stringToTerraform(struct!.smsHaveAccessCode),
    sms_is_twilio: cdktf.booleanToTerraform(struct!.smsIsTwilio),
    sms_message_format: cdktf.stringToTerraform(struct!.smsMessageFormat),
    sms_number_cancel: cdktf.stringToTerraform(struct!.smsNumberCancel),
    sms_number_error: cdktf.stringToTerraform(struct!.smsNumberError),
    sms_number_field_label: cdktf.stringToTerraform(struct!.smsNumberFieldLabel),
    sms_number_format: cdktf.stringToTerraform(struct!.smsNumberFormat),
    sms_number_message: cdktf.stringToTerraform(struct!.smsNumberMessage),
    sms_number_submit: cdktf.stringToTerraform(struct!.smsNumberSubmit),
    sms_number_title: cdktf.stringToTerraform(struct!.smsNumberTitle),
    sms_username_format: cdktf.stringToTerraform(struct!.smsUsernameFormat),
    sms_validity_duration: cdktf.numberToTerraform(struct!.smsValidityDuration),
    sponsor_back_link: cdktf.stringToTerraform(struct!.sponsorBackLink),
    sponsor_cancel: cdktf.stringToTerraform(struct!.sponsorCancel),
    sponsor_email: cdktf.stringToTerraform(struct!.sponsorEmail),
    sponsor_email_error: cdktf.stringToTerraform(struct!.sponsorEmailError),
    sponsor_email_template: cdktf.stringToTerraform(struct!.sponsorEmailTemplate),
    sponsor_info_approved: cdktf.stringToTerraform(struct!.sponsorInfoApproved),
    sponsor_info_denied: cdktf.stringToTerraform(struct!.sponsorInfoDenied),
    sponsor_info_pending: cdktf.stringToTerraform(struct!.sponsorInfoPending),
    sponsor_name: cdktf.stringToTerraform(struct!.sponsorName),
    sponsor_name_error: cdktf.stringToTerraform(struct!.sponsorNameError),
    sponsor_note_pending: cdktf.stringToTerraform(struct!.sponsorNotePending),
    sponsor_request_access: cdktf.stringToTerraform(struct!.sponsorRequestAccess),
    sponsor_status_approved: cdktf.stringToTerraform(struct!.sponsorStatusApproved),
    sponsor_status_denied: cdktf.stringToTerraform(struct!.sponsorStatusDenied),
    sponsor_status_pending: cdktf.stringToTerraform(struct!.sponsorStatusPending),
    sponsor_submit: cdktf.stringToTerraform(struct!.sponsorSubmit),
    sponsors_error: cdktf.stringToTerraform(struct!.sponsorsError),
    sponsors_field_label: cdktf.stringToTerraform(struct!.sponsorsFieldLabel),
    tos: cdktf.booleanToTerraform(struct!.tos),
    tos_accept_label: cdktf.stringToTerraform(struct!.tosAcceptLabel),
    tos_error: cdktf.stringToTerraform(struct!.tosError),
    tos_link: cdktf.stringToTerraform(struct!.tosLink),
    tos_text: cdktf.stringToTerraform(struct!.tosText),
  }
}


export function orgWlanPortalTemplatePortalTemplateToHclTerraform(struct?: OrgWlanPortalTemplatePortalTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_code_alternate_email: {
      value: cdktf.stringToHclTerraform(struct!.accessCodeAlternateEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alignment: {
      value: cdktf.stringToHclTerraform(struct!.alignment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_button_amazon: {
      value: cdktf.stringToHclTerraform(struct!.authButtonAmazon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_button_azure: {
      value: cdktf.stringToHclTerraform(struct!.authButtonAzure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_button_email: {
      value: cdktf.stringToHclTerraform(struct!.authButtonEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_button_facebook: {
      value: cdktf.stringToHclTerraform(struct!.authButtonFacebook),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_button_google: {
      value: cdktf.stringToHclTerraform(struct!.authButtonGoogle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_button_microsoft: {
      value: cdktf.stringToHclTerraform(struct!.authButtonMicrosoft),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_button_passphrase: {
      value: cdktf.stringToHclTerraform(struct!.authButtonPassphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_button_sms: {
      value: cdktf.stringToHclTerraform(struct!.authButtonSms),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_button_sponsor: {
      value: cdktf.stringToHclTerraform(struct!.authButtonSponsor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_label: {
      value: cdktf.stringToHclTerraform(struct!.authLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    back_link: {
      value: cdktf.stringToHclTerraform(struct!.backLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    color: {
      value: cdktf.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    color_dark: {
      value: cdktf.stringToHclTerraform(struct!.colorDark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    color_light: {
      value: cdktf.stringToHclTerraform(struct!.colorLight),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    company: {
      value: cdktf.booleanToHclTerraform(struct!.company),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    company_error: {
      value: cdktf.stringToHclTerraform(struct!.companyError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    company_label: {
      value: cdktf.stringToHclTerraform(struct!.companyLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email: {
      value: cdktf.booleanToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    email_access_domain_error: {
      value: cdktf.stringToHclTerraform(struct!.emailAccessDomainError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_cancel: {
      value: cdktf.stringToHclTerraform(struct!.emailCancel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_code_cancel: {
      value: cdktf.stringToHclTerraform(struct!.emailCodeCancel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_code_error: {
      value: cdktf.stringToHclTerraform(struct!.emailCodeError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_code_field_label: {
      value: cdktf.stringToHclTerraform(struct!.emailCodeFieldLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_code_message: {
      value: cdktf.stringToHclTerraform(struct!.emailCodeMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_code_submit: {
      value: cdktf.stringToHclTerraform(struct!.emailCodeSubmit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_code_title: {
      value: cdktf.stringToHclTerraform(struct!.emailCodeTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_error: {
      value: cdktf.stringToHclTerraform(struct!.emailError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_field_label: {
      value: cdktf.stringToHclTerraform(struct!.emailFieldLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_label: {
      value: cdktf.stringToHclTerraform(struct!.emailLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_message: {
      value: cdktf.stringToHclTerraform(struct!.emailMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_submit: {
      value: cdktf.stringToHclTerraform(struct!.emailSubmit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_title: {
      value: cdktf.stringToHclTerraform(struct!.emailTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field1: {
      value: cdktf.booleanToHclTerraform(struct!.field1),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    field1error: {
      value: cdktf.stringToHclTerraform(struct!.field1Error),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field1label: {
      value: cdktf.stringToHclTerraform(struct!.field1Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field1required: {
      value: cdktf.booleanToHclTerraform(struct!.field1Required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    field2: {
      value: cdktf.booleanToHclTerraform(struct!.field2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    field2error: {
      value: cdktf.stringToHclTerraform(struct!.field2Error),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field2label: {
      value: cdktf.stringToHclTerraform(struct!.field2Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field2required: {
      value: cdktf.booleanToHclTerraform(struct!.field2Required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    field3: {
      value: cdktf.booleanToHclTerraform(struct!.field3),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    field3error: {
      value: cdktf.stringToHclTerraform(struct!.field3Error),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field3label: {
      value: cdktf.stringToHclTerraform(struct!.field3Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field3required: {
      value: cdktf.booleanToHclTerraform(struct!.field3Required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    field4: {
      value: cdktf.booleanToHclTerraform(struct!.field4),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    field4error: {
      value: cdktf.stringToHclTerraform(struct!.field4Error),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field4label: {
      value: cdktf.stringToHclTerraform(struct!.field4Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field4required: {
      value: cdktf.booleanToHclTerraform(struct!.field4Required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    locales: {
      value: cdktf.hashMapperHcl(orgWlanPortalTemplatePortalTemplateLocalesToHclTerraform)(struct!.locales),
      isBlock: true,
      type: "map",
      storageClassType: "OrgWlanPortalTemplatePortalTemplateLocalesMap",
    },
    logo: {
      value: cdktf.stringToHclTerraform(struct!.logo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    marketing_policy_link: {
      value: cdktf.stringToHclTerraform(struct!.marketingPolicyLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    marketing_policy_opt_in: {
      value: cdktf.booleanToHclTerraform(struct!.marketingPolicyOptIn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    marketing_policy_opt_in_label: {
      value: cdktf.stringToHclTerraform(struct!.marketingPolicyOptInLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    marketing_policy_opt_in_text: {
      value: cdktf.stringToHclTerraform(struct!.marketingPolicyOptInText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_auth: {
      value: cdktf.booleanToHclTerraform(struct!.multiAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.booleanToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name_error: {
      value: cdktf.stringToHclTerraform(struct!.nameError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_label: {
      value: cdktf.stringToHclTerraform(struct!.nameLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    opt_out_default: {
      value: cdktf.booleanToHclTerraform(struct!.optOutDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    optout: {
      value: cdktf.booleanToHclTerraform(struct!.optout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    optout_label: {
      value: cdktf.stringToHclTerraform(struct!.optoutLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    page_title: {
      value: cdktf.stringToHclTerraform(struct!.pageTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passphrase_cancel: {
      value: cdktf.stringToHclTerraform(struct!.passphraseCancel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passphrase_error: {
      value: cdktf.stringToHclTerraform(struct!.passphraseError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passphrase_label: {
      value: cdktf.stringToHclTerraform(struct!.passphraseLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passphrase_message: {
      value: cdktf.stringToHclTerraform(struct!.passphraseMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passphrase_submit: {
      value: cdktf.stringToHclTerraform(struct!.passphraseSubmit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passphrase_title: {
      value: cdktf.stringToHclTerraform(struct!.passphraseTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    powered_by: {
      value: cdktf.booleanToHclTerraform(struct!.poweredBy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    privacy: {
      value: cdktf.booleanToHclTerraform(struct!.privacy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    privacy_policy_accept_label: {
      value: cdktf.stringToHclTerraform(struct!.privacyPolicyAcceptLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privacy_policy_error: {
      value: cdktf.stringToHclTerraform(struct!.privacyPolicyError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privacy_policy_link: {
      value: cdktf.stringToHclTerraform(struct!.privacyPolicyLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privacy_policy_text: {
      value: cdktf.stringToHclTerraform(struct!.privacyPolicyText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required_field_label: {
      value: cdktf.stringToHclTerraform(struct!.requiredFieldLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    responsive_layout: {
      value: cdktf.booleanToHclTerraform(struct!.responsiveLayout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sign_in_label: {
      value: cdktf.stringToHclTerraform(struct!.signInLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_carrier_default: {
      value: cdktf.stringToHclTerraform(struct!.smsCarrierDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_carrier_error: {
      value: cdktf.stringToHclTerraform(struct!.smsCarrierError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_carrier_field_label: {
      value: cdktf.stringToHclTerraform(struct!.smsCarrierFieldLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_code_cancel: {
      value: cdktf.stringToHclTerraform(struct!.smsCodeCancel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_code_error: {
      value: cdktf.stringToHclTerraform(struct!.smsCodeError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_code_field_label: {
      value: cdktf.stringToHclTerraform(struct!.smsCodeFieldLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_code_message: {
      value: cdktf.stringToHclTerraform(struct!.smsCodeMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_code_submit: {
      value: cdktf.stringToHclTerraform(struct!.smsCodeSubmit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_code_title: {
      value: cdktf.stringToHclTerraform(struct!.smsCodeTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_country_field_label: {
      value: cdktf.stringToHclTerraform(struct!.smsCountryFieldLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_country_format: {
      value: cdktf.stringToHclTerraform(struct!.smsCountryFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_have_access_code: {
      value: cdktf.stringToHclTerraform(struct!.smsHaveAccessCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_is_twilio: {
      value: cdktf.booleanToHclTerraform(struct!.smsIsTwilio),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sms_message_format: {
      value: cdktf.stringToHclTerraform(struct!.smsMessageFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_number_cancel: {
      value: cdktf.stringToHclTerraform(struct!.smsNumberCancel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_number_error: {
      value: cdktf.stringToHclTerraform(struct!.smsNumberError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_number_field_label: {
      value: cdktf.stringToHclTerraform(struct!.smsNumberFieldLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_number_format: {
      value: cdktf.stringToHclTerraform(struct!.smsNumberFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_number_message: {
      value: cdktf.stringToHclTerraform(struct!.smsNumberMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_number_submit: {
      value: cdktf.stringToHclTerraform(struct!.smsNumberSubmit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_number_title: {
      value: cdktf.stringToHclTerraform(struct!.smsNumberTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_username_format: {
      value: cdktf.stringToHclTerraform(struct!.smsUsernameFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_validity_duration: {
      value: cdktf.numberToHclTerraform(struct!.smsValidityDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sponsor_back_link: {
      value: cdktf.stringToHclTerraform(struct!.sponsorBackLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sponsor_cancel: {
      value: cdktf.stringToHclTerraform(struct!.sponsorCancel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sponsor_email: {
      value: cdktf.stringToHclTerraform(struct!.sponsorEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sponsor_email_error: {
      value: cdktf.stringToHclTerraform(struct!.sponsorEmailError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sponsor_email_template: {
      value: cdktf.stringToHclTerraform(struct!.sponsorEmailTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sponsor_info_approved: {
      value: cdktf.stringToHclTerraform(struct!.sponsorInfoApproved),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sponsor_info_denied: {
      value: cdktf.stringToHclTerraform(struct!.sponsorInfoDenied),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sponsor_info_pending: {
      value: cdktf.stringToHclTerraform(struct!.sponsorInfoPending),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sponsor_name: {
      value: cdktf.stringToHclTerraform(struct!.sponsorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sponsor_name_error: {
      value: cdktf.stringToHclTerraform(struct!.sponsorNameError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sponsor_note_pending: {
      value: cdktf.stringToHclTerraform(struct!.sponsorNotePending),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sponsor_request_access: {
      value: cdktf.stringToHclTerraform(struct!.sponsorRequestAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sponsor_status_approved: {
      value: cdktf.stringToHclTerraform(struct!.sponsorStatusApproved),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sponsor_status_denied: {
      value: cdktf.stringToHclTerraform(struct!.sponsorStatusDenied),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sponsor_status_pending: {
      value: cdktf.stringToHclTerraform(struct!.sponsorStatusPending),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sponsor_submit: {
      value: cdktf.stringToHclTerraform(struct!.sponsorSubmit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sponsors_error: {
      value: cdktf.stringToHclTerraform(struct!.sponsorsError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sponsors_field_label: {
      value: cdktf.stringToHclTerraform(struct!.sponsorsFieldLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tos: {
      value: cdktf.booleanToHclTerraform(struct!.tos),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tos_accept_label: {
      value: cdktf.stringToHclTerraform(struct!.tosAcceptLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tos_error: {
      value: cdktf.stringToHclTerraform(struct!.tosError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tos_link: {
      value: cdktf.stringToHclTerraform(struct!.tosLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tos_text: {
      value: cdktf.stringToHclTerraform(struct!.tosText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgWlanPortalTemplatePortalTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgWlanPortalTemplatePortalTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessCodeAlternateEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessCodeAlternateEmail = this._accessCodeAlternateEmail;
    }
    if (this._alignment !== undefined) {
      hasAnyValues = true;
      internalValueResult.alignment = this._alignment;
    }
    if (this._authButtonAmazon !== undefined) {
      hasAnyValues = true;
      internalValueResult.authButtonAmazon = this._authButtonAmazon;
    }
    if (this._authButtonAzure !== undefined) {
      hasAnyValues = true;
      internalValueResult.authButtonAzure = this._authButtonAzure;
    }
    if (this._authButtonEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.authButtonEmail = this._authButtonEmail;
    }
    if (this._authButtonFacebook !== undefined) {
      hasAnyValues = true;
      internalValueResult.authButtonFacebook = this._authButtonFacebook;
    }
    if (this._authButtonGoogle !== undefined) {
      hasAnyValues = true;
      internalValueResult.authButtonGoogle = this._authButtonGoogle;
    }
    if (this._authButtonMicrosoft !== undefined) {
      hasAnyValues = true;
      internalValueResult.authButtonMicrosoft = this._authButtonMicrosoft;
    }
    if (this._authButtonPassphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.authButtonPassphrase = this._authButtonPassphrase;
    }
    if (this._authButtonSms !== undefined) {
      hasAnyValues = true;
      internalValueResult.authButtonSms = this._authButtonSms;
    }
    if (this._authButtonSponsor !== undefined) {
      hasAnyValues = true;
      internalValueResult.authButtonSponsor = this._authButtonSponsor;
    }
    if (this._authLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.authLabel = this._authLabel;
    }
    if (this._backLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.backLink = this._backLink;
    }
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._colorDark !== undefined) {
      hasAnyValues = true;
      internalValueResult.colorDark = this._colorDark;
    }
    if (this._colorLight !== undefined) {
      hasAnyValues = true;
      internalValueResult.colorLight = this._colorLight;
    }
    if (this._company !== undefined) {
      hasAnyValues = true;
      internalValueResult.company = this._company;
    }
    if (this._companyError !== undefined) {
      hasAnyValues = true;
      internalValueResult.companyError = this._companyError;
    }
    if (this._companyLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.companyLabel = this._companyLabel;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._emailAccessDomainError !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAccessDomainError = this._emailAccessDomainError;
    }
    if (this._emailCancel !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailCancel = this._emailCancel;
    }
    if (this._emailCodeCancel !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailCodeCancel = this._emailCodeCancel;
    }
    if (this._emailCodeError !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailCodeError = this._emailCodeError;
    }
    if (this._emailCodeFieldLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailCodeFieldLabel = this._emailCodeFieldLabel;
    }
    if (this._emailCodeMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailCodeMessage = this._emailCodeMessage;
    }
    if (this._emailCodeSubmit !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailCodeSubmit = this._emailCodeSubmit;
    }
    if (this._emailCodeTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailCodeTitle = this._emailCodeTitle;
    }
    if (this._emailError !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailError = this._emailError;
    }
    if (this._emailFieldLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailFieldLabel = this._emailFieldLabel;
    }
    if (this._emailLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailLabel = this._emailLabel;
    }
    if (this._emailMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailMessage = this._emailMessage;
    }
    if (this._emailSubmit !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailSubmit = this._emailSubmit;
    }
    if (this._emailTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailTitle = this._emailTitle;
    }
    if (this._field1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.field1 = this._field1;
    }
    if (this._field1Error !== undefined) {
      hasAnyValues = true;
      internalValueResult.field1Error = this._field1Error;
    }
    if (this._field1Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.field1Label = this._field1Label;
    }
    if (this._field1Required !== undefined) {
      hasAnyValues = true;
      internalValueResult.field1Required = this._field1Required;
    }
    if (this._field2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.field2 = this._field2;
    }
    if (this._field2Error !== undefined) {
      hasAnyValues = true;
      internalValueResult.field2Error = this._field2Error;
    }
    if (this._field2Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.field2Label = this._field2Label;
    }
    if (this._field2Required !== undefined) {
      hasAnyValues = true;
      internalValueResult.field2Required = this._field2Required;
    }
    if (this._field3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.field3 = this._field3;
    }
    if (this._field3Error !== undefined) {
      hasAnyValues = true;
      internalValueResult.field3Error = this._field3Error;
    }
    if (this._field3Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.field3Label = this._field3Label;
    }
    if (this._field3Required !== undefined) {
      hasAnyValues = true;
      internalValueResult.field3Required = this._field3Required;
    }
    if (this._field4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.field4 = this._field4;
    }
    if (this._field4Error !== undefined) {
      hasAnyValues = true;
      internalValueResult.field4Error = this._field4Error;
    }
    if (this._field4Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.field4Label = this._field4Label;
    }
    if (this._field4Required !== undefined) {
      hasAnyValues = true;
      internalValueResult.field4Required = this._field4Required;
    }
    if (this._locales?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locales = this._locales?.internalValue;
    }
    if (this._logo !== undefined) {
      hasAnyValues = true;
      internalValueResult.logo = this._logo;
    }
    if (this._marketingPolicyLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.marketingPolicyLink = this._marketingPolicyLink;
    }
    if (this._marketingPolicyOptIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.marketingPolicyOptIn = this._marketingPolicyOptIn;
    }
    if (this._marketingPolicyOptInLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.marketingPolicyOptInLabel = this._marketingPolicyOptInLabel;
    }
    if (this._marketingPolicyOptInText !== undefined) {
      hasAnyValues = true;
      internalValueResult.marketingPolicyOptInText = this._marketingPolicyOptInText;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._multiAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiAuth = this._multiAuth;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nameError !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameError = this._nameError;
    }
    if (this._nameLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameLabel = this._nameLabel;
    }
    if (this._optOutDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.optOutDefault = this._optOutDefault;
    }
    if (this._optout !== undefined) {
      hasAnyValues = true;
      internalValueResult.optout = this._optout;
    }
    if (this._optoutLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.optoutLabel = this._optoutLabel;
    }
    if (this._pageTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.pageTitle = this._pageTitle;
    }
    if (this._passphraseCancel !== undefined) {
      hasAnyValues = true;
      internalValueResult.passphraseCancel = this._passphraseCancel;
    }
    if (this._passphraseError !== undefined) {
      hasAnyValues = true;
      internalValueResult.passphraseError = this._passphraseError;
    }
    if (this._passphraseLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.passphraseLabel = this._passphraseLabel;
    }
    if (this._passphraseMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.passphraseMessage = this._passphraseMessage;
    }
    if (this._passphraseSubmit !== undefined) {
      hasAnyValues = true;
      internalValueResult.passphraseSubmit = this._passphraseSubmit;
    }
    if (this._passphraseTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.passphraseTitle = this._passphraseTitle;
    }
    if (this._poweredBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.poweredBy = this._poweredBy;
    }
    if (this._privacy !== undefined) {
      hasAnyValues = true;
      internalValueResult.privacy = this._privacy;
    }
    if (this._privacyPolicyAcceptLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.privacyPolicyAcceptLabel = this._privacyPolicyAcceptLabel;
    }
    if (this._privacyPolicyError !== undefined) {
      hasAnyValues = true;
      internalValueResult.privacyPolicyError = this._privacyPolicyError;
    }
    if (this._privacyPolicyLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.privacyPolicyLink = this._privacyPolicyLink;
    }
    if (this._privacyPolicyText !== undefined) {
      hasAnyValues = true;
      internalValueResult.privacyPolicyText = this._privacyPolicyText;
    }
    if (this._requiredFieldLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredFieldLabel = this._requiredFieldLabel;
    }
    if (this._responsiveLayout !== undefined) {
      hasAnyValues = true;
      internalValueResult.responsiveLayout = this._responsiveLayout;
    }
    if (this._signInLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.signInLabel = this._signInLabel;
    }
    if (this._smsCarrierDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsCarrierDefault = this._smsCarrierDefault;
    }
    if (this._smsCarrierError !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsCarrierError = this._smsCarrierError;
    }
    if (this._smsCarrierFieldLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsCarrierFieldLabel = this._smsCarrierFieldLabel;
    }
    if (this._smsCodeCancel !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsCodeCancel = this._smsCodeCancel;
    }
    if (this._smsCodeError !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsCodeError = this._smsCodeError;
    }
    if (this._smsCodeFieldLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsCodeFieldLabel = this._smsCodeFieldLabel;
    }
    if (this._smsCodeMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsCodeMessage = this._smsCodeMessage;
    }
    if (this._smsCodeSubmit !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsCodeSubmit = this._smsCodeSubmit;
    }
    if (this._smsCodeTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsCodeTitle = this._smsCodeTitle;
    }
    if (this._smsCountryFieldLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsCountryFieldLabel = this._smsCountryFieldLabel;
    }
    if (this._smsCountryFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsCountryFormat = this._smsCountryFormat;
    }
    if (this._smsHaveAccessCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsHaveAccessCode = this._smsHaveAccessCode;
    }
    if (this._smsIsTwilio !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsIsTwilio = this._smsIsTwilio;
    }
    if (this._smsMessageFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsMessageFormat = this._smsMessageFormat;
    }
    if (this._smsNumberCancel !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsNumberCancel = this._smsNumberCancel;
    }
    if (this._smsNumberError !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsNumberError = this._smsNumberError;
    }
    if (this._smsNumberFieldLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsNumberFieldLabel = this._smsNumberFieldLabel;
    }
    if (this._smsNumberFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsNumberFormat = this._smsNumberFormat;
    }
    if (this._smsNumberMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsNumberMessage = this._smsNumberMessage;
    }
    if (this._smsNumberSubmit !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsNumberSubmit = this._smsNumberSubmit;
    }
    if (this._smsNumberTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsNumberTitle = this._smsNumberTitle;
    }
    if (this._smsUsernameFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsUsernameFormat = this._smsUsernameFormat;
    }
    if (this._smsValidityDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsValidityDuration = this._smsValidityDuration;
    }
    if (this._sponsorBackLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.sponsorBackLink = this._sponsorBackLink;
    }
    if (this._sponsorCancel !== undefined) {
      hasAnyValues = true;
      internalValueResult.sponsorCancel = this._sponsorCancel;
    }
    if (this._sponsorEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.sponsorEmail = this._sponsorEmail;
    }
    if (this._sponsorEmailError !== undefined) {
      hasAnyValues = true;
      internalValueResult.sponsorEmailError = this._sponsorEmailError;
    }
    if (this._sponsorEmailTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sponsorEmailTemplate = this._sponsorEmailTemplate;
    }
    if (this._sponsorInfoApproved !== undefined) {
      hasAnyValues = true;
      internalValueResult.sponsorInfoApproved = this._sponsorInfoApproved;
    }
    if (this._sponsorInfoDenied !== undefined) {
      hasAnyValues = true;
      internalValueResult.sponsorInfoDenied = this._sponsorInfoDenied;
    }
    if (this._sponsorInfoPending !== undefined) {
      hasAnyValues = true;
      internalValueResult.sponsorInfoPending = this._sponsorInfoPending;
    }
    if (this._sponsorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sponsorName = this._sponsorName;
    }
    if (this._sponsorNameError !== undefined) {
      hasAnyValues = true;
      internalValueResult.sponsorNameError = this._sponsorNameError;
    }
    if (this._sponsorNotePending !== undefined) {
      hasAnyValues = true;
      internalValueResult.sponsorNotePending = this._sponsorNotePending;
    }
    if (this._sponsorRequestAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.sponsorRequestAccess = this._sponsorRequestAccess;
    }
    if (this._sponsorStatusApproved !== undefined) {
      hasAnyValues = true;
      internalValueResult.sponsorStatusApproved = this._sponsorStatusApproved;
    }
    if (this._sponsorStatusDenied !== undefined) {
      hasAnyValues = true;
      internalValueResult.sponsorStatusDenied = this._sponsorStatusDenied;
    }
    if (this._sponsorStatusPending !== undefined) {
      hasAnyValues = true;
      internalValueResult.sponsorStatusPending = this._sponsorStatusPending;
    }
    if (this._sponsorSubmit !== undefined) {
      hasAnyValues = true;
      internalValueResult.sponsorSubmit = this._sponsorSubmit;
    }
    if (this._sponsorsError !== undefined) {
      hasAnyValues = true;
      internalValueResult.sponsorsError = this._sponsorsError;
    }
    if (this._sponsorsFieldLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.sponsorsFieldLabel = this._sponsorsFieldLabel;
    }
    if (this._tos !== undefined) {
      hasAnyValues = true;
      internalValueResult.tos = this._tos;
    }
    if (this._tosAcceptLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.tosAcceptLabel = this._tosAcceptLabel;
    }
    if (this._tosError !== undefined) {
      hasAnyValues = true;
      internalValueResult.tosError = this._tosError;
    }
    if (this._tosLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.tosLink = this._tosLink;
    }
    if (this._tosText !== undefined) {
      hasAnyValues = true;
      internalValueResult.tosText = this._tosText;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgWlanPortalTemplatePortalTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessCodeAlternateEmail = undefined;
      this._alignment = undefined;
      this._authButtonAmazon = undefined;
      this._authButtonAzure = undefined;
      this._authButtonEmail = undefined;
      this._authButtonFacebook = undefined;
      this._authButtonGoogle = undefined;
      this._authButtonMicrosoft = undefined;
      this._authButtonPassphrase = undefined;
      this._authButtonSms = undefined;
      this._authButtonSponsor = undefined;
      this._authLabel = undefined;
      this._backLink = undefined;
      this._color = undefined;
      this._colorDark = undefined;
      this._colorLight = undefined;
      this._company = undefined;
      this._companyError = undefined;
      this._companyLabel = undefined;
      this._email = undefined;
      this._emailAccessDomainError = undefined;
      this._emailCancel = undefined;
      this._emailCodeCancel = undefined;
      this._emailCodeError = undefined;
      this._emailCodeFieldLabel = undefined;
      this._emailCodeMessage = undefined;
      this._emailCodeSubmit = undefined;
      this._emailCodeTitle = undefined;
      this._emailError = undefined;
      this._emailFieldLabel = undefined;
      this._emailLabel = undefined;
      this._emailMessage = undefined;
      this._emailSubmit = undefined;
      this._emailTitle = undefined;
      this._field1 = undefined;
      this._field1Error = undefined;
      this._field1Label = undefined;
      this._field1Required = undefined;
      this._field2 = undefined;
      this._field2Error = undefined;
      this._field2Label = undefined;
      this._field2Required = undefined;
      this._field3 = undefined;
      this._field3Error = undefined;
      this._field3Label = undefined;
      this._field3Required = undefined;
      this._field4 = undefined;
      this._field4Error = undefined;
      this._field4Label = undefined;
      this._field4Required = undefined;
      this._locales.internalValue = undefined;
      this._logo = undefined;
      this._marketingPolicyLink = undefined;
      this._marketingPolicyOptIn = undefined;
      this._marketingPolicyOptInLabel = undefined;
      this._marketingPolicyOptInText = undefined;
      this._message = undefined;
      this._multiAuth = undefined;
      this._name = undefined;
      this._nameError = undefined;
      this._nameLabel = undefined;
      this._optOutDefault = undefined;
      this._optout = undefined;
      this._optoutLabel = undefined;
      this._pageTitle = undefined;
      this._passphraseCancel = undefined;
      this._passphraseError = undefined;
      this._passphraseLabel = undefined;
      this._passphraseMessage = undefined;
      this._passphraseSubmit = undefined;
      this._passphraseTitle = undefined;
      this._poweredBy = undefined;
      this._privacy = undefined;
      this._privacyPolicyAcceptLabel = undefined;
      this._privacyPolicyError = undefined;
      this._privacyPolicyLink = undefined;
      this._privacyPolicyText = undefined;
      this._requiredFieldLabel = undefined;
      this._responsiveLayout = undefined;
      this._signInLabel = undefined;
      this._smsCarrierDefault = undefined;
      this._smsCarrierError = undefined;
      this._smsCarrierFieldLabel = undefined;
      this._smsCodeCancel = undefined;
      this._smsCodeError = undefined;
      this._smsCodeFieldLabel = undefined;
      this._smsCodeMessage = undefined;
      this._smsCodeSubmit = undefined;
      this._smsCodeTitle = undefined;
      this._smsCountryFieldLabel = undefined;
      this._smsCountryFormat = undefined;
      this._smsHaveAccessCode = undefined;
      this._smsIsTwilio = undefined;
      this._smsMessageFormat = undefined;
      this._smsNumberCancel = undefined;
      this._smsNumberError = undefined;
      this._smsNumberFieldLabel = undefined;
      this._smsNumberFormat = undefined;
      this._smsNumberMessage = undefined;
      this._smsNumberSubmit = undefined;
      this._smsNumberTitle = undefined;
      this._smsUsernameFormat = undefined;
      this._smsValidityDuration = undefined;
      this._sponsorBackLink = undefined;
      this._sponsorCancel = undefined;
      this._sponsorEmail = undefined;
      this._sponsorEmailError = undefined;
      this._sponsorEmailTemplate = undefined;
      this._sponsorInfoApproved = undefined;
      this._sponsorInfoDenied = undefined;
      this._sponsorInfoPending = undefined;
      this._sponsorName = undefined;
      this._sponsorNameError = undefined;
      this._sponsorNotePending = undefined;
      this._sponsorRequestAccess = undefined;
      this._sponsorStatusApproved = undefined;
      this._sponsorStatusDenied = undefined;
      this._sponsorStatusPending = undefined;
      this._sponsorSubmit = undefined;
      this._sponsorsError = undefined;
      this._sponsorsFieldLabel = undefined;
      this._tos = undefined;
      this._tosAcceptLabel = undefined;
      this._tosError = undefined;
      this._tosLink = undefined;
      this._tosText = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessCodeAlternateEmail = value.accessCodeAlternateEmail;
      this._alignment = value.alignment;
      this._authButtonAmazon = value.authButtonAmazon;
      this._authButtonAzure = value.authButtonAzure;
      this._authButtonEmail = value.authButtonEmail;
      this._authButtonFacebook = value.authButtonFacebook;
      this._authButtonGoogle = value.authButtonGoogle;
      this._authButtonMicrosoft = value.authButtonMicrosoft;
      this._authButtonPassphrase = value.authButtonPassphrase;
      this._authButtonSms = value.authButtonSms;
      this._authButtonSponsor = value.authButtonSponsor;
      this._authLabel = value.authLabel;
      this._backLink = value.backLink;
      this._color = value.color;
      this._colorDark = value.colorDark;
      this._colorLight = value.colorLight;
      this._company = value.company;
      this._companyError = value.companyError;
      this._companyLabel = value.companyLabel;
      this._email = value.email;
      this._emailAccessDomainError = value.emailAccessDomainError;
      this._emailCancel = value.emailCancel;
      this._emailCodeCancel = value.emailCodeCancel;
      this._emailCodeError = value.emailCodeError;
      this._emailCodeFieldLabel = value.emailCodeFieldLabel;
      this._emailCodeMessage = value.emailCodeMessage;
      this._emailCodeSubmit = value.emailCodeSubmit;
      this._emailCodeTitle = value.emailCodeTitle;
      this._emailError = value.emailError;
      this._emailFieldLabel = value.emailFieldLabel;
      this._emailLabel = value.emailLabel;
      this._emailMessage = value.emailMessage;
      this._emailSubmit = value.emailSubmit;
      this._emailTitle = value.emailTitle;
      this._field1 = value.field1;
      this._field1Error = value.field1Error;
      this._field1Label = value.field1Label;
      this._field1Required = value.field1Required;
      this._field2 = value.field2;
      this._field2Error = value.field2Error;
      this._field2Label = value.field2Label;
      this._field2Required = value.field2Required;
      this._field3 = value.field3;
      this._field3Error = value.field3Error;
      this._field3Label = value.field3Label;
      this._field3Required = value.field3Required;
      this._field4 = value.field4;
      this._field4Error = value.field4Error;
      this._field4Label = value.field4Label;
      this._field4Required = value.field4Required;
      this._locales.internalValue = value.locales;
      this._logo = value.logo;
      this._marketingPolicyLink = value.marketingPolicyLink;
      this._marketingPolicyOptIn = value.marketingPolicyOptIn;
      this._marketingPolicyOptInLabel = value.marketingPolicyOptInLabel;
      this._marketingPolicyOptInText = value.marketingPolicyOptInText;
      this._message = value.message;
      this._multiAuth = value.multiAuth;
      this._name = value.name;
      this._nameError = value.nameError;
      this._nameLabel = value.nameLabel;
      this._optOutDefault = value.optOutDefault;
      this._optout = value.optout;
      this._optoutLabel = value.optoutLabel;
      this._pageTitle = value.pageTitle;
      this._passphraseCancel = value.passphraseCancel;
      this._passphraseError = value.passphraseError;
      this._passphraseLabel = value.passphraseLabel;
      this._passphraseMessage = value.passphraseMessage;
      this._passphraseSubmit = value.passphraseSubmit;
      this._passphraseTitle = value.passphraseTitle;
      this._poweredBy = value.poweredBy;
      this._privacy = value.privacy;
      this._privacyPolicyAcceptLabel = value.privacyPolicyAcceptLabel;
      this._privacyPolicyError = value.privacyPolicyError;
      this._privacyPolicyLink = value.privacyPolicyLink;
      this._privacyPolicyText = value.privacyPolicyText;
      this._requiredFieldLabel = value.requiredFieldLabel;
      this._responsiveLayout = value.responsiveLayout;
      this._signInLabel = value.signInLabel;
      this._smsCarrierDefault = value.smsCarrierDefault;
      this._smsCarrierError = value.smsCarrierError;
      this._smsCarrierFieldLabel = value.smsCarrierFieldLabel;
      this._smsCodeCancel = value.smsCodeCancel;
      this._smsCodeError = value.smsCodeError;
      this._smsCodeFieldLabel = value.smsCodeFieldLabel;
      this._smsCodeMessage = value.smsCodeMessage;
      this._smsCodeSubmit = value.smsCodeSubmit;
      this._smsCodeTitle = value.smsCodeTitle;
      this._smsCountryFieldLabel = value.smsCountryFieldLabel;
      this._smsCountryFormat = value.smsCountryFormat;
      this._smsHaveAccessCode = value.smsHaveAccessCode;
      this._smsIsTwilio = value.smsIsTwilio;
      this._smsMessageFormat = value.smsMessageFormat;
      this._smsNumberCancel = value.smsNumberCancel;
      this._smsNumberError = value.smsNumberError;
      this._smsNumberFieldLabel = value.smsNumberFieldLabel;
      this._smsNumberFormat = value.smsNumberFormat;
      this._smsNumberMessage = value.smsNumberMessage;
      this._smsNumberSubmit = value.smsNumberSubmit;
      this._smsNumberTitle = value.smsNumberTitle;
      this._smsUsernameFormat = value.smsUsernameFormat;
      this._smsValidityDuration = value.smsValidityDuration;
      this._sponsorBackLink = value.sponsorBackLink;
      this._sponsorCancel = value.sponsorCancel;
      this._sponsorEmail = value.sponsorEmail;
      this._sponsorEmailError = value.sponsorEmailError;
      this._sponsorEmailTemplate = value.sponsorEmailTemplate;
      this._sponsorInfoApproved = value.sponsorInfoApproved;
      this._sponsorInfoDenied = value.sponsorInfoDenied;
      this._sponsorInfoPending = value.sponsorInfoPending;
      this._sponsorName = value.sponsorName;
      this._sponsorNameError = value.sponsorNameError;
      this._sponsorNotePending = value.sponsorNotePending;
      this._sponsorRequestAccess = value.sponsorRequestAccess;
      this._sponsorStatusApproved = value.sponsorStatusApproved;
      this._sponsorStatusDenied = value.sponsorStatusDenied;
      this._sponsorStatusPending = value.sponsorStatusPending;
      this._sponsorSubmit = value.sponsorSubmit;
      this._sponsorsError = value.sponsorsError;
      this._sponsorsFieldLabel = value.sponsorsFieldLabel;
      this._tos = value.tos;
      this._tosAcceptLabel = value.tosAcceptLabel;
      this._tosError = value.tosError;
      this._tosLink = value.tosLink;
      this._tosText = value.tosText;
    }
  }

  // access_code_alternate_email - computed: true, optional: true, required: false
  private _accessCodeAlternateEmail?: string; 
  public get accessCodeAlternateEmail() {
    return this.getStringAttribute('access_code_alternate_email');
  }
  public set accessCodeAlternateEmail(value: string) {
    this._accessCodeAlternateEmail = value;
  }
  public resetAccessCodeAlternateEmail() {
    this._accessCodeAlternateEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessCodeAlternateEmailInput() {
    return this._accessCodeAlternateEmail;
  }

  // alignment - computed: true, optional: true, required: false
  private _alignment?: string; 
  public get alignment() {
    return this.getStringAttribute('alignment');
  }
  public set alignment(value: string) {
    this._alignment = value;
  }
  public resetAlignment() {
    this._alignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alignmentInput() {
    return this._alignment;
  }

  // auth_button_amazon - computed: true, optional: true, required: false
  private _authButtonAmazon?: string; 
  public get authButtonAmazon() {
    return this.getStringAttribute('auth_button_amazon');
  }
  public set authButtonAmazon(value: string) {
    this._authButtonAmazon = value;
  }
  public resetAuthButtonAmazon() {
    this._authButtonAmazon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authButtonAmazonInput() {
    return this._authButtonAmazon;
  }

  // auth_button_azure - computed: true, optional: true, required: false
  private _authButtonAzure?: string; 
  public get authButtonAzure() {
    return this.getStringAttribute('auth_button_azure');
  }
  public set authButtonAzure(value: string) {
    this._authButtonAzure = value;
  }
  public resetAuthButtonAzure() {
    this._authButtonAzure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authButtonAzureInput() {
    return this._authButtonAzure;
  }

  // auth_button_email - computed: true, optional: true, required: false
  private _authButtonEmail?: string; 
  public get authButtonEmail() {
    return this.getStringAttribute('auth_button_email');
  }
  public set authButtonEmail(value: string) {
    this._authButtonEmail = value;
  }
  public resetAuthButtonEmail() {
    this._authButtonEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authButtonEmailInput() {
    return this._authButtonEmail;
  }

  // auth_button_facebook - computed: true, optional: true, required: false
  private _authButtonFacebook?: string; 
  public get authButtonFacebook() {
    return this.getStringAttribute('auth_button_facebook');
  }
  public set authButtonFacebook(value: string) {
    this._authButtonFacebook = value;
  }
  public resetAuthButtonFacebook() {
    this._authButtonFacebook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authButtonFacebookInput() {
    return this._authButtonFacebook;
  }

  // auth_button_google - computed: true, optional: true, required: false
  private _authButtonGoogle?: string; 
  public get authButtonGoogle() {
    return this.getStringAttribute('auth_button_google');
  }
  public set authButtonGoogle(value: string) {
    this._authButtonGoogle = value;
  }
  public resetAuthButtonGoogle() {
    this._authButtonGoogle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authButtonGoogleInput() {
    return this._authButtonGoogle;
  }

  // auth_button_microsoft - computed: true, optional: true, required: false
  private _authButtonMicrosoft?: string; 
  public get authButtonMicrosoft() {
    return this.getStringAttribute('auth_button_microsoft');
  }
  public set authButtonMicrosoft(value: string) {
    this._authButtonMicrosoft = value;
  }
  public resetAuthButtonMicrosoft() {
    this._authButtonMicrosoft = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authButtonMicrosoftInput() {
    return this._authButtonMicrosoft;
  }

  // auth_button_passphrase - computed: true, optional: true, required: false
  private _authButtonPassphrase?: string; 
  public get authButtonPassphrase() {
    return this.getStringAttribute('auth_button_passphrase');
  }
  public set authButtonPassphrase(value: string) {
    this._authButtonPassphrase = value;
  }
  public resetAuthButtonPassphrase() {
    this._authButtonPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authButtonPassphraseInput() {
    return this._authButtonPassphrase;
  }

  // auth_button_sms - computed: true, optional: true, required: false
  private _authButtonSms?: string; 
  public get authButtonSms() {
    return this.getStringAttribute('auth_button_sms');
  }
  public set authButtonSms(value: string) {
    this._authButtonSms = value;
  }
  public resetAuthButtonSms() {
    this._authButtonSms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authButtonSmsInput() {
    return this._authButtonSms;
  }

  // auth_button_sponsor - computed: true, optional: true, required: false
  private _authButtonSponsor?: string; 
  public get authButtonSponsor() {
    return this.getStringAttribute('auth_button_sponsor');
  }
  public set authButtonSponsor(value: string) {
    this._authButtonSponsor = value;
  }
  public resetAuthButtonSponsor() {
    this._authButtonSponsor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authButtonSponsorInput() {
    return this._authButtonSponsor;
  }

  // auth_label - computed: true, optional: true, required: false
  private _authLabel?: string; 
  public get authLabel() {
    return this.getStringAttribute('auth_label');
  }
  public set authLabel(value: string) {
    this._authLabel = value;
  }
  public resetAuthLabel() {
    this._authLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authLabelInput() {
    return this._authLabel;
  }

  // back_link - computed: false, optional: true, required: false
  private _backLink?: string; 
  public get backLink() {
    return this.getStringAttribute('back_link');
  }
  public set backLink(value: string) {
    this._backLink = value;
  }
  public resetBackLink() {
    this._backLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backLinkInput() {
    return this._backLink;
  }

  // color - computed: true, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // color_dark - computed: true, optional: true, required: false
  private _colorDark?: string; 
  public get colorDark() {
    return this.getStringAttribute('color_dark');
  }
  public set colorDark(value: string) {
    this._colorDark = value;
  }
  public resetColorDark() {
    this._colorDark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorDarkInput() {
    return this._colorDark;
  }

  // color_light - computed: true, optional: true, required: false
  private _colorLight?: string; 
  public get colorLight() {
    return this.getStringAttribute('color_light');
  }
  public set colorLight(value: string) {
    this._colorLight = value;
  }
  public resetColorLight() {
    this._colorLight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorLightInput() {
    return this._colorLight;
  }

  // company - computed: true, optional: true, required: false
  private _company?: boolean | cdktf.IResolvable; 
  public get company() {
    return this.getBooleanAttribute('company');
  }
  public set company(value: boolean | cdktf.IResolvable) {
    this._company = value;
  }
  public resetCompany() {
    this._company = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyInput() {
    return this._company;
  }

  // company_error - computed: true, optional: true, required: false
  private _companyError?: string; 
  public get companyError() {
    return this.getStringAttribute('company_error');
  }
  public set companyError(value: string) {
    this._companyError = value;
  }
  public resetCompanyError() {
    this._companyError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyErrorInput() {
    return this._companyError;
  }

  // company_label - computed: true, optional: true, required: false
  private _companyLabel?: string; 
  public get companyLabel() {
    return this.getStringAttribute('company_label');
  }
  public set companyLabel(value: string) {
    this._companyLabel = value;
  }
  public resetCompanyLabel() {
    this._companyLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyLabelInput() {
    return this._companyLabel;
  }

  // email - computed: true, optional: true, required: false
  private _email?: boolean | cdktf.IResolvable; 
  public get email() {
    return this.getBooleanAttribute('email');
  }
  public set email(value: boolean | cdktf.IResolvable) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // email_access_domain_error - computed: true, optional: true, required: false
  private _emailAccessDomainError?: string; 
  public get emailAccessDomainError() {
    return this.getStringAttribute('email_access_domain_error');
  }
  public set emailAccessDomainError(value: string) {
    this._emailAccessDomainError = value;
  }
  public resetEmailAccessDomainError() {
    this._emailAccessDomainError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAccessDomainErrorInput() {
    return this._emailAccessDomainError;
  }

  // email_cancel - computed: true, optional: true, required: false
  private _emailCancel?: string; 
  public get emailCancel() {
    return this.getStringAttribute('email_cancel');
  }
  public set emailCancel(value: string) {
    this._emailCancel = value;
  }
  public resetEmailCancel() {
    this._emailCancel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailCancelInput() {
    return this._emailCancel;
  }

  // email_code_cancel - computed: true, optional: true, required: false
  private _emailCodeCancel?: string; 
  public get emailCodeCancel() {
    return this.getStringAttribute('email_code_cancel');
  }
  public set emailCodeCancel(value: string) {
    this._emailCodeCancel = value;
  }
  public resetEmailCodeCancel() {
    this._emailCodeCancel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailCodeCancelInput() {
    return this._emailCodeCancel;
  }

  // email_code_error - computed: true, optional: true, required: false
  private _emailCodeError?: string; 
  public get emailCodeError() {
    return this.getStringAttribute('email_code_error');
  }
  public set emailCodeError(value: string) {
    this._emailCodeError = value;
  }
  public resetEmailCodeError() {
    this._emailCodeError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailCodeErrorInput() {
    return this._emailCodeError;
  }

  // email_code_field_label - computed: true, optional: true, required: false
  private _emailCodeFieldLabel?: string; 
  public get emailCodeFieldLabel() {
    return this.getStringAttribute('email_code_field_label');
  }
  public set emailCodeFieldLabel(value: string) {
    this._emailCodeFieldLabel = value;
  }
  public resetEmailCodeFieldLabel() {
    this._emailCodeFieldLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailCodeFieldLabelInput() {
    return this._emailCodeFieldLabel;
  }

  // email_code_message - computed: true, optional: true, required: false
  private _emailCodeMessage?: string; 
  public get emailCodeMessage() {
    return this.getStringAttribute('email_code_message');
  }
  public set emailCodeMessage(value: string) {
    this._emailCodeMessage = value;
  }
  public resetEmailCodeMessage() {
    this._emailCodeMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailCodeMessageInput() {
    return this._emailCodeMessage;
  }

  // email_code_submit - computed: true, optional: true, required: false
  private _emailCodeSubmit?: string; 
  public get emailCodeSubmit() {
    return this.getStringAttribute('email_code_submit');
  }
  public set emailCodeSubmit(value: string) {
    this._emailCodeSubmit = value;
  }
  public resetEmailCodeSubmit() {
    this._emailCodeSubmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailCodeSubmitInput() {
    return this._emailCodeSubmit;
  }

  // email_code_title - computed: true, optional: true, required: false
  private _emailCodeTitle?: string; 
  public get emailCodeTitle() {
    return this.getStringAttribute('email_code_title');
  }
  public set emailCodeTitle(value: string) {
    this._emailCodeTitle = value;
  }
  public resetEmailCodeTitle() {
    this._emailCodeTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailCodeTitleInput() {
    return this._emailCodeTitle;
  }

  // email_error - computed: true, optional: true, required: false
  private _emailError?: string; 
  public get emailError() {
    return this.getStringAttribute('email_error');
  }
  public set emailError(value: string) {
    this._emailError = value;
  }
  public resetEmailError() {
    this._emailError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailErrorInput() {
    return this._emailError;
  }

  // email_field_label - computed: true, optional: true, required: false
  private _emailFieldLabel?: string; 
  public get emailFieldLabel() {
    return this.getStringAttribute('email_field_label');
  }
  public set emailFieldLabel(value: string) {
    this._emailFieldLabel = value;
  }
  public resetEmailFieldLabel() {
    this._emailFieldLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailFieldLabelInput() {
    return this._emailFieldLabel;
  }

  // email_label - computed: true, optional: true, required: false
  private _emailLabel?: string; 
  public get emailLabel() {
    return this.getStringAttribute('email_label');
  }
  public set emailLabel(value: string) {
    this._emailLabel = value;
  }
  public resetEmailLabel() {
    this._emailLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailLabelInput() {
    return this._emailLabel;
  }

  // email_message - computed: true, optional: true, required: false
  private _emailMessage?: string; 
  public get emailMessage() {
    return this.getStringAttribute('email_message');
  }
  public set emailMessage(value: string) {
    this._emailMessage = value;
  }
  public resetEmailMessage() {
    this._emailMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailMessageInput() {
    return this._emailMessage;
  }

  // email_submit - computed: true, optional: true, required: false
  private _emailSubmit?: string; 
  public get emailSubmit() {
    return this.getStringAttribute('email_submit');
  }
  public set emailSubmit(value: string) {
    this._emailSubmit = value;
  }
  public resetEmailSubmit() {
    this._emailSubmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailSubmitInput() {
    return this._emailSubmit;
  }

  // email_title - computed: true, optional: true, required: false
  private _emailTitle?: string; 
  public get emailTitle() {
    return this.getStringAttribute('email_title');
  }
  public set emailTitle(value: string) {
    this._emailTitle = value;
  }
  public resetEmailTitle() {
    this._emailTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailTitleInput() {
    return this._emailTitle;
  }

  // field1 - computed: true, optional: true, required: false
  private _field1?: boolean | cdktf.IResolvable; 
  public get field1() {
    return this.getBooleanAttribute('field1');
  }
  public set field1(value: boolean | cdktf.IResolvable) {
    this._field1 = value;
  }
  public resetField1() {
    this._field1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get field1Input() {
    return this._field1;
  }

  // field1error - computed: true, optional: true, required: false
  private _field1Error?: string; 
  public get field1Error() {
    return this.getStringAttribute('field1error');
  }
  public set field1Error(value: string) {
    this._field1Error = value;
  }
  public resetField1Error() {
    this._field1Error = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get field1ErrorInput() {
    return this._field1Error;
  }

  // field1label - computed: true, optional: true, required: false
  private _field1Label?: string; 
  public get field1Label() {
    return this.getStringAttribute('field1label');
  }
  public set field1Label(value: string) {
    this._field1Label = value;
  }
  public resetField1Label() {
    this._field1Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get field1LabelInput() {
    return this._field1Label;
  }

  // field1required - computed: false, optional: true, required: false
  private _field1Required?: boolean | cdktf.IResolvable; 
  public get field1Required() {
    return this.getBooleanAttribute('field1required');
  }
  public set field1Required(value: boolean | cdktf.IResolvable) {
    this._field1Required = value;
  }
  public resetField1Required() {
    this._field1Required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get field1RequiredInput() {
    return this._field1Required;
  }

  // field2 - computed: true, optional: true, required: false
  private _field2?: boolean | cdktf.IResolvable; 
  public get field2() {
    return this.getBooleanAttribute('field2');
  }
  public set field2(value: boolean | cdktf.IResolvable) {
    this._field2 = value;
  }
  public resetField2() {
    this._field2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get field2Input() {
    return this._field2;
  }

  // field2error - computed: true, optional: true, required: false
  private _field2Error?: string; 
  public get field2Error() {
    return this.getStringAttribute('field2error');
  }
  public set field2Error(value: string) {
    this._field2Error = value;
  }
  public resetField2Error() {
    this._field2Error = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get field2ErrorInput() {
    return this._field2Error;
  }

  // field2label - computed: true, optional: true, required: false
  private _field2Label?: string; 
  public get field2Label() {
    return this.getStringAttribute('field2label');
  }
  public set field2Label(value: string) {
    this._field2Label = value;
  }
  public resetField2Label() {
    this._field2Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get field2LabelInput() {
    return this._field2Label;
  }

  // field2required - computed: false, optional: true, required: false
  private _field2Required?: boolean | cdktf.IResolvable; 
  public get field2Required() {
    return this.getBooleanAttribute('field2required');
  }
  public set field2Required(value: boolean | cdktf.IResolvable) {
    this._field2Required = value;
  }
  public resetField2Required() {
    this._field2Required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get field2RequiredInput() {
    return this._field2Required;
  }

  // field3 - computed: true, optional: true, required: false
  private _field3?: boolean | cdktf.IResolvable; 
  public get field3() {
    return this.getBooleanAttribute('field3');
  }
  public set field3(value: boolean | cdktf.IResolvable) {
    this._field3 = value;
  }
  public resetField3() {
    this._field3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get field3Input() {
    return this._field3;
  }

  // field3error - computed: true, optional: true, required: false
  private _field3Error?: string; 
  public get field3Error() {
    return this.getStringAttribute('field3error');
  }
  public set field3Error(value: string) {
    this._field3Error = value;
  }
  public resetField3Error() {
    this._field3Error = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get field3ErrorInput() {
    return this._field3Error;
  }

  // field3label - computed: true, optional: true, required: false
  private _field3Label?: string; 
  public get field3Label() {
    return this.getStringAttribute('field3label');
  }
  public set field3Label(value: string) {
    this._field3Label = value;
  }
  public resetField3Label() {
    this._field3Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get field3LabelInput() {
    return this._field3Label;
  }

  // field3required - computed: false, optional: true, required: false
  private _field3Required?: boolean | cdktf.IResolvable; 
  public get field3Required() {
    return this.getBooleanAttribute('field3required');
  }
  public set field3Required(value: boolean | cdktf.IResolvable) {
    this._field3Required = value;
  }
  public resetField3Required() {
    this._field3Required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get field3RequiredInput() {
    return this._field3Required;
  }

  // field4 - computed: true, optional: true, required: false
  private _field4?: boolean | cdktf.IResolvable; 
  public get field4() {
    return this.getBooleanAttribute('field4');
  }
  public set field4(value: boolean | cdktf.IResolvable) {
    this._field4 = value;
  }
  public resetField4() {
    this._field4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get field4Input() {
    return this._field4;
  }

  // field4error - computed: true, optional: true, required: false
  private _field4Error?: string; 
  public get field4Error() {
    return this.getStringAttribute('field4error');
  }
  public set field4Error(value: string) {
    this._field4Error = value;
  }
  public resetField4Error() {
    this._field4Error = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get field4ErrorInput() {
    return this._field4Error;
  }

  // field4label - computed: true, optional: true, required: false
  private _field4Label?: string; 
  public get field4Label() {
    return this.getStringAttribute('field4label');
  }
  public set field4Label(value: string) {
    this._field4Label = value;
  }
  public resetField4Label() {
    this._field4Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get field4LabelInput() {
    return this._field4Label;
  }

  // field4required - computed: false, optional: true, required: false
  private _field4Required?: boolean | cdktf.IResolvable; 
  public get field4Required() {
    return this.getBooleanAttribute('field4required');
  }
  public set field4Required(value: boolean | cdktf.IResolvable) {
    this._field4Required = value;
  }
  public resetField4Required() {
    this._field4Required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get field4RequiredInput() {
    return this._field4Required;
  }

  // locales - computed: false, optional: true, required: false
  private _locales = new OrgWlanPortalTemplatePortalTemplateLocalesMap(this, "locales");
  public get locales() {
    return this._locales;
  }
  public putLocales(value: { [key: string]: OrgWlanPortalTemplatePortalTemplateLocales } | cdktf.IResolvable) {
    this._locales.internalValue = value;
  }
  public resetLocales() {
    this._locales.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localesInput() {
    return this._locales.internalValue;
  }

  // logo - computed: true, optional: true, required: false
  private _logo?: string; 
  public get logo() {
    return this.getStringAttribute('logo');
  }
  public set logo(value: string) {
    this._logo = value;
  }
  public resetLogo() {
    this._logo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoInput() {
    return this._logo;
  }

  // marketing_policy_link - computed: true, optional: true, required: false
  private _marketingPolicyLink?: string; 
  public get marketingPolicyLink() {
    return this.getStringAttribute('marketing_policy_link');
  }
  public set marketingPolicyLink(value: string) {
    this._marketingPolicyLink = value;
  }
  public resetMarketingPolicyLink() {
    this._marketingPolicyLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marketingPolicyLinkInput() {
    return this._marketingPolicyLink;
  }

  // marketing_policy_opt_in - computed: true, optional: true, required: false
  private _marketingPolicyOptIn?: boolean | cdktf.IResolvable; 
  public get marketingPolicyOptIn() {
    return this.getBooleanAttribute('marketing_policy_opt_in');
  }
  public set marketingPolicyOptIn(value: boolean | cdktf.IResolvable) {
    this._marketingPolicyOptIn = value;
  }
  public resetMarketingPolicyOptIn() {
    this._marketingPolicyOptIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marketingPolicyOptInInput() {
    return this._marketingPolicyOptIn;
  }

  // marketing_policy_opt_in_label - computed: true, optional: true, required: false
  private _marketingPolicyOptInLabel?: string; 
  public get marketingPolicyOptInLabel() {
    return this.getStringAttribute('marketing_policy_opt_in_label');
  }
  public set marketingPolicyOptInLabel(value: string) {
    this._marketingPolicyOptInLabel = value;
  }
  public resetMarketingPolicyOptInLabel() {
    this._marketingPolicyOptInLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marketingPolicyOptInLabelInput() {
    return this._marketingPolicyOptInLabel;
  }

  // marketing_policy_opt_in_text - computed: true, optional: true, required: false
  private _marketingPolicyOptInText?: string; 
  public get marketingPolicyOptInText() {
    return this.getStringAttribute('marketing_policy_opt_in_text');
  }
  public set marketingPolicyOptInText(value: string) {
    this._marketingPolicyOptInText = value;
  }
  public resetMarketingPolicyOptInText() {
    this._marketingPolicyOptInText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marketingPolicyOptInTextInput() {
    return this._marketingPolicyOptInText;
  }

  // message - computed: true, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // multi_auth - computed: true, optional: true, required: false
  private _multiAuth?: boolean | cdktf.IResolvable; 
  public get multiAuth() {
    return this.getBooleanAttribute('multi_auth');
  }
  public set multiAuth(value: boolean | cdktf.IResolvable) {
    this._multiAuth = value;
  }
  public resetMultiAuth() {
    this._multiAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiAuthInput() {
    return this._multiAuth;
  }

  // name - computed: true, optional: true, required: false
  private _name?: boolean | cdktf.IResolvable; 
  public get name() {
    return this.getBooleanAttribute('name');
  }
  public set name(value: boolean | cdktf.IResolvable) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // name_error - computed: true, optional: true, required: false
  private _nameError?: string; 
  public get nameError() {
    return this.getStringAttribute('name_error');
  }
  public set nameError(value: string) {
    this._nameError = value;
  }
  public resetNameError() {
    this._nameError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameErrorInput() {
    return this._nameError;
  }

  // name_label - computed: true, optional: true, required: false
  private _nameLabel?: string; 
  public get nameLabel() {
    return this.getStringAttribute('name_label');
  }
  public set nameLabel(value: string) {
    this._nameLabel = value;
  }
  public resetNameLabel() {
    this._nameLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameLabelInput() {
    return this._nameLabel;
  }

  // opt_out_default - computed: true, optional: true, required: false
  private _optOutDefault?: boolean | cdktf.IResolvable; 
  public get optOutDefault() {
    return this.getBooleanAttribute('opt_out_default');
  }
  public set optOutDefault(value: boolean | cdktf.IResolvable) {
    this._optOutDefault = value;
  }
  public resetOptOutDefault() {
    this._optOutDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optOutDefaultInput() {
    return this._optOutDefault;
  }

  // optout - computed: true, optional: true, required: false
  private _optout?: boolean | cdktf.IResolvable; 
  public get optout() {
    return this.getBooleanAttribute('optout');
  }
  public set optout(value: boolean | cdktf.IResolvable) {
    this._optout = value;
  }
  public resetOptout() {
    this._optout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optoutInput() {
    return this._optout;
  }

  // optout_label - computed: true, optional: true, required: false
  private _optoutLabel?: string; 
  public get optoutLabel() {
    return this.getStringAttribute('optout_label');
  }
  public set optoutLabel(value: string) {
    this._optoutLabel = value;
  }
  public resetOptoutLabel() {
    this._optoutLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optoutLabelInput() {
    return this._optoutLabel;
  }

  // page_title - computed: true, optional: true, required: false
  private _pageTitle?: string; 
  public get pageTitle() {
    return this.getStringAttribute('page_title');
  }
  public set pageTitle(value: string) {
    this._pageTitle = value;
  }
  public resetPageTitle() {
    this._pageTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageTitleInput() {
    return this._pageTitle;
  }

  // passphrase_cancel - computed: true, optional: true, required: false
  private _passphraseCancel?: string; 
  public get passphraseCancel() {
    return this.getStringAttribute('passphrase_cancel');
  }
  public set passphraseCancel(value: string) {
    this._passphraseCancel = value;
  }
  public resetPassphraseCancel() {
    this._passphraseCancel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseCancelInput() {
    return this._passphraseCancel;
  }

  // passphrase_error - computed: true, optional: true, required: false
  private _passphraseError?: string; 
  public get passphraseError() {
    return this.getStringAttribute('passphrase_error');
  }
  public set passphraseError(value: string) {
    this._passphraseError = value;
  }
  public resetPassphraseError() {
    this._passphraseError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseErrorInput() {
    return this._passphraseError;
  }

  // passphrase_label - computed: true, optional: true, required: false
  private _passphraseLabel?: string; 
  public get passphraseLabel() {
    return this.getStringAttribute('passphrase_label');
  }
  public set passphraseLabel(value: string) {
    this._passphraseLabel = value;
  }
  public resetPassphraseLabel() {
    this._passphraseLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseLabelInput() {
    return this._passphraseLabel;
  }

  // passphrase_message - computed: true, optional: true, required: false
  private _passphraseMessage?: string; 
  public get passphraseMessage() {
    return this.getStringAttribute('passphrase_message');
  }
  public set passphraseMessage(value: string) {
    this._passphraseMessage = value;
  }
  public resetPassphraseMessage() {
    this._passphraseMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseMessageInput() {
    return this._passphraseMessage;
  }

  // passphrase_submit - computed: true, optional: true, required: false
  private _passphraseSubmit?: string; 
  public get passphraseSubmit() {
    return this.getStringAttribute('passphrase_submit');
  }
  public set passphraseSubmit(value: string) {
    this._passphraseSubmit = value;
  }
  public resetPassphraseSubmit() {
    this._passphraseSubmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseSubmitInput() {
    return this._passphraseSubmit;
  }

  // passphrase_title - computed: true, optional: true, required: false
  private _passphraseTitle?: string; 
  public get passphraseTitle() {
    return this.getStringAttribute('passphrase_title');
  }
  public set passphraseTitle(value: string) {
    this._passphraseTitle = value;
  }
  public resetPassphraseTitle() {
    this._passphraseTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseTitleInput() {
    return this._passphraseTitle;
  }

  // powered_by - computed: true, optional: true, required: false
  private _poweredBy?: boolean | cdktf.IResolvable; 
  public get poweredBy() {
    return this.getBooleanAttribute('powered_by');
  }
  public set poweredBy(value: boolean | cdktf.IResolvable) {
    this._poweredBy = value;
  }
  public resetPoweredBy() {
    this._poweredBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poweredByInput() {
    return this._poweredBy;
  }

  // privacy - computed: true, optional: true, required: false
  private _privacy?: boolean | cdktf.IResolvable; 
  public get privacy() {
    return this.getBooleanAttribute('privacy');
  }
  public set privacy(value: boolean | cdktf.IResolvable) {
    this._privacy = value;
  }
  public resetPrivacy() {
    this._privacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyInput() {
    return this._privacy;
  }

  // privacy_policy_accept_label - computed: true, optional: true, required: false
  private _privacyPolicyAcceptLabel?: string; 
  public get privacyPolicyAcceptLabel() {
    return this.getStringAttribute('privacy_policy_accept_label');
  }
  public set privacyPolicyAcceptLabel(value: string) {
    this._privacyPolicyAcceptLabel = value;
  }
  public resetPrivacyPolicyAcceptLabel() {
    this._privacyPolicyAcceptLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyPolicyAcceptLabelInput() {
    return this._privacyPolicyAcceptLabel;
  }

  // privacy_policy_error - computed: true, optional: true, required: false
  private _privacyPolicyError?: string; 
  public get privacyPolicyError() {
    return this.getStringAttribute('privacy_policy_error');
  }
  public set privacyPolicyError(value: string) {
    this._privacyPolicyError = value;
  }
  public resetPrivacyPolicyError() {
    this._privacyPolicyError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyPolicyErrorInput() {
    return this._privacyPolicyError;
  }

  // privacy_policy_link - computed: true, optional: true, required: false
  private _privacyPolicyLink?: string; 
  public get privacyPolicyLink() {
    return this.getStringAttribute('privacy_policy_link');
  }
  public set privacyPolicyLink(value: string) {
    this._privacyPolicyLink = value;
  }
  public resetPrivacyPolicyLink() {
    this._privacyPolicyLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyPolicyLinkInput() {
    return this._privacyPolicyLink;
  }

  // privacy_policy_text - computed: true, optional: true, required: false
  private _privacyPolicyText?: string; 
  public get privacyPolicyText() {
    return this.getStringAttribute('privacy_policy_text');
  }
  public set privacyPolicyText(value: string) {
    this._privacyPolicyText = value;
  }
  public resetPrivacyPolicyText() {
    this._privacyPolicyText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyPolicyTextInput() {
    return this._privacyPolicyText;
  }

  // required_field_label - computed: true, optional: true, required: false
  private _requiredFieldLabel?: string; 
  public get requiredFieldLabel() {
    return this.getStringAttribute('required_field_label');
  }
  public set requiredFieldLabel(value: string) {
    this._requiredFieldLabel = value;
  }
  public resetRequiredFieldLabel() {
    this._requiredFieldLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredFieldLabelInput() {
    return this._requiredFieldLabel;
  }

  // responsive_layout - computed: true, optional: true, required: false
  private _responsiveLayout?: boolean | cdktf.IResolvable; 
  public get responsiveLayout() {
    return this.getBooleanAttribute('responsive_layout');
  }
  public set responsiveLayout(value: boolean | cdktf.IResolvable) {
    this._responsiveLayout = value;
  }
  public resetResponsiveLayout() {
    this._responsiveLayout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responsiveLayoutInput() {
    return this._responsiveLayout;
  }

  // sign_in_label - computed: true, optional: true, required: false
  private _signInLabel?: string; 
  public get signInLabel() {
    return this.getStringAttribute('sign_in_label');
  }
  public set signInLabel(value: string) {
    this._signInLabel = value;
  }
  public resetSignInLabel() {
    this._signInLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signInLabelInput() {
    return this._signInLabel;
  }

  // sms_carrier_default - computed: true, optional: true, required: false
  private _smsCarrierDefault?: string; 
  public get smsCarrierDefault() {
    return this.getStringAttribute('sms_carrier_default');
  }
  public set smsCarrierDefault(value: string) {
    this._smsCarrierDefault = value;
  }
  public resetSmsCarrierDefault() {
    this._smsCarrierDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsCarrierDefaultInput() {
    return this._smsCarrierDefault;
  }

  // sms_carrier_error - computed: true, optional: true, required: false
  private _smsCarrierError?: string; 
  public get smsCarrierError() {
    return this.getStringAttribute('sms_carrier_error');
  }
  public set smsCarrierError(value: string) {
    this._smsCarrierError = value;
  }
  public resetSmsCarrierError() {
    this._smsCarrierError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsCarrierErrorInput() {
    return this._smsCarrierError;
  }

  // sms_carrier_field_label - computed: true, optional: true, required: false
  private _smsCarrierFieldLabel?: string; 
  public get smsCarrierFieldLabel() {
    return this.getStringAttribute('sms_carrier_field_label');
  }
  public set smsCarrierFieldLabel(value: string) {
    this._smsCarrierFieldLabel = value;
  }
  public resetSmsCarrierFieldLabel() {
    this._smsCarrierFieldLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsCarrierFieldLabelInput() {
    return this._smsCarrierFieldLabel;
  }

  // sms_code_cancel - computed: true, optional: true, required: false
  private _smsCodeCancel?: string; 
  public get smsCodeCancel() {
    return this.getStringAttribute('sms_code_cancel');
  }
  public set smsCodeCancel(value: string) {
    this._smsCodeCancel = value;
  }
  public resetSmsCodeCancel() {
    this._smsCodeCancel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsCodeCancelInput() {
    return this._smsCodeCancel;
  }

  // sms_code_error - computed: true, optional: true, required: false
  private _smsCodeError?: string; 
  public get smsCodeError() {
    return this.getStringAttribute('sms_code_error');
  }
  public set smsCodeError(value: string) {
    this._smsCodeError = value;
  }
  public resetSmsCodeError() {
    this._smsCodeError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsCodeErrorInput() {
    return this._smsCodeError;
  }

  // sms_code_field_label - computed: true, optional: true, required: false
  private _smsCodeFieldLabel?: string; 
  public get smsCodeFieldLabel() {
    return this.getStringAttribute('sms_code_field_label');
  }
  public set smsCodeFieldLabel(value: string) {
    this._smsCodeFieldLabel = value;
  }
  public resetSmsCodeFieldLabel() {
    this._smsCodeFieldLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsCodeFieldLabelInput() {
    return this._smsCodeFieldLabel;
  }

  // sms_code_message - computed: true, optional: true, required: false
  private _smsCodeMessage?: string; 
  public get smsCodeMessage() {
    return this.getStringAttribute('sms_code_message');
  }
  public set smsCodeMessage(value: string) {
    this._smsCodeMessage = value;
  }
  public resetSmsCodeMessage() {
    this._smsCodeMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsCodeMessageInput() {
    return this._smsCodeMessage;
  }

  // sms_code_submit - computed: true, optional: true, required: false
  private _smsCodeSubmit?: string; 
  public get smsCodeSubmit() {
    return this.getStringAttribute('sms_code_submit');
  }
  public set smsCodeSubmit(value: string) {
    this._smsCodeSubmit = value;
  }
  public resetSmsCodeSubmit() {
    this._smsCodeSubmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsCodeSubmitInput() {
    return this._smsCodeSubmit;
  }

  // sms_code_title - computed: true, optional: true, required: false
  private _smsCodeTitle?: string; 
  public get smsCodeTitle() {
    return this.getStringAttribute('sms_code_title');
  }
  public set smsCodeTitle(value: string) {
    this._smsCodeTitle = value;
  }
  public resetSmsCodeTitle() {
    this._smsCodeTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsCodeTitleInput() {
    return this._smsCodeTitle;
  }

  // sms_country_field_label - computed: true, optional: true, required: false
  private _smsCountryFieldLabel?: string; 
  public get smsCountryFieldLabel() {
    return this.getStringAttribute('sms_country_field_label');
  }
  public set smsCountryFieldLabel(value: string) {
    this._smsCountryFieldLabel = value;
  }
  public resetSmsCountryFieldLabel() {
    this._smsCountryFieldLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsCountryFieldLabelInput() {
    return this._smsCountryFieldLabel;
  }

  // sms_country_format - computed: true, optional: true, required: false
  private _smsCountryFormat?: string; 
  public get smsCountryFormat() {
    return this.getStringAttribute('sms_country_format');
  }
  public set smsCountryFormat(value: string) {
    this._smsCountryFormat = value;
  }
  public resetSmsCountryFormat() {
    this._smsCountryFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsCountryFormatInput() {
    return this._smsCountryFormat;
  }

  // sms_have_access_code - computed: true, optional: true, required: false
  private _smsHaveAccessCode?: string; 
  public get smsHaveAccessCode() {
    return this.getStringAttribute('sms_have_access_code');
  }
  public set smsHaveAccessCode(value: string) {
    this._smsHaveAccessCode = value;
  }
  public resetSmsHaveAccessCode() {
    this._smsHaveAccessCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsHaveAccessCodeInput() {
    return this._smsHaveAccessCode;
  }

  // sms_is_twilio - computed: true, optional: true, required: false
  private _smsIsTwilio?: boolean | cdktf.IResolvable; 
  public get smsIsTwilio() {
    return this.getBooleanAttribute('sms_is_twilio');
  }
  public set smsIsTwilio(value: boolean | cdktf.IResolvable) {
    this._smsIsTwilio = value;
  }
  public resetSmsIsTwilio() {
    this._smsIsTwilio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsIsTwilioInput() {
    return this._smsIsTwilio;
  }

  // sms_message_format - computed: false, optional: true, required: false
  private _smsMessageFormat?: string; 
  public get smsMessageFormat() {
    return this.getStringAttribute('sms_message_format');
  }
  public set smsMessageFormat(value: string) {
    this._smsMessageFormat = value;
  }
  public resetSmsMessageFormat() {
    this._smsMessageFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsMessageFormatInput() {
    return this._smsMessageFormat;
  }

  // sms_number_cancel - computed: true, optional: true, required: false
  private _smsNumberCancel?: string; 
  public get smsNumberCancel() {
    return this.getStringAttribute('sms_number_cancel');
  }
  public set smsNumberCancel(value: string) {
    this._smsNumberCancel = value;
  }
  public resetSmsNumberCancel() {
    this._smsNumberCancel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsNumberCancelInput() {
    return this._smsNumberCancel;
  }

  // sms_number_error - computed: true, optional: true, required: false
  private _smsNumberError?: string; 
  public get smsNumberError() {
    return this.getStringAttribute('sms_number_error');
  }
  public set smsNumberError(value: string) {
    this._smsNumberError = value;
  }
  public resetSmsNumberError() {
    this._smsNumberError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsNumberErrorInput() {
    return this._smsNumberError;
  }

  // sms_number_field_label - computed: true, optional: true, required: false
  private _smsNumberFieldLabel?: string; 
  public get smsNumberFieldLabel() {
    return this.getStringAttribute('sms_number_field_label');
  }
  public set smsNumberFieldLabel(value: string) {
    this._smsNumberFieldLabel = value;
  }
  public resetSmsNumberFieldLabel() {
    this._smsNumberFieldLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsNumberFieldLabelInput() {
    return this._smsNumberFieldLabel;
  }

  // sms_number_format - computed: true, optional: true, required: false
  private _smsNumberFormat?: string; 
  public get smsNumberFormat() {
    return this.getStringAttribute('sms_number_format');
  }
  public set smsNumberFormat(value: string) {
    this._smsNumberFormat = value;
  }
  public resetSmsNumberFormat() {
    this._smsNumberFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsNumberFormatInput() {
    return this._smsNumberFormat;
  }

  // sms_number_message - computed: true, optional: true, required: false
  private _smsNumberMessage?: string; 
  public get smsNumberMessage() {
    return this.getStringAttribute('sms_number_message');
  }
  public set smsNumberMessage(value: string) {
    this._smsNumberMessage = value;
  }
  public resetSmsNumberMessage() {
    this._smsNumberMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsNumberMessageInput() {
    return this._smsNumberMessage;
  }

  // sms_number_submit - computed: true, optional: true, required: false
  private _smsNumberSubmit?: string; 
  public get smsNumberSubmit() {
    return this.getStringAttribute('sms_number_submit');
  }
  public set smsNumberSubmit(value: string) {
    this._smsNumberSubmit = value;
  }
  public resetSmsNumberSubmit() {
    this._smsNumberSubmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsNumberSubmitInput() {
    return this._smsNumberSubmit;
  }

  // sms_number_title - computed: true, optional: true, required: false
  private _smsNumberTitle?: string; 
  public get smsNumberTitle() {
    return this.getStringAttribute('sms_number_title');
  }
  public set smsNumberTitle(value: string) {
    this._smsNumberTitle = value;
  }
  public resetSmsNumberTitle() {
    this._smsNumberTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsNumberTitleInput() {
    return this._smsNumberTitle;
  }

  // sms_username_format - computed: true, optional: true, required: false
  private _smsUsernameFormat?: string; 
  public get smsUsernameFormat() {
    return this.getStringAttribute('sms_username_format');
  }
  public set smsUsernameFormat(value: string) {
    this._smsUsernameFormat = value;
  }
  public resetSmsUsernameFormat() {
    this._smsUsernameFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsUsernameFormatInput() {
    return this._smsUsernameFormat;
  }

  // sms_validity_duration - computed: false, optional: true, required: false
  private _smsValidityDuration?: number; 
  public get smsValidityDuration() {
    return this.getNumberAttribute('sms_validity_duration');
  }
  public set smsValidityDuration(value: number) {
    this._smsValidityDuration = value;
  }
  public resetSmsValidityDuration() {
    this._smsValidityDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsValidityDurationInput() {
    return this._smsValidityDuration;
  }

  // sponsor_back_link - computed: true, optional: true, required: false
  private _sponsorBackLink?: string; 
  public get sponsorBackLink() {
    return this.getStringAttribute('sponsor_back_link');
  }
  public set sponsorBackLink(value: string) {
    this._sponsorBackLink = value;
  }
  public resetSponsorBackLink() {
    this._sponsorBackLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sponsorBackLinkInput() {
    return this._sponsorBackLink;
  }

  // sponsor_cancel - computed: true, optional: true, required: false
  private _sponsorCancel?: string; 
  public get sponsorCancel() {
    return this.getStringAttribute('sponsor_cancel');
  }
  public set sponsorCancel(value: string) {
    this._sponsorCancel = value;
  }
  public resetSponsorCancel() {
    this._sponsorCancel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sponsorCancelInput() {
    return this._sponsorCancel;
  }

  // sponsor_email - computed: true, optional: true, required: false
  private _sponsorEmail?: string; 
  public get sponsorEmail() {
    return this.getStringAttribute('sponsor_email');
  }
  public set sponsorEmail(value: string) {
    this._sponsorEmail = value;
  }
  public resetSponsorEmail() {
    this._sponsorEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sponsorEmailInput() {
    return this._sponsorEmail;
  }

  // sponsor_email_error - computed: true, optional: true, required: false
  private _sponsorEmailError?: string; 
  public get sponsorEmailError() {
    return this.getStringAttribute('sponsor_email_error');
  }
  public set sponsorEmailError(value: string) {
    this._sponsorEmailError = value;
  }
  public resetSponsorEmailError() {
    this._sponsorEmailError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sponsorEmailErrorInput() {
    return this._sponsorEmailError;
  }

  // sponsor_email_template - computed: true, optional: true, required: false
  private _sponsorEmailTemplate?: string; 
  public get sponsorEmailTemplate() {
    return this.getStringAttribute('sponsor_email_template');
  }
  public set sponsorEmailTemplate(value: string) {
    this._sponsorEmailTemplate = value;
  }
  public resetSponsorEmailTemplate() {
    this._sponsorEmailTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sponsorEmailTemplateInput() {
    return this._sponsorEmailTemplate;
  }

  // sponsor_info_approved - computed: true, optional: true, required: false
  private _sponsorInfoApproved?: string; 
  public get sponsorInfoApproved() {
    return this.getStringAttribute('sponsor_info_approved');
  }
  public set sponsorInfoApproved(value: string) {
    this._sponsorInfoApproved = value;
  }
  public resetSponsorInfoApproved() {
    this._sponsorInfoApproved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sponsorInfoApprovedInput() {
    return this._sponsorInfoApproved;
  }

  // sponsor_info_denied - computed: true, optional: true, required: false
  private _sponsorInfoDenied?: string; 
  public get sponsorInfoDenied() {
    return this.getStringAttribute('sponsor_info_denied');
  }
  public set sponsorInfoDenied(value: string) {
    this._sponsorInfoDenied = value;
  }
  public resetSponsorInfoDenied() {
    this._sponsorInfoDenied = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sponsorInfoDeniedInput() {
    return this._sponsorInfoDenied;
  }

  // sponsor_info_pending - computed: true, optional: true, required: false
  private _sponsorInfoPending?: string; 
  public get sponsorInfoPending() {
    return this.getStringAttribute('sponsor_info_pending');
  }
  public set sponsorInfoPending(value: string) {
    this._sponsorInfoPending = value;
  }
  public resetSponsorInfoPending() {
    this._sponsorInfoPending = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sponsorInfoPendingInput() {
    return this._sponsorInfoPending;
  }

  // sponsor_name - computed: true, optional: true, required: false
  private _sponsorName?: string; 
  public get sponsorName() {
    return this.getStringAttribute('sponsor_name');
  }
  public set sponsorName(value: string) {
    this._sponsorName = value;
  }
  public resetSponsorName() {
    this._sponsorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sponsorNameInput() {
    return this._sponsorName;
  }

  // sponsor_name_error - computed: true, optional: true, required: false
  private _sponsorNameError?: string; 
  public get sponsorNameError() {
    return this.getStringAttribute('sponsor_name_error');
  }
  public set sponsorNameError(value: string) {
    this._sponsorNameError = value;
  }
  public resetSponsorNameError() {
    this._sponsorNameError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sponsorNameErrorInput() {
    return this._sponsorNameError;
  }

  // sponsor_note_pending - computed: true, optional: true, required: false
  private _sponsorNotePending?: string; 
  public get sponsorNotePending() {
    return this.getStringAttribute('sponsor_note_pending');
  }
  public set sponsorNotePending(value: string) {
    this._sponsorNotePending = value;
  }
  public resetSponsorNotePending() {
    this._sponsorNotePending = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sponsorNotePendingInput() {
    return this._sponsorNotePending;
  }

  // sponsor_request_access - computed: true, optional: true, required: false
  private _sponsorRequestAccess?: string; 
  public get sponsorRequestAccess() {
    return this.getStringAttribute('sponsor_request_access');
  }
  public set sponsorRequestAccess(value: string) {
    this._sponsorRequestAccess = value;
  }
  public resetSponsorRequestAccess() {
    this._sponsorRequestAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sponsorRequestAccessInput() {
    return this._sponsorRequestAccess;
  }

  // sponsor_status_approved - computed: true, optional: true, required: false
  private _sponsorStatusApproved?: string; 
  public get sponsorStatusApproved() {
    return this.getStringAttribute('sponsor_status_approved');
  }
  public set sponsorStatusApproved(value: string) {
    this._sponsorStatusApproved = value;
  }
  public resetSponsorStatusApproved() {
    this._sponsorStatusApproved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sponsorStatusApprovedInput() {
    return this._sponsorStatusApproved;
  }

  // sponsor_status_denied - computed: true, optional: true, required: false
  private _sponsorStatusDenied?: string; 
  public get sponsorStatusDenied() {
    return this.getStringAttribute('sponsor_status_denied');
  }
  public set sponsorStatusDenied(value: string) {
    this._sponsorStatusDenied = value;
  }
  public resetSponsorStatusDenied() {
    this._sponsorStatusDenied = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sponsorStatusDeniedInput() {
    return this._sponsorStatusDenied;
  }

  // sponsor_status_pending - computed: true, optional: true, required: false
  private _sponsorStatusPending?: string; 
  public get sponsorStatusPending() {
    return this.getStringAttribute('sponsor_status_pending');
  }
  public set sponsorStatusPending(value: string) {
    this._sponsorStatusPending = value;
  }
  public resetSponsorStatusPending() {
    this._sponsorStatusPending = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sponsorStatusPendingInput() {
    return this._sponsorStatusPending;
  }

  // sponsor_submit - computed: true, optional: true, required: false
  private _sponsorSubmit?: string; 
  public get sponsorSubmit() {
    return this.getStringAttribute('sponsor_submit');
  }
  public set sponsorSubmit(value: string) {
    this._sponsorSubmit = value;
  }
  public resetSponsorSubmit() {
    this._sponsorSubmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sponsorSubmitInput() {
    return this._sponsorSubmit;
  }

  // sponsors_error - computed: true, optional: true, required: false
  private _sponsorsError?: string; 
  public get sponsorsError() {
    return this.getStringAttribute('sponsors_error');
  }
  public set sponsorsError(value: string) {
    this._sponsorsError = value;
  }
  public resetSponsorsError() {
    this._sponsorsError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sponsorsErrorInput() {
    return this._sponsorsError;
  }

  // sponsors_field_label - computed: true, optional: true, required: false
  private _sponsorsFieldLabel?: string; 
  public get sponsorsFieldLabel() {
    return this.getStringAttribute('sponsors_field_label');
  }
  public set sponsorsFieldLabel(value: string) {
    this._sponsorsFieldLabel = value;
  }
  public resetSponsorsFieldLabel() {
    this._sponsorsFieldLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sponsorsFieldLabelInput() {
    return this._sponsorsFieldLabel;
  }

  // tos - computed: true, optional: true, required: false
  private _tos?: boolean | cdktf.IResolvable; 
  public get tos() {
    return this.getBooleanAttribute('tos');
  }
  public set tos(value: boolean | cdktf.IResolvable) {
    this._tos = value;
  }
  public resetTos() {
    this._tos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosInput() {
    return this._tos;
  }

  // tos_accept_label - computed: true, optional: true, required: false
  private _tosAcceptLabel?: string; 
  public get tosAcceptLabel() {
    return this.getStringAttribute('tos_accept_label');
  }
  public set tosAcceptLabel(value: string) {
    this._tosAcceptLabel = value;
  }
  public resetTosAcceptLabel() {
    this._tosAcceptLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosAcceptLabelInput() {
    return this._tosAcceptLabel;
  }

  // tos_error - computed: true, optional: true, required: false
  private _tosError?: string; 
  public get tosError() {
    return this.getStringAttribute('tos_error');
  }
  public set tosError(value: string) {
    this._tosError = value;
  }
  public resetTosError() {
    this._tosError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosErrorInput() {
    return this._tosError;
  }

  // tos_link - computed: true, optional: true, required: false
  private _tosLink?: string; 
  public get tosLink() {
    return this.getStringAttribute('tos_link');
  }
  public set tosLink(value: string) {
    this._tosLink = value;
  }
  public resetTosLink() {
    this._tosLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosLinkInput() {
    return this._tosLink;
  }

  // tos_text - computed: true, optional: true, required: false
  private _tosText?: string; 
  public get tosText() {
    return this.getStringAttribute('tos_text');
  }
  public set tosText(value: string) {
    this._tosText = value;
  }
  public resetTosText() {
    this._tosText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosTextInput() {
    return this._tosText;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template mist_org_wlan_portal_template}
*/
export class OrgWlanPortalTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mist_org_wlan_portal_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrgWlanPortalTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrgWlanPortalTemplate to import
  * @param importFromId The id of the existing OrgWlanPortalTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrgWlanPortalTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mist_org_wlan_portal_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_wlan_portal_template mist_org_wlan_portal_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgWlanPortalTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: OrgWlanPortalTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'mist_org_wlan_portal_template',
      terraformGeneratorMetadata: {
        providerName: 'mist',
        providerVersion: '0.6.1',
        providerVersionConstraint: '0.6.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._orgId = config.orgId;
    this._portalTemplate.internalValue = config.portalTemplate;
    this._wlanId = config.wlanId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // portal_template - computed: false, optional: false, required: true
  private _portalTemplate = new OrgWlanPortalTemplatePortalTemplateOutputReference(this, "portal_template");
  public get portalTemplate() {
    return this._portalTemplate;
  }
  public putPortalTemplate(value: OrgWlanPortalTemplatePortalTemplate) {
    this._portalTemplate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portalTemplateInput() {
    return this._portalTemplate.internalValue;
  }

  // wlan_id - computed: false, optional: false, required: true
  private _wlanId?: string; 
  public get wlanId() {
    return this.getStringAttribute('wlan_id');
  }
  public set wlanId(value: string) {
    this._wlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wlanIdInput() {
    return this._wlanId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      org_id: cdktf.stringToTerraform(this._orgId),
      portal_template: orgWlanPortalTemplatePortalTemplateToTerraform(this._portalTemplate.internalValue),
      wlan_id: cdktf.stringToTerraform(this._wlanId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      portal_template: {
        value: orgWlanPortalTemplatePortalTemplateToHclTerraform(this._portalTemplate.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgWlanPortalTemplatePortalTemplate",
      },
      wlan_id: {
        value: cdktf.stringToHclTerraform(this._wlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
