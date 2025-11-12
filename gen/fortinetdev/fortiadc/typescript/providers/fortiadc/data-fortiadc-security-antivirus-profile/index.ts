// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/security_antivirus_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiadcSecurityAntivirusProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/security_antivirus_profile#id DataFortiadcSecurityAntivirusProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/security_antivirus_profile#mkey DataFortiadcSecurityAntivirusProfile#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/security_antivirus_profile#vdom DataFortiadcSecurityAntivirusProfile#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/security_antivirus_profile fortiadc_security_antivirus_profile}
*/
export class DataFortiadcSecurityAntivirusProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_security_antivirus_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiadcSecurityAntivirusProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiadcSecurityAntivirusProfile to import
  * @param importFromId The id of the existing DataFortiadcSecurityAntivirusProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/security_antivirus_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiadcSecurityAntivirusProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_security_antivirus_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/security_antivirus_profile fortiadc_security_antivirus_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiadcSecurityAntivirusProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortiadcSecurityAntivirusProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_security_antivirus_profile',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1',
        providerVersionConstraint: '1.3.1'
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
    this._mkey = config.mkey;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // analytics_db - computed: true, optional: false, required: false
  public get analyticsDb() {
    return this.getStringAttribute('analytics_db');
  }

  // analytics_max_upload - computed: true, optional: false, required: false
  public get analyticsMaxUpload() {
    return this.getStringAttribute('analytics_max_upload');
  }

  // av_block_log - computed: true, optional: false, required: false
  public get avBlockLog() {
    return this.getStringAttribute('av_block_log');
  }

  // av_virus_log - computed: true, optional: false, required: false
  public get avVirusLog() {
    return this.getStringAttribute('av_virus_log');
  }

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
  }

  // emulator - computed: true, optional: false, required: false
  public get emulator() {
    return this.getStringAttribute('emulator');
  }

  // ftgd_analytics - computed: true, optional: false, required: false
  public get ftgdAnalytics() {
    return this.getStringAttribute('ftgd_analytics');
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

  // mkey - computed: false, optional: false, required: true
  private _mkey?: string; 
  public get mkey() {
    return this.getStringAttribute('mkey');
  }
  public set mkey(value: string) {
    this._mkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mkeyInput() {
    return this._mkey;
  }

  // options - computed: true, optional: false, required: false
  public get options() {
    return this.getStringAttribute('options');
  }

  // oversize - computed: true, optional: false, required: false
  public get oversize() {
    return this.getStringAttribute('oversize');
  }

  // oversize_limit - computed: true, optional: false, required: false
  public get oversizeLimit() {
    return this.getStringAttribute('oversize_limit');
  }

  // scan_bzip2 - computed: true, optional: false, required: false
  public get scanBzip2() {
    return this.getStringAttribute('scan_bzip2');
  }

  // streaming_content_bypass - computed: true, optional: false, required: false
  public get streamingContentBypass() {
    return this.getStringAttribute('streaming_content_bypass');
  }

  // uncomp_nest_limit - computed: true, optional: false, required: false
  public get uncompNestLimit() {
    return this.getStringAttribute('uncomp_nest_limit');
  }

  // uncomp_size_limit - computed: true, optional: false, required: false
  public get uncompSizeLimit() {
    return this.getStringAttribute('uncomp_size_limit');
  }

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      mkey: cdktf.stringToTerraform(this._mkey),
      vdom: cdktf.stringToTerraform(this._vdom),
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
      mkey: {
        value: cdktf.stringToHclTerraform(this._mkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom: {
        value: cdktf.stringToHclTerraform(this._vdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
