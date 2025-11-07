// https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/api_access_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiAccessRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/api_access_rule#ca_ids ApiAccessRule#ca_ids}
  */
  readonly caIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/api_access_rule#cns ApiAccessRule#cns}
  */
  readonly cns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/api_access_rule#description ApiAccessRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/api_access_rule#id ApiAccessRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/api_access_rule#ip_ranges ApiAccessRule#ip_ranges}
  */
  readonly ipRanges?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/api_access_rule outscale_api_access_rule}
*/
export class ApiAccessRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "outscale_api_access_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiAccessRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiAccessRule to import
  * @param importFromId The id of the existing ApiAccessRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/api_access_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiAccessRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "outscale_api_access_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/api_access_rule outscale_api_access_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiAccessRuleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ApiAccessRuleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'outscale_api_access_rule',
      terraformGeneratorMetadata: {
        providerName: 'outscale',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._caIds = config.caIds;
    this._cns = config.cns;
    this._description = config.description;
    this._id = config.id;
    this._ipRanges = config.ipRanges;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_access_rule_id - computed: true, optional: false, required: false
  public get apiAccessRuleId() {
    return this.getStringAttribute('api_access_rule_id');
  }

  // ca_ids - computed: false, optional: true, required: false
  private _caIds?: string[]; 
  public get caIds() {
    return cdktf.Fn.tolist(this.getListAttribute('ca_ids'));
  }
  public set caIds(value: string[]) {
    this._caIds = value;
  }
  public resetCaIds() {
    this._caIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caIdsInput() {
    return this._caIds;
  }

  // cns - computed: false, optional: true, required: false
  private _cns?: string[]; 
  public get cns() {
    return cdktf.Fn.tolist(this.getListAttribute('cns'));
  }
  public set cns(value: string[]) {
    this._cns = value;
  }
  public resetCns() {
    this._cns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnsInput() {
    return this._cns;
  }

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

  // ip_ranges - computed: false, optional: true, required: false
  private _ipRanges?: string[]; 
  public get ipRanges() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_ranges'));
  }
  public set ipRanges(value: string[]) {
    this._ipRanges = value;
  }
  public resetIpRanges() {
    this._ipRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangesInput() {
    return this._ipRanges;
  }

  // request_id - computed: true, optional: false, required: false
  public get requestId() {
    return this.getStringAttribute('request_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ca_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._caIds),
      cns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cns),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipRanges),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._caIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cns),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
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
      ip_ranges: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipRanges),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
