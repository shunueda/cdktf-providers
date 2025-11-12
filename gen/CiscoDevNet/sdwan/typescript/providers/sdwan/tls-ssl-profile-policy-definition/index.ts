// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_profile_policy_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TlsSslProfilePolicyDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow URL list ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_profile_policy_definition#allow_url_list_id TlsSslProfilePolicyDefinition#allow_url_list_id}
  */
  readonly allowUrlListId?: string;
  /**
  * Allow URL list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_profile_policy_definition#allow_url_list_version TlsSslProfilePolicyDefinition#allow_url_list_version}
  */
  readonly allowUrlListVersion?: number;
  /**
  * Block URL list ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_profile_policy_definition#block_url_list_id TlsSslProfilePolicyDefinition#block_url_list_id}
  */
  readonly blockUrlListId?: string;
  /**
  * Block URL list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_profile_policy_definition#block_url_list_version TlsSslProfilePolicyDefinition#block_url_list_version}
  */
  readonly blockUrlListVersion?: number;
  /**
  * Categories that should be decrypted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_profile_policy_definition#decrypt_categories TlsSslProfilePolicyDefinition#decrypt_categories}
  */
  readonly decryptCategories?: string[];
  /**
  * Decrypt threshold
  *   - Choices: `high-risk`, `suspicious`, `moderate-risk`, `low-risk`, `trustworthy`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_profile_policy_definition#decrypt_threshold TlsSslProfilePolicyDefinition#decrypt_threshold}
  */
  readonly decryptThreshold?: string;
  /**
  * The description of the policy definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_profile_policy_definition#description TlsSslProfilePolicyDefinition#description}
  */
  readonly description: string;
  /**
  * Fail decrypt enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_profile_policy_definition#fail_decrypt TlsSslProfilePolicyDefinition#fail_decrypt}
  */
  readonly failDecrypt?: boolean | cdktf.IResolvable;
  /**
  * The policy mode
  *   - Choices: `security`, `unified`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_profile_policy_definition#mode TlsSslProfilePolicyDefinition#mode}
  */
  readonly mode?: string;
  /**
  * The name of the policy definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_profile_policy_definition#name TlsSslProfilePolicyDefinition#name}
  */
  readonly name: string;
  /**
  * Categories that should never be decrypted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_profile_policy_definition#never_decrypt_categories TlsSslProfilePolicyDefinition#never_decrypt_categories}
  */
  readonly neverDecryptCategories?: string[];
  /**
  * Reputation enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_profile_policy_definition#reputation TlsSslProfilePolicyDefinition#reputation}
  */
  readonly reputation?: boolean | cdktf.IResolvable;
  /**
  * Categories that should skipped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_profile_policy_definition#skip_decrypt_categories TlsSslProfilePolicyDefinition#skip_decrypt_categories}
  */
  readonly skipDecryptCategories?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_profile_policy_definition sdwan_tls_ssl_profile_policy_definition}
*/
export class TlsSslProfilePolicyDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_tls_ssl_profile_policy_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TlsSslProfilePolicyDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TlsSslProfilePolicyDefinition to import
  * @param importFromId The id of the existing TlsSslProfilePolicyDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_profile_policy_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TlsSslProfilePolicyDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_tls_ssl_profile_policy_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/tls_ssl_profile_policy_definition sdwan_tls_ssl_profile_policy_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TlsSslProfilePolicyDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: TlsSslProfilePolicyDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_tls_ssl_profile_policy_definition',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowUrlListId = config.allowUrlListId;
    this._allowUrlListVersion = config.allowUrlListVersion;
    this._blockUrlListId = config.blockUrlListId;
    this._blockUrlListVersion = config.blockUrlListVersion;
    this._decryptCategories = config.decryptCategories;
    this._decryptThreshold = config.decryptThreshold;
    this._description = config.description;
    this._failDecrypt = config.failDecrypt;
    this._mode = config.mode;
    this._name = config.name;
    this._neverDecryptCategories = config.neverDecryptCategories;
    this._reputation = config.reputation;
    this._skipDecryptCategories = config.skipDecryptCategories;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_url_list_id - computed: false, optional: true, required: false
  private _allowUrlListId?: string; 
  public get allowUrlListId() {
    return this.getStringAttribute('allow_url_list_id');
  }
  public set allowUrlListId(value: string) {
    this._allowUrlListId = value;
  }
  public resetAllowUrlListId() {
    this._allowUrlListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUrlListIdInput() {
    return this._allowUrlListId;
  }

  // allow_url_list_version - computed: false, optional: true, required: false
  private _allowUrlListVersion?: number; 
  public get allowUrlListVersion() {
    return this.getNumberAttribute('allow_url_list_version');
  }
  public set allowUrlListVersion(value: number) {
    this._allowUrlListVersion = value;
  }
  public resetAllowUrlListVersion() {
    this._allowUrlListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUrlListVersionInput() {
    return this._allowUrlListVersion;
  }

  // block_url_list_id - computed: false, optional: true, required: false
  private _blockUrlListId?: string; 
  public get blockUrlListId() {
    return this.getStringAttribute('block_url_list_id');
  }
  public set blockUrlListId(value: string) {
    this._blockUrlListId = value;
  }
  public resetBlockUrlListId() {
    this._blockUrlListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockUrlListIdInput() {
    return this._blockUrlListId;
  }

  // block_url_list_version - computed: false, optional: true, required: false
  private _blockUrlListVersion?: number; 
  public get blockUrlListVersion() {
    return this.getNumberAttribute('block_url_list_version');
  }
  public set blockUrlListVersion(value: number) {
    this._blockUrlListVersion = value;
  }
  public resetBlockUrlListVersion() {
    this._blockUrlListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockUrlListVersionInput() {
    return this._blockUrlListVersion;
  }

  // decrypt_categories - computed: false, optional: true, required: false
  private _decryptCategories?: string[]; 
  public get decryptCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('decrypt_categories'));
  }
  public set decryptCategories(value: string[]) {
    this._decryptCategories = value;
  }
  public resetDecryptCategories() {
    this._decryptCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptCategoriesInput() {
    return this._decryptCategories;
  }

  // decrypt_threshold - computed: false, optional: true, required: false
  private _decryptThreshold?: string; 
  public get decryptThreshold() {
    return this.getStringAttribute('decrypt_threshold');
  }
  public set decryptThreshold(value: string) {
    this._decryptThreshold = value;
  }
  public resetDecryptThreshold() {
    this._decryptThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptThresholdInput() {
    return this._decryptThreshold;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // fail_decrypt - computed: false, optional: true, required: false
  private _failDecrypt?: boolean | cdktf.IResolvable; 
  public get failDecrypt() {
    return this.getBooleanAttribute('fail_decrypt');
  }
  public set failDecrypt(value: boolean | cdktf.IResolvable) {
    this._failDecrypt = value;
  }
  public resetFailDecrypt() {
    this._failDecrypt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failDecryptInput() {
    return this._failDecrypt;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // never_decrypt_categories - computed: false, optional: true, required: false
  private _neverDecryptCategories?: string[]; 
  public get neverDecryptCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('never_decrypt_categories'));
  }
  public set neverDecryptCategories(value: string[]) {
    this._neverDecryptCategories = value;
  }
  public resetNeverDecryptCategories() {
    this._neverDecryptCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neverDecryptCategoriesInput() {
    return this._neverDecryptCategories;
  }

  // reputation - computed: false, optional: true, required: false
  private _reputation?: boolean | cdktf.IResolvable; 
  public get reputation() {
    return this.getBooleanAttribute('reputation');
  }
  public set reputation(value: boolean | cdktf.IResolvable) {
    this._reputation = value;
  }
  public resetReputation() {
    this._reputation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reputationInput() {
    return this._reputation;
  }

  // skip_decrypt_categories - computed: false, optional: true, required: false
  private _skipDecryptCategories?: string[]; 
  public get skipDecryptCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('skip_decrypt_categories'));
  }
  public set skipDecryptCategories(value: string[]) {
    this._skipDecryptCategories = value;
  }
  public resetSkipDecryptCategories() {
    this._skipDecryptCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipDecryptCategoriesInput() {
    return this._skipDecryptCategories;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_url_list_id: cdktf.stringToTerraform(this._allowUrlListId),
      allow_url_list_version: cdktf.numberToTerraform(this._allowUrlListVersion),
      block_url_list_id: cdktf.stringToTerraform(this._blockUrlListId),
      block_url_list_version: cdktf.numberToTerraform(this._blockUrlListVersion),
      decrypt_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._decryptCategories),
      decrypt_threshold: cdktf.stringToTerraform(this._decryptThreshold),
      description: cdktf.stringToTerraform(this._description),
      fail_decrypt: cdktf.booleanToTerraform(this._failDecrypt),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      never_decrypt_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._neverDecryptCategories),
      reputation: cdktf.booleanToTerraform(this._reputation),
      skip_decrypt_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._skipDecryptCategories),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_url_list_id: {
        value: cdktf.stringToHclTerraform(this._allowUrlListId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_url_list_version: {
        value: cdktf.numberToHclTerraform(this._allowUrlListVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      block_url_list_id: {
        value: cdktf.stringToHclTerraform(this._blockUrlListId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_url_list_version: {
        value: cdktf.numberToHclTerraform(this._blockUrlListVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      decrypt_categories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._decryptCategories),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      decrypt_threshold: {
        value: cdktf.stringToHclTerraform(this._decryptThreshold),
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
      fail_decrypt: {
        value: cdktf.booleanToHclTerraform(this._failDecrypt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
      never_decrypt_categories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._neverDecryptCategories),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      reputation: {
        value: cdktf.booleanToHclTerraform(this._reputation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_decrypt_categories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._skipDecryptCategories),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
