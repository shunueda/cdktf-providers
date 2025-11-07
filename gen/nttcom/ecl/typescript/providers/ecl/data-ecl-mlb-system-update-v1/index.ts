// https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_system_update_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEclMlbSystemUpdateV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_system_update_v1#applicable DataEclMlbSystemUpdateV1#applicable}
  */
  readonly applicable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_system_update_v1#current_revision DataEclMlbSystemUpdateV1#current_revision}
  */
  readonly currentRevision?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_system_update_v1#description DataEclMlbSystemUpdateV1#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_system_update_v1#href DataEclMlbSystemUpdateV1#href}
  */
  readonly href?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_system_update_v1#id DataEclMlbSystemUpdateV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_system_update_v1#limit_datetime DataEclMlbSystemUpdateV1#limit_datetime}
  */
  readonly limitDatetime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_system_update_v1#name DataEclMlbSystemUpdateV1#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_system_update_v1#next_revision DataEclMlbSystemUpdateV1#next_revision}
  */
  readonly nextRevision?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_system_update_v1#publish_datetime DataEclMlbSystemUpdateV1#publish_datetime}
  */
  readonly publishDatetime?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_system_update_v1 ecl_mlb_system_update_v1}
*/
export class DataEclMlbSystemUpdateV1 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ecl_mlb_system_update_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEclMlbSystemUpdateV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEclMlbSystemUpdateV1 to import
  * @param importFromId The id of the existing DataEclMlbSystemUpdateV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_system_update_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEclMlbSystemUpdateV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ecl_mlb_system_update_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_system_update_v1 ecl_mlb_system_update_v1} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEclMlbSystemUpdateV1Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataEclMlbSystemUpdateV1Config = {}) {
    super(scope, id, {
      terraformResourceType: 'ecl_mlb_system_update_v1',
      terraformGeneratorMetadata: {
        providerName: 'ecl',
        providerVersion: '2.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicable = config.applicable;
    this._currentRevision = config.currentRevision;
    this._description = config.description;
    this._href = config.href;
    this._id = config.id;
    this._limitDatetime = config.limitDatetime;
    this._name = config.name;
    this._nextRevision = config.nextRevision;
    this._publishDatetime = config.publishDatetime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // applicable - computed: true, optional: true, required: false
  private _applicable?: boolean | cdktf.IResolvable; 
  public get applicable() {
    return this.getBooleanAttribute('applicable');
  }
  public set applicable(value: boolean | cdktf.IResolvable) {
    this._applicable = value;
  }
  public resetApplicable() {
    this._applicable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicableInput() {
    return this._applicable;
  }

  // current_revision - computed: true, optional: true, required: false
  private _currentRevision?: number; 
  public get currentRevision() {
    return this.getNumberAttribute('current_revision');
  }
  public set currentRevision(value: number) {
    this._currentRevision = value;
  }
  public resetCurrentRevision() {
    this._currentRevision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentRevisionInput() {
    return this._currentRevision;
  }

  // description - computed: true, optional: true, required: false
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

  // href - computed: true, optional: true, required: false
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  public resetHref() {
    this._href = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
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

  // limit_datetime - computed: true, optional: true, required: false
  private _limitDatetime?: string; 
  public get limitDatetime() {
    return this.getStringAttribute('limit_datetime');
  }
  public set limitDatetime(value: string) {
    this._limitDatetime = value;
  }
  public resetLimitDatetime() {
    this._limitDatetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitDatetimeInput() {
    return this._limitDatetime;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // next_revision - computed: true, optional: true, required: false
  private _nextRevision?: number; 
  public get nextRevision() {
    return this.getNumberAttribute('next_revision');
  }
  public set nextRevision(value: number) {
    this._nextRevision = value;
  }
  public resetNextRevision() {
    this._nextRevision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextRevisionInput() {
    return this._nextRevision;
  }

  // publish_datetime - computed: true, optional: true, required: false
  private _publishDatetime?: string; 
  public get publishDatetime() {
    return this.getStringAttribute('publish_datetime');
  }
  public set publishDatetime(value: string) {
    this._publishDatetime = value;
  }
  public resetPublishDatetime() {
    this._publishDatetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishDatetimeInput() {
    return this._publishDatetime;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      applicable: cdktf.booleanToTerraform(this._applicable),
      current_revision: cdktf.numberToTerraform(this._currentRevision),
      description: cdktf.stringToTerraform(this._description),
      href: cdktf.stringToTerraform(this._href),
      id: cdktf.stringToTerraform(this._id),
      limit_datetime: cdktf.stringToTerraform(this._limitDatetime),
      name: cdktf.stringToTerraform(this._name),
      next_revision: cdktf.numberToTerraform(this._nextRevision),
      publish_datetime: cdktf.stringToTerraform(this._publishDatetime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      applicable: {
        value: cdktf.booleanToHclTerraform(this._applicable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      current_revision: {
        value: cdktf.numberToHclTerraform(this._currentRevision),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      href: {
        value: cdktf.stringToHclTerraform(this._href),
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
      limit_datetime: {
        value: cdktf.stringToHclTerraform(this._limitDatetime),
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
      next_revision: {
        value: cdktf.numberToHclTerraform(this._nextRevision),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      publish_datetime: {
        value: cdktf.stringToHclTerraform(this._publishDatetime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
