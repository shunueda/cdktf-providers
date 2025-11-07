// https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/atp_malicious_urls
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AtpMaliciousUrlsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/atp_malicious_urls#id AtpMaliciousUrls#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/atp_malicious_urls#malicious_urls AtpMaliciousUrls#malicious_urls}
  */
  readonly maliciousUrls?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/atp_malicious_urls zia_atp_malicious_urls}
*/
export class AtpMaliciousUrls extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_atp_malicious_urls";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AtpMaliciousUrls resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AtpMaliciousUrls to import
  * @param importFromId The id of the existing AtpMaliciousUrls that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/atp_malicious_urls#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AtpMaliciousUrls to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_atp_malicious_urls", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/atp_malicious_urls zia_atp_malicious_urls} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AtpMaliciousUrlsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AtpMaliciousUrlsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zia_atp_malicious_urls',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.5.3'
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
    this._maliciousUrls = config.maliciousUrls;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // malicious_urls - computed: true, optional: true, required: false
  private _maliciousUrls?: string[]; 
  public get maliciousUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('malicious_urls'));
  }
  public set maliciousUrls(value: string[]) {
    this._maliciousUrls = value;
  }
  public resetMaliciousUrls() {
    this._maliciousUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maliciousUrlsInput() {
    return this._maliciousUrls;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      malicious_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._maliciousUrls),
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
      malicious_urls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._maliciousUrls),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
