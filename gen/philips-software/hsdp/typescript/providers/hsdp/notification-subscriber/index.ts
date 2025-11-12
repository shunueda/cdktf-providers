// https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/notification_subscriber
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationSubscriberConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/notification_subscriber#description NotificationSubscriber#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/notification_subscriber#id NotificationSubscriber#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/notification_subscriber#managing_organization NotificationSubscriber#managing_organization}
  */
  readonly managingOrganization: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/notification_subscriber#managing_organization_id NotificationSubscriber#managing_organization_id}
  */
  readonly managingOrganizationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/notification_subscriber#soft_delete NotificationSubscriber#soft_delete}
  */
  readonly softDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/notification_subscriber#subscriber_product_name NotificationSubscriber#subscriber_product_name}
  */
  readonly subscriberProductName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/notification_subscriber#subscriber_service_base_url NotificationSubscriber#subscriber_service_base_url}
  */
  readonly subscriberServiceBaseUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/notification_subscriber#subscriber_service_instance_name NotificationSubscriber#subscriber_service_instance_name}
  */
  readonly subscriberServiceInstanceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/notification_subscriber#subscriber_service_name NotificationSubscriber#subscriber_service_name}
  */
  readonly subscriberServiceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/notification_subscriber#subscriber_service_path_url NotificationSubscriber#subscriber_service_path_url}
  */
  readonly subscriberServicePathUrl: string;
  /**
  * principal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/notification_subscriber#principal NotificationSubscriber#principal}
  */
  readonly principal?: NotificationSubscriberPrincipal;
}
export interface NotificationSubscriberPrincipal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/notification_subscriber#endpoint NotificationSubscriber#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/notification_subscriber#environment NotificationSubscriber#environment}
  */
  readonly environment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/notification_subscriber#oauth2_client_id NotificationSubscriber#oauth2_client_id}
  */
  readonly oauth2ClientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/notification_subscriber#oauth2_password NotificationSubscriber#oauth2_password}
  */
  readonly oauth2Password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/notification_subscriber#password NotificationSubscriber#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/notification_subscriber#region NotificationSubscriber#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/notification_subscriber#service_id NotificationSubscriber#service_id}
  */
  readonly serviceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/notification_subscriber#service_private_key NotificationSubscriber#service_private_key}
  */
  readonly servicePrivateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/notification_subscriber#uaa_password NotificationSubscriber#uaa_password}
  */
  readonly uaaPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/notification_subscriber#uaa_username NotificationSubscriber#uaa_username}
  */
  readonly uaaUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/notification_subscriber#username NotificationSubscriber#username}
  */
  readonly username?: string;
}

export function notificationSubscriberPrincipalToTerraform(struct?: NotificationSubscriberPrincipalOutputReference | NotificationSubscriberPrincipal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    environment: cdktf.stringToTerraform(struct!.environment),
    oauth2_client_id: cdktf.stringToTerraform(struct!.oauth2ClientId),
    oauth2_password: cdktf.stringToTerraform(struct!.oauth2Password),
    password: cdktf.stringToTerraform(struct!.password),
    region: cdktf.stringToTerraform(struct!.region),
    service_id: cdktf.stringToTerraform(struct!.serviceId),
    service_private_key: cdktf.stringToTerraform(struct!.servicePrivateKey),
    uaa_password: cdktf.stringToTerraform(struct!.uaaPassword),
    uaa_username: cdktf.stringToTerraform(struct!.uaaUsername),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function notificationSubscriberPrincipalToHclTerraform(struct?: NotificationSubscriberPrincipalOutputReference | NotificationSubscriberPrincipal): any {
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
    environment: {
      value: cdktf.stringToHclTerraform(struct!.environment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth2_client_id: {
      value: cdktf.stringToHclTerraform(struct!.oauth2ClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth2_password: {
      value: cdktf.stringToHclTerraform(struct!.oauth2Password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_private_key: {
      value: cdktf.stringToHclTerraform(struct!.servicePrivateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uaa_password: {
      value: cdktf.stringToHclTerraform(struct!.uaaPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uaa_username: {
      value: cdktf.stringToHclTerraform(struct!.uaaUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationSubscriberPrincipalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotificationSubscriberPrincipal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._oauth2ClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2ClientId = this._oauth2ClientId;
    }
    if (this._oauth2Password !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2Password = this._oauth2Password;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._serviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceId = this._serviceId;
    }
    if (this._servicePrivateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePrivateKey = this._servicePrivateKey;
    }
    if (this._uaaPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.uaaPassword = this._uaaPassword;
    }
    if (this._uaaUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.uaaUsername = this._uaaUsername;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationSubscriberPrincipal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpoint = undefined;
      this._environment = undefined;
      this._oauth2ClientId = undefined;
      this._oauth2Password = undefined;
      this._password = undefined;
      this._region = undefined;
      this._serviceId = undefined;
      this._servicePrivateKey = undefined;
      this._uaaPassword = undefined;
      this._uaaUsername = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpoint = value.endpoint;
      this._environment = value.environment;
      this._oauth2ClientId = value.oauth2ClientId;
      this._oauth2Password = value.oauth2Password;
      this._password = value.password;
      this._region = value.region;
      this._serviceId = value.serviceId;
      this._servicePrivateKey = value.servicePrivateKey;
      this._uaaPassword = value.uaaPassword;
      this._uaaUsername = value.uaaUsername;
      this._username = value.username;
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

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // oauth2_client_id - computed: false, optional: true, required: false
  private _oauth2ClientId?: string; 
  public get oauth2ClientId() {
    return this.getStringAttribute('oauth2_client_id');
  }
  public set oauth2ClientId(value: string) {
    this._oauth2ClientId = value;
  }
  public resetOauth2ClientId() {
    this._oauth2ClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2ClientIdInput() {
    return this._oauth2ClientId;
  }

  // oauth2_password - computed: false, optional: true, required: false
  private _oauth2Password?: string; 
  public get oauth2Password() {
    return this.getStringAttribute('oauth2_password');
  }
  public set oauth2Password(value: string) {
    this._oauth2Password = value;
  }
  public resetOauth2Password() {
    this._oauth2Password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2PasswordInput() {
    return this._oauth2Password;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // service_id - computed: false, optional: true, required: false
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  public resetServiceId() {
    this._serviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // service_private_key - computed: false, optional: true, required: false
  private _servicePrivateKey?: string; 
  public get servicePrivateKey() {
    return this.getStringAttribute('service_private_key');
  }
  public set servicePrivateKey(value: string) {
    this._servicePrivateKey = value;
  }
  public resetServicePrivateKey() {
    this._servicePrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrivateKeyInput() {
    return this._servicePrivateKey;
  }

  // uaa_password - computed: false, optional: true, required: false
  private _uaaPassword?: string; 
  public get uaaPassword() {
    return this.getStringAttribute('uaa_password');
  }
  public set uaaPassword(value: string) {
    this._uaaPassword = value;
  }
  public resetUaaPassword() {
    this._uaaPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uaaPasswordInput() {
    return this._uaaPassword;
  }

  // uaa_username - computed: false, optional: true, required: false
  private _uaaUsername?: string; 
  public get uaaUsername() {
    return this.getStringAttribute('uaa_username');
  }
  public set uaaUsername(value: string) {
    this._uaaUsername = value;
  }
  public resetUaaUsername() {
    this._uaaUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uaaUsernameInput() {
    return this._uaaUsername;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/notification_subscriber hsdp_notification_subscriber}
*/
export class NotificationSubscriber extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hsdp_notification_subscriber";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NotificationSubscriber resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NotificationSubscriber to import
  * @param importFromId The id of the existing NotificationSubscriber that should be imported. Refer to the {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/notification_subscriber#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NotificationSubscriber to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hsdp_notification_subscriber", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/notification_subscriber hsdp_notification_subscriber} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationSubscriberConfig
  */
  public constructor(scope: Construct, id: string, config: NotificationSubscriberConfig) {
    super(scope, id, {
      terraformResourceType: 'hsdp_notification_subscriber',
      terraformGeneratorMetadata: {
        providerName: 'hsdp',
        providerVersion: '0.71.0',
        providerVersionConstraint: '0.71.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._managingOrganization = config.managingOrganization;
    this._managingOrganizationId = config.managingOrganizationId;
    this._softDelete = config.softDelete;
    this._subscriberProductName = config.subscriberProductName;
    this._subscriberServiceBaseUrl = config.subscriberServiceBaseUrl;
    this._subscriberServiceInstanceName = config.subscriberServiceInstanceName;
    this._subscriberServiceName = config.subscriberServiceName;
    this._subscriberServicePathUrl = config.subscriberServicePathUrl;
    this._principal.internalValue = config.principal;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // managing_organization - computed: false, optional: false, required: true
  private _managingOrganization?: string; 
  public get managingOrganization() {
    return this.getStringAttribute('managing_organization');
  }
  public set managingOrganization(value: string) {
    this._managingOrganization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managingOrganizationInput() {
    return this._managingOrganization;
  }

  // managing_organization_id - computed: false, optional: false, required: true
  private _managingOrganizationId?: string; 
  public get managingOrganizationId() {
    return this.getStringAttribute('managing_organization_id');
  }
  public set managingOrganizationId(value: string) {
    this._managingOrganizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managingOrganizationIdInput() {
    return this._managingOrganizationId;
  }

  // soft_delete - computed: false, optional: true, required: false
  private _softDelete?: boolean | cdktf.IResolvable; 
  public get softDelete() {
    return this.getBooleanAttribute('soft_delete');
  }
  public set softDelete(value: boolean | cdktf.IResolvable) {
    this._softDelete = value;
  }
  public resetSoftDelete() {
    this._softDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softDeleteInput() {
    return this._softDelete;
  }

  // subscriber_product_name - computed: false, optional: true, required: false
  private _subscriberProductName?: string; 
  public get subscriberProductName() {
    return this.getStringAttribute('subscriber_product_name');
  }
  public set subscriberProductName(value: string) {
    this._subscriberProductName = value;
  }
  public resetSubscriberProductName() {
    this._subscriberProductName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriberProductNameInput() {
    return this._subscriberProductName;
  }

  // subscriber_service_base_url - computed: false, optional: false, required: true
  private _subscriberServiceBaseUrl?: string; 
  public get subscriberServiceBaseUrl() {
    return this.getStringAttribute('subscriber_service_base_url');
  }
  public set subscriberServiceBaseUrl(value: string) {
    this._subscriberServiceBaseUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriberServiceBaseUrlInput() {
    return this._subscriberServiceBaseUrl;
  }

  // subscriber_service_instance_name - computed: false, optional: false, required: true
  private _subscriberServiceInstanceName?: string; 
  public get subscriberServiceInstanceName() {
    return this.getStringAttribute('subscriber_service_instance_name');
  }
  public set subscriberServiceInstanceName(value: string) {
    this._subscriberServiceInstanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriberServiceInstanceNameInput() {
    return this._subscriberServiceInstanceName;
  }

  // subscriber_service_name - computed: false, optional: false, required: true
  private _subscriberServiceName?: string; 
  public get subscriberServiceName() {
    return this.getStringAttribute('subscriber_service_name');
  }
  public set subscriberServiceName(value: string) {
    this._subscriberServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriberServiceNameInput() {
    return this._subscriberServiceName;
  }

  // subscriber_service_path_url - computed: false, optional: false, required: true
  private _subscriberServicePathUrl?: string; 
  public get subscriberServicePathUrl() {
    return this.getStringAttribute('subscriber_service_path_url');
  }
  public set subscriberServicePathUrl(value: string) {
    this._subscriberServicePathUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriberServicePathUrlInput() {
    return this._subscriberServicePathUrl;
  }

  // principal - computed: false, optional: true, required: false
  private _principal = new NotificationSubscriberPrincipalOutputReference(this, "principal");
  public get principal() {
    return this._principal;
  }
  public putPrincipal(value: NotificationSubscriberPrincipal) {
    this._principal.internalValue = value;
  }
  public resetPrincipal() {
    this._principal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      managing_organization: cdktf.stringToTerraform(this._managingOrganization),
      managing_organization_id: cdktf.stringToTerraform(this._managingOrganizationId),
      soft_delete: cdktf.booleanToTerraform(this._softDelete),
      subscriber_product_name: cdktf.stringToTerraform(this._subscriberProductName),
      subscriber_service_base_url: cdktf.stringToTerraform(this._subscriberServiceBaseUrl),
      subscriber_service_instance_name: cdktf.stringToTerraform(this._subscriberServiceInstanceName),
      subscriber_service_name: cdktf.stringToTerraform(this._subscriberServiceName),
      subscriber_service_path_url: cdktf.stringToTerraform(this._subscriberServicePathUrl),
      principal: notificationSubscriberPrincipalToTerraform(this._principal.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      managing_organization: {
        value: cdktf.stringToHclTerraform(this._managingOrganization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managing_organization_id: {
        value: cdktf.stringToHclTerraform(this._managingOrganizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      soft_delete: {
        value: cdktf.booleanToHclTerraform(this._softDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      subscriber_product_name: {
        value: cdktf.stringToHclTerraform(this._subscriberProductName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscriber_service_base_url: {
        value: cdktf.stringToHclTerraform(this._subscriberServiceBaseUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscriber_service_instance_name: {
        value: cdktf.stringToHclTerraform(this._subscriberServiceInstanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscriber_service_name: {
        value: cdktf.stringToHclTerraform(this._subscriberServiceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscriber_service_path_url: {
        value: cdktf.stringToHclTerraform(this._subscriberServicePathUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      principal: {
        value: notificationSubscriberPrincipalToHclTerraform(this._principal.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NotificationSubscriberPrincipalList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
