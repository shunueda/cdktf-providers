// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/management_dashboard_management_dashboards_import
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementDashboardManagementDashboardsImportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/management_dashboard_management_dashboards_import#id ManagementDashboardManagementDashboardsImport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/management_dashboard_management_dashboards_import#import_details ManagementDashboardManagementDashboardsImport#import_details}
  */
  readonly importDetails?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/management_dashboard_management_dashboards_import#import_details_file ManagementDashboardManagementDashboardsImport#import_details_file}
  */
  readonly importDetailsFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/management_dashboard_management_dashboards_import#override_dashboard_compartment_ocid ManagementDashboardManagementDashboardsImport#override_dashboard_compartment_ocid}
  */
  readonly overrideDashboardCompartmentOcid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/management_dashboard_management_dashboards_import#override_same_name ManagementDashboardManagementDashboardsImport#override_same_name}
  */
  readonly overrideSameName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/management_dashboard_management_dashboards_import#override_saved_search_compartment_ocid ManagementDashboardManagementDashboardsImport#override_saved_search_compartment_ocid}
  */
  readonly overrideSavedSearchCompartmentOcid?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/management_dashboard_management_dashboards_import#timeouts ManagementDashboardManagementDashboardsImport#timeouts}
  */
  readonly timeouts?: ManagementDashboardManagementDashboardsImportTimeouts;
}
export interface ManagementDashboardManagementDashboardsImportTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/management_dashboard_management_dashboards_import#create ManagementDashboardManagementDashboardsImport#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/management_dashboard_management_dashboards_import#delete ManagementDashboardManagementDashboardsImport#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/management_dashboard_management_dashboards_import#update ManagementDashboardManagementDashboardsImport#update}
  */
  readonly update?: string;
}

export function managementDashboardManagementDashboardsImportTimeoutsToTerraform(struct?: ManagementDashboardManagementDashboardsImportTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function managementDashboardManagementDashboardsImportTimeoutsToHclTerraform(struct?: ManagementDashboardManagementDashboardsImportTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementDashboardManagementDashboardsImportTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ManagementDashboardManagementDashboardsImportTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementDashboardManagementDashboardsImportTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/management_dashboard_management_dashboards_import oci_management_dashboard_management_dashboards_import}
*/
export class ManagementDashboardManagementDashboardsImport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_management_dashboard_management_dashboards_import";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementDashboardManagementDashboardsImport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementDashboardManagementDashboardsImport to import
  * @param importFromId The id of the existing ManagementDashboardManagementDashboardsImport that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/management_dashboard_management_dashboards_import#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementDashboardManagementDashboardsImport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_management_dashboard_management_dashboards_import", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/management_dashboard_management_dashboards_import oci_management_dashboard_management_dashboards_import} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementDashboardManagementDashboardsImportConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ManagementDashboardManagementDashboardsImportConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_management_dashboard_management_dashboards_import',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
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
    this._importDetails = config.importDetails;
    this._importDetailsFile = config.importDetailsFile;
    this._overrideDashboardCompartmentOcid = config.overrideDashboardCompartmentOcid;
    this._overrideSameName = config.overrideSameName;
    this._overrideSavedSearchCompartmentOcid = config.overrideSavedSearchCompartmentOcid;
    this._timeouts.internalValue = config.timeouts;
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

  // import_details - computed: false, optional: true, required: false
  private _importDetails?: string; 
  public get importDetails() {
    return this.getStringAttribute('import_details');
  }
  public set importDetails(value: string) {
    this._importDetails = value;
  }
  public resetImportDetails() {
    this._importDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importDetailsInput() {
    return this._importDetails;
  }

  // import_details_file - computed: false, optional: true, required: false
  private _importDetailsFile?: string; 
  public get importDetailsFile() {
    return this.getStringAttribute('import_details_file');
  }
  public set importDetailsFile(value: string) {
    this._importDetailsFile = value;
  }
  public resetImportDetailsFile() {
    this._importDetailsFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importDetailsFileInput() {
    return this._importDetailsFile;
  }

  // override_dashboard_compartment_ocid - computed: true, optional: true, required: false
  private _overrideDashboardCompartmentOcid?: string; 
  public get overrideDashboardCompartmentOcid() {
    return this.getStringAttribute('override_dashboard_compartment_ocid');
  }
  public set overrideDashboardCompartmentOcid(value: string) {
    this._overrideDashboardCompartmentOcid = value;
  }
  public resetOverrideDashboardCompartmentOcid() {
    this._overrideDashboardCompartmentOcid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideDashboardCompartmentOcidInput() {
    return this._overrideDashboardCompartmentOcid;
  }

  // override_same_name - computed: true, optional: true, required: false
  private _overrideSameName?: string; 
  public get overrideSameName() {
    return this.getStringAttribute('override_same_name');
  }
  public set overrideSameName(value: string) {
    this._overrideSameName = value;
  }
  public resetOverrideSameName() {
    this._overrideSameName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideSameNameInput() {
    return this._overrideSameName;
  }

  // override_saved_search_compartment_ocid - computed: true, optional: true, required: false
  private _overrideSavedSearchCompartmentOcid?: string; 
  public get overrideSavedSearchCompartmentOcid() {
    return this.getStringAttribute('override_saved_search_compartment_ocid');
  }
  public set overrideSavedSearchCompartmentOcid(value: string) {
    this._overrideSavedSearchCompartmentOcid = value;
  }
  public resetOverrideSavedSearchCompartmentOcid() {
    this._overrideSavedSearchCompartmentOcid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideSavedSearchCompartmentOcidInput() {
    return this._overrideSavedSearchCompartmentOcid;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ManagementDashboardManagementDashboardsImportTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ManagementDashboardManagementDashboardsImportTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      import_details: cdktf.stringToTerraform(this._importDetails),
      import_details_file: cdktf.stringToTerraform(this._importDetailsFile),
      override_dashboard_compartment_ocid: cdktf.stringToTerraform(this._overrideDashboardCompartmentOcid),
      override_same_name: cdktf.stringToTerraform(this._overrideSameName),
      override_saved_search_compartment_ocid: cdktf.stringToTerraform(this._overrideSavedSearchCompartmentOcid),
      timeouts: managementDashboardManagementDashboardsImportTimeoutsToTerraform(this._timeouts.internalValue),
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
      import_details: {
        value: cdktf.stringToHclTerraform(this._importDetails),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      import_details_file: {
        value: cdktf.stringToHclTerraform(this._importDetailsFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override_dashboard_compartment_ocid: {
        value: cdktf.stringToHclTerraform(this._overrideDashboardCompartmentOcid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override_same_name: {
        value: cdktf.stringToHclTerraform(this._overrideSameName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override_saved_search_compartment_ocid: {
        value: cdktf.stringToHclTerraform(this._overrideSavedSearchCompartmentOcid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: managementDashboardManagementDashboardsImportTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ManagementDashboardManagementDashboardsImportTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
