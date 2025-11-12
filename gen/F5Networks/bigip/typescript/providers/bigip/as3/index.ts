// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/as3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface As3Config extends cdktf.TerraformMetaArguments {
  /**
  * Application deployed through AS3 Declaration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/as3#application_list As3#application_list}
  */
  readonly applicationList?: string;
  /**
  * Full AS3 declaration as a JSON string to deploy on BIG-IP. **Mutually exclusive with `delete_apps`**: only one of `as3_json` or `delete_apps` can be set in a resource block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/as3#as3_json As3#as3_json}
  */
  readonly as3Json?: string;
  /**
  * Controls parameters for AS3, you can use the following parameters, dry_run, trace, trace_response, log_level, user_agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/as3#controls As3#controls}
  */
  readonly controls?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/as3#id As3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set True if you want to ignore metadata update
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/as3#ignore_metadata As3#ignore_metadata}
  */
  readonly ignoreMetadata?: boolean | cdktf.IResolvable;
  /**
  * ID of AS3 post declaration async task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/as3#task_id As3#task_id}
  */
  readonly taskId?: string;
  /**
  * Name of Tenant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/as3#tenant_filter As3#tenant_filter}
  */
  readonly tenantFilter?: string;
  /**
  * Name of Tenant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/as3#tenant_list As3#tenant_list}
  */
  readonly tenantList?: string;
  /**
  * Name of Tenant. This name is used only in the case of Per-Application Deployment. If it is not provided, then a random name would be generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/as3#tenant_name As3#tenant_name}
  */
  readonly tenantName?: string;
  /**
  * delete_apps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/as3#delete_apps As3#delete_apps}
  */
  readonly deleteApps?: As3DeleteApps;
}
export interface As3DeleteApps {
  /**
  * List of applications to delete from the specified tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/as3#apps As3#apps}
  */
  readonly apps: string[];
  /**
  * The name of the tenant for application deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/as3#tenant_name As3#tenant_name}
  */
  readonly tenantName: string;
}

export function as3DeleteAppsToTerraform(struct?: As3DeleteAppsOutputReference | As3DeleteApps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apps),
    tenant_name: cdktf.stringToTerraform(struct!.tenantName),
  }
}


export function as3DeleteAppsToHclTerraform(struct?: As3DeleteAppsOutputReference | As3DeleteApps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.apps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tenant_name: {
      value: cdktf.stringToHclTerraform(struct!.tenantName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class As3DeleteAppsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): As3DeleteApps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apps !== undefined) {
      hasAnyValues = true;
      internalValueResult.apps = this._apps;
    }
    if (this._tenantName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantName = this._tenantName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: As3DeleteApps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apps = undefined;
      this._tenantName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apps = value.apps;
      this._tenantName = value.tenantName;
    }
  }

  // apps - computed: false, optional: false, required: true
  private _apps?: string[]; 
  public get apps() {
    return this.getListAttribute('apps');
  }
  public set apps(value: string[]) {
    this._apps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appsInput() {
    return this._apps;
  }

  // tenant_name - computed: false, optional: false, required: true
  private _tenantName?: string; 
  public get tenantName() {
    return this.getStringAttribute('tenant_name');
  }
  public set tenantName(value: string) {
    this._tenantName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantNameInput() {
    return this._tenantName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/as3 bigip_as3}
*/
export class As3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_as3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a As3 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the As3 to import
  * @param importFromId The id of the existing As3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/as3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the As3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_as3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/as3 bigip_as3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options As3Config = {}
  */
  public constructor(scope: Construct, id: string, config: As3Config = {}) {
    super(scope, id, {
      terraformResourceType: 'bigip_as3',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1',
        providerVersionConstraint: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationList = config.applicationList;
    this._as3Json = config.as3Json;
    this._controls = config.controls;
    this._id = config.id;
    this._ignoreMetadata = config.ignoreMetadata;
    this._taskId = config.taskId;
    this._tenantFilter = config.tenantFilter;
    this._tenantList = config.tenantList;
    this._tenantName = config.tenantName;
    this._deleteApps.internalValue = config.deleteApps;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_list - computed: true, optional: true, required: false
  private _applicationList?: string; 
  public get applicationList() {
    return this.getStringAttribute('application_list');
  }
  public set applicationList(value: string) {
    this._applicationList = value;
  }
  public resetApplicationList() {
    this._applicationList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationListInput() {
    return this._applicationList;
  }

  // as3_json - computed: false, optional: true, required: false
  private _as3Json?: string; 
  public get as3Json() {
    return this.getStringAttribute('as3_json');
  }
  public set as3Json(value: string) {
    this._as3Json = value;
  }
  public resetAs3Json() {
    this._as3Json = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get as3JsonInput() {
    return this._as3Json;
  }

  // controls - computed: false, optional: true, required: false
  private _controls?: { [key: string]: string }; 
  public get controls() {
    return this.getStringMapAttribute('controls');
  }
  public set controls(value: { [key: string]: string }) {
    this._controls = value;
  }
  public resetControls() {
    this._controls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlsInput() {
    return this._controls;
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

  // ignore_metadata - computed: false, optional: true, required: false
  private _ignoreMetadata?: boolean | cdktf.IResolvable; 
  public get ignoreMetadata() {
    return this.getBooleanAttribute('ignore_metadata');
  }
  public set ignoreMetadata(value: boolean | cdktf.IResolvable) {
    this._ignoreMetadata = value;
  }
  public resetIgnoreMetadata() {
    this._ignoreMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMetadataInput() {
    return this._ignoreMetadata;
  }

  // per_app_mode - computed: true, optional: false, required: false
  public get perAppMode() {
    return this.getBooleanAttribute('per_app_mode');
  }

  // task_id - computed: true, optional: true, required: false
  private _taskId?: string; 
  public get taskId() {
    return this.getStringAttribute('task_id');
  }
  public set taskId(value: string) {
    this._taskId = value;
  }
  public resetTaskId() {
    this._taskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskIdInput() {
    return this._taskId;
  }

  // tenant_filter - computed: true, optional: true, required: false
  private _tenantFilter?: string; 
  public get tenantFilter() {
    return this.getStringAttribute('tenant_filter');
  }
  public set tenantFilter(value: string) {
    this._tenantFilter = value;
  }
  public resetTenantFilter() {
    this._tenantFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantFilterInput() {
    return this._tenantFilter;
  }

  // tenant_list - computed: true, optional: true, required: false
  private _tenantList?: string; 
  public get tenantList() {
    return this.getStringAttribute('tenant_list');
  }
  public set tenantList(value: string) {
    this._tenantList = value;
  }
  public resetTenantList() {
    this._tenantList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantListInput() {
    return this._tenantList;
  }

  // tenant_name - computed: true, optional: true, required: false
  private _tenantName?: string; 
  public get tenantName() {
    return this.getStringAttribute('tenant_name');
  }
  public set tenantName(value: string) {
    this._tenantName = value;
  }
  public resetTenantName() {
    this._tenantName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantNameInput() {
    return this._tenantName;
  }

  // delete_apps - computed: false, optional: true, required: false
  private _deleteApps = new As3DeleteAppsOutputReference(this, "delete_apps");
  public get deleteApps() {
    return this._deleteApps;
  }
  public putDeleteApps(value: As3DeleteApps) {
    this._deleteApps.internalValue = value;
  }
  public resetDeleteApps() {
    this._deleteApps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAppsInput() {
    return this._deleteApps.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_list: cdktf.stringToTerraform(this._applicationList),
      as3_json: cdktf.stringToTerraform(this._as3Json),
      controls: cdktf.hashMapper(cdktf.stringToTerraform)(this._controls),
      id: cdktf.stringToTerraform(this._id),
      ignore_metadata: cdktf.booleanToTerraform(this._ignoreMetadata),
      task_id: cdktf.stringToTerraform(this._taskId),
      tenant_filter: cdktf.stringToTerraform(this._tenantFilter),
      tenant_list: cdktf.stringToTerraform(this._tenantList),
      tenant_name: cdktf.stringToTerraform(this._tenantName),
      delete_apps: as3DeleteAppsToTerraform(this._deleteApps.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_list: {
        value: cdktf.stringToHclTerraform(this._applicationList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      as3_json: {
        value: cdktf.stringToHclTerraform(this._as3Json),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      controls: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._controls),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_metadata: {
        value: cdktf.booleanToHclTerraform(this._ignoreMetadata),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      task_id: {
        value: cdktf.stringToHclTerraform(this._taskId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_filter: {
        value: cdktf.stringToHclTerraform(this._tenantFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_list: {
        value: cdktf.stringToHclTerraform(this._tenantList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_name: {
        value: cdktf.stringToHclTerraform(this._tenantName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_apps: {
        value: as3DeleteAppsToHclTerraform(this._deleteApps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "As3DeleteAppsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
