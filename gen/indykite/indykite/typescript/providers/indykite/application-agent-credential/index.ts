// https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/application_agent_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationAgentCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier of Application Agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/application_agent_credential#app_agent_id ApplicationAgentCredential#app_agent_id}
  */
  readonly appAgentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/application_agent_credential#display_name ApplicationAgentCredential#display_name}
  */
  readonly displayName?: string;
  /**
  * Optional date-time when credentials are going to expire
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/application_agent_credential#expire_time ApplicationAgentCredential#expire_time}
  */
  readonly expireTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/application_agent_credential#id ApplicationAgentCredential#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Provide your onw Public key in JWK format, otherwise new pair is generated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/application_agent_credential#public_key_jwk ApplicationAgentCredential#public_key_jwk}
  */
  readonly publicKeyJwk?: string;
  /**
  * Provide your onw Public key in PEM format, otherwise new pair is generated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/application_agent_credential#public_key_pem ApplicationAgentCredential#public_key_pem}
  */
  readonly publicKeyPem?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/application_agent_credential#timeouts ApplicationAgentCredential#timeouts}
  */
  readonly timeouts?: ApplicationAgentCredentialTimeouts;
}
export interface ApplicationAgentCredentialTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/application_agent_credential#create ApplicationAgentCredential#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/application_agent_credential#default ApplicationAgentCredential#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/application_agent_credential#delete ApplicationAgentCredential#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/application_agent_credential#read ApplicationAgentCredential#read}
  */
  readonly read?: string;
}

export function applicationAgentCredentialTimeoutsToTerraform(struct?: ApplicationAgentCredentialTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function applicationAgentCredentialTimeoutsToHclTerraform(struct?: ApplicationAgentCredentialTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationAgentCredentialTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationAgentCredentialTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationAgentCredentialTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._default = value.default;
      this._delete = value.delete;
      this._read = value.read;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/application_agent_credential indykite_application_agent_credential}
*/
export class ApplicationAgentCredential extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "indykite_application_agent_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplicationAgentCredential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationAgentCredential to import
  * @param importFromId The id of the existing ApplicationAgentCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/application_agent_credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationAgentCredential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "indykite_application_agent_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/application_agent_credential indykite_application_agent_credential} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationAgentCredentialConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationAgentCredentialConfig) {
    super(scope, id, {
      terraformResourceType: 'indykite_application_agent_credential',
      terraformGeneratorMetadata: {
        providerName: 'indykite',
        providerVersion: '0.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appAgentId = config.appAgentId;
    this._displayName = config.displayName;
    this._expireTime = config.expireTime;
    this._id = config.id;
    this._publicKeyJwk = config.publicKeyJwk;
    this._publicKeyPem = config.publicKeyPem;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_config - computed: true, optional: false, required: false
  public get agentConfig() {
    return this.getStringAttribute('agent_config');
  }

  // app_agent_id - computed: false, optional: false, required: true
  private _appAgentId?: string; 
  public get appAgentId() {
    return this.getStringAttribute('app_agent_id');
  }
  public set appAgentId(value: string) {
    this._appAgentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appAgentIdInput() {
    return this._appAgentId;
  }

  // app_space_id - computed: true, optional: false, required: false
  public get appSpaceId() {
    return this.getStringAttribute('app_space_id');
  }

  // application_id - computed: true, optional: false, required: false
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // customer_id - computed: true, optional: false, required: false
  public get customerId() {
    return this.getStringAttribute('customer_id');
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // expire_time - computed: false, optional: true, required: false
  private _expireTime?: string; 
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }
  public set expireTime(value: string) {
    this._expireTime = value;
  }
  public resetExpireTime() {
    this._expireTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireTimeInput() {
    return this._expireTime;
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

  // kid - computed: true, optional: false, required: false
  public get kid() {
    return this.getStringAttribute('kid');
  }

  // public_key_jwk - computed: false, optional: true, required: false
  private _publicKeyJwk?: string; 
  public get publicKeyJwk() {
    return this.getStringAttribute('public_key_jwk');
  }
  public set publicKeyJwk(value: string) {
    this._publicKeyJwk = value;
  }
  public resetPublicKeyJwk() {
    this._publicKeyJwk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyJwkInput() {
    return this._publicKeyJwk;
  }

  // public_key_pem - computed: false, optional: true, required: false
  private _publicKeyPem?: string; 
  public get publicKeyPem() {
    return this.getStringAttribute('public_key_pem');
  }
  public set publicKeyPem(value: string) {
    this._publicKeyPem = value;
  }
  public resetPublicKeyPem() {
    this._publicKeyPem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyPemInput() {
    return this._publicKeyPem;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApplicationAgentCredentialTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApplicationAgentCredentialTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_agent_id: cdktf.stringToTerraform(this._appAgentId),
      display_name: cdktf.stringToTerraform(this._displayName),
      expire_time: cdktf.stringToTerraform(this._expireTime),
      id: cdktf.stringToTerraform(this._id),
      public_key_jwk: cdktf.stringToTerraform(this._publicKeyJwk),
      public_key_pem: cdktf.stringToTerraform(this._publicKeyPem),
      timeouts: applicationAgentCredentialTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_agent_id: {
        value: cdktf.stringToHclTerraform(this._appAgentId),
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
      expire_time: {
        value: cdktf.stringToHclTerraform(this._expireTime),
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
      public_key_jwk: {
        value: cdktf.stringToHclTerraform(this._publicKeyJwk),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_key_pem: {
        value: cdktf.stringToHclTerraform(this._publicKeyPem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: applicationAgentCredentialTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationAgentCredentialTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
