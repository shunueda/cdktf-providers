// https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EndpointResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify the query to filter the access and display of the endpoint to specific users. If you do not define a query, the endpoint is displayed for all users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#access_query EndpointResource#access_query}
  */
  readonly accessQuery?: string;
  /**
  * Account Custom Property label 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#account_custom_property_10_label EndpointResource#account_custom_property_10_label}
  */
  readonly accountCustomProperty10Label?: string;
  /**
  * Account Custom Property label 11.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#account_custom_property_11_label EndpointResource#account_custom_property_11_label}
  */
  readonly accountCustomProperty11Label?: string;
  /**
  * Account Custom Property label 12.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#account_custom_property_12_label EndpointResource#account_custom_property_12_label}
  */
  readonly accountCustomProperty12Label?: string;
  /**
  * Account Custom Property label 13.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#account_custom_property_13_label EndpointResource#account_custom_property_13_label}
  */
  readonly accountCustomProperty13Label?: string;
  /**
  * Account Custom Property label 14.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#account_custom_property_14_label EndpointResource#account_custom_property_14_label}
  */
  readonly accountCustomProperty14Label?: string;
  /**
  * Account Custom Property label 15.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#account_custom_property_15_label EndpointResource#account_custom_property_15_label}
  */
  readonly accountCustomProperty15Label?: string;
  /**
  * Account Custom Property label 16.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#account_custom_property_16_label EndpointResource#account_custom_property_16_label}
  */
  readonly accountCustomProperty16Label?: string;
  /**
  * Account Custom Property label 17.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#account_custom_property_17_label EndpointResource#account_custom_property_17_label}
  */
  readonly accountCustomProperty17Label?: string;
  /**
  * Account Custom Property label 18.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#account_custom_property_18_label EndpointResource#account_custom_property_18_label}
  */
  readonly accountCustomProperty18Label?: string;
  /**
  * Account Custom Property label 19.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#account_custom_property_19_label EndpointResource#account_custom_property_19_label}
  */
  readonly accountCustomProperty19Label?: string;
  /**
  * Account Custom Property label 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#account_custom_property_1_label EndpointResource#account_custom_property_1_label}
  */
  readonly accountCustomProperty1Label?: string;
  /**
  * Account Custom Property label 20.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#account_custom_property_20_label EndpointResource#account_custom_property_20_label}
  */
  readonly accountCustomProperty20Label?: string;
  /**
  * Account Custom Property label 21.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#account_custom_property_21_label EndpointResource#account_custom_property_21_label}
  */
  readonly accountCustomProperty21Label?: string;
  /**
  * Account Custom Property label 22.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#account_custom_property_22_label EndpointResource#account_custom_property_22_label}
  */
  readonly accountCustomProperty22Label?: string;
  /**
  * Account Custom Property label 23.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#account_custom_property_23_label EndpointResource#account_custom_property_23_label}
  */
  readonly accountCustomProperty23Label?: string;
  /**
  * Account Custom Property label 24.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#account_custom_property_24_label EndpointResource#account_custom_property_24_label}
  */
  readonly accountCustomProperty24Label?: string;
  /**
  * Account Custom Property label 25.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#account_custom_property_25_label EndpointResource#account_custom_property_25_label}
  */
  readonly accountCustomProperty25Label?: string;
  /**
  * Account Custom Property label 26.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#account_custom_property_26_label EndpointResource#account_custom_property_26_label}
  */
  readonly accountCustomProperty26Label?: string;
  /**
  * Account Custom Property label 27.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#account_custom_property_27_label EndpointResource#account_custom_property_27_label}
  */
  readonly accountCustomProperty27Label?: string;
  /**
  * Account Custom Property label 28.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#account_custom_property_28_label EndpointResource#account_custom_property_28_label}
  */
  readonly accountCustomProperty28Label?: string;
  /**
  * Account Custom Property label 29.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#account_custom_property_29_label EndpointResource#account_custom_property_29_label}
  */
  readonly accountCustomProperty29Label?: string;
  /**
  * Account Custom Property label 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#account_custom_property_2_label EndpointResource#account_custom_property_2_label}
  */
  readonly accountCustomProperty2Label?: string;
  /**
  * Account Custom Property label 30.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#account_custom_property_30_label EndpointResource#account_custom_property_30_label}
  */
  readonly accountCustomProperty30Label?: string;
  /**
  * Account Custom Property label 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#account_custom_property_3_label EndpointResource#account_custom_property_3_label}
  */
  readonly accountCustomProperty3Label?: string;
  /**
  * Account Custom Property label 4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#account_custom_property_4_label EndpointResource#account_custom_property_4_label}
  */
  readonly accountCustomProperty4Label?: string;
  /**
  * Account Custom Property label 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#account_custom_property_5_label EndpointResource#account_custom_property_5_label}
  */
  readonly accountCustomProperty5Label?: string;
  /**
  * Account Custom Property label 6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#account_custom_property_6_label EndpointResource#account_custom_property_6_label}
  */
  readonly accountCustomProperty6Label?: string;
  /**
  * Account Custom Property label 7.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#account_custom_property_7_label EndpointResource#account_custom_property_7_label}
  */
  readonly accountCustomProperty7Label?: string;
  /**
  * Account Custom Property label 8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#account_custom_property_8_label EndpointResource#account_custom_property_8_label}
  */
  readonly accountCustomProperty8Label?: string;
  /**
  * Account Custom Property label 9.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#account_custom_property_9_label EndpointResource#account_custom_property_9_label}
  */
  readonly accountCustomProperty9Label?: string;
  /**
  * Specify rule to generate an account name for this endpoint while creating a new account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#account_name_rule EndpointResource#account_name_rule}
  */
  readonly accountNameRule?: string;
  /**
  * Specify the regular expression which will be used to validate the account name either generated by the rule or provided manually.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#account_name_validator_regex EndpointResource#account_name_validator_regex}
  */
  readonly accountNameValidatorRegex?: string;
  /**
  * Account type no password change
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#account_type_no_password_change EndpointResource#account_type_no_password_change}
  */
  readonly accountTypeNoPasswordChange?: string;
  /**
  * SQL query to configure the accounts for which you can change passwords.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#allow_change_password_sql_query EndpointResource#allow_change_password_sql_query}
  */
  readonly allowChangePasswordSqlQuery?: string;
  /**
  * Specify true to displays the Remove All Roles option in the Request page that can be used to remove all the roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#allow_remove_all_role_on_request EndpointResource#allow_remove_all_role_on_request}
  */
  readonly allowRemoveAllRoleOnRequest?: boolean | cdktf.IResolvable;
  /**
  * Specify true to prevent users from raising duplicate requests for the same applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#block_inflight_request EndpointResource#block_inflight_request}
  */
  readonly blockInflightRequest?: string;
  /**
  * Specify query to restrict the access for changing the account password of the endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#change_password_access_query EndpointResource#change_password_access_query}
  */
  readonly changePasswordAccessQuery?: string;
  /**
  * Use this configuration for processing the add access tasks and remove access tasks for AD and LDAP Connectors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#connection_config EndpointResource#connection_config}
  */
  readonly connectionConfig?: string;
  /**
  * If this is set to true, remove Access tasks will be created for entitlements (account entitlements and their dependent entitlements) when a user requests for removing an account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#create_ent_task_for_remove_acc EndpointResource#create_ent_task_for_remove_acc}
  */
  readonly createEntTaskForRemoveAcc?: string;
  /**
  * Custom Property 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property1 EndpointResource#custom_property1}
  */
  readonly customProperty1?: string;
  /**
  * Custom Property 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property10 EndpointResource#custom_property10}
  */
  readonly customProperty10?: string;
  /**
  * Custom Property 11.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property11 EndpointResource#custom_property11}
  */
  readonly customProperty11?: string;
  /**
  * Custom Property 12.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property12 EndpointResource#custom_property12}
  */
  readonly customProperty12?: string;
  /**
  * Custom Property 13.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property13 EndpointResource#custom_property13}
  */
  readonly customProperty13?: string;
  /**
  * Custom Property 14.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property14 EndpointResource#custom_property14}
  */
  readonly customProperty14?: string;
  /**
  * Custom Property 15.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property15 EndpointResource#custom_property15}
  */
  readonly customProperty15?: string;
  /**
  * Custom Property 16.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property16 EndpointResource#custom_property16}
  */
  readonly customProperty16?: string;
  /**
  * Custom Property 17.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property17 EndpointResource#custom_property17}
  */
  readonly customProperty17?: string;
  /**
  * Custom Property 18.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property18 EndpointResource#custom_property18}
  */
  readonly customProperty18?: string;
  /**
  * Custom Property 19.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property19 EndpointResource#custom_property19}
  */
  readonly customProperty19?: string;
  /**
  * Custom Property 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property2 EndpointResource#custom_property2}
  */
  readonly customProperty2?: string;
  /**
  * Custom Property 20.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property20 EndpointResource#custom_property20}
  */
  readonly customProperty20?: string;
  /**
  * Custom Property 21.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property21 EndpointResource#custom_property21}
  */
  readonly customProperty21?: string;
  /**
  * Custom Property 22.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property22 EndpointResource#custom_property22}
  */
  readonly customProperty22?: string;
  /**
  * Custom Property 23.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property23 EndpointResource#custom_property23}
  */
  readonly customProperty23?: string;
  /**
  * Custom Property 24.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property24 EndpointResource#custom_property24}
  */
  readonly customProperty24?: string;
  /**
  * Custom Property 25.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property25 EndpointResource#custom_property25}
  */
  readonly customProperty25?: string;
  /**
  * Custom Property 26.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property26 EndpointResource#custom_property26}
  */
  readonly customProperty26?: string;
  /**
  * Custom Property 27.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property27 EndpointResource#custom_property27}
  */
  readonly customProperty27?: string;
  /**
  * Custom Property 28.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property28 EndpointResource#custom_property28}
  */
  readonly customProperty28?: string;
  /**
  * Custom Property 29.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property29 EndpointResource#custom_property29}
  */
  readonly customProperty29?: string;
  /**
  * Custom Property 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property3 EndpointResource#custom_property3}
  */
  readonly customProperty3?: string;
  /**
  * Custom Property 30.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property30 EndpointResource#custom_property30}
  */
  readonly customProperty30?: string;
  /**
  * Custom Property 31.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property31 EndpointResource#custom_property31}
  */
  readonly customProperty31?: string;
  /**
  * Label for the custom property 31 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property31_label EndpointResource#custom_property31_label}
  */
  readonly customProperty31Label?: string;
  /**
  * Custom Property 32.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property32 EndpointResource#custom_property32}
  */
  readonly customProperty32?: string;
  /**
  * Label for the custom property 32 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property32_label EndpointResource#custom_property32_label}
  */
  readonly customProperty32Label?: string;
  /**
  * Custom Property 33.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property33 EndpointResource#custom_property33}
  */
  readonly customProperty33?: string;
  /**
  * Label for the custom property 33 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property33_label EndpointResource#custom_property33_label}
  */
  readonly customProperty33Label?: string;
  /**
  * Custom Property 34.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property34 EndpointResource#custom_property34}
  */
  readonly customProperty34?: string;
  /**
  * Label for the custom property 34 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property34_label EndpointResource#custom_property34_label}
  */
  readonly customProperty34Label?: string;
  /**
  * Custom Property 35.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property35 EndpointResource#custom_property35}
  */
  readonly customProperty35?: string;
  /**
  * Label for the custom property 35 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property35_label EndpointResource#custom_property35_label}
  */
  readonly customProperty35Label?: string;
  /**
  * Custom Property 36.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property36 EndpointResource#custom_property36}
  */
  readonly customProperty36?: string;
  /**
  * Label for the custom property 36 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property36_label EndpointResource#custom_property36_label}
  */
  readonly customProperty36Label?: string;
  /**
  * Custom Property 37.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property37 EndpointResource#custom_property37}
  */
  readonly customProperty37?: string;
  /**
  * Label for the custom property 37 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property37_label EndpointResource#custom_property37_label}
  */
  readonly customProperty37Label?: string;
  /**
  * Custom Property 38.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property38 EndpointResource#custom_property38}
  */
  readonly customProperty38?: string;
  /**
  * Label for the custom property 38 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property38_label EndpointResource#custom_property38_label}
  */
  readonly customProperty38Label?: string;
  /**
  * Custom Property 39.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property39 EndpointResource#custom_property39}
  */
  readonly customProperty39?: string;
  /**
  * Label for the custom property 39 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property39_label EndpointResource#custom_property39_label}
  */
  readonly customProperty39Label?: string;
  /**
  * Custom Property 4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property4 EndpointResource#custom_property4}
  */
  readonly customProperty4?: string;
  /**
  * Custom Property 40.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property40 EndpointResource#custom_property40}
  */
  readonly customProperty40?: string;
  /**
  * Label for the custom property 40 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property40_label EndpointResource#custom_property40_label}
  */
  readonly customProperty40Label?: string;
  /**
  * Custom Property 41.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property41 EndpointResource#custom_property41}
  */
  readonly customProperty41?: string;
  /**
  * Label for the custom property 41 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property41_label EndpointResource#custom_property41_label}
  */
  readonly customProperty41Label?: string;
  /**
  * Custom Property 42.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property42 EndpointResource#custom_property42}
  */
  readonly customProperty42?: string;
  /**
  * Label for the custom property 42 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property42_label EndpointResource#custom_property42_label}
  */
  readonly customProperty42Label?: string;
  /**
  * Custom Property 43.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property43 EndpointResource#custom_property43}
  */
  readonly customProperty43?: string;
  /**
  * Label for the custom property 43 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property43_label EndpointResource#custom_property43_label}
  */
  readonly customProperty43Label?: string;
  /**
  * Custom Property 44.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property44 EndpointResource#custom_property44}
  */
  readonly customProperty44?: string;
  /**
  * Label for the custom property 44 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property44_label EndpointResource#custom_property44_label}
  */
  readonly customProperty44Label?: string;
  /**
  * Custom Property 45.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property45 EndpointResource#custom_property45}
  */
  readonly customProperty45?: string;
  /**
  * Label for the custom property 45 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property45_label EndpointResource#custom_property45_label}
  */
  readonly customProperty45Label?: string;
  /**
  * Label for the custom property 46 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property46_label EndpointResource#custom_property46_label}
  */
  readonly customProperty46Label?: string;
  /**
  * Label for the custom property 47 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property47_label EndpointResource#custom_property47_label}
  */
  readonly customProperty47Label?: string;
  /**
  * Label for the custom property 48 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property48_label EndpointResource#custom_property48_label}
  */
  readonly customProperty48Label?: string;
  /**
  * Label for the custom property 49 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property49_label EndpointResource#custom_property49_label}
  */
  readonly customProperty49Label?: string;
  /**
  * Custom Property 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property5 EndpointResource#custom_property5}
  */
  readonly customProperty5?: string;
  /**
  * Label for the custom property 50 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property50_label EndpointResource#custom_property50_label}
  */
  readonly customProperty50Label?: string;
  /**
  * Label for the custom property 51 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property51_label EndpointResource#custom_property51_label}
  */
  readonly customProperty51Label?: string;
  /**
  * Label for the custom property 52 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property52_label EndpointResource#custom_property52_label}
  */
  readonly customProperty52Label?: string;
  /**
  * Label for the custom property 53 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property53_label EndpointResource#custom_property53_label}
  */
  readonly customProperty53Label?: string;
  /**
  * Label for the custom property 54 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property54_label EndpointResource#custom_property54_label}
  */
  readonly customProperty54Label?: string;
  /**
  * Label for the custom property 55 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property55_label EndpointResource#custom_property55_label}
  */
  readonly customProperty55Label?: string;
  /**
  * Label for the custom property 56 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property56_label EndpointResource#custom_property56_label}
  */
  readonly customProperty56Label?: string;
  /**
  * Label for the custom property 57 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property57_label EndpointResource#custom_property57_label}
  */
  readonly customProperty57Label?: string;
  /**
  * Label for the custom property 58 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property58_label EndpointResource#custom_property58_label}
  */
  readonly customProperty58Label?: string;
  /**
  * Label for the custom property 59 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property59_label EndpointResource#custom_property59_label}
  */
  readonly customProperty59Label?: string;
  /**
  * Custom Property 6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property6 EndpointResource#custom_property6}
  */
  readonly customProperty6?: string;
  /**
  * Label for the custom property 60 of accounts of this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property60_label EndpointResource#custom_property60_label}
  */
  readonly customProperty60Label?: string;
  /**
  * Custom Property 7.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property7 EndpointResource#custom_property7}
  */
  readonly customProperty7?: string;
  /**
  * Custom Property 8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property8 EndpointResource#custom_property8}
  */
  readonly customProperty8?: string;
  /**
  * Custom Property 9.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#custom_property9 EndpointResource#custom_property9}
  */
  readonly customProperty9?: string;
  /**
  * Specify a description for the endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#description EndpointResource#description}
  */
  readonly description?: string;
  /**
  * Specify true to disable users from modifying their application accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#disable_modify_account EndpointResource#disable_modify_account}
  */
  readonly disableModifyAccount?: string;
  /**
  * Specify true to disable users from requesting additional accounts on applications where they already have active accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#disable_new_account_request_if_account_exists EndpointResource#disable_new_account_request_if_account_exists}
  */
  readonly disableNewAccountRequestIfAccountExists?: string;
  /**
  * Specify true to disable users from removing their existing application accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#disable_remove_account EndpointResource#disable_remove_account}
  */
  readonly disableRemoveAccount?: string;
  /**
  * Enter a user-friendly display name for the endpoint that will be displayed in the user interface. Display Name can be different from Endpoint Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#display_name EndpointResource#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#email_templates EndpointResource#email_templates}
  */
  readonly emailTemplates?: EndpointResourceEmailTemplates[] | cdktf.IResolvable;
  /**
  * Specify true to display the Copy Access from User option in the Request pages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#enable_copy_access EndpointResource#enable_copy_access}
  */
  readonly enableCopyAccess?: string;
  /**
  * Option to copy data in Step 3 of the service account request will be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#endpoint_config EndpointResource#endpoint_config}
  */
  readonly endpointConfig?: string;
  /**
  * Specify a name for the endpoint. Provide a logical name that will help you easily identify it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#endpoint_name EndpointResource#endpoint_name}
  */
  readonly endpointName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#mapped_endpoints EndpointResource#mapped_endpoints}
  */
  readonly mappedEndpoints?: EndpointResourceMappedEndpoints[] | cdktf.IResolvable;
  /**
  * Use this parameter to determine if you need to remove the accesses which were granted outside Saviynt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#out_of_band_action EndpointResource#out_of_band_action}
  */
  readonly outOfBandAction?: string;
  /**
  * Specify the owner of the endpoint. If the ownerType is User, then specify the username of the owner, and If it is is Usergroup then specify the name of the user group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#owner EndpointResource#owner}
  */
  readonly owner?: string;
  /**
  * Specify the owner type for the endpoint. An endpoint can be owned by a User or Usergroup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#owner_type EndpointResource#owner_type}
  */
  readonly ownerType?: string;
  /**
  * Specify the parent and child relationship for the Active Directory endpoint. The specified value is used to filter the parent and child objects in the Request Access tile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#parent_account_pattern EndpointResource#parent_account_pattern}
  */
  readonly parentAccountPattern?: string;
  /**
  * The Plugin Configuration drives the functionality of the Saviynt SmartAssist (Browserplugin).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#plugin_configs EndpointResource#plugin_configs}
  */
  readonly pluginConfigs?: string;
  /**
  * Type of primary account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#primary_account_type EndpointResource#primary_account_type}
  */
  readonly primaryAccountType?: string;
  /**
  * Is this endpoint requestable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#requestable EndpointResource#requestable}
  */
  readonly requestable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#requestable_role_types EndpointResource#requestable_role_types}
  */
  readonly requestableRoleTypes?: EndpointResourceRequestableRoleTypes[] | cdktf.IResolvable;
  /**
  * Specify the resource owner of the endpoint. If the resourceOwnerType is User, then specify the username of the owner and If it is Usergroup, specify the name of the user group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#resource_owner EndpointResource#resource_owner}
  */
  readonly resourceOwner?: string;
  /**
  * Specify the resource owner type for the endpoint. An endpoint can be owned by a User or Usergroup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#resource_owner_type EndpointResource#resource_owner_type}
  */
  readonly resourceOwnerType?: string;
  /**
  * Specify the Security system for which you want to create an endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#security_system EndpointResource#security_system}
  */
  readonly securitySystem: string;
  /**
  * Specify the query to filter the access and display of the endpoint for specific users while managing service accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#service_account_access_query EndpointResource#service_account_access_query}
  */
  readonly serviceAccountAccessQuery?: string;
  /**
  * Rule to generate a name for this endpoint while creating a new service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#service_account_name_rule EndpointResource#service_account_name_rule}
  */
  readonly serviceAccountNameRule?: string;
  /**
  * Enable the State and Status options (Enable, Disable, Lock, Unlock) that would be available to request for a user and service accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#status_config EndpointResource#status_config}
  */
  readonly statusConfig?: string;
  /**
  * Specify rule to map users in EIC with the accounts during account import.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#user_account_correlation_rule EndpointResource#user_account_correlation_rule}
  */
  readonly userAccountCorrelationRule?: string;
}
export interface EndpointResourceEmailTemplates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#email_template EndpointResource#email_template}
  */
  readonly emailTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#email_template_type EndpointResource#email_template_type}
  */
  readonly emailTemplateType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#task_type EndpointResource#task_type}
  */
  readonly taskType?: string;
}

export function endpointResourceEmailTemplatesToTerraform(struct?: EndpointResourceEmailTemplates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email_template: cdktf.stringToTerraform(struct!.emailTemplate),
    email_template_type: cdktf.stringToTerraform(struct!.emailTemplateType),
    task_type: cdktf.stringToTerraform(struct!.taskType),
  }
}


export function endpointResourceEmailTemplatesToHclTerraform(struct?: EndpointResourceEmailTemplates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email_template: {
      value: cdktf.stringToHclTerraform(struct!.emailTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_template_type: {
      value: cdktf.stringToHclTerraform(struct!.emailTemplateType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_type: {
      value: cdktf.stringToHclTerraform(struct!.taskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EndpointResourceEmailTemplatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EndpointResourceEmailTemplates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emailTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailTemplate = this._emailTemplate;
    }
    if (this._emailTemplateType !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailTemplateType = this._emailTemplateType;
    }
    if (this._taskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskType = this._taskType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointResourceEmailTemplates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._emailTemplate = undefined;
      this._emailTemplateType = undefined;
      this._taskType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._emailTemplate = value.emailTemplate;
      this._emailTemplateType = value.emailTemplateType;
      this._taskType = value.taskType;
    }
  }

  // email_template - computed: true, optional: true, required: false
  private _emailTemplate?: string; 
  public get emailTemplate() {
    return this.getStringAttribute('email_template');
  }
  public set emailTemplate(value: string) {
    this._emailTemplate = value;
  }
  public resetEmailTemplate() {
    this._emailTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailTemplateInput() {
    return this._emailTemplate;
  }

  // email_template_type - computed: true, optional: true, required: false
  private _emailTemplateType?: string; 
  public get emailTemplateType() {
    return this.getStringAttribute('email_template_type');
  }
  public set emailTemplateType(value: string) {
    this._emailTemplateType = value;
  }
  public resetEmailTemplateType() {
    this._emailTemplateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailTemplateTypeInput() {
    return this._emailTemplateType;
  }

  // task_type - computed: true, optional: true, required: false
  private _taskType?: string; 
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
  public set taskType(value: string) {
    this._taskType = value;
  }
  public resetTaskType() {
    this._taskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypeInput() {
    return this._taskType;
  }
}

export class EndpointResourceEmailTemplatesList extends cdktf.ComplexList {
  public internalValue? : EndpointResourceEmailTemplates[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): EndpointResourceEmailTemplatesOutputReference {
    return new EndpointResourceEmailTemplatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EndpointResourceMappedEndpoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#endpoint EndpointResource#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#operation EndpointResource#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#requestable EndpointResource#requestable}
  */
  readonly requestable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#security_system EndpointResource#security_system}
  */
  readonly securitySystem?: string;
}

export function endpointResourceMappedEndpointsToTerraform(struct?: EndpointResourceMappedEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    operation: cdktf.stringToTerraform(struct!.operation),
    requestable: cdktf.stringToTerraform(struct!.requestable),
    security_system: cdktf.stringToTerraform(struct!.securitySystem),
  }
}


export function endpointResourceMappedEndpointsToHclTerraform(struct?: EndpointResourceMappedEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    requestable: {
      value: cdktf.stringToHclTerraform(struct!.requestable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_system: {
      value: cdktf.stringToHclTerraform(struct!.securitySystem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EndpointResourceMappedEndpointsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EndpointResourceMappedEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._requestable !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestable = this._requestable;
    }
    if (this._securitySystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.securitySystem = this._securitySystem;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointResourceMappedEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoint = undefined;
      this._operation = undefined;
      this._requestable = undefined;
      this._securitySystem = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoint = value.endpoint;
      this._operation = value.operation;
      this._requestable = value.requestable;
      this._securitySystem = value.securitySystem;
    }
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // operation - computed: false, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // requestable - computed: false, optional: true, required: false
  private _requestable?: string; 
  public get requestable() {
    return this.getStringAttribute('requestable');
  }
  public set requestable(value: string) {
    this._requestable = value;
  }
  public resetRequestable() {
    this._requestable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestableInput() {
    return this._requestable;
  }

  // security_system - computed: false, optional: true, required: false
  private _securitySystem?: string; 
  public get securitySystem() {
    return this.getStringAttribute('security_system');
  }
  public set securitySystem(value: string) {
    this._securitySystem = value;
  }
  public resetSecuritySystem() {
    this._securitySystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securitySystemInput() {
    return this._securitySystem;
  }
}

export class EndpointResourceMappedEndpointsList extends cdktf.ComplexList {
  public internalValue? : EndpointResourceMappedEndpoints[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): EndpointResourceMappedEndpointsOutputReference {
    return new EndpointResourceMappedEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EndpointResourceRequestableRoleTypes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#request_option EndpointResource#request_option}
  */
  readonly requestOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#requested_query EndpointResource#requested_query}
  */
  readonly requestedQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#required EndpointResource#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#role_type EndpointResource#role_type}
  */
  readonly roleType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#selected_query EndpointResource#selected_query}
  */
  readonly selectedQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#show_on EndpointResource#show_on}
  */
  readonly showOn?: string;
}

export function endpointResourceRequestableRoleTypesToTerraform(struct?: EndpointResourceRequestableRoleTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_option: cdktf.stringToTerraform(struct!.requestOption),
    requested_query: cdktf.stringToTerraform(struct!.requestedQuery),
    required: cdktf.booleanToTerraform(struct!.required),
    role_type: cdktf.stringToTerraform(struct!.roleType),
    selected_query: cdktf.stringToTerraform(struct!.selectedQuery),
    show_on: cdktf.stringToTerraform(struct!.showOn),
  }
}


export function endpointResourceRequestableRoleTypesToHclTerraform(struct?: EndpointResourceRequestableRoleTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_option: {
      value: cdktf.stringToHclTerraform(struct!.requestOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    requested_query: {
      value: cdktf.stringToHclTerraform(struct!.requestedQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    role_type: {
      value: cdktf.stringToHclTerraform(struct!.roleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selected_query: {
      value: cdktf.stringToHclTerraform(struct!.selectedQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    show_on: {
      value: cdktf.stringToHclTerraform(struct!.showOn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EndpointResourceRequestableRoleTypesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EndpointResourceRequestableRoleTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestOption = this._requestOption;
    }
    if (this._requestedQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestedQuery = this._requestedQuery;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._roleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleType = this._roleType;
    }
    if (this._selectedQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedQuery = this._selectedQuery;
    }
    if (this._showOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.showOn = this._showOn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointResourceRequestableRoleTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._requestOption = undefined;
      this._requestedQuery = undefined;
      this._required = undefined;
      this._roleType = undefined;
      this._selectedQuery = undefined;
      this._showOn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._requestOption = value.requestOption;
      this._requestedQuery = value.requestedQuery;
      this._required = value.required;
      this._roleType = value.roleType;
      this._selectedQuery = value.selectedQuery;
      this._showOn = value.showOn;
    }
  }

  // request_option - computed: true, optional: true, required: false
  private _requestOption?: string; 
  public get requestOption() {
    return this.getStringAttribute('request_option');
  }
  public set requestOption(value: string) {
    this._requestOption = value;
  }
  public resetRequestOption() {
    this._requestOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestOptionInput() {
    return this._requestOption;
  }

  // requested_query - computed: true, optional: true, required: false
  private _requestedQuery?: string; 
  public get requestedQuery() {
    return this.getStringAttribute('requested_query');
  }
  public set requestedQuery(value: string) {
    this._requestedQuery = value;
  }
  public resetRequestedQuery() {
    this._requestedQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestedQueryInput() {
    return this._requestedQuery;
  }

  // required - computed: true, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // role_type - computed: true, optional: true, required: false
  private _roleType?: string; 
  public get roleType() {
    return this.getStringAttribute('role_type');
  }
  public set roleType(value: string) {
    this._roleType = value;
  }
  public resetRoleType() {
    this._roleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleTypeInput() {
    return this._roleType;
  }

  // selected_query - computed: true, optional: true, required: false
  private _selectedQuery?: string; 
  public get selectedQuery() {
    return this.getStringAttribute('selected_query');
  }
  public set selectedQuery(value: string) {
    this._selectedQuery = value;
  }
  public resetSelectedQuery() {
    this._selectedQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedQueryInput() {
    return this._selectedQuery;
  }

  // show_on - computed: true, optional: true, required: false
  private _showOn?: string; 
  public get showOn() {
    return this.getStringAttribute('show_on');
  }
  public set showOn(value: string) {
    this._showOn = value;
  }
  public resetShowOn() {
    this._showOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showOnInput() {
    return this._showOn;
  }
}

export class EndpointResourceRequestableRoleTypesList extends cdktf.ComplexList {
  public internalValue? : EndpointResourceRequestableRoleTypes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): EndpointResourceRequestableRoleTypesOutputReference {
    return new EndpointResourceRequestableRoleTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource saviynt_endpoint_resource}
*/
export class EndpointResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "saviynt_endpoint_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EndpointResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EndpointResource to import
  * @param importFromId The id of the existing EndpointResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EndpointResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "saviynt_endpoint_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/endpoint_resource saviynt_endpoint_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EndpointResourceConfig
  */
  public constructor(scope: Construct, id: string, config: EndpointResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'saviynt_endpoint_resource',
      terraformGeneratorMetadata: {
        providerName: 'saviynt',
        providerVersion: '0.3.2',
        providerVersionConstraint: '0.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessQuery = config.accessQuery;
    this._accountCustomProperty10Label = config.accountCustomProperty10Label;
    this._accountCustomProperty11Label = config.accountCustomProperty11Label;
    this._accountCustomProperty12Label = config.accountCustomProperty12Label;
    this._accountCustomProperty13Label = config.accountCustomProperty13Label;
    this._accountCustomProperty14Label = config.accountCustomProperty14Label;
    this._accountCustomProperty15Label = config.accountCustomProperty15Label;
    this._accountCustomProperty16Label = config.accountCustomProperty16Label;
    this._accountCustomProperty17Label = config.accountCustomProperty17Label;
    this._accountCustomProperty18Label = config.accountCustomProperty18Label;
    this._accountCustomProperty19Label = config.accountCustomProperty19Label;
    this._accountCustomProperty1Label = config.accountCustomProperty1Label;
    this._accountCustomProperty20Label = config.accountCustomProperty20Label;
    this._accountCustomProperty21Label = config.accountCustomProperty21Label;
    this._accountCustomProperty22Label = config.accountCustomProperty22Label;
    this._accountCustomProperty23Label = config.accountCustomProperty23Label;
    this._accountCustomProperty24Label = config.accountCustomProperty24Label;
    this._accountCustomProperty25Label = config.accountCustomProperty25Label;
    this._accountCustomProperty26Label = config.accountCustomProperty26Label;
    this._accountCustomProperty27Label = config.accountCustomProperty27Label;
    this._accountCustomProperty28Label = config.accountCustomProperty28Label;
    this._accountCustomProperty29Label = config.accountCustomProperty29Label;
    this._accountCustomProperty2Label = config.accountCustomProperty2Label;
    this._accountCustomProperty30Label = config.accountCustomProperty30Label;
    this._accountCustomProperty3Label = config.accountCustomProperty3Label;
    this._accountCustomProperty4Label = config.accountCustomProperty4Label;
    this._accountCustomProperty5Label = config.accountCustomProperty5Label;
    this._accountCustomProperty6Label = config.accountCustomProperty6Label;
    this._accountCustomProperty7Label = config.accountCustomProperty7Label;
    this._accountCustomProperty8Label = config.accountCustomProperty8Label;
    this._accountCustomProperty9Label = config.accountCustomProperty9Label;
    this._accountNameRule = config.accountNameRule;
    this._accountNameValidatorRegex = config.accountNameValidatorRegex;
    this._accountTypeNoPasswordChange = config.accountTypeNoPasswordChange;
    this._allowChangePasswordSqlQuery = config.allowChangePasswordSqlQuery;
    this._allowRemoveAllRoleOnRequest = config.allowRemoveAllRoleOnRequest;
    this._blockInflightRequest = config.blockInflightRequest;
    this._changePasswordAccessQuery = config.changePasswordAccessQuery;
    this._connectionConfig = config.connectionConfig;
    this._createEntTaskForRemoveAcc = config.createEntTaskForRemoveAcc;
    this._customProperty1 = config.customProperty1;
    this._customProperty10 = config.customProperty10;
    this._customProperty11 = config.customProperty11;
    this._customProperty12 = config.customProperty12;
    this._customProperty13 = config.customProperty13;
    this._customProperty14 = config.customProperty14;
    this._customProperty15 = config.customProperty15;
    this._customProperty16 = config.customProperty16;
    this._customProperty17 = config.customProperty17;
    this._customProperty18 = config.customProperty18;
    this._customProperty19 = config.customProperty19;
    this._customProperty2 = config.customProperty2;
    this._customProperty20 = config.customProperty20;
    this._customProperty21 = config.customProperty21;
    this._customProperty22 = config.customProperty22;
    this._customProperty23 = config.customProperty23;
    this._customProperty24 = config.customProperty24;
    this._customProperty25 = config.customProperty25;
    this._customProperty26 = config.customProperty26;
    this._customProperty27 = config.customProperty27;
    this._customProperty28 = config.customProperty28;
    this._customProperty29 = config.customProperty29;
    this._customProperty3 = config.customProperty3;
    this._customProperty30 = config.customProperty30;
    this._customProperty31 = config.customProperty31;
    this._customProperty31Label = config.customProperty31Label;
    this._customProperty32 = config.customProperty32;
    this._customProperty32Label = config.customProperty32Label;
    this._customProperty33 = config.customProperty33;
    this._customProperty33Label = config.customProperty33Label;
    this._customProperty34 = config.customProperty34;
    this._customProperty34Label = config.customProperty34Label;
    this._customProperty35 = config.customProperty35;
    this._customProperty35Label = config.customProperty35Label;
    this._customProperty36 = config.customProperty36;
    this._customProperty36Label = config.customProperty36Label;
    this._customProperty37 = config.customProperty37;
    this._customProperty37Label = config.customProperty37Label;
    this._customProperty38 = config.customProperty38;
    this._customProperty38Label = config.customProperty38Label;
    this._customProperty39 = config.customProperty39;
    this._customProperty39Label = config.customProperty39Label;
    this._customProperty4 = config.customProperty4;
    this._customProperty40 = config.customProperty40;
    this._customProperty40Label = config.customProperty40Label;
    this._customProperty41 = config.customProperty41;
    this._customProperty41Label = config.customProperty41Label;
    this._customProperty42 = config.customProperty42;
    this._customProperty42Label = config.customProperty42Label;
    this._customProperty43 = config.customProperty43;
    this._customProperty43Label = config.customProperty43Label;
    this._customProperty44 = config.customProperty44;
    this._customProperty44Label = config.customProperty44Label;
    this._customProperty45 = config.customProperty45;
    this._customProperty45Label = config.customProperty45Label;
    this._customProperty46Label = config.customProperty46Label;
    this._customProperty47Label = config.customProperty47Label;
    this._customProperty48Label = config.customProperty48Label;
    this._customProperty49Label = config.customProperty49Label;
    this._customProperty5 = config.customProperty5;
    this._customProperty50Label = config.customProperty50Label;
    this._customProperty51Label = config.customProperty51Label;
    this._customProperty52Label = config.customProperty52Label;
    this._customProperty53Label = config.customProperty53Label;
    this._customProperty54Label = config.customProperty54Label;
    this._customProperty55Label = config.customProperty55Label;
    this._customProperty56Label = config.customProperty56Label;
    this._customProperty57Label = config.customProperty57Label;
    this._customProperty58Label = config.customProperty58Label;
    this._customProperty59Label = config.customProperty59Label;
    this._customProperty6 = config.customProperty6;
    this._customProperty60Label = config.customProperty60Label;
    this._customProperty7 = config.customProperty7;
    this._customProperty8 = config.customProperty8;
    this._customProperty9 = config.customProperty9;
    this._description = config.description;
    this._disableModifyAccount = config.disableModifyAccount;
    this._disableNewAccountRequestIfAccountExists = config.disableNewAccountRequestIfAccountExists;
    this._disableRemoveAccount = config.disableRemoveAccount;
    this._displayName = config.displayName;
    this._emailTemplates.internalValue = config.emailTemplates;
    this._enableCopyAccess = config.enableCopyAccess;
    this._endpointConfig = config.endpointConfig;
    this._endpointName = config.endpointName;
    this._mappedEndpoints.internalValue = config.mappedEndpoints;
    this._outOfBandAction = config.outOfBandAction;
    this._owner = config.owner;
    this._ownerType = config.ownerType;
    this._parentAccountPattern = config.parentAccountPattern;
    this._pluginConfigs = config.pluginConfigs;
    this._primaryAccountType = config.primaryAccountType;
    this._requestable = config.requestable;
    this._requestableRoleTypes.internalValue = config.requestableRoleTypes;
    this._resourceOwner = config.resourceOwner;
    this._resourceOwnerType = config.resourceOwnerType;
    this._securitySystem = config.securitySystem;
    this._serviceAccountAccessQuery = config.serviceAccountAccessQuery;
    this._serviceAccountNameRule = config.serviceAccountNameRule;
    this._statusConfig = config.statusConfig;
    this._userAccountCorrelationRule = config.userAccountCorrelationRule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_query - computed: true, optional: true, required: false
  private _accessQuery?: string; 
  public get accessQuery() {
    return this.getStringAttribute('access_query');
  }
  public set accessQuery(value: string) {
    this._accessQuery = value;
  }
  public resetAccessQuery() {
    this._accessQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessQueryInput() {
    return this._accessQuery;
  }

  // account_custom_property_10_label - computed: true, optional: true, required: false
  private _accountCustomProperty10Label?: string; 
  public get accountCustomProperty10Label() {
    return this.getStringAttribute('account_custom_property_10_label');
  }
  public set accountCustomProperty10Label(value: string) {
    this._accountCustomProperty10Label = value;
  }
  public resetAccountCustomProperty10Label() {
    this._accountCustomProperty10Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty10LabelInput() {
    return this._accountCustomProperty10Label;
  }

  // account_custom_property_11_label - computed: true, optional: true, required: false
  private _accountCustomProperty11Label?: string; 
  public get accountCustomProperty11Label() {
    return this.getStringAttribute('account_custom_property_11_label');
  }
  public set accountCustomProperty11Label(value: string) {
    this._accountCustomProperty11Label = value;
  }
  public resetAccountCustomProperty11Label() {
    this._accountCustomProperty11Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty11LabelInput() {
    return this._accountCustomProperty11Label;
  }

  // account_custom_property_12_label - computed: true, optional: true, required: false
  private _accountCustomProperty12Label?: string; 
  public get accountCustomProperty12Label() {
    return this.getStringAttribute('account_custom_property_12_label');
  }
  public set accountCustomProperty12Label(value: string) {
    this._accountCustomProperty12Label = value;
  }
  public resetAccountCustomProperty12Label() {
    this._accountCustomProperty12Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty12LabelInput() {
    return this._accountCustomProperty12Label;
  }

  // account_custom_property_13_label - computed: true, optional: true, required: false
  private _accountCustomProperty13Label?: string; 
  public get accountCustomProperty13Label() {
    return this.getStringAttribute('account_custom_property_13_label');
  }
  public set accountCustomProperty13Label(value: string) {
    this._accountCustomProperty13Label = value;
  }
  public resetAccountCustomProperty13Label() {
    this._accountCustomProperty13Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty13LabelInput() {
    return this._accountCustomProperty13Label;
  }

  // account_custom_property_14_label - computed: true, optional: true, required: false
  private _accountCustomProperty14Label?: string; 
  public get accountCustomProperty14Label() {
    return this.getStringAttribute('account_custom_property_14_label');
  }
  public set accountCustomProperty14Label(value: string) {
    this._accountCustomProperty14Label = value;
  }
  public resetAccountCustomProperty14Label() {
    this._accountCustomProperty14Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty14LabelInput() {
    return this._accountCustomProperty14Label;
  }

  // account_custom_property_15_label - computed: true, optional: true, required: false
  private _accountCustomProperty15Label?: string; 
  public get accountCustomProperty15Label() {
    return this.getStringAttribute('account_custom_property_15_label');
  }
  public set accountCustomProperty15Label(value: string) {
    this._accountCustomProperty15Label = value;
  }
  public resetAccountCustomProperty15Label() {
    this._accountCustomProperty15Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty15LabelInput() {
    return this._accountCustomProperty15Label;
  }

  // account_custom_property_16_label - computed: true, optional: true, required: false
  private _accountCustomProperty16Label?: string; 
  public get accountCustomProperty16Label() {
    return this.getStringAttribute('account_custom_property_16_label');
  }
  public set accountCustomProperty16Label(value: string) {
    this._accountCustomProperty16Label = value;
  }
  public resetAccountCustomProperty16Label() {
    this._accountCustomProperty16Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty16LabelInput() {
    return this._accountCustomProperty16Label;
  }

  // account_custom_property_17_label - computed: true, optional: true, required: false
  private _accountCustomProperty17Label?: string; 
  public get accountCustomProperty17Label() {
    return this.getStringAttribute('account_custom_property_17_label');
  }
  public set accountCustomProperty17Label(value: string) {
    this._accountCustomProperty17Label = value;
  }
  public resetAccountCustomProperty17Label() {
    this._accountCustomProperty17Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty17LabelInput() {
    return this._accountCustomProperty17Label;
  }

  // account_custom_property_18_label - computed: true, optional: true, required: false
  private _accountCustomProperty18Label?: string; 
  public get accountCustomProperty18Label() {
    return this.getStringAttribute('account_custom_property_18_label');
  }
  public set accountCustomProperty18Label(value: string) {
    this._accountCustomProperty18Label = value;
  }
  public resetAccountCustomProperty18Label() {
    this._accountCustomProperty18Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty18LabelInput() {
    return this._accountCustomProperty18Label;
  }

  // account_custom_property_19_label - computed: true, optional: true, required: false
  private _accountCustomProperty19Label?: string; 
  public get accountCustomProperty19Label() {
    return this.getStringAttribute('account_custom_property_19_label');
  }
  public set accountCustomProperty19Label(value: string) {
    this._accountCustomProperty19Label = value;
  }
  public resetAccountCustomProperty19Label() {
    this._accountCustomProperty19Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty19LabelInput() {
    return this._accountCustomProperty19Label;
  }

  // account_custom_property_1_label - computed: true, optional: true, required: false
  private _accountCustomProperty1Label?: string; 
  public get accountCustomProperty1Label() {
    return this.getStringAttribute('account_custom_property_1_label');
  }
  public set accountCustomProperty1Label(value: string) {
    this._accountCustomProperty1Label = value;
  }
  public resetAccountCustomProperty1Label() {
    this._accountCustomProperty1Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty1LabelInput() {
    return this._accountCustomProperty1Label;
  }

  // account_custom_property_20_label - computed: true, optional: true, required: false
  private _accountCustomProperty20Label?: string; 
  public get accountCustomProperty20Label() {
    return this.getStringAttribute('account_custom_property_20_label');
  }
  public set accountCustomProperty20Label(value: string) {
    this._accountCustomProperty20Label = value;
  }
  public resetAccountCustomProperty20Label() {
    this._accountCustomProperty20Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty20LabelInput() {
    return this._accountCustomProperty20Label;
  }

  // account_custom_property_21_label - computed: true, optional: true, required: false
  private _accountCustomProperty21Label?: string; 
  public get accountCustomProperty21Label() {
    return this.getStringAttribute('account_custom_property_21_label');
  }
  public set accountCustomProperty21Label(value: string) {
    this._accountCustomProperty21Label = value;
  }
  public resetAccountCustomProperty21Label() {
    this._accountCustomProperty21Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty21LabelInput() {
    return this._accountCustomProperty21Label;
  }

  // account_custom_property_22_label - computed: true, optional: true, required: false
  private _accountCustomProperty22Label?: string; 
  public get accountCustomProperty22Label() {
    return this.getStringAttribute('account_custom_property_22_label');
  }
  public set accountCustomProperty22Label(value: string) {
    this._accountCustomProperty22Label = value;
  }
  public resetAccountCustomProperty22Label() {
    this._accountCustomProperty22Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty22LabelInput() {
    return this._accountCustomProperty22Label;
  }

  // account_custom_property_23_label - computed: true, optional: true, required: false
  private _accountCustomProperty23Label?: string; 
  public get accountCustomProperty23Label() {
    return this.getStringAttribute('account_custom_property_23_label');
  }
  public set accountCustomProperty23Label(value: string) {
    this._accountCustomProperty23Label = value;
  }
  public resetAccountCustomProperty23Label() {
    this._accountCustomProperty23Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty23LabelInput() {
    return this._accountCustomProperty23Label;
  }

  // account_custom_property_24_label - computed: true, optional: true, required: false
  private _accountCustomProperty24Label?: string; 
  public get accountCustomProperty24Label() {
    return this.getStringAttribute('account_custom_property_24_label');
  }
  public set accountCustomProperty24Label(value: string) {
    this._accountCustomProperty24Label = value;
  }
  public resetAccountCustomProperty24Label() {
    this._accountCustomProperty24Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty24LabelInput() {
    return this._accountCustomProperty24Label;
  }

  // account_custom_property_25_label - computed: true, optional: true, required: false
  private _accountCustomProperty25Label?: string; 
  public get accountCustomProperty25Label() {
    return this.getStringAttribute('account_custom_property_25_label');
  }
  public set accountCustomProperty25Label(value: string) {
    this._accountCustomProperty25Label = value;
  }
  public resetAccountCustomProperty25Label() {
    this._accountCustomProperty25Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty25LabelInput() {
    return this._accountCustomProperty25Label;
  }

  // account_custom_property_26_label - computed: true, optional: true, required: false
  private _accountCustomProperty26Label?: string; 
  public get accountCustomProperty26Label() {
    return this.getStringAttribute('account_custom_property_26_label');
  }
  public set accountCustomProperty26Label(value: string) {
    this._accountCustomProperty26Label = value;
  }
  public resetAccountCustomProperty26Label() {
    this._accountCustomProperty26Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty26LabelInput() {
    return this._accountCustomProperty26Label;
  }

  // account_custom_property_27_label - computed: true, optional: true, required: false
  private _accountCustomProperty27Label?: string; 
  public get accountCustomProperty27Label() {
    return this.getStringAttribute('account_custom_property_27_label');
  }
  public set accountCustomProperty27Label(value: string) {
    this._accountCustomProperty27Label = value;
  }
  public resetAccountCustomProperty27Label() {
    this._accountCustomProperty27Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty27LabelInput() {
    return this._accountCustomProperty27Label;
  }

  // account_custom_property_28_label - computed: true, optional: true, required: false
  private _accountCustomProperty28Label?: string; 
  public get accountCustomProperty28Label() {
    return this.getStringAttribute('account_custom_property_28_label');
  }
  public set accountCustomProperty28Label(value: string) {
    this._accountCustomProperty28Label = value;
  }
  public resetAccountCustomProperty28Label() {
    this._accountCustomProperty28Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty28LabelInput() {
    return this._accountCustomProperty28Label;
  }

  // account_custom_property_29_label - computed: true, optional: true, required: false
  private _accountCustomProperty29Label?: string; 
  public get accountCustomProperty29Label() {
    return this.getStringAttribute('account_custom_property_29_label');
  }
  public set accountCustomProperty29Label(value: string) {
    this._accountCustomProperty29Label = value;
  }
  public resetAccountCustomProperty29Label() {
    this._accountCustomProperty29Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty29LabelInput() {
    return this._accountCustomProperty29Label;
  }

  // account_custom_property_2_label - computed: true, optional: true, required: false
  private _accountCustomProperty2Label?: string; 
  public get accountCustomProperty2Label() {
    return this.getStringAttribute('account_custom_property_2_label');
  }
  public set accountCustomProperty2Label(value: string) {
    this._accountCustomProperty2Label = value;
  }
  public resetAccountCustomProperty2Label() {
    this._accountCustomProperty2Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty2LabelInput() {
    return this._accountCustomProperty2Label;
  }

  // account_custom_property_30_label - computed: true, optional: true, required: false
  private _accountCustomProperty30Label?: string; 
  public get accountCustomProperty30Label() {
    return this.getStringAttribute('account_custom_property_30_label');
  }
  public set accountCustomProperty30Label(value: string) {
    this._accountCustomProperty30Label = value;
  }
  public resetAccountCustomProperty30Label() {
    this._accountCustomProperty30Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty30LabelInput() {
    return this._accountCustomProperty30Label;
  }

  // account_custom_property_3_label - computed: true, optional: true, required: false
  private _accountCustomProperty3Label?: string; 
  public get accountCustomProperty3Label() {
    return this.getStringAttribute('account_custom_property_3_label');
  }
  public set accountCustomProperty3Label(value: string) {
    this._accountCustomProperty3Label = value;
  }
  public resetAccountCustomProperty3Label() {
    this._accountCustomProperty3Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty3LabelInput() {
    return this._accountCustomProperty3Label;
  }

  // account_custom_property_4_label - computed: true, optional: true, required: false
  private _accountCustomProperty4Label?: string; 
  public get accountCustomProperty4Label() {
    return this.getStringAttribute('account_custom_property_4_label');
  }
  public set accountCustomProperty4Label(value: string) {
    this._accountCustomProperty4Label = value;
  }
  public resetAccountCustomProperty4Label() {
    this._accountCustomProperty4Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty4LabelInput() {
    return this._accountCustomProperty4Label;
  }

  // account_custom_property_5_label - computed: true, optional: true, required: false
  private _accountCustomProperty5Label?: string; 
  public get accountCustomProperty5Label() {
    return this.getStringAttribute('account_custom_property_5_label');
  }
  public set accountCustomProperty5Label(value: string) {
    this._accountCustomProperty5Label = value;
  }
  public resetAccountCustomProperty5Label() {
    this._accountCustomProperty5Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty5LabelInput() {
    return this._accountCustomProperty5Label;
  }

  // account_custom_property_6_label - computed: true, optional: true, required: false
  private _accountCustomProperty6Label?: string; 
  public get accountCustomProperty6Label() {
    return this.getStringAttribute('account_custom_property_6_label');
  }
  public set accountCustomProperty6Label(value: string) {
    this._accountCustomProperty6Label = value;
  }
  public resetAccountCustomProperty6Label() {
    this._accountCustomProperty6Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty6LabelInput() {
    return this._accountCustomProperty6Label;
  }

  // account_custom_property_7_label - computed: true, optional: true, required: false
  private _accountCustomProperty7Label?: string; 
  public get accountCustomProperty7Label() {
    return this.getStringAttribute('account_custom_property_7_label');
  }
  public set accountCustomProperty7Label(value: string) {
    this._accountCustomProperty7Label = value;
  }
  public resetAccountCustomProperty7Label() {
    this._accountCustomProperty7Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty7LabelInput() {
    return this._accountCustomProperty7Label;
  }

  // account_custom_property_8_label - computed: true, optional: true, required: false
  private _accountCustomProperty8Label?: string; 
  public get accountCustomProperty8Label() {
    return this.getStringAttribute('account_custom_property_8_label');
  }
  public set accountCustomProperty8Label(value: string) {
    this._accountCustomProperty8Label = value;
  }
  public resetAccountCustomProperty8Label() {
    this._accountCustomProperty8Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty8LabelInput() {
    return this._accountCustomProperty8Label;
  }

  // account_custom_property_9_label - computed: true, optional: true, required: false
  private _accountCustomProperty9Label?: string; 
  public get accountCustomProperty9Label() {
    return this.getStringAttribute('account_custom_property_9_label');
  }
  public set accountCustomProperty9Label(value: string) {
    this._accountCustomProperty9Label = value;
  }
  public resetAccountCustomProperty9Label() {
    this._accountCustomProperty9Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCustomProperty9LabelInput() {
    return this._accountCustomProperty9Label;
  }

  // account_name_rule - computed: true, optional: true, required: false
  private _accountNameRule?: string; 
  public get accountNameRule() {
    return this.getStringAttribute('account_name_rule');
  }
  public set accountNameRule(value: string) {
    this._accountNameRule = value;
  }
  public resetAccountNameRule() {
    this._accountNameRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameRuleInput() {
    return this._accountNameRule;
  }

  // account_name_validator_regex - computed: true, optional: true, required: false
  private _accountNameValidatorRegex?: string; 
  public get accountNameValidatorRegex() {
    return this.getStringAttribute('account_name_validator_regex');
  }
  public set accountNameValidatorRegex(value: string) {
    this._accountNameValidatorRegex = value;
  }
  public resetAccountNameValidatorRegex() {
    this._accountNameValidatorRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameValidatorRegexInput() {
    return this._accountNameValidatorRegex;
  }

  // account_type_no_password_change - computed: true, optional: true, required: false
  private _accountTypeNoPasswordChange?: string; 
  public get accountTypeNoPasswordChange() {
    return this.getStringAttribute('account_type_no_password_change');
  }
  public set accountTypeNoPasswordChange(value: string) {
    this._accountTypeNoPasswordChange = value;
  }
  public resetAccountTypeNoPasswordChange() {
    this._accountTypeNoPasswordChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountTypeNoPasswordChangeInput() {
    return this._accountTypeNoPasswordChange;
  }

  // allow_change_password_sql_query - computed: true, optional: true, required: false
  private _allowChangePasswordSqlQuery?: string; 
  public get allowChangePasswordSqlQuery() {
    return this.getStringAttribute('allow_change_password_sql_query');
  }
  public set allowChangePasswordSqlQuery(value: string) {
    this._allowChangePasswordSqlQuery = value;
  }
  public resetAllowChangePasswordSqlQuery() {
    this._allowChangePasswordSqlQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowChangePasswordSqlQueryInput() {
    return this._allowChangePasswordSqlQuery;
  }

  // allow_remove_all_role_on_request - computed: true, optional: true, required: false
  private _allowRemoveAllRoleOnRequest?: boolean | cdktf.IResolvable; 
  public get allowRemoveAllRoleOnRequest() {
    return this.getBooleanAttribute('allow_remove_all_role_on_request');
  }
  public set allowRemoveAllRoleOnRequest(value: boolean | cdktf.IResolvable) {
    this._allowRemoveAllRoleOnRequest = value;
  }
  public resetAllowRemoveAllRoleOnRequest() {
    this._allowRemoveAllRoleOnRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRemoveAllRoleOnRequestInput() {
    return this._allowRemoveAllRoleOnRequest;
  }

  // block_inflight_request - computed: true, optional: true, required: false
  private _blockInflightRequest?: string; 
  public get blockInflightRequest() {
    return this.getStringAttribute('block_inflight_request');
  }
  public set blockInflightRequest(value: string) {
    this._blockInflightRequest = value;
  }
  public resetBlockInflightRequest() {
    this._blockInflightRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInflightRequestInput() {
    return this._blockInflightRequest;
  }

  // change_password_access_query - computed: true, optional: true, required: false
  private _changePasswordAccessQuery?: string; 
  public get changePasswordAccessQuery() {
    return this.getStringAttribute('change_password_access_query');
  }
  public set changePasswordAccessQuery(value: string) {
    this._changePasswordAccessQuery = value;
  }
  public resetChangePasswordAccessQuery() {
    this._changePasswordAccessQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changePasswordAccessQueryInput() {
    return this._changePasswordAccessQuery;
  }

  // connection_config - computed: true, optional: true, required: false
  private _connectionConfig?: string; 
  public get connectionConfig() {
    return this.getStringAttribute('connection_config');
  }
  public set connectionConfig(value: string) {
    this._connectionConfig = value;
  }
  public resetConnectionConfig() {
    this._connectionConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionConfigInput() {
    return this._connectionConfig;
  }

  // create_ent_task_for_remove_acc - computed: true, optional: true, required: false
  private _createEntTaskForRemoveAcc?: string; 
  public get createEntTaskForRemoveAcc() {
    return this.getStringAttribute('create_ent_task_for_remove_acc');
  }
  public set createEntTaskForRemoveAcc(value: string) {
    this._createEntTaskForRemoveAcc = value;
  }
  public resetCreateEntTaskForRemoveAcc() {
    this._createEntTaskForRemoveAcc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createEntTaskForRemoveAccInput() {
    return this._createEntTaskForRemoveAcc;
  }

  // custom_property1 - computed: true, optional: true, required: false
  private _customProperty1?: string; 
  public get customProperty1() {
    return this.getStringAttribute('custom_property1');
  }
  public set customProperty1(value: string) {
    this._customProperty1 = value;
  }
  public resetCustomProperty1() {
    this._customProperty1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty1Input() {
    return this._customProperty1;
  }

  // custom_property10 - computed: true, optional: true, required: false
  private _customProperty10?: string; 
  public get customProperty10() {
    return this.getStringAttribute('custom_property10');
  }
  public set customProperty10(value: string) {
    this._customProperty10 = value;
  }
  public resetCustomProperty10() {
    this._customProperty10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty10Input() {
    return this._customProperty10;
  }

  // custom_property11 - computed: true, optional: true, required: false
  private _customProperty11?: string; 
  public get customProperty11() {
    return this.getStringAttribute('custom_property11');
  }
  public set customProperty11(value: string) {
    this._customProperty11 = value;
  }
  public resetCustomProperty11() {
    this._customProperty11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty11Input() {
    return this._customProperty11;
  }

  // custom_property12 - computed: true, optional: true, required: false
  private _customProperty12?: string; 
  public get customProperty12() {
    return this.getStringAttribute('custom_property12');
  }
  public set customProperty12(value: string) {
    this._customProperty12 = value;
  }
  public resetCustomProperty12() {
    this._customProperty12 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty12Input() {
    return this._customProperty12;
  }

  // custom_property13 - computed: true, optional: true, required: false
  private _customProperty13?: string; 
  public get customProperty13() {
    return this.getStringAttribute('custom_property13');
  }
  public set customProperty13(value: string) {
    this._customProperty13 = value;
  }
  public resetCustomProperty13() {
    this._customProperty13 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty13Input() {
    return this._customProperty13;
  }

  // custom_property14 - computed: true, optional: true, required: false
  private _customProperty14?: string; 
  public get customProperty14() {
    return this.getStringAttribute('custom_property14');
  }
  public set customProperty14(value: string) {
    this._customProperty14 = value;
  }
  public resetCustomProperty14() {
    this._customProperty14 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty14Input() {
    return this._customProperty14;
  }

  // custom_property15 - computed: true, optional: true, required: false
  private _customProperty15?: string; 
  public get customProperty15() {
    return this.getStringAttribute('custom_property15');
  }
  public set customProperty15(value: string) {
    this._customProperty15 = value;
  }
  public resetCustomProperty15() {
    this._customProperty15 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty15Input() {
    return this._customProperty15;
  }

  // custom_property16 - computed: true, optional: true, required: false
  private _customProperty16?: string; 
  public get customProperty16() {
    return this.getStringAttribute('custom_property16');
  }
  public set customProperty16(value: string) {
    this._customProperty16 = value;
  }
  public resetCustomProperty16() {
    this._customProperty16 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty16Input() {
    return this._customProperty16;
  }

  // custom_property17 - computed: true, optional: true, required: false
  private _customProperty17?: string; 
  public get customProperty17() {
    return this.getStringAttribute('custom_property17');
  }
  public set customProperty17(value: string) {
    this._customProperty17 = value;
  }
  public resetCustomProperty17() {
    this._customProperty17 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty17Input() {
    return this._customProperty17;
  }

  // custom_property18 - computed: true, optional: true, required: false
  private _customProperty18?: string; 
  public get customProperty18() {
    return this.getStringAttribute('custom_property18');
  }
  public set customProperty18(value: string) {
    this._customProperty18 = value;
  }
  public resetCustomProperty18() {
    this._customProperty18 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty18Input() {
    return this._customProperty18;
  }

  // custom_property19 - computed: true, optional: true, required: false
  private _customProperty19?: string; 
  public get customProperty19() {
    return this.getStringAttribute('custom_property19');
  }
  public set customProperty19(value: string) {
    this._customProperty19 = value;
  }
  public resetCustomProperty19() {
    this._customProperty19 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty19Input() {
    return this._customProperty19;
  }

  // custom_property2 - computed: true, optional: true, required: false
  private _customProperty2?: string; 
  public get customProperty2() {
    return this.getStringAttribute('custom_property2');
  }
  public set customProperty2(value: string) {
    this._customProperty2 = value;
  }
  public resetCustomProperty2() {
    this._customProperty2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty2Input() {
    return this._customProperty2;
  }

  // custom_property20 - computed: true, optional: true, required: false
  private _customProperty20?: string; 
  public get customProperty20() {
    return this.getStringAttribute('custom_property20');
  }
  public set customProperty20(value: string) {
    this._customProperty20 = value;
  }
  public resetCustomProperty20() {
    this._customProperty20 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty20Input() {
    return this._customProperty20;
  }

  // custom_property21 - computed: true, optional: true, required: false
  private _customProperty21?: string; 
  public get customProperty21() {
    return this.getStringAttribute('custom_property21');
  }
  public set customProperty21(value: string) {
    this._customProperty21 = value;
  }
  public resetCustomProperty21() {
    this._customProperty21 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty21Input() {
    return this._customProperty21;
  }

  // custom_property22 - computed: true, optional: true, required: false
  private _customProperty22?: string; 
  public get customProperty22() {
    return this.getStringAttribute('custom_property22');
  }
  public set customProperty22(value: string) {
    this._customProperty22 = value;
  }
  public resetCustomProperty22() {
    this._customProperty22 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty22Input() {
    return this._customProperty22;
  }

  // custom_property23 - computed: true, optional: true, required: false
  private _customProperty23?: string; 
  public get customProperty23() {
    return this.getStringAttribute('custom_property23');
  }
  public set customProperty23(value: string) {
    this._customProperty23 = value;
  }
  public resetCustomProperty23() {
    this._customProperty23 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty23Input() {
    return this._customProperty23;
  }

  // custom_property24 - computed: true, optional: true, required: false
  private _customProperty24?: string; 
  public get customProperty24() {
    return this.getStringAttribute('custom_property24');
  }
  public set customProperty24(value: string) {
    this._customProperty24 = value;
  }
  public resetCustomProperty24() {
    this._customProperty24 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty24Input() {
    return this._customProperty24;
  }

  // custom_property25 - computed: true, optional: true, required: false
  private _customProperty25?: string; 
  public get customProperty25() {
    return this.getStringAttribute('custom_property25');
  }
  public set customProperty25(value: string) {
    this._customProperty25 = value;
  }
  public resetCustomProperty25() {
    this._customProperty25 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty25Input() {
    return this._customProperty25;
  }

  // custom_property26 - computed: true, optional: true, required: false
  private _customProperty26?: string; 
  public get customProperty26() {
    return this.getStringAttribute('custom_property26');
  }
  public set customProperty26(value: string) {
    this._customProperty26 = value;
  }
  public resetCustomProperty26() {
    this._customProperty26 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty26Input() {
    return this._customProperty26;
  }

  // custom_property27 - computed: true, optional: true, required: false
  private _customProperty27?: string; 
  public get customProperty27() {
    return this.getStringAttribute('custom_property27');
  }
  public set customProperty27(value: string) {
    this._customProperty27 = value;
  }
  public resetCustomProperty27() {
    this._customProperty27 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty27Input() {
    return this._customProperty27;
  }

  // custom_property28 - computed: true, optional: true, required: false
  private _customProperty28?: string; 
  public get customProperty28() {
    return this.getStringAttribute('custom_property28');
  }
  public set customProperty28(value: string) {
    this._customProperty28 = value;
  }
  public resetCustomProperty28() {
    this._customProperty28 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty28Input() {
    return this._customProperty28;
  }

  // custom_property29 - computed: true, optional: true, required: false
  private _customProperty29?: string; 
  public get customProperty29() {
    return this.getStringAttribute('custom_property29');
  }
  public set customProperty29(value: string) {
    this._customProperty29 = value;
  }
  public resetCustomProperty29() {
    this._customProperty29 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty29Input() {
    return this._customProperty29;
  }

  // custom_property3 - computed: true, optional: true, required: false
  private _customProperty3?: string; 
  public get customProperty3() {
    return this.getStringAttribute('custom_property3');
  }
  public set customProperty3(value: string) {
    this._customProperty3 = value;
  }
  public resetCustomProperty3() {
    this._customProperty3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty3Input() {
    return this._customProperty3;
  }

  // custom_property30 - computed: true, optional: true, required: false
  private _customProperty30?: string; 
  public get customProperty30() {
    return this.getStringAttribute('custom_property30');
  }
  public set customProperty30(value: string) {
    this._customProperty30 = value;
  }
  public resetCustomProperty30() {
    this._customProperty30 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty30Input() {
    return this._customProperty30;
  }

  // custom_property31 - computed: true, optional: true, required: false
  private _customProperty31?: string; 
  public get customProperty31() {
    return this.getStringAttribute('custom_property31');
  }
  public set customProperty31(value: string) {
    this._customProperty31 = value;
  }
  public resetCustomProperty31() {
    this._customProperty31 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty31Input() {
    return this._customProperty31;
  }

  // custom_property31_label - computed: true, optional: true, required: false
  private _customProperty31Label?: string; 
  public get customProperty31Label() {
    return this.getStringAttribute('custom_property31_label');
  }
  public set customProperty31Label(value: string) {
    this._customProperty31Label = value;
  }
  public resetCustomProperty31Label() {
    this._customProperty31Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty31LabelInput() {
    return this._customProperty31Label;
  }

  // custom_property32 - computed: true, optional: true, required: false
  private _customProperty32?: string; 
  public get customProperty32() {
    return this.getStringAttribute('custom_property32');
  }
  public set customProperty32(value: string) {
    this._customProperty32 = value;
  }
  public resetCustomProperty32() {
    this._customProperty32 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty32Input() {
    return this._customProperty32;
  }

  // custom_property32_label - computed: true, optional: true, required: false
  private _customProperty32Label?: string; 
  public get customProperty32Label() {
    return this.getStringAttribute('custom_property32_label');
  }
  public set customProperty32Label(value: string) {
    this._customProperty32Label = value;
  }
  public resetCustomProperty32Label() {
    this._customProperty32Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty32LabelInput() {
    return this._customProperty32Label;
  }

  // custom_property33 - computed: true, optional: true, required: false
  private _customProperty33?: string; 
  public get customProperty33() {
    return this.getStringAttribute('custom_property33');
  }
  public set customProperty33(value: string) {
    this._customProperty33 = value;
  }
  public resetCustomProperty33() {
    this._customProperty33 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty33Input() {
    return this._customProperty33;
  }

  // custom_property33_label - computed: true, optional: true, required: false
  private _customProperty33Label?: string; 
  public get customProperty33Label() {
    return this.getStringAttribute('custom_property33_label');
  }
  public set customProperty33Label(value: string) {
    this._customProperty33Label = value;
  }
  public resetCustomProperty33Label() {
    this._customProperty33Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty33LabelInput() {
    return this._customProperty33Label;
  }

  // custom_property34 - computed: true, optional: true, required: false
  private _customProperty34?: string; 
  public get customProperty34() {
    return this.getStringAttribute('custom_property34');
  }
  public set customProperty34(value: string) {
    this._customProperty34 = value;
  }
  public resetCustomProperty34() {
    this._customProperty34 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty34Input() {
    return this._customProperty34;
  }

  // custom_property34_label - computed: true, optional: true, required: false
  private _customProperty34Label?: string; 
  public get customProperty34Label() {
    return this.getStringAttribute('custom_property34_label');
  }
  public set customProperty34Label(value: string) {
    this._customProperty34Label = value;
  }
  public resetCustomProperty34Label() {
    this._customProperty34Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty34LabelInput() {
    return this._customProperty34Label;
  }

  // custom_property35 - computed: true, optional: true, required: false
  private _customProperty35?: string; 
  public get customProperty35() {
    return this.getStringAttribute('custom_property35');
  }
  public set customProperty35(value: string) {
    this._customProperty35 = value;
  }
  public resetCustomProperty35() {
    this._customProperty35 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty35Input() {
    return this._customProperty35;
  }

  // custom_property35_label - computed: true, optional: true, required: false
  private _customProperty35Label?: string; 
  public get customProperty35Label() {
    return this.getStringAttribute('custom_property35_label');
  }
  public set customProperty35Label(value: string) {
    this._customProperty35Label = value;
  }
  public resetCustomProperty35Label() {
    this._customProperty35Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty35LabelInput() {
    return this._customProperty35Label;
  }

  // custom_property36 - computed: true, optional: true, required: false
  private _customProperty36?: string; 
  public get customProperty36() {
    return this.getStringAttribute('custom_property36');
  }
  public set customProperty36(value: string) {
    this._customProperty36 = value;
  }
  public resetCustomProperty36() {
    this._customProperty36 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty36Input() {
    return this._customProperty36;
  }

  // custom_property36_label - computed: true, optional: true, required: false
  private _customProperty36Label?: string; 
  public get customProperty36Label() {
    return this.getStringAttribute('custom_property36_label');
  }
  public set customProperty36Label(value: string) {
    this._customProperty36Label = value;
  }
  public resetCustomProperty36Label() {
    this._customProperty36Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty36LabelInput() {
    return this._customProperty36Label;
  }

  // custom_property37 - computed: true, optional: true, required: false
  private _customProperty37?: string; 
  public get customProperty37() {
    return this.getStringAttribute('custom_property37');
  }
  public set customProperty37(value: string) {
    this._customProperty37 = value;
  }
  public resetCustomProperty37() {
    this._customProperty37 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty37Input() {
    return this._customProperty37;
  }

  // custom_property37_label - computed: true, optional: true, required: false
  private _customProperty37Label?: string; 
  public get customProperty37Label() {
    return this.getStringAttribute('custom_property37_label');
  }
  public set customProperty37Label(value: string) {
    this._customProperty37Label = value;
  }
  public resetCustomProperty37Label() {
    this._customProperty37Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty37LabelInput() {
    return this._customProperty37Label;
  }

  // custom_property38 - computed: true, optional: true, required: false
  private _customProperty38?: string; 
  public get customProperty38() {
    return this.getStringAttribute('custom_property38');
  }
  public set customProperty38(value: string) {
    this._customProperty38 = value;
  }
  public resetCustomProperty38() {
    this._customProperty38 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty38Input() {
    return this._customProperty38;
  }

  // custom_property38_label - computed: true, optional: true, required: false
  private _customProperty38Label?: string; 
  public get customProperty38Label() {
    return this.getStringAttribute('custom_property38_label');
  }
  public set customProperty38Label(value: string) {
    this._customProperty38Label = value;
  }
  public resetCustomProperty38Label() {
    this._customProperty38Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty38LabelInput() {
    return this._customProperty38Label;
  }

  // custom_property39 - computed: true, optional: true, required: false
  private _customProperty39?: string; 
  public get customProperty39() {
    return this.getStringAttribute('custom_property39');
  }
  public set customProperty39(value: string) {
    this._customProperty39 = value;
  }
  public resetCustomProperty39() {
    this._customProperty39 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty39Input() {
    return this._customProperty39;
  }

  // custom_property39_label - computed: true, optional: true, required: false
  private _customProperty39Label?: string; 
  public get customProperty39Label() {
    return this.getStringAttribute('custom_property39_label');
  }
  public set customProperty39Label(value: string) {
    this._customProperty39Label = value;
  }
  public resetCustomProperty39Label() {
    this._customProperty39Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty39LabelInput() {
    return this._customProperty39Label;
  }

  // custom_property4 - computed: true, optional: true, required: false
  private _customProperty4?: string; 
  public get customProperty4() {
    return this.getStringAttribute('custom_property4');
  }
  public set customProperty4(value: string) {
    this._customProperty4 = value;
  }
  public resetCustomProperty4() {
    this._customProperty4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty4Input() {
    return this._customProperty4;
  }

  // custom_property40 - computed: true, optional: true, required: false
  private _customProperty40?: string; 
  public get customProperty40() {
    return this.getStringAttribute('custom_property40');
  }
  public set customProperty40(value: string) {
    this._customProperty40 = value;
  }
  public resetCustomProperty40() {
    this._customProperty40 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty40Input() {
    return this._customProperty40;
  }

  // custom_property40_label - computed: true, optional: true, required: false
  private _customProperty40Label?: string; 
  public get customProperty40Label() {
    return this.getStringAttribute('custom_property40_label');
  }
  public set customProperty40Label(value: string) {
    this._customProperty40Label = value;
  }
  public resetCustomProperty40Label() {
    this._customProperty40Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty40LabelInput() {
    return this._customProperty40Label;
  }

  // custom_property41 - computed: true, optional: true, required: false
  private _customProperty41?: string; 
  public get customProperty41() {
    return this.getStringAttribute('custom_property41');
  }
  public set customProperty41(value: string) {
    this._customProperty41 = value;
  }
  public resetCustomProperty41() {
    this._customProperty41 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty41Input() {
    return this._customProperty41;
  }

  // custom_property41_label - computed: true, optional: true, required: false
  private _customProperty41Label?: string; 
  public get customProperty41Label() {
    return this.getStringAttribute('custom_property41_label');
  }
  public set customProperty41Label(value: string) {
    this._customProperty41Label = value;
  }
  public resetCustomProperty41Label() {
    this._customProperty41Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty41LabelInput() {
    return this._customProperty41Label;
  }

  // custom_property42 - computed: true, optional: true, required: false
  private _customProperty42?: string; 
  public get customProperty42() {
    return this.getStringAttribute('custom_property42');
  }
  public set customProperty42(value: string) {
    this._customProperty42 = value;
  }
  public resetCustomProperty42() {
    this._customProperty42 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty42Input() {
    return this._customProperty42;
  }

  // custom_property42_label - computed: true, optional: true, required: false
  private _customProperty42Label?: string; 
  public get customProperty42Label() {
    return this.getStringAttribute('custom_property42_label');
  }
  public set customProperty42Label(value: string) {
    this._customProperty42Label = value;
  }
  public resetCustomProperty42Label() {
    this._customProperty42Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty42LabelInput() {
    return this._customProperty42Label;
  }

  // custom_property43 - computed: true, optional: true, required: false
  private _customProperty43?: string; 
  public get customProperty43() {
    return this.getStringAttribute('custom_property43');
  }
  public set customProperty43(value: string) {
    this._customProperty43 = value;
  }
  public resetCustomProperty43() {
    this._customProperty43 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty43Input() {
    return this._customProperty43;
  }

  // custom_property43_label - computed: true, optional: true, required: false
  private _customProperty43Label?: string; 
  public get customProperty43Label() {
    return this.getStringAttribute('custom_property43_label');
  }
  public set customProperty43Label(value: string) {
    this._customProperty43Label = value;
  }
  public resetCustomProperty43Label() {
    this._customProperty43Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty43LabelInput() {
    return this._customProperty43Label;
  }

  // custom_property44 - computed: true, optional: true, required: false
  private _customProperty44?: string; 
  public get customProperty44() {
    return this.getStringAttribute('custom_property44');
  }
  public set customProperty44(value: string) {
    this._customProperty44 = value;
  }
  public resetCustomProperty44() {
    this._customProperty44 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty44Input() {
    return this._customProperty44;
  }

  // custom_property44_label - computed: true, optional: true, required: false
  private _customProperty44Label?: string; 
  public get customProperty44Label() {
    return this.getStringAttribute('custom_property44_label');
  }
  public set customProperty44Label(value: string) {
    this._customProperty44Label = value;
  }
  public resetCustomProperty44Label() {
    this._customProperty44Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty44LabelInput() {
    return this._customProperty44Label;
  }

  // custom_property45 - computed: true, optional: true, required: false
  private _customProperty45?: string; 
  public get customProperty45() {
    return this.getStringAttribute('custom_property45');
  }
  public set customProperty45(value: string) {
    this._customProperty45 = value;
  }
  public resetCustomProperty45() {
    this._customProperty45 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty45Input() {
    return this._customProperty45;
  }

  // custom_property45_label - computed: true, optional: true, required: false
  private _customProperty45Label?: string; 
  public get customProperty45Label() {
    return this.getStringAttribute('custom_property45_label');
  }
  public set customProperty45Label(value: string) {
    this._customProperty45Label = value;
  }
  public resetCustomProperty45Label() {
    this._customProperty45Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty45LabelInput() {
    return this._customProperty45Label;
  }

  // custom_property46_label - computed: true, optional: true, required: false
  private _customProperty46Label?: string; 
  public get customProperty46Label() {
    return this.getStringAttribute('custom_property46_label');
  }
  public set customProperty46Label(value: string) {
    this._customProperty46Label = value;
  }
  public resetCustomProperty46Label() {
    this._customProperty46Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty46LabelInput() {
    return this._customProperty46Label;
  }

  // custom_property47_label - computed: true, optional: true, required: false
  private _customProperty47Label?: string; 
  public get customProperty47Label() {
    return this.getStringAttribute('custom_property47_label');
  }
  public set customProperty47Label(value: string) {
    this._customProperty47Label = value;
  }
  public resetCustomProperty47Label() {
    this._customProperty47Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty47LabelInput() {
    return this._customProperty47Label;
  }

  // custom_property48_label - computed: true, optional: true, required: false
  private _customProperty48Label?: string; 
  public get customProperty48Label() {
    return this.getStringAttribute('custom_property48_label');
  }
  public set customProperty48Label(value: string) {
    this._customProperty48Label = value;
  }
  public resetCustomProperty48Label() {
    this._customProperty48Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty48LabelInput() {
    return this._customProperty48Label;
  }

  // custom_property49_label - computed: true, optional: true, required: false
  private _customProperty49Label?: string; 
  public get customProperty49Label() {
    return this.getStringAttribute('custom_property49_label');
  }
  public set customProperty49Label(value: string) {
    this._customProperty49Label = value;
  }
  public resetCustomProperty49Label() {
    this._customProperty49Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty49LabelInput() {
    return this._customProperty49Label;
  }

  // custom_property5 - computed: true, optional: true, required: false
  private _customProperty5?: string; 
  public get customProperty5() {
    return this.getStringAttribute('custom_property5');
  }
  public set customProperty5(value: string) {
    this._customProperty5 = value;
  }
  public resetCustomProperty5() {
    this._customProperty5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty5Input() {
    return this._customProperty5;
  }

  // custom_property50_label - computed: true, optional: true, required: false
  private _customProperty50Label?: string; 
  public get customProperty50Label() {
    return this.getStringAttribute('custom_property50_label');
  }
  public set customProperty50Label(value: string) {
    this._customProperty50Label = value;
  }
  public resetCustomProperty50Label() {
    this._customProperty50Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty50LabelInput() {
    return this._customProperty50Label;
  }

  // custom_property51_label - computed: true, optional: true, required: false
  private _customProperty51Label?: string; 
  public get customProperty51Label() {
    return this.getStringAttribute('custom_property51_label');
  }
  public set customProperty51Label(value: string) {
    this._customProperty51Label = value;
  }
  public resetCustomProperty51Label() {
    this._customProperty51Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty51LabelInput() {
    return this._customProperty51Label;
  }

  // custom_property52_label - computed: true, optional: true, required: false
  private _customProperty52Label?: string; 
  public get customProperty52Label() {
    return this.getStringAttribute('custom_property52_label');
  }
  public set customProperty52Label(value: string) {
    this._customProperty52Label = value;
  }
  public resetCustomProperty52Label() {
    this._customProperty52Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty52LabelInput() {
    return this._customProperty52Label;
  }

  // custom_property53_label - computed: true, optional: true, required: false
  private _customProperty53Label?: string; 
  public get customProperty53Label() {
    return this.getStringAttribute('custom_property53_label');
  }
  public set customProperty53Label(value: string) {
    this._customProperty53Label = value;
  }
  public resetCustomProperty53Label() {
    this._customProperty53Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty53LabelInput() {
    return this._customProperty53Label;
  }

  // custom_property54_label - computed: true, optional: true, required: false
  private _customProperty54Label?: string; 
  public get customProperty54Label() {
    return this.getStringAttribute('custom_property54_label');
  }
  public set customProperty54Label(value: string) {
    this._customProperty54Label = value;
  }
  public resetCustomProperty54Label() {
    this._customProperty54Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty54LabelInput() {
    return this._customProperty54Label;
  }

  // custom_property55_label - computed: true, optional: true, required: false
  private _customProperty55Label?: string; 
  public get customProperty55Label() {
    return this.getStringAttribute('custom_property55_label');
  }
  public set customProperty55Label(value: string) {
    this._customProperty55Label = value;
  }
  public resetCustomProperty55Label() {
    this._customProperty55Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty55LabelInput() {
    return this._customProperty55Label;
  }

  // custom_property56_label - computed: true, optional: true, required: false
  private _customProperty56Label?: string; 
  public get customProperty56Label() {
    return this.getStringAttribute('custom_property56_label');
  }
  public set customProperty56Label(value: string) {
    this._customProperty56Label = value;
  }
  public resetCustomProperty56Label() {
    this._customProperty56Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty56LabelInput() {
    return this._customProperty56Label;
  }

  // custom_property57_label - computed: true, optional: true, required: false
  private _customProperty57Label?: string; 
  public get customProperty57Label() {
    return this.getStringAttribute('custom_property57_label');
  }
  public set customProperty57Label(value: string) {
    this._customProperty57Label = value;
  }
  public resetCustomProperty57Label() {
    this._customProperty57Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty57LabelInput() {
    return this._customProperty57Label;
  }

  // custom_property58_label - computed: true, optional: true, required: false
  private _customProperty58Label?: string; 
  public get customProperty58Label() {
    return this.getStringAttribute('custom_property58_label');
  }
  public set customProperty58Label(value: string) {
    this._customProperty58Label = value;
  }
  public resetCustomProperty58Label() {
    this._customProperty58Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty58LabelInput() {
    return this._customProperty58Label;
  }

  // custom_property59_label - computed: true, optional: true, required: false
  private _customProperty59Label?: string; 
  public get customProperty59Label() {
    return this.getStringAttribute('custom_property59_label');
  }
  public set customProperty59Label(value: string) {
    this._customProperty59Label = value;
  }
  public resetCustomProperty59Label() {
    this._customProperty59Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty59LabelInput() {
    return this._customProperty59Label;
  }

  // custom_property6 - computed: true, optional: true, required: false
  private _customProperty6?: string; 
  public get customProperty6() {
    return this.getStringAttribute('custom_property6');
  }
  public set customProperty6(value: string) {
    this._customProperty6 = value;
  }
  public resetCustomProperty6() {
    this._customProperty6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty6Input() {
    return this._customProperty6;
  }

  // custom_property60_label - computed: true, optional: true, required: false
  private _customProperty60Label?: string; 
  public get customProperty60Label() {
    return this.getStringAttribute('custom_property60_label');
  }
  public set customProperty60Label(value: string) {
    this._customProperty60Label = value;
  }
  public resetCustomProperty60Label() {
    this._customProperty60Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty60LabelInput() {
    return this._customProperty60Label;
  }

  // custom_property7 - computed: true, optional: true, required: false
  private _customProperty7?: string; 
  public get customProperty7() {
    return this.getStringAttribute('custom_property7');
  }
  public set customProperty7(value: string) {
    this._customProperty7 = value;
  }
  public resetCustomProperty7() {
    this._customProperty7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty7Input() {
    return this._customProperty7;
  }

  // custom_property8 - computed: true, optional: true, required: false
  private _customProperty8?: string; 
  public get customProperty8() {
    return this.getStringAttribute('custom_property8');
  }
  public set customProperty8(value: string) {
    this._customProperty8 = value;
  }
  public resetCustomProperty8() {
    this._customProperty8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty8Input() {
    return this._customProperty8;
  }

  // custom_property9 - computed: true, optional: true, required: false
  private _customProperty9?: string; 
  public get customProperty9() {
    return this.getStringAttribute('custom_property9');
  }
  public set customProperty9(value: string) {
    this._customProperty9 = value;
  }
  public resetCustomProperty9() {
    this._customProperty9 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty9Input() {
    return this._customProperty9;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disable_modify_account - computed: true, optional: true, required: false
  private _disableModifyAccount?: string; 
  public get disableModifyAccount() {
    return this.getStringAttribute('disable_modify_account');
  }
  public set disableModifyAccount(value: string) {
    this._disableModifyAccount = value;
  }
  public resetDisableModifyAccount() {
    this._disableModifyAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableModifyAccountInput() {
    return this._disableModifyAccount;
  }

  // disable_new_account_request_if_account_exists - computed: true, optional: true, required: false
  private _disableNewAccountRequestIfAccountExists?: string; 
  public get disableNewAccountRequestIfAccountExists() {
    return this.getStringAttribute('disable_new_account_request_if_account_exists');
  }
  public set disableNewAccountRequestIfAccountExists(value: string) {
    this._disableNewAccountRequestIfAccountExists = value;
  }
  public resetDisableNewAccountRequestIfAccountExists() {
    this._disableNewAccountRequestIfAccountExists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableNewAccountRequestIfAccountExistsInput() {
    return this._disableNewAccountRequestIfAccountExists;
  }

  // disable_remove_account - computed: true, optional: true, required: false
  private _disableRemoveAccount?: string; 
  public get disableRemoveAccount() {
    return this.getStringAttribute('disable_remove_account');
  }
  public set disableRemoveAccount(value: string) {
    this._disableRemoveAccount = value;
  }
  public resetDisableRemoveAccount() {
    this._disableRemoveAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableRemoveAccountInput() {
    return this._disableRemoveAccount;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // email_templates - computed: true, optional: true, required: false
  private _emailTemplates = new EndpointResourceEmailTemplatesList(this, "email_templates", false);
  public get emailTemplates() {
    return this._emailTemplates;
  }
  public putEmailTemplates(value: EndpointResourceEmailTemplates[] | cdktf.IResolvable) {
    this._emailTemplates.internalValue = value;
  }
  public resetEmailTemplates() {
    this._emailTemplates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailTemplatesInput() {
    return this._emailTemplates.internalValue;
  }

  // enable_copy_access - computed: true, optional: true, required: false
  private _enableCopyAccess?: string; 
  public get enableCopyAccess() {
    return this.getStringAttribute('enable_copy_access');
  }
  public set enableCopyAccess(value: string) {
    this._enableCopyAccess = value;
  }
  public resetEnableCopyAccess() {
    this._enableCopyAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCopyAccessInput() {
    return this._enableCopyAccess;
  }

  // endpoint_config - computed: true, optional: true, required: false
  private _endpointConfig?: string; 
  public get endpointConfig() {
    return this.getStringAttribute('endpoint_config');
  }
  public set endpointConfig(value: string) {
    this._endpointConfig = value;
  }
  public resetEndpointConfig() {
    this._endpointConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointConfigInput() {
    return this._endpointConfig;
  }

  // endpoint_name - computed: false, optional: false, required: true
  private _endpointName?: string; 
  public get endpointName() {
    return this.getStringAttribute('endpoint_name');
  }
  public set endpointName(value: string) {
    this._endpointName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointNameInput() {
    return this._endpointName;
  }

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getStringAttribute('error_code');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mapped_endpoints - computed: false, optional: true, required: false
  private _mappedEndpoints = new EndpointResourceMappedEndpointsList(this, "mapped_endpoints", false);
  public get mappedEndpoints() {
    return this._mappedEndpoints;
  }
  public putMappedEndpoints(value: EndpointResourceMappedEndpoints[] | cdktf.IResolvable) {
    this._mappedEndpoints.internalValue = value;
  }
  public resetMappedEndpoints() {
    this._mappedEndpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappedEndpointsInput() {
    return this._mappedEndpoints.internalValue;
  }

  // msg - computed: true, optional: false, required: false
  public get msg() {
    return this.getStringAttribute('msg');
  }

  // out_of_band_action - computed: false, optional: true, required: false
  private _outOfBandAction?: string; 
  public get outOfBandAction() {
    return this.getStringAttribute('out_of_band_action');
  }
  public set outOfBandAction(value: string) {
    this._outOfBandAction = value;
  }
  public resetOutOfBandAction() {
    this._outOfBandAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfBandActionInput() {
    return this._outOfBandAction;
  }

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // owner_type - computed: true, optional: true, required: false
  private _ownerType?: string; 
  public get ownerType() {
    return this.getStringAttribute('owner_type');
  }
  public set ownerType(value: string) {
    this._ownerType = value;
  }
  public resetOwnerType() {
    this._ownerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerTypeInput() {
    return this._ownerType;
  }

  // parent_account_pattern - computed: true, optional: true, required: false
  private _parentAccountPattern?: string; 
  public get parentAccountPattern() {
    return this.getStringAttribute('parent_account_pattern');
  }
  public set parentAccountPattern(value: string) {
    this._parentAccountPattern = value;
  }
  public resetParentAccountPattern() {
    this._parentAccountPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentAccountPatternInput() {
    return this._parentAccountPattern;
  }

  // plugin_configs - computed: true, optional: true, required: false
  private _pluginConfigs?: string; 
  public get pluginConfigs() {
    return this.getStringAttribute('plugin_configs');
  }
  public set pluginConfigs(value: string) {
    this._pluginConfigs = value;
  }
  public resetPluginConfigs() {
    this._pluginConfigs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginConfigsInput() {
    return this._pluginConfigs;
  }

  // primary_account_type - computed: true, optional: true, required: false
  private _primaryAccountType?: string; 
  public get primaryAccountType() {
    return this.getStringAttribute('primary_account_type');
  }
  public set primaryAccountType(value: string) {
    this._primaryAccountType = value;
  }
  public resetPrimaryAccountType() {
    this._primaryAccountType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryAccountTypeInput() {
    return this._primaryAccountType;
  }

  // requestable - computed: true, optional: true, required: false
  private _requestable?: boolean | cdktf.IResolvable; 
  public get requestable() {
    return this.getBooleanAttribute('requestable');
  }
  public set requestable(value: boolean | cdktf.IResolvable) {
    this._requestable = value;
  }
  public resetRequestable() {
    this._requestable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestableInput() {
    return this._requestable;
  }

  // requestable_role_types - computed: true, optional: true, required: false
  private _requestableRoleTypes = new EndpointResourceRequestableRoleTypesList(this, "requestable_role_types", false);
  public get requestableRoleTypes() {
    return this._requestableRoleTypes;
  }
  public putRequestableRoleTypes(value: EndpointResourceRequestableRoleTypes[] | cdktf.IResolvable) {
    this._requestableRoleTypes.internalValue = value;
  }
  public resetRequestableRoleTypes() {
    this._requestableRoleTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestableRoleTypesInput() {
    return this._requestableRoleTypes.internalValue;
  }

  // resource_owner - computed: false, optional: true, required: false
  private _resourceOwner?: string; 
  public get resourceOwner() {
    return this.getStringAttribute('resource_owner');
  }
  public set resourceOwner(value: string) {
    this._resourceOwner = value;
  }
  public resetResourceOwner() {
    this._resourceOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceOwnerInput() {
    return this._resourceOwner;
  }

  // resource_owner_type - computed: true, optional: true, required: false
  private _resourceOwnerType?: string; 
  public get resourceOwnerType() {
    return this.getStringAttribute('resource_owner_type');
  }
  public set resourceOwnerType(value: string) {
    this._resourceOwnerType = value;
  }
  public resetResourceOwnerType() {
    this._resourceOwnerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceOwnerTypeInput() {
    return this._resourceOwnerType;
  }

  // security_system - computed: false, optional: false, required: true
  private _securitySystem?: string; 
  public get securitySystem() {
    return this.getStringAttribute('security_system');
  }
  public set securitySystem(value: string) {
    this._securitySystem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securitySystemInput() {
    return this._securitySystem;
  }

  // service_account_access_query - computed: true, optional: true, required: false
  private _serviceAccountAccessQuery?: string; 
  public get serviceAccountAccessQuery() {
    return this.getStringAttribute('service_account_access_query');
  }
  public set serviceAccountAccessQuery(value: string) {
    this._serviceAccountAccessQuery = value;
  }
  public resetServiceAccountAccessQuery() {
    this._serviceAccountAccessQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountAccessQueryInput() {
    return this._serviceAccountAccessQuery;
  }

  // service_account_name_rule - computed: true, optional: true, required: false
  private _serviceAccountNameRule?: string; 
  public get serviceAccountNameRule() {
    return this.getStringAttribute('service_account_name_rule');
  }
  public set serviceAccountNameRule(value: string) {
    this._serviceAccountNameRule = value;
  }
  public resetServiceAccountNameRule() {
    this._serviceAccountNameRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountNameRuleInput() {
    return this._serviceAccountNameRule;
  }

  // status_config - computed: true, optional: true, required: false
  private _statusConfig?: string; 
  public get statusConfig() {
    return this.getStringAttribute('status_config');
  }
  public set statusConfig(value: string) {
    this._statusConfig = value;
  }
  public resetStatusConfig() {
    this._statusConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusConfigInput() {
    return this._statusConfig;
  }

  // user_account_correlation_rule - computed: true, optional: true, required: false
  private _userAccountCorrelationRule?: string; 
  public get userAccountCorrelationRule() {
    return this.getStringAttribute('user_account_correlation_rule');
  }
  public set userAccountCorrelationRule(value: string) {
    this._userAccountCorrelationRule = value;
  }
  public resetUserAccountCorrelationRule() {
    this._userAccountCorrelationRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAccountCorrelationRuleInput() {
    return this._userAccountCorrelationRule;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_query: cdktf.stringToTerraform(this._accessQuery),
      account_custom_property_10_label: cdktf.stringToTerraform(this._accountCustomProperty10Label),
      account_custom_property_11_label: cdktf.stringToTerraform(this._accountCustomProperty11Label),
      account_custom_property_12_label: cdktf.stringToTerraform(this._accountCustomProperty12Label),
      account_custom_property_13_label: cdktf.stringToTerraform(this._accountCustomProperty13Label),
      account_custom_property_14_label: cdktf.stringToTerraform(this._accountCustomProperty14Label),
      account_custom_property_15_label: cdktf.stringToTerraform(this._accountCustomProperty15Label),
      account_custom_property_16_label: cdktf.stringToTerraform(this._accountCustomProperty16Label),
      account_custom_property_17_label: cdktf.stringToTerraform(this._accountCustomProperty17Label),
      account_custom_property_18_label: cdktf.stringToTerraform(this._accountCustomProperty18Label),
      account_custom_property_19_label: cdktf.stringToTerraform(this._accountCustomProperty19Label),
      account_custom_property_1_label: cdktf.stringToTerraform(this._accountCustomProperty1Label),
      account_custom_property_20_label: cdktf.stringToTerraform(this._accountCustomProperty20Label),
      account_custom_property_21_label: cdktf.stringToTerraform(this._accountCustomProperty21Label),
      account_custom_property_22_label: cdktf.stringToTerraform(this._accountCustomProperty22Label),
      account_custom_property_23_label: cdktf.stringToTerraform(this._accountCustomProperty23Label),
      account_custom_property_24_label: cdktf.stringToTerraform(this._accountCustomProperty24Label),
      account_custom_property_25_label: cdktf.stringToTerraform(this._accountCustomProperty25Label),
      account_custom_property_26_label: cdktf.stringToTerraform(this._accountCustomProperty26Label),
      account_custom_property_27_label: cdktf.stringToTerraform(this._accountCustomProperty27Label),
      account_custom_property_28_label: cdktf.stringToTerraform(this._accountCustomProperty28Label),
      account_custom_property_29_label: cdktf.stringToTerraform(this._accountCustomProperty29Label),
      account_custom_property_2_label: cdktf.stringToTerraform(this._accountCustomProperty2Label),
      account_custom_property_30_label: cdktf.stringToTerraform(this._accountCustomProperty30Label),
      account_custom_property_3_label: cdktf.stringToTerraform(this._accountCustomProperty3Label),
      account_custom_property_4_label: cdktf.stringToTerraform(this._accountCustomProperty4Label),
      account_custom_property_5_label: cdktf.stringToTerraform(this._accountCustomProperty5Label),
      account_custom_property_6_label: cdktf.stringToTerraform(this._accountCustomProperty6Label),
      account_custom_property_7_label: cdktf.stringToTerraform(this._accountCustomProperty7Label),
      account_custom_property_8_label: cdktf.stringToTerraform(this._accountCustomProperty8Label),
      account_custom_property_9_label: cdktf.stringToTerraform(this._accountCustomProperty9Label),
      account_name_rule: cdktf.stringToTerraform(this._accountNameRule),
      account_name_validator_regex: cdktf.stringToTerraform(this._accountNameValidatorRegex),
      account_type_no_password_change: cdktf.stringToTerraform(this._accountTypeNoPasswordChange),
      allow_change_password_sql_query: cdktf.stringToTerraform(this._allowChangePasswordSqlQuery),
      allow_remove_all_role_on_request: cdktf.booleanToTerraform(this._allowRemoveAllRoleOnRequest),
      block_inflight_request: cdktf.stringToTerraform(this._blockInflightRequest),
      change_password_access_query: cdktf.stringToTerraform(this._changePasswordAccessQuery),
      connection_config: cdktf.stringToTerraform(this._connectionConfig),
      create_ent_task_for_remove_acc: cdktf.stringToTerraform(this._createEntTaskForRemoveAcc),
      custom_property1: cdktf.stringToTerraform(this._customProperty1),
      custom_property10: cdktf.stringToTerraform(this._customProperty10),
      custom_property11: cdktf.stringToTerraform(this._customProperty11),
      custom_property12: cdktf.stringToTerraform(this._customProperty12),
      custom_property13: cdktf.stringToTerraform(this._customProperty13),
      custom_property14: cdktf.stringToTerraform(this._customProperty14),
      custom_property15: cdktf.stringToTerraform(this._customProperty15),
      custom_property16: cdktf.stringToTerraform(this._customProperty16),
      custom_property17: cdktf.stringToTerraform(this._customProperty17),
      custom_property18: cdktf.stringToTerraform(this._customProperty18),
      custom_property19: cdktf.stringToTerraform(this._customProperty19),
      custom_property2: cdktf.stringToTerraform(this._customProperty2),
      custom_property20: cdktf.stringToTerraform(this._customProperty20),
      custom_property21: cdktf.stringToTerraform(this._customProperty21),
      custom_property22: cdktf.stringToTerraform(this._customProperty22),
      custom_property23: cdktf.stringToTerraform(this._customProperty23),
      custom_property24: cdktf.stringToTerraform(this._customProperty24),
      custom_property25: cdktf.stringToTerraform(this._customProperty25),
      custom_property26: cdktf.stringToTerraform(this._customProperty26),
      custom_property27: cdktf.stringToTerraform(this._customProperty27),
      custom_property28: cdktf.stringToTerraform(this._customProperty28),
      custom_property29: cdktf.stringToTerraform(this._customProperty29),
      custom_property3: cdktf.stringToTerraform(this._customProperty3),
      custom_property30: cdktf.stringToTerraform(this._customProperty30),
      custom_property31: cdktf.stringToTerraform(this._customProperty31),
      custom_property31_label: cdktf.stringToTerraform(this._customProperty31Label),
      custom_property32: cdktf.stringToTerraform(this._customProperty32),
      custom_property32_label: cdktf.stringToTerraform(this._customProperty32Label),
      custom_property33: cdktf.stringToTerraform(this._customProperty33),
      custom_property33_label: cdktf.stringToTerraform(this._customProperty33Label),
      custom_property34: cdktf.stringToTerraform(this._customProperty34),
      custom_property34_label: cdktf.stringToTerraform(this._customProperty34Label),
      custom_property35: cdktf.stringToTerraform(this._customProperty35),
      custom_property35_label: cdktf.stringToTerraform(this._customProperty35Label),
      custom_property36: cdktf.stringToTerraform(this._customProperty36),
      custom_property36_label: cdktf.stringToTerraform(this._customProperty36Label),
      custom_property37: cdktf.stringToTerraform(this._customProperty37),
      custom_property37_label: cdktf.stringToTerraform(this._customProperty37Label),
      custom_property38: cdktf.stringToTerraform(this._customProperty38),
      custom_property38_label: cdktf.stringToTerraform(this._customProperty38Label),
      custom_property39: cdktf.stringToTerraform(this._customProperty39),
      custom_property39_label: cdktf.stringToTerraform(this._customProperty39Label),
      custom_property4: cdktf.stringToTerraform(this._customProperty4),
      custom_property40: cdktf.stringToTerraform(this._customProperty40),
      custom_property40_label: cdktf.stringToTerraform(this._customProperty40Label),
      custom_property41: cdktf.stringToTerraform(this._customProperty41),
      custom_property41_label: cdktf.stringToTerraform(this._customProperty41Label),
      custom_property42: cdktf.stringToTerraform(this._customProperty42),
      custom_property42_label: cdktf.stringToTerraform(this._customProperty42Label),
      custom_property43: cdktf.stringToTerraform(this._customProperty43),
      custom_property43_label: cdktf.stringToTerraform(this._customProperty43Label),
      custom_property44: cdktf.stringToTerraform(this._customProperty44),
      custom_property44_label: cdktf.stringToTerraform(this._customProperty44Label),
      custom_property45: cdktf.stringToTerraform(this._customProperty45),
      custom_property45_label: cdktf.stringToTerraform(this._customProperty45Label),
      custom_property46_label: cdktf.stringToTerraform(this._customProperty46Label),
      custom_property47_label: cdktf.stringToTerraform(this._customProperty47Label),
      custom_property48_label: cdktf.stringToTerraform(this._customProperty48Label),
      custom_property49_label: cdktf.stringToTerraform(this._customProperty49Label),
      custom_property5: cdktf.stringToTerraform(this._customProperty5),
      custom_property50_label: cdktf.stringToTerraform(this._customProperty50Label),
      custom_property51_label: cdktf.stringToTerraform(this._customProperty51Label),
      custom_property52_label: cdktf.stringToTerraform(this._customProperty52Label),
      custom_property53_label: cdktf.stringToTerraform(this._customProperty53Label),
      custom_property54_label: cdktf.stringToTerraform(this._customProperty54Label),
      custom_property55_label: cdktf.stringToTerraform(this._customProperty55Label),
      custom_property56_label: cdktf.stringToTerraform(this._customProperty56Label),
      custom_property57_label: cdktf.stringToTerraform(this._customProperty57Label),
      custom_property58_label: cdktf.stringToTerraform(this._customProperty58Label),
      custom_property59_label: cdktf.stringToTerraform(this._customProperty59Label),
      custom_property6: cdktf.stringToTerraform(this._customProperty6),
      custom_property60_label: cdktf.stringToTerraform(this._customProperty60Label),
      custom_property7: cdktf.stringToTerraform(this._customProperty7),
      custom_property8: cdktf.stringToTerraform(this._customProperty8),
      custom_property9: cdktf.stringToTerraform(this._customProperty9),
      description: cdktf.stringToTerraform(this._description),
      disable_modify_account: cdktf.stringToTerraform(this._disableModifyAccount),
      disable_new_account_request_if_account_exists: cdktf.stringToTerraform(this._disableNewAccountRequestIfAccountExists),
      disable_remove_account: cdktf.stringToTerraform(this._disableRemoveAccount),
      display_name: cdktf.stringToTerraform(this._displayName),
      email_templates: cdktf.listMapper(endpointResourceEmailTemplatesToTerraform, false)(this._emailTemplates.internalValue),
      enable_copy_access: cdktf.stringToTerraform(this._enableCopyAccess),
      endpoint_config: cdktf.stringToTerraform(this._endpointConfig),
      endpoint_name: cdktf.stringToTerraform(this._endpointName),
      mapped_endpoints: cdktf.listMapper(endpointResourceMappedEndpointsToTerraform, false)(this._mappedEndpoints.internalValue),
      out_of_band_action: cdktf.stringToTerraform(this._outOfBandAction),
      owner: cdktf.stringToTerraform(this._owner),
      owner_type: cdktf.stringToTerraform(this._ownerType),
      parent_account_pattern: cdktf.stringToTerraform(this._parentAccountPattern),
      plugin_configs: cdktf.stringToTerraform(this._pluginConfigs),
      primary_account_type: cdktf.stringToTerraform(this._primaryAccountType),
      requestable: cdktf.booleanToTerraform(this._requestable),
      requestable_role_types: cdktf.listMapper(endpointResourceRequestableRoleTypesToTerraform, false)(this._requestableRoleTypes.internalValue),
      resource_owner: cdktf.stringToTerraform(this._resourceOwner),
      resource_owner_type: cdktf.stringToTerraform(this._resourceOwnerType),
      security_system: cdktf.stringToTerraform(this._securitySystem),
      service_account_access_query: cdktf.stringToTerraform(this._serviceAccountAccessQuery),
      service_account_name_rule: cdktf.stringToTerraform(this._serviceAccountNameRule),
      status_config: cdktf.stringToTerraform(this._statusConfig),
      user_account_correlation_rule: cdktf.stringToTerraform(this._userAccountCorrelationRule),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_query: {
        value: cdktf.stringToHclTerraform(this._accessQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_custom_property_10_label: {
        value: cdktf.stringToHclTerraform(this._accountCustomProperty10Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_custom_property_11_label: {
        value: cdktf.stringToHclTerraform(this._accountCustomProperty11Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_custom_property_12_label: {
        value: cdktf.stringToHclTerraform(this._accountCustomProperty12Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_custom_property_13_label: {
        value: cdktf.stringToHclTerraform(this._accountCustomProperty13Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_custom_property_14_label: {
        value: cdktf.stringToHclTerraform(this._accountCustomProperty14Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_custom_property_15_label: {
        value: cdktf.stringToHclTerraform(this._accountCustomProperty15Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_custom_property_16_label: {
        value: cdktf.stringToHclTerraform(this._accountCustomProperty16Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_custom_property_17_label: {
        value: cdktf.stringToHclTerraform(this._accountCustomProperty17Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_custom_property_18_label: {
        value: cdktf.stringToHclTerraform(this._accountCustomProperty18Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_custom_property_19_label: {
        value: cdktf.stringToHclTerraform(this._accountCustomProperty19Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_custom_property_1_label: {
        value: cdktf.stringToHclTerraform(this._accountCustomProperty1Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_custom_property_20_label: {
        value: cdktf.stringToHclTerraform(this._accountCustomProperty20Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_custom_property_21_label: {
        value: cdktf.stringToHclTerraform(this._accountCustomProperty21Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_custom_property_22_label: {
        value: cdktf.stringToHclTerraform(this._accountCustomProperty22Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_custom_property_23_label: {
        value: cdktf.stringToHclTerraform(this._accountCustomProperty23Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_custom_property_24_label: {
        value: cdktf.stringToHclTerraform(this._accountCustomProperty24Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_custom_property_25_label: {
        value: cdktf.stringToHclTerraform(this._accountCustomProperty25Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_custom_property_26_label: {
        value: cdktf.stringToHclTerraform(this._accountCustomProperty26Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_custom_property_27_label: {
        value: cdktf.stringToHclTerraform(this._accountCustomProperty27Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_custom_property_28_label: {
        value: cdktf.stringToHclTerraform(this._accountCustomProperty28Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_custom_property_29_label: {
        value: cdktf.stringToHclTerraform(this._accountCustomProperty29Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_custom_property_2_label: {
        value: cdktf.stringToHclTerraform(this._accountCustomProperty2Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_custom_property_30_label: {
        value: cdktf.stringToHclTerraform(this._accountCustomProperty30Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_custom_property_3_label: {
        value: cdktf.stringToHclTerraform(this._accountCustomProperty3Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_custom_property_4_label: {
        value: cdktf.stringToHclTerraform(this._accountCustomProperty4Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_custom_property_5_label: {
        value: cdktf.stringToHclTerraform(this._accountCustomProperty5Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_custom_property_6_label: {
        value: cdktf.stringToHclTerraform(this._accountCustomProperty6Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_custom_property_7_label: {
        value: cdktf.stringToHclTerraform(this._accountCustomProperty7Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_custom_property_8_label: {
        value: cdktf.stringToHclTerraform(this._accountCustomProperty8Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_custom_property_9_label: {
        value: cdktf.stringToHclTerraform(this._accountCustomProperty9Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_name_rule: {
        value: cdktf.stringToHclTerraform(this._accountNameRule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_name_validator_regex: {
        value: cdktf.stringToHclTerraform(this._accountNameValidatorRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_type_no_password_change: {
        value: cdktf.stringToHclTerraform(this._accountTypeNoPasswordChange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_change_password_sql_query: {
        value: cdktf.stringToHclTerraform(this._allowChangePasswordSqlQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_remove_all_role_on_request: {
        value: cdktf.booleanToHclTerraform(this._allowRemoveAllRoleOnRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      block_inflight_request: {
        value: cdktf.stringToHclTerraform(this._blockInflightRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      change_password_access_query: {
        value: cdktf.stringToHclTerraform(this._changePasswordAccessQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_config: {
        value: cdktf.stringToHclTerraform(this._connectionConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_ent_task_for_remove_acc: {
        value: cdktf.stringToHclTerraform(this._createEntTaskForRemoveAcc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property1: {
        value: cdktf.stringToHclTerraform(this._customProperty1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property10: {
        value: cdktf.stringToHclTerraform(this._customProperty10),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property11: {
        value: cdktf.stringToHclTerraform(this._customProperty11),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property12: {
        value: cdktf.stringToHclTerraform(this._customProperty12),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property13: {
        value: cdktf.stringToHclTerraform(this._customProperty13),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property14: {
        value: cdktf.stringToHclTerraform(this._customProperty14),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property15: {
        value: cdktf.stringToHclTerraform(this._customProperty15),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property16: {
        value: cdktf.stringToHclTerraform(this._customProperty16),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property17: {
        value: cdktf.stringToHclTerraform(this._customProperty17),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property18: {
        value: cdktf.stringToHclTerraform(this._customProperty18),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property19: {
        value: cdktf.stringToHclTerraform(this._customProperty19),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property2: {
        value: cdktf.stringToHclTerraform(this._customProperty2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property20: {
        value: cdktf.stringToHclTerraform(this._customProperty20),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property21: {
        value: cdktf.stringToHclTerraform(this._customProperty21),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property22: {
        value: cdktf.stringToHclTerraform(this._customProperty22),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property23: {
        value: cdktf.stringToHclTerraform(this._customProperty23),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property24: {
        value: cdktf.stringToHclTerraform(this._customProperty24),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property25: {
        value: cdktf.stringToHclTerraform(this._customProperty25),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property26: {
        value: cdktf.stringToHclTerraform(this._customProperty26),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property27: {
        value: cdktf.stringToHclTerraform(this._customProperty27),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property28: {
        value: cdktf.stringToHclTerraform(this._customProperty28),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property29: {
        value: cdktf.stringToHclTerraform(this._customProperty29),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property3: {
        value: cdktf.stringToHclTerraform(this._customProperty3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property30: {
        value: cdktf.stringToHclTerraform(this._customProperty30),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property31: {
        value: cdktf.stringToHclTerraform(this._customProperty31),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property31_label: {
        value: cdktf.stringToHclTerraform(this._customProperty31Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property32: {
        value: cdktf.stringToHclTerraform(this._customProperty32),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property32_label: {
        value: cdktf.stringToHclTerraform(this._customProperty32Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property33: {
        value: cdktf.stringToHclTerraform(this._customProperty33),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property33_label: {
        value: cdktf.stringToHclTerraform(this._customProperty33Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property34: {
        value: cdktf.stringToHclTerraform(this._customProperty34),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property34_label: {
        value: cdktf.stringToHclTerraform(this._customProperty34Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property35: {
        value: cdktf.stringToHclTerraform(this._customProperty35),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property35_label: {
        value: cdktf.stringToHclTerraform(this._customProperty35Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property36: {
        value: cdktf.stringToHclTerraform(this._customProperty36),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property36_label: {
        value: cdktf.stringToHclTerraform(this._customProperty36Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property37: {
        value: cdktf.stringToHclTerraform(this._customProperty37),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property37_label: {
        value: cdktf.stringToHclTerraform(this._customProperty37Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property38: {
        value: cdktf.stringToHclTerraform(this._customProperty38),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property38_label: {
        value: cdktf.stringToHclTerraform(this._customProperty38Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property39: {
        value: cdktf.stringToHclTerraform(this._customProperty39),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property39_label: {
        value: cdktf.stringToHclTerraform(this._customProperty39Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property4: {
        value: cdktf.stringToHclTerraform(this._customProperty4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property40: {
        value: cdktf.stringToHclTerraform(this._customProperty40),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property40_label: {
        value: cdktf.stringToHclTerraform(this._customProperty40Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property41: {
        value: cdktf.stringToHclTerraform(this._customProperty41),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property41_label: {
        value: cdktf.stringToHclTerraform(this._customProperty41Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property42: {
        value: cdktf.stringToHclTerraform(this._customProperty42),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property42_label: {
        value: cdktf.stringToHclTerraform(this._customProperty42Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property43: {
        value: cdktf.stringToHclTerraform(this._customProperty43),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property43_label: {
        value: cdktf.stringToHclTerraform(this._customProperty43Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property44: {
        value: cdktf.stringToHclTerraform(this._customProperty44),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property44_label: {
        value: cdktf.stringToHclTerraform(this._customProperty44Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property45: {
        value: cdktf.stringToHclTerraform(this._customProperty45),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property45_label: {
        value: cdktf.stringToHclTerraform(this._customProperty45Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property46_label: {
        value: cdktf.stringToHclTerraform(this._customProperty46Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property47_label: {
        value: cdktf.stringToHclTerraform(this._customProperty47Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property48_label: {
        value: cdktf.stringToHclTerraform(this._customProperty48Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property49_label: {
        value: cdktf.stringToHclTerraform(this._customProperty49Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property5: {
        value: cdktf.stringToHclTerraform(this._customProperty5),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property50_label: {
        value: cdktf.stringToHclTerraform(this._customProperty50Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property51_label: {
        value: cdktf.stringToHclTerraform(this._customProperty51Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property52_label: {
        value: cdktf.stringToHclTerraform(this._customProperty52Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property53_label: {
        value: cdktf.stringToHclTerraform(this._customProperty53Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property54_label: {
        value: cdktf.stringToHclTerraform(this._customProperty54Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property55_label: {
        value: cdktf.stringToHclTerraform(this._customProperty55Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property56_label: {
        value: cdktf.stringToHclTerraform(this._customProperty56Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property57_label: {
        value: cdktf.stringToHclTerraform(this._customProperty57Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property58_label: {
        value: cdktf.stringToHclTerraform(this._customProperty58Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property59_label: {
        value: cdktf.stringToHclTerraform(this._customProperty59Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property6: {
        value: cdktf.stringToHclTerraform(this._customProperty6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property60_label: {
        value: cdktf.stringToHclTerraform(this._customProperty60Label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property7: {
        value: cdktf.stringToHclTerraform(this._customProperty7),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property8: {
        value: cdktf.stringToHclTerraform(this._customProperty8),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property9: {
        value: cdktf.stringToHclTerraform(this._customProperty9),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_modify_account: {
        value: cdktf.stringToHclTerraform(this._disableModifyAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_new_account_request_if_account_exists: {
        value: cdktf.stringToHclTerraform(this._disableNewAccountRequestIfAccountExists),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_remove_account: {
        value: cdktf.stringToHclTerraform(this._disableRemoveAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_templates: {
        value: cdktf.listMapperHcl(endpointResourceEmailTemplatesToHclTerraform, false)(this._emailTemplates.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EndpointResourceEmailTemplatesList",
      },
      enable_copy_access: {
        value: cdktf.stringToHclTerraform(this._enableCopyAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_config: {
        value: cdktf.stringToHclTerraform(this._endpointConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_name: {
        value: cdktf.stringToHclTerraform(this._endpointName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mapped_endpoints: {
        value: cdktf.listMapperHcl(endpointResourceMappedEndpointsToHclTerraform, false)(this._mappedEndpoints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EndpointResourceMappedEndpointsList",
      },
      out_of_band_action: {
        value: cdktf.stringToHclTerraform(this._outOfBandAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner: {
        value: cdktf.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_type: {
        value: cdktf.stringToHclTerraform(this._ownerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_account_pattern: {
        value: cdktf.stringToHclTerraform(this._parentAccountPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_configs: {
        value: cdktf.stringToHclTerraform(this._pluginConfigs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_account_type: {
        value: cdktf.stringToHclTerraform(this._primaryAccountType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      requestable: {
        value: cdktf.booleanToHclTerraform(this._requestable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      requestable_role_types: {
        value: cdktf.listMapperHcl(endpointResourceRequestableRoleTypesToHclTerraform, false)(this._requestableRoleTypes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EndpointResourceRequestableRoleTypesList",
      },
      resource_owner: {
        value: cdktf.stringToHclTerraform(this._resourceOwner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_owner_type: {
        value: cdktf.stringToHclTerraform(this._resourceOwnerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_system: {
        value: cdktf.stringToHclTerraform(this._securitySystem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account_access_query: {
        value: cdktf.stringToHclTerraform(this._serviceAccountAccessQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account_name_rule: {
        value: cdktf.stringToHclTerraform(this._serviceAccountNameRule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status_config: {
        value: cdktf.stringToHclTerraform(this._statusConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_account_correlation_rule: {
        value: cdktf.stringToHclTerraform(this._userAccountCorrelationRule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
