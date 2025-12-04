// https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/iam_sms_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamSmsGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/iam_sms_gateway#activation_expiry IamSmsGateway#activation_expiry}
  */
  readonly activationExpiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/iam_sms_gateway#gateway_provider IamSmsGateway#gateway_provider}
  */
  readonly gatewayProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/iam_sms_gateway#id IamSmsGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/iam_sms_gateway#organization_id IamSmsGateway#organization_id}
  */
  readonly organizationId: string;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/iam_sms_gateway#credentials IamSmsGateway#credentials}
  */
  readonly credentials: IamSmsGatewayCredentials;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/iam_sms_gateway#properties IamSmsGateway#properties}
  */
  readonly properties: IamSmsGatewayProperties;
}
export interface IamSmsGatewayCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/iam_sms_gateway#token IamSmsGateway#token}
  */
  readonly token: string;
}

export function iamSmsGatewayCredentialsToTerraform(struct?: IamSmsGatewayCredentialsOutputReference | IamSmsGatewayCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function iamSmsGatewayCredentialsToHclTerraform(struct?: IamSmsGatewayCredentialsOutputReference | IamSmsGatewayCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamSmsGatewayCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IamSmsGatewayCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamSmsGatewayCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._token = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._token = value.token;
    }
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}
export interface IamSmsGatewayProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/iam_sms_gateway#endpoint IamSmsGateway#endpoint}
  */
  readonly endpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/iam_sms_gateway#from_number IamSmsGateway#from_number}
  */
  readonly fromNumber: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/iam_sms_gateway#sid IamSmsGateway#sid}
  */
  readonly sid: string;
}

export function iamSmsGatewayPropertiesToTerraform(struct?: IamSmsGatewayPropertiesOutputReference | IamSmsGatewayProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    from_number: cdktf.stringToTerraform(struct!.fromNumber),
    sid: cdktf.stringToTerraform(struct!.sid),
  }
}


export function iamSmsGatewayPropertiesToHclTerraform(struct?: IamSmsGatewayPropertiesOutputReference | IamSmsGatewayProperties): any {
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
    from_number: {
      value: cdktf.stringToHclTerraform(struct!.fromNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sid: {
      value: cdktf.stringToHclTerraform(struct!.sid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamSmsGatewayPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IamSmsGatewayProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._fromNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromNumber = this._fromNumber;
    }
    if (this._sid !== undefined) {
      hasAnyValues = true;
      internalValueResult.sid = this._sid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamSmsGatewayProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpoint = undefined;
      this._fromNumber = undefined;
      this._sid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpoint = value.endpoint;
      this._fromNumber = value.fromNumber;
      this._sid = value.sid;
    }
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // from_number - computed: false, optional: false, required: true
  private _fromNumber?: string; 
  public get fromNumber() {
    return this.getStringAttribute('from_number');
  }
  public set fromNumber(value: string) {
    this._fromNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromNumberInput() {
    return this._fromNumber;
  }

  // sid - computed: false, optional: false, required: true
  private _sid?: string; 
  public get sid() {
    return this.getStringAttribute('sid');
  }
  public set sid(value: string) {
    this._sid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sidInput() {
    return this._sid;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/iam_sms_gateway hsdp_iam_sms_gateway}
*/
export class IamSmsGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hsdp_iam_sms_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IamSmsGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamSmsGateway to import
  * @param importFromId The id of the existing IamSmsGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/iam_sms_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamSmsGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hsdp_iam_sms_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/iam_sms_gateway hsdp_iam_sms_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamSmsGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: IamSmsGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'hsdp_iam_sms_gateway',
      terraformGeneratorMetadata: {
        providerName: 'hsdp',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activationExpiry = config.activationExpiry;
    this._gatewayProvider = config.gatewayProvider;
    this._id = config.id;
    this._organizationId = config.organizationId;
    this._credentials.internalValue = config.credentials;
    this._properties.internalValue = config.properties;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activation_expiry - computed: false, optional: true, required: false
  private _activationExpiry?: number; 
  public get activationExpiry() {
    return this.getNumberAttribute('activation_expiry');
  }
  public set activationExpiry(value: number) {
    this._activationExpiry = value;
  }
  public resetActivationExpiry() {
    this._activationExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activationExpiryInput() {
    return this._activationExpiry;
  }

  // gateway_provider - computed: false, optional: true, required: false
  private _gatewayProvider?: string; 
  public get gatewayProvider() {
    return this.getStringAttribute('gateway_provider');
  }
  public set gatewayProvider(value: string) {
    this._gatewayProvider = value;
  }
  public resetGatewayProvider() {
    this._gatewayProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayProviderInput() {
    return this._gatewayProvider;
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

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // query_retrieve_service_id - computed: true, optional: false, required: false
  public get queryRetrieveServiceId() {
    return this.getStringAttribute('query_retrieve_service_id');
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials = new IamSmsGatewayCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: IamSmsGatewayCredentials) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // properties - computed: false, optional: false, required: true
  private _properties = new IamSmsGatewayPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: IamSmsGatewayProperties) {
    this._properties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      activation_expiry: cdktf.numberToTerraform(this._activationExpiry),
      gateway_provider: cdktf.stringToTerraform(this._gatewayProvider),
      id: cdktf.stringToTerraform(this._id),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      credentials: iamSmsGatewayCredentialsToTerraform(this._credentials.internalValue),
      properties: iamSmsGatewayPropertiesToTerraform(this._properties.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      activation_expiry: {
        value: cdktf.numberToHclTerraform(this._activationExpiry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gateway_provider: {
        value: cdktf.stringToHclTerraform(this._gatewayProvider),
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
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credentials: {
        value: iamSmsGatewayCredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IamSmsGatewayCredentialsList",
      },
      properties: {
        value: iamSmsGatewayPropertiesToHclTerraform(this._properties.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IamSmsGatewayPropertiesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
