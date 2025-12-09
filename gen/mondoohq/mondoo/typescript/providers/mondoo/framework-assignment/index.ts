// https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/framework_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FrameworkAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable or disable the compliance framework.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/framework_assignment#enabled FrameworkAssignment#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Compliance framework MRN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/framework_assignment#framework_mrn FrameworkAssignment#framework_mrn}
  */
  readonly frameworkMrn: string[];
  /**
  * Mondoo space identifier. If there's no ID, the provider space is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/framework_assignment#space_id FrameworkAssignment#space_id}
  */
  readonly spaceId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/framework_assignment mondoo_framework_assignment}
*/
export class FrameworkAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mondoo_framework_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FrameworkAssignment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FrameworkAssignment to import
  * @param importFromId The id of the existing FrameworkAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/framework_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FrameworkAssignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mondoo_framework_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/framework_assignment mondoo_framework_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FrameworkAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: FrameworkAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'mondoo_framework_assignment',
      terraformGeneratorMetadata: {
        providerName: 'mondoo',
        providerVersion: '0.35.0',
        providerVersionConstraint: '0.35.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._frameworkMrn = config.frameworkMrn;
    this._spaceId = config.spaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // framework_mrn - computed: false, optional: false, required: true
  private _frameworkMrn?: string[]; 
  public get frameworkMrn() {
    return this.getListAttribute('framework_mrn');
  }
  public set frameworkMrn(value: string[]) {
    this._frameworkMrn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frameworkMrnInput() {
    return this._frameworkMrn;
  }

  // space_id - computed: true, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      framework_mrn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._frameworkMrn),
      space_id: cdktf.stringToTerraform(this._spaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      framework_mrn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._frameworkMrn),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
