// https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/atp_security_exceptions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AtpSecurityExceptionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/atp_security_exceptions#bypass_urls AtpSecurityExceptions#bypass_urls}
  */
  readonly bypassUrls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/atp_security_exceptions#id AtpSecurityExceptions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/atp_security_exceptions zia_atp_security_exceptions}
*/
export class AtpSecurityExceptions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_atp_security_exceptions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AtpSecurityExceptions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AtpSecurityExceptions to import
  * @param importFromId The id of the existing AtpSecurityExceptions that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/atp_security_exceptions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AtpSecurityExceptions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_atp_security_exceptions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/atp_security_exceptions zia_atp_security_exceptions} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AtpSecurityExceptionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AtpSecurityExceptionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zia_atp_security_exceptions',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.5.3',
        providerVersionConstraint: '4.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bypassUrls = config.bypassUrls;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bypass_urls - computed: true, optional: true, required: false
  private _bypassUrls?: string[]; 
  public get bypassUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('bypass_urls'));
  }
  public set bypassUrls(value: string[]) {
    this._bypassUrls = value;
  }
  public resetBypassUrls() {
    this._bypassUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassUrlsInput() {
    return this._bypassUrls;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bypass_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bypassUrls),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bypass_urls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bypassUrls),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
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
