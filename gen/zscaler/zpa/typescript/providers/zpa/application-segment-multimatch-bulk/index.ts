// https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/application_segment_multimatch_bulk
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationSegmentMultimatchBulkConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of application segment IDs to update match_style for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/application_segment_multimatch_bulk#application_ids ApplicationSegmentMultimatchBulk#application_ids}
  */
  readonly applicationIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/application_segment_multimatch_bulk#id ApplicationSegmentMultimatchBulk#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Match style to apply to all specified application segments. Valid values: EXCLUSIVE, INCLUSIVE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/application_segment_multimatch_bulk#match_style ApplicationSegmentMultimatchBulk#match_style}
  */
  readonly matchStyle: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/application_segment_multimatch_bulk zpa_application_segment_multimatch_bulk}
*/
export class ApplicationSegmentMultimatchBulk extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_application_segment_multimatch_bulk";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplicationSegmentMultimatchBulk resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationSegmentMultimatchBulk to import
  * @param importFromId The id of the existing ApplicationSegmentMultimatchBulk that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/application_segment_multimatch_bulk#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationSegmentMultimatchBulk to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_application_segment_multimatch_bulk", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/application_segment_multimatch_bulk zpa_application_segment_multimatch_bulk} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationSegmentMultimatchBulkConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationSegmentMultimatchBulkConfig) {
    super(scope, id, {
      terraformResourceType: 'zpa_application_segment_multimatch_bulk',
      terraformGeneratorMetadata: {
        providerName: 'zpa',
        providerVersion: '4.3.3',
        providerVersionConstraint: '4.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationIds = config.applicationIds;
    this._id = config.id;
    this._matchStyle = config.matchStyle;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_ids - computed: false, optional: false, required: true
  private _applicationIds?: string[]; 
  public get applicationIds() {
    return cdktf.Fn.tolist(this.getListAttribute('application_ids'));
  }
  public set applicationIds(value: string[]) {
    this._applicationIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdsInput() {
    return this._applicationIds;
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

  // match_style - computed: false, optional: false, required: true
  private _matchStyle?: string; 
  public get matchStyle() {
    return this.getStringAttribute('match_style');
  }
  public set matchStyle(value: string) {
    this._matchStyle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchStyleInput() {
    return this._matchStyle;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._applicationIds),
      id: cdktf.stringToTerraform(this._id),
      match_style: cdktf.stringToTerraform(this._matchStyle),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._applicationIds),
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
      match_style: {
        value: cdktf.stringToHclTerraform(this._matchStyle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
