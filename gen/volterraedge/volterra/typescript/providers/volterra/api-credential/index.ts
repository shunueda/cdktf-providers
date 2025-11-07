// https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_credential#api_credential_password ApiCredential#api_credential_password}
  */
  readonly apiCredentialPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_credential#api_credential_type ApiCredential#api_credential_type}
  */
  readonly apiCredentialType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_credential#automatic_approval_api_token ApiCredential#automatic_approval_api_token}
  */
  readonly automaticApprovalApiToken?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_credential#created_at ApiCredential#created_at}
  */
  readonly createdAt: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_credential#expiry_days ApiCredential#expiry_days}
  */
  readonly expiryDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_credential#id ApiCredential#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_credential#name ApiCredential#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_credential#virtual_k8s_name ApiCredential#virtual_k8s_name}
  */
  readonly virtualK8SName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_credential#virtual_k8s_namespace ApiCredential#virtual_k8s_namespace}
  */
  readonly virtualK8SNamespace?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_credential volterra_api_credential}
*/
export class ApiCredential extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_api_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiCredential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiCredential to import
  * @param importFromId The id of the existing ApiCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiCredential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_api_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/api_credential volterra_api_credential} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiCredentialConfig
  */
  public constructor(scope: Construct, id: string, config: ApiCredentialConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_api_credential',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiCredentialPassword = config.apiCredentialPassword;
    this._apiCredentialType = config.apiCredentialType;
    this._automaticApprovalApiToken = config.automaticApprovalApiToken;
    this._createdAt = config.createdAt;
    this._expiryDays = config.expiryDays;
    this._id = config.id;
    this._name = config.name;
    this._virtualK8SName = config.virtualK8SName;
    this._virtualK8SNamespace = config.virtualK8SNamespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_credential_password - computed: false, optional: true, required: false
  private _apiCredentialPassword?: string; 
  public get apiCredentialPassword() {
    return this.getStringAttribute('api_credential_password');
  }
  public set apiCredentialPassword(value: string) {
    this._apiCredentialPassword = value;
  }
  public resetApiCredentialPassword() {
    this._apiCredentialPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiCredentialPasswordInput() {
    return this._apiCredentialPassword;
  }

  // api_credential_type - computed: false, optional: false, required: true
  private _apiCredentialType?: string; 
  public get apiCredentialType() {
    return this.getStringAttribute('api_credential_type');
  }
  public set apiCredentialType(value: string) {
    this._apiCredentialType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiCredentialTypeInput() {
    return this._apiCredentialType;
  }

  // automatic_approval_api_token - computed: false, optional: true, required: false
  private _automaticApprovalApiToken?: boolean | cdktf.IResolvable; 
  public get automaticApprovalApiToken() {
    return this.getBooleanAttribute('automatic_approval_api_token');
  }
  public set automaticApprovalApiToken(value: boolean | cdktf.IResolvable) {
    this._automaticApprovalApiToken = value;
  }
  public resetAutomaticApprovalApiToken() {
    this._automaticApprovalApiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticApprovalApiTokenInput() {
    return this._automaticApprovalApiToken;
  }

  // created_at - computed: false, optional: false, required: true
  private _createdAt?: string; 
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }
  public set createdAt(value: string) {
    this._createdAt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // data - computed: true, optional: false, required: false
  public get data() {
    return this.getStringAttribute('data');
  }

  // expiration_timestamp - computed: true, optional: false, required: false
  public get expirationTimestamp() {
    return this.getStringAttribute('expiration_timestamp');
  }

  // expiry_days - computed: false, optional: true, required: false
  private _expiryDays?: number; 
  public get expiryDays() {
    return this.getNumberAttribute('expiry_days');
  }
  public set expiryDays(value: number) {
    this._expiryDays = value;
  }
  public resetExpiryDays() {
    this._expiryDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryDaysInput() {
    return this._expiryDays;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // virtual_k8s_name - computed: false, optional: true, required: false
  private _virtualK8SName?: string; 
  public get virtualK8SName() {
    return this.getStringAttribute('virtual_k8s_name');
  }
  public set virtualK8SName(value: string) {
    this._virtualK8SName = value;
  }
  public resetVirtualK8SName() {
    this._virtualK8SName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualK8SNameInput() {
    return this._virtualK8SName;
  }

  // virtual_k8s_namespace - computed: false, optional: true, required: false
  private _virtualK8SNamespace?: string; 
  public get virtualK8SNamespace() {
    return this.getStringAttribute('virtual_k8s_namespace');
  }
  public set virtualK8SNamespace(value: string) {
    this._virtualK8SNamespace = value;
  }
  public resetVirtualK8SNamespace() {
    this._virtualK8SNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualK8SNamespaceInput() {
    return this._virtualK8SNamespace;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_credential_password: cdktf.stringToTerraform(this._apiCredentialPassword),
      api_credential_type: cdktf.stringToTerraform(this._apiCredentialType),
      automatic_approval_api_token: cdktf.booleanToTerraform(this._automaticApprovalApiToken),
      created_at: cdktf.stringToTerraform(this._createdAt),
      expiry_days: cdktf.numberToTerraform(this._expiryDays),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      virtual_k8s_name: cdktf.stringToTerraform(this._virtualK8SName),
      virtual_k8s_namespace: cdktf.stringToTerraform(this._virtualK8SNamespace),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_credential_password: {
        value: cdktf.stringToHclTerraform(this._apiCredentialPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_credential_type: {
        value: cdktf.stringToHclTerraform(this._apiCredentialType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      automatic_approval_api_token: {
        value: cdktf.booleanToHclTerraform(this._automaticApprovalApiToken),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      created_at: {
        value: cdktf.stringToHclTerraform(this._createdAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiry_days: {
        value: cdktf.numberToHclTerraform(this._expiryDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_k8s_name: {
        value: cdktf.stringToHclTerraform(this._virtualK8SName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_k8s_namespace: {
        value: cdktf.stringToHclTerraform(this._virtualK8SNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
