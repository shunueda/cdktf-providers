// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/tls_ssl_profile_policy_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanTlsSslProfilePolicyDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/tls_ssl_profile_policy_definition#id DataSdwanTlsSslProfilePolicyDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/tls_ssl_profile_policy_definition sdwan_tls_ssl_profile_policy_definition}
*/
export class DataSdwanTlsSslProfilePolicyDefinition extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_tls_ssl_profile_policy_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanTlsSslProfilePolicyDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanTlsSslProfilePolicyDefinition to import
  * @param importFromId The id of the existing DataSdwanTlsSslProfilePolicyDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/tls_ssl_profile_policy_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanTlsSslProfilePolicyDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_tls_ssl_profile_policy_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/tls_ssl_profile_policy_definition sdwan_tls_ssl_profile_policy_definition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanTlsSslProfilePolicyDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: DataSdwanTlsSslProfilePolicyDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_tls_ssl_profile_policy_definition',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_url_list_id - computed: true, optional: false, required: false
  public get allowUrlListId() {
    return this.getStringAttribute('allow_url_list_id');
  }

  // allow_url_list_version - computed: true, optional: false, required: false
  public get allowUrlListVersion() {
    return this.getNumberAttribute('allow_url_list_version');
  }

  // block_url_list_id - computed: true, optional: false, required: false
  public get blockUrlListId() {
    return this.getStringAttribute('block_url_list_id');
  }

  // block_url_list_version - computed: true, optional: false, required: false
  public get blockUrlListVersion() {
    return this.getNumberAttribute('block_url_list_version');
  }

  // decrypt_categories - computed: true, optional: false, required: false
  public get decryptCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('decrypt_categories'));
  }

  // decrypt_threshold - computed: true, optional: false, required: false
  public get decryptThreshold() {
    return this.getStringAttribute('decrypt_threshold');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // fail_decrypt - computed: true, optional: false, required: false
  public get failDecrypt() {
    return this.getBooleanAttribute('fail_decrypt');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // never_decrypt_categories - computed: true, optional: false, required: false
  public get neverDecryptCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('never_decrypt_categories'));
  }

  // reputation - computed: true, optional: false, required: false
  public get reputation() {
    return this.getBooleanAttribute('reputation');
  }

  // skip_decrypt_categories - computed: true, optional: false, required: false
  public get skipDecryptCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('skip_decrypt_categories'));
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
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
