// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_gcp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProducerGcpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Protection from accidental deletion of this item, [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_gcp#delete_protection ProducerGcp#delete_protection}
  */
  readonly deleteProtection?: string;
  /**
  * Credentials type, options are [token, key]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_gcp#gcp_cred_type ProducerGcp#gcp_cred_type}
  */
  readonly gcpCredType?: string;
  /**
  * Base64-encoded service account private key text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_gcp#gcp_key ProducerGcp#gcp_key}
  */
  readonly gcpKey?: string;
  /**
  * Service account key algorithm, e.g. KEY_ALG_RSA_1024
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_gcp#gcp_key_algo ProducerGcp#gcp_key_algo}
  */
  readonly gcpKeyAlgo?: string;
  /**
  * GCP service account email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_gcp#gcp_sa_email ProducerGcp#gcp_sa_email}
  */
  readonly gcpSaEmail?: string;
  /**
  * Access token scopes list, e.g. scope1,scope2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_gcp#gcp_token_scopes ProducerGcp#gcp_token_scopes}
  */
  readonly gcpTokenScopes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_gcp#id ProducerGcp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Producer name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_gcp#name ProducerGcp#name}
  */
  readonly name: string;
  /**
  * Dynamic producer encryption key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_gcp#producer_encryption_key_name ProducerGcp#producer_encryption_key_name}
  */
  readonly producerEncryptionKeyName?: string;
  /**
  * Role binding definitions in json format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_gcp#role_binding ProducerGcp#role_binding}
  */
  readonly roleBinding?: string;
  /**
  * The type of the gcp dynamic secret. Options[fixed, dynamic]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_gcp#service_account_type ProducerGcp#service_account_type}
  */
  readonly serviceAccountType?: string;
  /**
  * List of the tags attached to this secret. To specify multiple tags use argument multiple times: --tag Tag1 --tag Tag2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_gcp#tags ProducerGcp#tags}
  */
  readonly tags?: string[];
  /**
  * Name of existing target to use in producer creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_gcp#target_name ProducerGcp#target_name}
  */
  readonly targetName?: string;
  /**
  * User TTL (<=60m for access token)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_gcp#user_ttl ProducerGcp#user_ttl}
  */
  readonly userTtl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_gcp akeyless_producer_gcp}
*/
export class ProducerGcp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_producer_gcp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProducerGcp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProducerGcp to import
  * @param importFromId The id of the existing ProducerGcp that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_gcp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProducerGcp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_producer_gcp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_gcp akeyless_producer_gcp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProducerGcpConfig
  */
  public constructor(scope: Construct, id: string, config: ProducerGcpConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_producer_gcp',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deleteProtection = config.deleteProtection;
    this._gcpCredType = config.gcpCredType;
    this._gcpKey = config.gcpKey;
    this._gcpKeyAlgo = config.gcpKeyAlgo;
    this._gcpSaEmail = config.gcpSaEmail;
    this._gcpTokenScopes = config.gcpTokenScopes;
    this._id = config.id;
    this._name = config.name;
    this._producerEncryptionKeyName = config.producerEncryptionKeyName;
    this._roleBinding = config.roleBinding;
    this._serviceAccountType = config.serviceAccountType;
    this._tags = config.tags;
    this._targetName = config.targetName;
    this._userTtl = config.userTtl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete_protection - computed: false, optional: true, required: false
  private _deleteProtection?: string; 
  public get deleteProtection() {
    return this.getStringAttribute('delete_protection');
  }
  public set deleteProtection(value: string) {
    this._deleteProtection = value;
  }
  public resetDeleteProtection() {
    this._deleteProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteProtectionInput() {
    return this._deleteProtection;
  }

  // gcp_cred_type - computed: false, optional: true, required: false
  private _gcpCredType?: string; 
  public get gcpCredType() {
    return this.getStringAttribute('gcp_cred_type');
  }
  public set gcpCredType(value: string) {
    this._gcpCredType = value;
  }
  public resetGcpCredType() {
    this._gcpCredType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpCredTypeInput() {
    return this._gcpCredType;
  }

  // gcp_key - computed: false, optional: true, required: false
  private _gcpKey?: string; 
  public get gcpKey() {
    return this.getStringAttribute('gcp_key');
  }
  public set gcpKey(value: string) {
    this._gcpKey = value;
  }
  public resetGcpKey() {
    this._gcpKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpKeyInput() {
    return this._gcpKey;
  }

  // gcp_key_algo - computed: false, optional: true, required: false
  private _gcpKeyAlgo?: string; 
  public get gcpKeyAlgo() {
    return this.getStringAttribute('gcp_key_algo');
  }
  public set gcpKeyAlgo(value: string) {
    this._gcpKeyAlgo = value;
  }
  public resetGcpKeyAlgo() {
    this._gcpKeyAlgo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpKeyAlgoInput() {
    return this._gcpKeyAlgo;
  }

  // gcp_sa_email - computed: false, optional: true, required: false
  private _gcpSaEmail?: string; 
  public get gcpSaEmail() {
    return this.getStringAttribute('gcp_sa_email');
  }
  public set gcpSaEmail(value: string) {
    this._gcpSaEmail = value;
  }
  public resetGcpSaEmail() {
    this._gcpSaEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpSaEmailInput() {
    return this._gcpSaEmail;
  }

  // gcp_token_scopes - computed: false, optional: true, required: false
  private _gcpTokenScopes?: string; 
  public get gcpTokenScopes() {
    return this.getStringAttribute('gcp_token_scopes');
  }
  public set gcpTokenScopes(value: string) {
    this._gcpTokenScopes = value;
  }
  public resetGcpTokenScopes() {
    this._gcpTokenScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpTokenScopesInput() {
    return this._gcpTokenScopes;
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

  // producer_encryption_key_name - computed: false, optional: true, required: false
  private _producerEncryptionKeyName?: string; 
  public get producerEncryptionKeyName() {
    return this.getStringAttribute('producer_encryption_key_name');
  }
  public set producerEncryptionKeyName(value: string) {
    this._producerEncryptionKeyName = value;
  }
  public resetProducerEncryptionKeyName() {
    this._producerEncryptionKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerEncryptionKeyNameInput() {
    return this._producerEncryptionKeyName;
  }

  // role_binding - computed: false, optional: true, required: false
  private _roleBinding?: string; 
  public get roleBinding() {
    return this.getStringAttribute('role_binding');
  }
  public set roleBinding(value: string) {
    this._roleBinding = value;
  }
  public resetRoleBinding() {
    this._roleBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleBindingInput() {
    return this._roleBinding;
  }

  // service_account_type - computed: false, optional: true, required: false
  private _serviceAccountType?: string; 
  public get serviceAccountType() {
    return this.getStringAttribute('service_account_type');
  }
  public set serviceAccountType(value: string) {
    this._serviceAccountType = value;
  }
  public resetServiceAccountType() {
    this._serviceAccountType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountTypeInput() {
    return this._serviceAccountType;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // target_name - computed: false, optional: true, required: false
  private _targetName?: string; 
  public get targetName() {
    return this.getStringAttribute('target_name');
  }
  public set targetName(value: string) {
    this._targetName = value;
  }
  public resetTargetName() {
    this._targetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNameInput() {
    return this._targetName;
  }

  // user_ttl - computed: false, optional: true, required: false
  private _userTtl?: string; 
  public get userTtl() {
    return this.getStringAttribute('user_ttl');
  }
  public set userTtl(value: string) {
    this._userTtl = value;
  }
  public resetUserTtl() {
    this._userTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTtlInput() {
    return this._userTtl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_protection: cdktf.stringToTerraform(this._deleteProtection),
      gcp_cred_type: cdktf.stringToTerraform(this._gcpCredType),
      gcp_key: cdktf.stringToTerraform(this._gcpKey),
      gcp_key_algo: cdktf.stringToTerraform(this._gcpKeyAlgo),
      gcp_sa_email: cdktf.stringToTerraform(this._gcpSaEmail),
      gcp_token_scopes: cdktf.stringToTerraform(this._gcpTokenScopes),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      producer_encryption_key_name: cdktf.stringToTerraform(this._producerEncryptionKeyName),
      role_binding: cdktf.stringToTerraform(this._roleBinding),
      service_account_type: cdktf.stringToTerraform(this._serviceAccountType),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      target_name: cdktf.stringToTerraform(this._targetName),
      user_ttl: cdktf.stringToTerraform(this._userTtl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_protection: {
        value: cdktf.stringToHclTerraform(this._deleteProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_cred_type: {
        value: cdktf.stringToHclTerraform(this._gcpCredType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_key: {
        value: cdktf.stringToHclTerraform(this._gcpKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_key_algo: {
        value: cdktf.stringToHclTerraform(this._gcpKeyAlgo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_sa_email: {
        value: cdktf.stringToHclTerraform(this._gcpSaEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_token_scopes: {
        value: cdktf.stringToHclTerraform(this._gcpTokenScopes),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      producer_encryption_key_name: {
        value: cdktf.stringToHclTerraform(this._producerEncryptionKeyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_binding: {
        value: cdktf.stringToHclTerraform(this._roleBinding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account_type: {
        value: cdktf.stringToHclTerraform(this._serviceAccountType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      target_name: {
        value: cdktf.stringToHclTerraform(this._targetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_ttl: {
        value: cdktf.stringToHclTerraform(this._userTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
