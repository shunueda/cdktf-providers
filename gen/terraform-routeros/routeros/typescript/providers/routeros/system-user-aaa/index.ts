// https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/system_user_aaa
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemUserAaaConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/system_user_aaa#___path___ SystemUserAaa#___path___}
  */
  readonly path?: string;
  /**
  * An option that enables accounting for users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/system_user_aaa#accounting SystemUserAaa#accounting}
  */
  readonly accounting?: boolean | cdktf.IResolvable;
  /**
  * The user group that is used by default for users authenticated via a RADIUS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/system_user_aaa#default_group SystemUserAaa#default_group}
  */
  readonly defaultGroup?: string;
  /**
  * A set of groups that are not allowed for users authenticated by RADIUS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/system_user_aaa#exclude_groups SystemUserAaa#exclude_groups}
  */
  readonly excludeGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/system_user_aaa#id SystemUserAaa#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Interval between scheduled RADIUS Interim-Update messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/system_user_aaa#interim_update SystemUserAaa#interim_update}
  */
  readonly interimUpdate?: string;
  /**
  * An option whether to use RADIUS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/system_user_aaa#use_radius SystemUserAaa#use_radius}
  */
  readonly useRadius?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/system_user_aaa routeros_system_user_aaa}
*/
export class SystemUserAaa extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_system_user_aaa";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemUserAaa resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemUserAaa to import
  * @param importFromId The id of the existing SystemUserAaa that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/system_user_aaa#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemUserAaa to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_system_user_aaa", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/system_user_aaa routeros_system_user_aaa} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemUserAaaConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemUserAaaConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_system_user_aaa',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.94.0',
        providerVersionConstraint: '1.94.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._accounting = config.accounting;
    this._defaultGroup = config.defaultGroup;
    this._excludeGroups = config.excludeGroups;
    this._id = config.id;
    this._interimUpdate = config.interimUpdate;
    this._useRadius = config.useRadius;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // accounting - computed: false, optional: true, required: false
  private _accounting?: boolean | cdktf.IResolvable; 
  public get accounting() {
    return this.getBooleanAttribute('accounting');
  }
  public set accounting(value: boolean | cdktf.IResolvable) {
    this._accounting = value;
  }
  public resetAccounting() {
    this._accounting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingInput() {
    return this._accounting;
  }

  // default_group - computed: false, optional: true, required: false
  private _defaultGroup?: string; 
  public get defaultGroup() {
    return this.getStringAttribute('default_group');
  }
  public set defaultGroup(value: string) {
    this._defaultGroup = value;
  }
  public resetDefaultGroup() {
    this._defaultGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGroupInput() {
    return this._defaultGroup;
  }

  // exclude_groups - computed: false, optional: true, required: false
  private _excludeGroups?: string[]; 
  public get excludeGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_groups'));
  }
  public set excludeGroups(value: string[]) {
    this._excludeGroups = value;
  }
  public resetExcludeGroups() {
    this._excludeGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeGroupsInput() {
    return this._excludeGroups;
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

  // interim_update - computed: false, optional: true, required: false
  private _interimUpdate?: string; 
  public get interimUpdate() {
    return this.getStringAttribute('interim_update');
  }
  public set interimUpdate(value: string) {
    this._interimUpdate = value;
  }
  public resetInterimUpdate() {
    this._interimUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interimUpdateInput() {
    return this._interimUpdate;
  }

  // use_radius - computed: false, optional: true, required: false
  private _useRadius?: boolean | cdktf.IResolvable; 
  public get useRadius() {
    return this.getBooleanAttribute('use_radius');
  }
  public set useRadius(value: boolean | cdktf.IResolvable) {
    this._useRadius = value;
  }
  public resetUseRadius() {
    this._useRadius = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRadiusInput() {
    return this._useRadius;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      accounting: cdktf.booleanToTerraform(this._accounting),
      default_group: cdktf.stringToTerraform(this._defaultGroup),
      exclude_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludeGroups),
      id: cdktf.stringToTerraform(this._id),
      interim_update: cdktf.stringToTerraform(this._interimUpdate),
      use_radius: cdktf.booleanToTerraform(this._useRadius),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      accounting: {
        value: cdktf.booleanToHclTerraform(this._accounting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_group: {
        value: cdktf.stringToHclTerraform(this._defaultGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludeGroups),
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
      interim_update: {
        value: cdktf.stringToHclTerraform(this._interimUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_radius: {
        value: cdktf.booleanToHclTerraform(this._useRadius),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
