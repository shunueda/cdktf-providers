// https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebhookConfig extends cdktf.TerraformMetaArguments {
  /**
  * The connection timeout in milliseconds used when FusionAuth sends events to the Webhook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#connect_timeout Webhook#connect_timeout}
  */
  readonly connectTimeout: number;
  /**
  * A description of the Webhook. This is used for display purposes only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#description Webhook#description}
  */
  readonly description?: string;
  /**
  * Whether or not this Webhook is used for all events or just for specific Applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#global Webhook#global}
  */
  readonly global?: boolean | cdktf.IResolvable;
  /**
  * An object that contains headers that are sent as part of the HTTP request for the events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#headers Webhook#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * The HTTP basic authentication password that is sent as part of the HTTP request for the events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#http_authentication_password Webhook#http_authentication_password}
  */
  readonly httpAuthenticationPassword?: string;
  /**
  * The HTTP basic authentication username that is sent as part of the HTTP request for the events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#http_authentication_username Webhook#http_authentication_username}
  */
  readonly httpAuthenticationUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#id Webhook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The read timeout in milliseconds used when FusionAuth sends events to the Webhook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#read_timeout Webhook#read_timeout}
  */
  readonly readTimeout: number;
  /**
  * An SSL certificate in PEM format that is used to establish the a SSL (TLS specifically) connection to the Webhook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#ssl_certificate Webhook#ssl_certificate}
  */
  readonly sslCertificate?: string;
  /**
  * The Ids of the Tenants that this Webhook should be associated with. If no Ids are specified and the global field is false, this Webhook will not be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#tenant_ids Webhook#tenant_ids}
  */
  readonly tenantIds?: string[];
  /**
  * The fully qualified URL of the Webhook’s endpoint that will accept the event requests from FusionAuth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#url Webhook#url}
  */
  readonly url: string;
  /**
  * events_enabled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#events_enabled Webhook#events_enabled}
  */
  readonly eventsEnabled?: WebhookEventsEnabled;
}
export interface WebhookEventsEnabled {
  /**
  * When an audit log is created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#audit_log_create Webhook#audit_log_create}
  */
  readonly auditLogCreate?: boolean | cdktf.IResolvable;
  /**
  * When an event log is created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#event_log_create Webhook#event_log_create}
  */
  readonly eventLogCreate?: boolean | cdktf.IResolvable;
  /**
  * When a JWT RSA Public / Private keypair may have been changed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#jwt_public_key_update Webhook#jwt_public_key_update}
  */
  readonly jwtPublicKeyUpdate?: boolean | cdktf.IResolvable;
  /**
  * When an access token is refreshed using a refresh token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#jwt_refresh Webhook#jwt_refresh}
  */
  readonly jwtRefresh?: boolean | cdktf.IResolvable;
  /**
  * When a JWT Refresh Token is revoked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#jwt_refresh_token_revoke Webhook#jwt_refresh_token_revoke}
  */
  readonly jwtRefreshTokenRevoke?: boolean | cdktf.IResolvable;
  /**
  * When kickstart has successfully completed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#kickstart_success Webhook#kickstart_success}
  */
  readonly kickstartSuccess?: boolean | cdktf.IResolvable;
  /**
  * When a user action is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#user_action Webhook#user_action}
  */
  readonly userAction?: boolean | cdktf.IResolvable;
  /**
  * When multiple users are created in bulk (i.e. during an import)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#user_bulk_create Webhook#user_bulk_create}
  */
  readonly userBulkCreate?: boolean | cdktf.IResolvable;
  /**
  * When a user is created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#user_create Webhook#user_create}
  */
  readonly userCreate?: boolean | cdktf.IResolvable;
  /**
  * When a user create transaction has completed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#user_create_complete Webhook#user_create_complete}
  */
  readonly userCreateComplete?: boolean | cdktf.IResolvable;
  /**
  * When a user is deactivated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#user_deactivate Webhook#user_deactivate}
  */
  readonly userDeactivate?: boolean | cdktf.IResolvable;
  /**
  * When a user is deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#user_delete Webhook#user_delete}
  */
  readonly userDelete?: boolean | cdktf.IResolvable;
  /**
  * When a user delete transaction has completed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#user_delete_complete Webhook#user_delete_complete}
  */
  readonly userDeleteComplete?: boolean | cdktf.IResolvable;
  /**
  * When a user updates their email address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#user_email_update Webhook#user_email_update}
  */
  readonly userEmailUpdate?: boolean | cdktf.IResolvable;
  /**
  * When a user verifies their email address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#user_email_verified Webhook#user_email_verified}
  */
  readonly userEmailVerified?: boolean | cdktf.IResolvable;
  /**
  * When a user is linked to an identity provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#user_identity_provider_link Webhook#user_identity_provider_link}
  */
  readonly userIdentityProviderLink?: boolean | cdktf.IResolvable;
  /**
  * When a link to an identity provider is removed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#user_identity_provider_unlink Webhook#user_identity_provider_unlink}
  */
  readonly userIdentityProviderUnlink?: boolean | cdktf.IResolvable;
  /**
  * When a user fails a login request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#user_login_failed Webhook#user_login_failed}
  */
  readonly userLoginFailed?: boolean | cdktf.IResolvable;
  /**
  * When a request to create a user with a login Id (email or username) which is already in use has been received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#user_login_id_duplicate_create Webhook#user_login_id_duplicate_create}
  */
  readonly userLoginIdDuplicateCreate?: boolean | cdktf.IResolvable;
  /**
  * When a request to update a user and change their login Id (email or username) to one that is already in use has been received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#user_login_id_duplicate_update Webhook#user_login_id_duplicate_update}
  */
  readonly userLoginIdDuplicateUpdate?: boolean | cdktf.IResolvable;
  /**
  * When a user begins a login request with a new device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#user_login_new_device Webhook#user_login_new_device}
  */
  readonly userLoginNewDevice?: boolean | cdktf.IResolvable;
  /**
  * When a user completes a login request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#user_login_success Webhook#user_login_success}
  */
  readonly userLoginSuccess?: boolean | cdktf.IResolvable;
  /**
  * When a user logs in and is considered to be a potential threat
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#user_login_suspicious Webhook#user_login_suspicious}
  */
  readonly userLoginSuspicious?: boolean | cdktf.IResolvable;
  /**
  * When Reactor detects a user is using a potentially breached password (requires an activated license)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#user_password_breach Webhook#user_password_breach}
  */
  readonly userPasswordBreach?: boolean | cdktf.IResolvable;
  /**
  * When a forgot password email has been sent to a user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#user_password_reset_send Webhook#user_password_reset_send}
  */
  readonly userPasswordResetSend?: boolean | cdktf.IResolvable;
  /**
  * When the process to reset a user password has started
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#user_password_reset_start Webhook#user_password_reset_start}
  */
  readonly userPasswordResetStart?: boolean | cdktf.IResolvable;
  /**
  * When a user has successfully reset their password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#user_password_reset_success Webhook#user_password_reset_success}
  */
  readonly userPasswordResetSuccess?: boolean | cdktf.IResolvable;
  /**
  * When a user has updated their password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#user_password_update Webhook#user_password_update}
  */
  readonly userPasswordUpdate?: boolean | cdktf.IResolvable;
  /**
  * When a user is reactivated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#user_reactivate Webhook#user_reactivate}
  */
  readonly userReactivate?: boolean | cdktf.IResolvable;
  /**
  * When a user registration is created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#user_registration_create Webhook#user_registration_create}
  */
  readonly userRegistrationCreate?: boolean | cdktf.IResolvable;
  /**
  * When a user registration create transaction has completed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#user_registration_create_complete Webhook#user_registration_create_complete}
  */
  readonly userRegistrationCreateComplete?: boolean | cdktf.IResolvable;
  /**
  * When a user registration is deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#user_registration_delete Webhook#user_registration_delete}
  */
  readonly userRegistrationDelete?: boolean | cdktf.IResolvable;
  /**
  * When a user registration delete transaction has completed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#user_registration_delete_complete Webhook#user_registration_delete_complete}
  */
  readonly userRegistrationDeleteComplete?: boolean | cdktf.IResolvable;
  /**
  * When a user registration is updated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#user_registration_update Webhook#user_registration_update}
  */
  readonly userRegistrationUpdate?: boolean | cdktf.IResolvable;
  /**
  * When a user registration update transaction has completed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#user_registration_update_complete Webhook#user_registration_update_complete}
  */
  readonly userRegistrationUpdateComplete?: boolean | cdktf.IResolvable;
  /**
  * When a user completes registration verification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#user_registration_verified Webhook#user_registration_verified}
  */
  readonly userRegistrationVerified?: boolean | cdktf.IResolvable;
  /**
  * When a user has added a two-factor method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#user_two_factor_method_add Webhook#user_two_factor_method_add}
  */
  readonly userTwoFactorMethodAdd?: boolean | cdktf.IResolvable;
  /**
  * When a user has removed a two-factor method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#user_two_factor_method_remove Webhook#user_two_factor_method_remove}
  */
  readonly userTwoFactorMethodRemove?: boolean | cdktf.IResolvable;
  /**
  * When a user is updated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#user_update Webhook#user_update}
  */
  readonly userUpdate?: boolean | cdktf.IResolvable;
  /**
  * When a user update transaction has completed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#user_update_complete Webhook#user_update_complete}
  */
  readonly userUpdateComplete?: boolean | cdktf.IResolvable;
}

export function webhookEventsEnabledToTerraform(struct?: WebhookEventsEnabledOutputReference | WebhookEventsEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit_log_create: cdktf.booleanToTerraform(struct!.auditLogCreate),
    event_log_create: cdktf.booleanToTerraform(struct!.eventLogCreate),
    jwt_public_key_update: cdktf.booleanToTerraform(struct!.jwtPublicKeyUpdate),
    jwt_refresh: cdktf.booleanToTerraform(struct!.jwtRefresh),
    jwt_refresh_token_revoke: cdktf.booleanToTerraform(struct!.jwtRefreshTokenRevoke),
    kickstart_success: cdktf.booleanToTerraform(struct!.kickstartSuccess),
    user_action: cdktf.booleanToTerraform(struct!.userAction),
    user_bulk_create: cdktf.booleanToTerraform(struct!.userBulkCreate),
    user_create: cdktf.booleanToTerraform(struct!.userCreate),
    user_create_complete: cdktf.booleanToTerraform(struct!.userCreateComplete),
    user_deactivate: cdktf.booleanToTerraform(struct!.userDeactivate),
    user_delete: cdktf.booleanToTerraform(struct!.userDelete),
    user_delete_complete: cdktf.booleanToTerraform(struct!.userDeleteComplete),
    user_email_update: cdktf.booleanToTerraform(struct!.userEmailUpdate),
    user_email_verified: cdktf.booleanToTerraform(struct!.userEmailVerified),
    user_identity_provider_link: cdktf.booleanToTerraform(struct!.userIdentityProviderLink),
    user_identity_provider_unlink: cdktf.booleanToTerraform(struct!.userIdentityProviderUnlink),
    user_login_failed: cdktf.booleanToTerraform(struct!.userLoginFailed),
    user_login_id_duplicate_create: cdktf.booleanToTerraform(struct!.userLoginIdDuplicateCreate),
    user_login_id_duplicate_update: cdktf.booleanToTerraform(struct!.userLoginIdDuplicateUpdate),
    user_login_new_device: cdktf.booleanToTerraform(struct!.userLoginNewDevice),
    user_login_success: cdktf.booleanToTerraform(struct!.userLoginSuccess),
    user_login_suspicious: cdktf.booleanToTerraform(struct!.userLoginSuspicious),
    user_password_breach: cdktf.booleanToTerraform(struct!.userPasswordBreach),
    user_password_reset_send: cdktf.booleanToTerraform(struct!.userPasswordResetSend),
    user_password_reset_start: cdktf.booleanToTerraform(struct!.userPasswordResetStart),
    user_password_reset_success: cdktf.booleanToTerraform(struct!.userPasswordResetSuccess),
    user_password_update: cdktf.booleanToTerraform(struct!.userPasswordUpdate),
    user_reactivate: cdktf.booleanToTerraform(struct!.userReactivate),
    user_registration_create: cdktf.booleanToTerraform(struct!.userRegistrationCreate),
    user_registration_create_complete: cdktf.booleanToTerraform(struct!.userRegistrationCreateComplete),
    user_registration_delete: cdktf.booleanToTerraform(struct!.userRegistrationDelete),
    user_registration_delete_complete: cdktf.booleanToTerraform(struct!.userRegistrationDeleteComplete),
    user_registration_update: cdktf.booleanToTerraform(struct!.userRegistrationUpdate),
    user_registration_update_complete: cdktf.booleanToTerraform(struct!.userRegistrationUpdateComplete),
    user_registration_verified: cdktf.booleanToTerraform(struct!.userRegistrationVerified),
    user_two_factor_method_add: cdktf.booleanToTerraform(struct!.userTwoFactorMethodAdd),
    user_two_factor_method_remove: cdktf.booleanToTerraform(struct!.userTwoFactorMethodRemove),
    user_update: cdktf.booleanToTerraform(struct!.userUpdate),
    user_update_complete: cdktf.booleanToTerraform(struct!.userUpdateComplete),
  }
}


export function webhookEventsEnabledToHclTerraform(struct?: WebhookEventsEnabledOutputReference | WebhookEventsEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audit_log_create: {
      value: cdktf.booleanToHclTerraform(struct!.auditLogCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    event_log_create: {
      value: cdktf.booleanToHclTerraform(struct!.eventLogCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    jwt_public_key_update: {
      value: cdktf.booleanToHclTerraform(struct!.jwtPublicKeyUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    jwt_refresh: {
      value: cdktf.booleanToHclTerraform(struct!.jwtRefresh),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    jwt_refresh_token_revoke: {
      value: cdktf.booleanToHclTerraform(struct!.jwtRefreshTokenRevoke),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kickstart_success: {
      value: cdktf.booleanToHclTerraform(struct!.kickstartSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_action: {
      value: cdktf.booleanToHclTerraform(struct!.userAction),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_bulk_create: {
      value: cdktf.booleanToHclTerraform(struct!.userBulkCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_create: {
      value: cdktf.booleanToHclTerraform(struct!.userCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_create_complete: {
      value: cdktf.booleanToHclTerraform(struct!.userCreateComplete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_deactivate: {
      value: cdktf.booleanToHclTerraform(struct!.userDeactivate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_delete: {
      value: cdktf.booleanToHclTerraform(struct!.userDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_delete_complete: {
      value: cdktf.booleanToHclTerraform(struct!.userDeleteComplete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_email_update: {
      value: cdktf.booleanToHclTerraform(struct!.userEmailUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_email_verified: {
      value: cdktf.booleanToHclTerraform(struct!.userEmailVerified),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_identity_provider_link: {
      value: cdktf.booleanToHclTerraform(struct!.userIdentityProviderLink),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_identity_provider_unlink: {
      value: cdktf.booleanToHclTerraform(struct!.userIdentityProviderUnlink),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_login_failed: {
      value: cdktf.booleanToHclTerraform(struct!.userLoginFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_login_id_duplicate_create: {
      value: cdktf.booleanToHclTerraform(struct!.userLoginIdDuplicateCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_login_id_duplicate_update: {
      value: cdktf.booleanToHclTerraform(struct!.userLoginIdDuplicateUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_login_new_device: {
      value: cdktf.booleanToHclTerraform(struct!.userLoginNewDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_login_success: {
      value: cdktf.booleanToHclTerraform(struct!.userLoginSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_login_suspicious: {
      value: cdktf.booleanToHclTerraform(struct!.userLoginSuspicious),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_password_breach: {
      value: cdktf.booleanToHclTerraform(struct!.userPasswordBreach),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_password_reset_send: {
      value: cdktf.booleanToHclTerraform(struct!.userPasswordResetSend),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_password_reset_start: {
      value: cdktf.booleanToHclTerraform(struct!.userPasswordResetStart),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_password_reset_success: {
      value: cdktf.booleanToHclTerraform(struct!.userPasswordResetSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_password_update: {
      value: cdktf.booleanToHclTerraform(struct!.userPasswordUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_reactivate: {
      value: cdktf.booleanToHclTerraform(struct!.userReactivate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_registration_create: {
      value: cdktf.booleanToHclTerraform(struct!.userRegistrationCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_registration_create_complete: {
      value: cdktf.booleanToHclTerraform(struct!.userRegistrationCreateComplete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_registration_delete: {
      value: cdktf.booleanToHclTerraform(struct!.userRegistrationDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_registration_delete_complete: {
      value: cdktf.booleanToHclTerraform(struct!.userRegistrationDeleteComplete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_registration_update: {
      value: cdktf.booleanToHclTerraform(struct!.userRegistrationUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_registration_update_complete: {
      value: cdktf.booleanToHclTerraform(struct!.userRegistrationUpdateComplete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_registration_verified: {
      value: cdktf.booleanToHclTerraform(struct!.userRegistrationVerified),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_two_factor_method_add: {
      value: cdktf.booleanToHclTerraform(struct!.userTwoFactorMethodAdd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_two_factor_method_remove: {
      value: cdktf.booleanToHclTerraform(struct!.userTwoFactorMethodRemove),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_update: {
      value: cdktf.booleanToHclTerraform(struct!.userUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_update_complete: {
      value: cdktf.booleanToHclTerraform(struct!.userUpdateComplete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebhookEventsEnabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebhookEventsEnabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auditLogCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditLogCreate = this._auditLogCreate;
    }
    if (this._eventLogCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventLogCreate = this._eventLogCreate;
    }
    if (this._jwtPublicKeyUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtPublicKeyUpdate = this._jwtPublicKeyUpdate;
    }
    if (this._jwtRefresh !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtRefresh = this._jwtRefresh;
    }
    if (this._jwtRefreshTokenRevoke !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtRefreshTokenRevoke = this._jwtRefreshTokenRevoke;
    }
    if (this._kickstartSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.kickstartSuccess = this._kickstartSuccess;
    }
    if (this._userAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAction = this._userAction;
    }
    if (this._userBulkCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.userBulkCreate = this._userBulkCreate;
    }
    if (this._userCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.userCreate = this._userCreate;
    }
    if (this._userCreateComplete !== undefined) {
      hasAnyValues = true;
      internalValueResult.userCreateComplete = this._userCreateComplete;
    }
    if (this._userDeactivate !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDeactivate = this._userDeactivate;
    }
    if (this._userDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDelete = this._userDelete;
    }
    if (this._userDeleteComplete !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDeleteComplete = this._userDeleteComplete;
    }
    if (this._userEmailUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.userEmailUpdate = this._userEmailUpdate;
    }
    if (this._userEmailVerified !== undefined) {
      hasAnyValues = true;
      internalValueResult.userEmailVerified = this._userEmailVerified;
    }
    if (this._userIdentityProviderLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.userIdentityProviderLink = this._userIdentityProviderLink;
    }
    if (this._userIdentityProviderUnlink !== undefined) {
      hasAnyValues = true;
      internalValueResult.userIdentityProviderUnlink = this._userIdentityProviderUnlink;
    }
    if (this._userLoginFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.userLoginFailed = this._userLoginFailed;
    }
    if (this._userLoginIdDuplicateCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.userLoginIdDuplicateCreate = this._userLoginIdDuplicateCreate;
    }
    if (this._userLoginIdDuplicateUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.userLoginIdDuplicateUpdate = this._userLoginIdDuplicateUpdate;
    }
    if (this._userLoginNewDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.userLoginNewDevice = this._userLoginNewDevice;
    }
    if (this._userLoginSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.userLoginSuccess = this._userLoginSuccess;
    }
    if (this._userLoginSuspicious !== undefined) {
      hasAnyValues = true;
      internalValueResult.userLoginSuspicious = this._userLoginSuspicious;
    }
    if (this._userPasswordBreach !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPasswordBreach = this._userPasswordBreach;
    }
    if (this._userPasswordResetSend !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPasswordResetSend = this._userPasswordResetSend;
    }
    if (this._userPasswordResetStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPasswordResetStart = this._userPasswordResetStart;
    }
    if (this._userPasswordResetSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPasswordResetSuccess = this._userPasswordResetSuccess;
    }
    if (this._userPasswordUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPasswordUpdate = this._userPasswordUpdate;
    }
    if (this._userReactivate !== undefined) {
      hasAnyValues = true;
      internalValueResult.userReactivate = this._userReactivate;
    }
    if (this._userRegistrationCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.userRegistrationCreate = this._userRegistrationCreate;
    }
    if (this._userRegistrationCreateComplete !== undefined) {
      hasAnyValues = true;
      internalValueResult.userRegistrationCreateComplete = this._userRegistrationCreateComplete;
    }
    if (this._userRegistrationDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.userRegistrationDelete = this._userRegistrationDelete;
    }
    if (this._userRegistrationDeleteComplete !== undefined) {
      hasAnyValues = true;
      internalValueResult.userRegistrationDeleteComplete = this._userRegistrationDeleteComplete;
    }
    if (this._userRegistrationUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.userRegistrationUpdate = this._userRegistrationUpdate;
    }
    if (this._userRegistrationUpdateComplete !== undefined) {
      hasAnyValues = true;
      internalValueResult.userRegistrationUpdateComplete = this._userRegistrationUpdateComplete;
    }
    if (this._userRegistrationVerified !== undefined) {
      hasAnyValues = true;
      internalValueResult.userRegistrationVerified = this._userRegistrationVerified;
    }
    if (this._userTwoFactorMethodAdd !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTwoFactorMethodAdd = this._userTwoFactorMethodAdd;
    }
    if (this._userTwoFactorMethodRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTwoFactorMethodRemove = this._userTwoFactorMethodRemove;
    }
    if (this._userUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.userUpdate = this._userUpdate;
    }
    if (this._userUpdateComplete !== undefined) {
      hasAnyValues = true;
      internalValueResult.userUpdateComplete = this._userUpdateComplete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebhookEventsEnabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._auditLogCreate = undefined;
      this._eventLogCreate = undefined;
      this._jwtPublicKeyUpdate = undefined;
      this._jwtRefresh = undefined;
      this._jwtRefreshTokenRevoke = undefined;
      this._kickstartSuccess = undefined;
      this._userAction = undefined;
      this._userBulkCreate = undefined;
      this._userCreate = undefined;
      this._userCreateComplete = undefined;
      this._userDeactivate = undefined;
      this._userDelete = undefined;
      this._userDeleteComplete = undefined;
      this._userEmailUpdate = undefined;
      this._userEmailVerified = undefined;
      this._userIdentityProviderLink = undefined;
      this._userIdentityProviderUnlink = undefined;
      this._userLoginFailed = undefined;
      this._userLoginIdDuplicateCreate = undefined;
      this._userLoginIdDuplicateUpdate = undefined;
      this._userLoginNewDevice = undefined;
      this._userLoginSuccess = undefined;
      this._userLoginSuspicious = undefined;
      this._userPasswordBreach = undefined;
      this._userPasswordResetSend = undefined;
      this._userPasswordResetStart = undefined;
      this._userPasswordResetSuccess = undefined;
      this._userPasswordUpdate = undefined;
      this._userReactivate = undefined;
      this._userRegistrationCreate = undefined;
      this._userRegistrationCreateComplete = undefined;
      this._userRegistrationDelete = undefined;
      this._userRegistrationDeleteComplete = undefined;
      this._userRegistrationUpdate = undefined;
      this._userRegistrationUpdateComplete = undefined;
      this._userRegistrationVerified = undefined;
      this._userTwoFactorMethodAdd = undefined;
      this._userTwoFactorMethodRemove = undefined;
      this._userUpdate = undefined;
      this._userUpdateComplete = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._auditLogCreate = value.auditLogCreate;
      this._eventLogCreate = value.eventLogCreate;
      this._jwtPublicKeyUpdate = value.jwtPublicKeyUpdate;
      this._jwtRefresh = value.jwtRefresh;
      this._jwtRefreshTokenRevoke = value.jwtRefreshTokenRevoke;
      this._kickstartSuccess = value.kickstartSuccess;
      this._userAction = value.userAction;
      this._userBulkCreate = value.userBulkCreate;
      this._userCreate = value.userCreate;
      this._userCreateComplete = value.userCreateComplete;
      this._userDeactivate = value.userDeactivate;
      this._userDelete = value.userDelete;
      this._userDeleteComplete = value.userDeleteComplete;
      this._userEmailUpdate = value.userEmailUpdate;
      this._userEmailVerified = value.userEmailVerified;
      this._userIdentityProviderLink = value.userIdentityProviderLink;
      this._userIdentityProviderUnlink = value.userIdentityProviderUnlink;
      this._userLoginFailed = value.userLoginFailed;
      this._userLoginIdDuplicateCreate = value.userLoginIdDuplicateCreate;
      this._userLoginIdDuplicateUpdate = value.userLoginIdDuplicateUpdate;
      this._userLoginNewDevice = value.userLoginNewDevice;
      this._userLoginSuccess = value.userLoginSuccess;
      this._userLoginSuspicious = value.userLoginSuspicious;
      this._userPasswordBreach = value.userPasswordBreach;
      this._userPasswordResetSend = value.userPasswordResetSend;
      this._userPasswordResetStart = value.userPasswordResetStart;
      this._userPasswordResetSuccess = value.userPasswordResetSuccess;
      this._userPasswordUpdate = value.userPasswordUpdate;
      this._userReactivate = value.userReactivate;
      this._userRegistrationCreate = value.userRegistrationCreate;
      this._userRegistrationCreateComplete = value.userRegistrationCreateComplete;
      this._userRegistrationDelete = value.userRegistrationDelete;
      this._userRegistrationDeleteComplete = value.userRegistrationDeleteComplete;
      this._userRegistrationUpdate = value.userRegistrationUpdate;
      this._userRegistrationUpdateComplete = value.userRegistrationUpdateComplete;
      this._userRegistrationVerified = value.userRegistrationVerified;
      this._userTwoFactorMethodAdd = value.userTwoFactorMethodAdd;
      this._userTwoFactorMethodRemove = value.userTwoFactorMethodRemove;
      this._userUpdate = value.userUpdate;
      this._userUpdateComplete = value.userUpdateComplete;
    }
  }

  // audit_log_create - computed: false, optional: true, required: false
  private _auditLogCreate?: boolean | cdktf.IResolvable; 
  public get auditLogCreate() {
    return this.getBooleanAttribute('audit_log_create');
  }
  public set auditLogCreate(value: boolean | cdktf.IResolvable) {
    this._auditLogCreate = value;
  }
  public resetAuditLogCreate() {
    this._auditLogCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLogCreateInput() {
    return this._auditLogCreate;
  }

  // event_log_create - computed: false, optional: true, required: false
  private _eventLogCreate?: boolean | cdktf.IResolvable; 
  public get eventLogCreate() {
    return this.getBooleanAttribute('event_log_create');
  }
  public set eventLogCreate(value: boolean | cdktf.IResolvable) {
    this._eventLogCreate = value;
  }
  public resetEventLogCreate() {
    this._eventLogCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventLogCreateInput() {
    return this._eventLogCreate;
  }

  // jwt_public_key_update - computed: false, optional: true, required: false
  private _jwtPublicKeyUpdate?: boolean | cdktf.IResolvable; 
  public get jwtPublicKeyUpdate() {
    return this.getBooleanAttribute('jwt_public_key_update');
  }
  public set jwtPublicKeyUpdate(value: boolean | cdktf.IResolvable) {
    this._jwtPublicKeyUpdate = value;
  }
  public resetJwtPublicKeyUpdate() {
    this._jwtPublicKeyUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtPublicKeyUpdateInput() {
    return this._jwtPublicKeyUpdate;
  }

  // jwt_refresh - computed: false, optional: true, required: false
  private _jwtRefresh?: boolean | cdktf.IResolvable; 
  public get jwtRefresh() {
    return this.getBooleanAttribute('jwt_refresh');
  }
  public set jwtRefresh(value: boolean | cdktf.IResolvable) {
    this._jwtRefresh = value;
  }
  public resetJwtRefresh() {
    this._jwtRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtRefreshInput() {
    return this._jwtRefresh;
  }

  // jwt_refresh_token_revoke - computed: false, optional: true, required: false
  private _jwtRefreshTokenRevoke?: boolean | cdktf.IResolvable; 
  public get jwtRefreshTokenRevoke() {
    return this.getBooleanAttribute('jwt_refresh_token_revoke');
  }
  public set jwtRefreshTokenRevoke(value: boolean | cdktf.IResolvable) {
    this._jwtRefreshTokenRevoke = value;
  }
  public resetJwtRefreshTokenRevoke() {
    this._jwtRefreshTokenRevoke = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtRefreshTokenRevokeInput() {
    return this._jwtRefreshTokenRevoke;
  }

  // kickstart_success - computed: false, optional: true, required: false
  private _kickstartSuccess?: boolean | cdktf.IResolvable; 
  public get kickstartSuccess() {
    return this.getBooleanAttribute('kickstart_success');
  }
  public set kickstartSuccess(value: boolean | cdktf.IResolvable) {
    this._kickstartSuccess = value;
  }
  public resetKickstartSuccess() {
    this._kickstartSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kickstartSuccessInput() {
    return this._kickstartSuccess;
  }

  // user_action - computed: false, optional: true, required: false
  private _userAction?: boolean | cdktf.IResolvable; 
  public get userAction() {
    return this.getBooleanAttribute('user_action');
  }
  public set userAction(value: boolean | cdktf.IResolvable) {
    this._userAction = value;
  }
  public resetUserAction() {
    this._userAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userActionInput() {
    return this._userAction;
  }

  // user_bulk_create - computed: false, optional: true, required: false
  private _userBulkCreate?: boolean | cdktf.IResolvable; 
  public get userBulkCreate() {
    return this.getBooleanAttribute('user_bulk_create');
  }
  public set userBulkCreate(value: boolean | cdktf.IResolvable) {
    this._userBulkCreate = value;
  }
  public resetUserBulkCreate() {
    this._userBulkCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userBulkCreateInput() {
    return this._userBulkCreate;
  }

  // user_create - computed: false, optional: true, required: false
  private _userCreate?: boolean | cdktf.IResolvable; 
  public get userCreate() {
    return this.getBooleanAttribute('user_create');
  }
  public set userCreate(value: boolean | cdktf.IResolvable) {
    this._userCreate = value;
  }
  public resetUserCreate() {
    this._userCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userCreateInput() {
    return this._userCreate;
  }

  // user_create_complete - computed: false, optional: true, required: false
  private _userCreateComplete?: boolean | cdktf.IResolvable; 
  public get userCreateComplete() {
    return this.getBooleanAttribute('user_create_complete');
  }
  public set userCreateComplete(value: boolean | cdktf.IResolvable) {
    this._userCreateComplete = value;
  }
  public resetUserCreateComplete() {
    this._userCreateComplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userCreateCompleteInput() {
    return this._userCreateComplete;
  }

  // user_deactivate - computed: false, optional: true, required: false
  private _userDeactivate?: boolean | cdktf.IResolvable; 
  public get userDeactivate() {
    return this.getBooleanAttribute('user_deactivate');
  }
  public set userDeactivate(value: boolean | cdktf.IResolvable) {
    this._userDeactivate = value;
  }
  public resetUserDeactivate() {
    this._userDeactivate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDeactivateInput() {
    return this._userDeactivate;
  }

  // user_delete - computed: false, optional: true, required: false
  private _userDelete?: boolean | cdktf.IResolvable; 
  public get userDelete() {
    return this.getBooleanAttribute('user_delete');
  }
  public set userDelete(value: boolean | cdktf.IResolvable) {
    this._userDelete = value;
  }
  public resetUserDelete() {
    this._userDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDeleteInput() {
    return this._userDelete;
  }

  // user_delete_complete - computed: false, optional: true, required: false
  private _userDeleteComplete?: boolean | cdktf.IResolvable; 
  public get userDeleteComplete() {
    return this.getBooleanAttribute('user_delete_complete');
  }
  public set userDeleteComplete(value: boolean | cdktf.IResolvable) {
    this._userDeleteComplete = value;
  }
  public resetUserDeleteComplete() {
    this._userDeleteComplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDeleteCompleteInput() {
    return this._userDeleteComplete;
  }

  // user_email_update - computed: false, optional: true, required: false
  private _userEmailUpdate?: boolean | cdktf.IResolvable; 
  public get userEmailUpdate() {
    return this.getBooleanAttribute('user_email_update');
  }
  public set userEmailUpdate(value: boolean | cdktf.IResolvable) {
    this._userEmailUpdate = value;
  }
  public resetUserEmailUpdate() {
    this._userEmailUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userEmailUpdateInput() {
    return this._userEmailUpdate;
  }

  // user_email_verified - computed: false, optional: true, required: false
  private _userEmailVerified?: boolean | cdktf.IResolvable; 
  public get userEmailVerified() {
    return this.getBooleanAttribute('user_email_verified');
  }
  public set userEmailVerified(value: boolean | cdktf.IResolvable) {
    this._userEmailVerified = value;
  }
  public resetUserEmailVerified() {
    this._userEmailVerified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userEmailVerifiedInput() {
    return this._userEmailVerified;
  }

  // user_identity_provider_link - computed: false, optional: true, required: false
  private _userIdentityProviderLink?: boolean | cdktf.IResolvable; 
  public get userIdentityProviderLink() {
    return this.getBooleanAttribute('user_identity_provider_link');
  }
  public set userIdentityProviderLink(value: boolean | cdktf.IResolvable) {
    this._userIdentityProviderLink = value;
  }
  public resetUserIdentityProviderLink() {
    this._userIdentityProviderLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdentityProviderLinkInput() {
    return this._userIdentityProviderLink;
  }

  // user_identity_provider_unlink - computed: false, optional: true, required: false
  private _userIdentityProviderUnlink?: boolean | cdktf.IResolvable; 
  public get userIdentityProviderUnlink() {
    return this.getBooleanAttribute('user_identity_provider_unlink');
  }
  public set userIdentityProviderUnlink(value: boolean | cdktf.IResolvable) {
    this._userIdentityProviderUnlink = value;
  }
  public resetUserIdentityProviderUnlink() {
    this._userIdentityProviderUnlink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdentityProviderUnlinkInput() {
    return this._userIdentityProviderUnlink;
  }

  // user_login_failed - computed: false, optional: true, required: false
  private _userLoginFailed?: boolean | cdktf.IResolvable; 
  public get userLoginFailed() {
    return this.getBooleanAttribute('user_login_failed');
  }
  public set userLoginFailed(value: boolean | cdktf.IResolvable) {
    this._userLoginFailed = value;
  }
  public resetUserLoginFailed() {
    this._userLoginFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userLoginFailedInput() {
    return this._userLoginFailed;
  }

  // user_login_id_duplicate_create - computed: false, optional: true, required: false
  private _userLoginIdDuplicateCreate?: boolean | cdktf.IResolvable; 
  public get userLoginIdDuplicateCreate() {
    return this.getBooleanAttribute('user_login_id_duplicate_create');
  }
  public set userLoginIdDuplicateCreate(value: boolean | cdktf.IResolvable) {
    this._userLoginIdDuplicateCreate = value;
  }
  public resetUserLoginIdDuplicateCreate() {
    this._userLoginIdDuplicateCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userLoginIdDuplicateCreateInput() {
    return this._userLoginIdDuplicateCreate;
  }

  // user_login_id_duplicate_update - computed: false, optional: true, required: false
  private _userLoginIdDuplicateUpdate?: boolean | cdktf.IResolvable; 
  public get userLoginIdDuplicateUpdate() {
    return this.getBooleanAttribute('user_login_id_duplicate_update');
  }
  public set userLoginIdDuplicateUpdate(value: boolean | cdktf.IResolvable) {
    this._userLoginIdDuplicateUpdate = value;
  }
  public resetUserLoginIdDuplicateUpdate() {
    this._userLoginIdDuplicateUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userLoginIdDuplicateUpdateInput() {
    return this._userLoginIdDuplicateUpdate;
  }

  // user_login_new_device - computed: false, optional: true, required: false
  private _userLoginNewDevice?: boolean | cdktf.IResolvable; 
  public get userLoginNewDevice() {
    return this.getBooleanAttribute('user_login_new_device');
  }
  public set userLoginNewDevice(value: boolean | cdktf.IResolvable) {
    this._userLoginNewDevice = value;
  }
  public resetUserLoginNewDevice() {
    this._userLoginNewDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userLoginNewDeviceInput() {
    return this._userLoginNewDevice;
  }

  // user_login_success - computed: false, optional: true, required: false
  private _userLoginSuccess?: boolean | cdktf.IResolvable; 
  public get userLoginSuccess() {
    return this.getBooleanAttribute('user_login_success');
  }
  public set userLoginSuccess(value: boolean | cdktf.IResolvable) {
    this._userLoginSuccess = value;
  }
  public resetUserLoginSuccess() {
    this._userLoginSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userLoginSuccessInput() {
    return this._userLoginSuccess;
  }

  // user_login_suspicious - computed: false, optional: true, required: false
  private _userLoginSuspicious?: boolean | cdktf.IResolvable; 
  public get userLoginSuspicious() {
    return this.getBooleanAttribute('user_login_suspicious');
  }
  public set userLoginSuspicious(value: boolean | cdktf.IResolvable) {
    this._userLoginSuspicious = value;
  }
  public resetUserLoginSuspicious() {
    this._userLoginSuspicious = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userLoginSuspiciousInput() {
    return this._userLoginSuspicious;
  }

  // user_password_breach - computed: false, optional: true, required: false
  private _userPasswordBreach?: boolean | cdktf.IResolvable; 
  public get userPasswordBreach() {
    return this.getBooleanAttribute('user_password_breach');
  }
  public set userPasswordBreach(value: boolean | cdktf.IResolvable) {
    this._userPasswordBreach = value;
  }
  public resetUserPasswordBreach() {
    this._userPasswordBreach = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPasswordBreachInput() {
    return this._userPasswordBreach;
  }

  // user_password_reset_send - computed: false, optional: true, required: false
  private _userPasswordResetSend?: boolean | cdktf.IResolvable; 
  public get userPasswordResetSend() {
    return this.getBooleanAttribute('user_password_reset_send');
  }
  public set userPasswordResetSend(value: boolean | cdktf.IResolvable) {
    this._userPasswordResetSend = value;
  }
  public resetUserPasswordResetSend() {
    this._userPasswordResetSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPasswordResetSendInput() {
    return this._userPasswordResetSend;
  }

  // user_password_reset_start - computed: false, optional: true, required: false
  private _userPasswordResetStart?: boolean | cdktf.IResolvable; 
  public get userPasswordResetStart() {
    return this.getBooleanAttribute('user_password_reset_start');
  }
  public set userPasswordResetStart(value: boolean | cdktf.IResolvable) {
    this._userPasswordResetStart = value;
  }
  public resetUserPasswordResetStart() {
    this._userPasswordResetStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPasswordResetStartInput() {
    return this._userPasswordResetStart;
  }

  // user_password_reset_success - computed: false, optional: true, required: false
  private _userPasswordResetSuccess?: boolean | cdktf.IResolvable; 
  public get userPasswordResetSuccess() {
    return this.getBooleanAttribute('user_password_reset_success');
  }
  public set userPasswordResetSuccess(value: boolean | cdktf.IResolvable) {
    this._userPasswordResetSuccess = value;
  }
  public resetUserPasswordResetSuccess() {
    this._userPasswordResetSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPasswordResetSuccessInput() {
    return this._userPasswordResetSuccess;
  }

  // user_password_update - computed: false, optional: true, required: false
  private _userPasswordUpdate?: boolean | cdktf.IResolvable; 
  public get userPasswordUpdate() {
    return this.getBooleanAttribute('user_password_update');
  }
  public set userPasswordUpdate(value: boolean | cdktf.IResolvable) {
    this._userPasswordUpdate = value;
  }
  public resetUserPasswordUpdate() {
    this._userPasswordUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPasswordUpdateInput() {
    return this._userPasswordUpdate;
  }

  // user_reactivate - computed: false, optional: true, required: false
  private _userReactivate?: boolean | cdktf.IResolvable; 
  public get userReactivate() {
    return this.getBooleanAttribute('user_reactivate');
  }
  public set userReactivate(value: boolean | cdktf.IResolvable) {
    this._userReactivate = value;
  }
  public resetUserReactivate() {
    this._userReactivate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userReactivateInput() {
    return this._userReactivate;
  }

  // user_registration_create - computed: false, optional: true, required: false
  private _userRegistrationCreate?: boolean | cdktf.IResolvable; 
  public get userRegistrationCreate() {
    return this.getBooleanAttribute('user_registration_create');
  }
  public set userRegistrationCreate(value: boolean | cdktf.IResolvable) {
    this._userRegistrationCreate = value;
  }
  public resetUserRegistrationCreate() {
    this._userRegistrationCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userRegistrationCreateInput() {
    return this._userRegistrationCreate;
  }

  // user_registration_create_complete - computed: false, optional: true, required: false
  private _userRegistrationCreateComplete?: boolean | cdktf.IResolvable; 
  public get userRegistrationCreateComplete() {
    return this.getBooleanAttribute('user_registration_create_complete');
  }
  public set userRegistrationCreateComplete(value: boolean | cdktf.IResolvable) {
    this._userRegistrationCreateComplete = value;
  }
  public resetUserRegistrationCreateComplete() {
    this._userRegistrationCreateComplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userRegistrationCreateCompleteInput() {
    return this._userRegistrationCreateComplete;
  }

  // user_registration_delete - computed: false, optional: true, required: false
  private _userRegistrationDelete?: boolean | cdktf.IResolvable; 
  public get userRegistrationDelete() {
    return this.getBooleanAttribute('user_registration_delete');
  }
  public set userRegistrationDelete(value: boolean | cdktf.IResolvable) {
    this._userRegistrationDelete = value;
  }
  public resetUserRegistrationDelete() {
    this._userRegistrationDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userRegistrationDeleteInput() {
    return this._userRegistrationDelete;
  }

  // user_registration_delete_complete - computed: false, optional: true, required: false
  private _userRegistrationDeleteComplete?: boolean | cdktf.IResolvable; 
  public get userRegistrationDeleteComplete() {
    return this.getBooleanAttribute('user_registration_delete_complete');
  }
  public set userRegistrationDeleteComplete(value: boolean | cdktf.IResolvable) {
    this._userRegistrationDeleteComplete = value;
  }
  public resetUserRegistrationDeleteComplete() {
    this._userRegistrationDeleteComplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userRegistrationDeleteCompleteInput() {
    return this._userRegistrationDeleteComplete;
  }

  // user_registration_update - computed: false, optional: true, required: false
  private _userRegistrationUpdate?: boolean | cdktf.IResolvable; 
  public get userRegistrationUpdate() {
    return this.getBooleanAttribute('user_registration_update');
  }
  public set userRegistrationUpdate(value: boolean | cdktf.IResolvable) {
    this._userRegistrationUpdate = value;
  }
  public resetUserRegistrationUpdate() {
    this._userRegistrationUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userRegistrationUpdateInput() {
    return this._userRegistrationUpdate;
  }

  // user_registration_update_complete - computed: false, optional: true, required: false
  private _userRegistrationUpdateComplete?: boolean | cdktf.IResolvable; 
  public get userRegistrationUpdateComplete() {
    return this.getBooleanAttribute('user_registration_update_complete');
  }
  public set userRegistrationUpdateComplete(value: boolean | cdktf.IResolvable) {
    this._userRegistrationUpdateComplete = value;
  }
  public resetUserRegistrationUpdateComplete() {
    this._userRegistrationUpdateComplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userRegistrationUpdateCompleteInput() {
    return this._userRegistrationUpdateComplete;
  }

  // user_registration_verified - computed: false, optional: true, required: false
  private _userRegistrationVerified?: boolean | cdktf.IResolvable; 
  public get userRegistrationVerified() {
    return this.getBooleanAttribute('user_registration_verified');
  }
  public set userRegistrationVerified(value: boolean | cdktf.IResolvable) {
    this._userRegistrationVerified = value;
  }
  public resetUserRegistrationVerified() {
    this._userRegistrationVerified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userRegistrationVerifiedInput() {
    return this._userRegistrationVerified;
  }

  // user_two_factor_method_add - computed: false, optional: true, required: false
  private _userTwoFactorMethodAdd?: boolean | cdktf.IResolvable; 
  public get userTwoFactorMethodAdd() {
    return this.getBooleanAttribute('user_two_factor_method_add');
  }
  public set userTwoFactorMethodAdd(value: boolean | cdktf.IResolvable) {
    this._userTwoFactorMethodAdd = value;
  }
  public resetUserTwoFactorMethodAdd() {
    this._userTwoFactorMethodAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTwoFactorMethodAddInput() {
    return this._userTwoFactorMethodAdd;
  }

  // user_two_factor_method_remove - computed: false, optional: true, required: false
  private _userTwoFactorMethodRemove?: boolean | cdktf.IResolvable; 
  public get userTwoFactorMethodRemove() {
    return this.getBooleanAttribute('user_two_factor_method_remove');
  }
  public set userTwoFactorMethodRemove(value: boolean | cdktf.IResolvable) {
    this._userTwoFactorMethodRemove = value;
  }
  public resetUserTwoFactorMethodRemove() {
    this._userTwoFactorMethodRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTwoFactorMethodRemoveInput() {
    return this._userTwoFactorMethodRemove;
  }

  // user_update - computed: false, optional: true, required: false
  private _userUpdate?: boolean | cdktf.IResolvable; 
  public get userUpdate() {
    return this.getBooleanAttribute('user_update');
  }
  public set userUpdate(value: boolean | cdktf.IResolvable) {
    this._userUpdate = value;
  }
  public resetUserUpdate() {
    this._userUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userUpdateInput() {
    return this._userUpdate;
  }

  // user_update_complete - computed: false, optional: true, required: false
  private _userUpdateComplete?: boolean | cdktf.IResolvable; 
  public get userUpdateComplete() {
    return this.getBooleanAttribute('user_update_complete');
  }
  public set userUpdateComplete(value: boolean | cdktf.IResolvable) {
    this._userUpdateComplete = value;
  }
  public resetUserUpdateComplete() {
    this._userUpdateComplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userUpdateCompleteInput() {
    return this._userUpdateComplete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook fusionauth_webhook}
*/
export class Webhook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fusionauth_webhook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Webhook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Webhook to import
  * @param importFromId The id of the existing Webhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Webhook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fusionauth_webhook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/webhook fusionauth_webhook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebhookConfig
  */
  public constructor(scope: Construct, id: string, config: WebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'fusionauth_webhook',
      terraformGeneratorMetadata: {
        providerName: 'fusionauth',
        providerVersion: '0.1.100',
        providerVersionConstraint: '0.1.100'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectTimeout = config.connectTimeout;
    this._description = config.description;
    this._global = config.global;
    this._headers = config.headers;
    this._httpAuthenticationPassword = config.httpAuthenticationPassword;
    this._httpAuthenticationUsername = config.httpAuthenticationUsername;
    this._id = config.id;
    this._readTimeout = config.readTimeout;
    this._sslCertificate = config.sslCertificate;
    this._tenantIds = config.tenantIds;
    this._url = config.url;
    this._eventsEnabled.internalValue = config.eventsEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connect_timeout - computed: false, optional: false, required: true
  private _connectTimeout?: number; 
  public get connectTimeout() {
    return this.getNumberAttribute('connect_timeout');
  }
  public set connectTimeout(value: number) {
    this._connectTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInput() {
    return this._connectTimeout;
  }

  // description - computed: false, optional: true, required: false
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

  // global - computed: false, optional: true, required: false
  private _global?: boolean | cdktf.IResolvable; 
  public get global() {
    return this.getBooleanAttribute('global');
  }
  public set global(value: boolean | cdktf.IResolvable) {
    this._global = value;
  }
  public resetGlobal() {
    this._global = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalInput() {
    return this._global;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // http_authentication_password - computed: false, optional: true, required: false
  private _httpAuthenticationPassword?: string; 
  public get httpAuthenticationPassword() {
    return this.getStringAttribute('http_authentication_password');
  }
  public set httpAuthenticationPassword(value: string) {
    this._httpAuthenticationPassword = value;
  }
  public resetHttpAuthenticationPassword() {
    this._httpAuthenticationPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpAuthenticationPasswordInput() {
    return this._httpAuthenticationPassword;
  }

  // http_authentication_username - computed: false, optional: true, required: false
  private _httpAuthenticationUsername?: string; 
  public get httpAuthenticationUsername() {
    return this.getStringAttribute('http_authentication_username');
  }
  public set httpAuthenticationUsername(value: string) {
    this._httpAuthenticationUsername = value;
  }
  public resetHttpAuthenticationUsername() {
    this._httpAuthenticationUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpAuthenticationUsernameInput() {
    return this._httpAuthenticationUsername;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // read_timeout - computed: false, optional: false, required: true
  private _readTimeout?: number; 
  public get readTimeout() {
    return this.getNumberAttribute('read_timeout');
  }
  public set readTimeout(value: number) {
    this._readTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readTimeoutInput() {
    return this._readTimeout;
  }

  // ssl_certificate - computed: false, optional: true, required: false
  private _sslCertificate?: string; 
  public get sslCertificate() {
    return this.getStringAttribute('ssl_certificate');
  }
  public set sslCertificate(value: string) {
    this._sslCertificate = value;
  }
  public resetSslCertificate() {
    this._sslCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertificateInput() {
    return this._sslCertificate;
  }

  // tenant_ids - computed: false, optional: true, required: false
  private _tenantIds?: string[]; 
  public get tenantIds() {
    return cdktf.Fn.tolist(this.getListAttribute('tenant_ids'));
  }
  public set tenantIds(value: string[]) {
    this._tenantIds = value;
  }
  public resetTenantIds() {
    this._tenantIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdsInput() {
    return this._tenantIds;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // events_enabled - computed: false, optional: true, required: false
  private _eventsEnabled = new WebhookEventsEnabledOutputReference(this, "events_enabled");
  public get eventsEnabled() {
    return this._eventsEnabled;
  }
  public putEventsEnabled(value: WebhookEventsEnabled) {
    this._eventsEnabled.internalValue = value;
  }
  public resetEventsEnabled() {
    this._eventsEnabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsEnabledInput() {
    return this._eventsEnabled.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connect_timeout: cdktf.numberToTerraform(this._connectTimeout),
      description: cdktf.stringToTerraform(this._description),
      global: cdktf.booleanToTerraform(this._global),
      headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._headers),
      http_authentication_password: cdktf.stringToTerraform(this._httpAuthenticationPassword),
      http_authentication_username: cdktf.stringToTerraform(this._httpAuthenticationUsername),
      id: cdktf.stringToTerraform(this._id),
      read_timeout: cdktf.numberToTerraform(this._readTimeout),
      ssl_certificate: cdktf.stringToTerraform(this._sslCertificate),
      tenant_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tenantIds),
      url: cdktf.stringToTerraform(this._url),
      events_enabled: webhookEventsEnabledToTerraform(this._eventsEnabled.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connect_timeout: {
        value: cdktf.numberToHclTerraform(this._connectTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      global: {
        value: cdktf.booleanToHclTerraform(this._global),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      headers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._headers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      http_authentication_password: {
        value: cdktf.stringToHclTerraform(this._httpAuthenticationPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_authentication_username: {
        value: cdktf.stringToHclTerraform(this._httpAuthenticationUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_timeout: {
        value: cdktf.numberToHclTerraform(this._readTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_certificate: {
        value: cdktf.stringToHclTerraform(this._sslCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tenantIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      events_enabled: {
        value: webhookEventsEnabledToHclTerraform(this._eventsEnabled.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebhookEventsEnabledList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
