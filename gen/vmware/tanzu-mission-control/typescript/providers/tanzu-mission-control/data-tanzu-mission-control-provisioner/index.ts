// https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/provisioner
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTanzuMissionControlProvisionerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/provisioner#id DataTanzuMissionControlProvisioner#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * provisioners block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/provisioner#provisioners DataTanzuMissionControlProvisioner#provisioners}
  */
  readonly provisioners?: DataTanzuMissionControlProvisionerProvisioners[] | cdktf.IResolvable;
}
export interface DataTanzuMissionControlProvisionerProvisionersMeta {
  /**
  * Annotations for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/provisioner#annotations DataTanzuMissionControlProvisioner#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Description of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/provisioner#description DataTanzuMissionControlProvisioner#description}
  */
  readonly description?: string;
  /**
  * Labels for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/provisioner#labels DataTanzuMissionControlProvisioner#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataTanzuMissionControlProvisionerProvisionersMetaToTerraform(struct?: DataTanzuMissionControlProvisionerProvisionersMetaOutputReference | DataTanzuMissionControlProvisionerProvisionersMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    description: cdktf.stringToTerraform(struct!.description),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataTanzuMissionControlProvisionerProvisionersMetaToHclTerraform(struct?: DataTanzuMissionControlProvisionerProvisionersMetaOutputReference | DataTanzuMissionControlProvisionerProvisionersMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlProvisionerProvisionersMetaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlProvisionerProvisionersMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlProvisionerProvisionersMeta | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._description = undefined;
      this._labels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._description = value.description;
      this._labels = value.labels;
    }
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // resource_version - computed: true, optional: false, required: false
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}
export interface DataTanzuMissionControlProvisionerProvisioners {
  /**
  * Name of the management cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/provisioner#management_cluster DataTanzuMissionControlProvisioner#management_cluster}
  */
  readonly managementCluster: string;
  /**
  * Name of the provisioner
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/provisioner#name DataTanzuMissionControlProvisioner#name}
  */
  readonly name?: string;
  /**
  * ID of the organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/provisioner#org_id DataTanzuMissionControlProvisioner#org_id}
  */
  readonly orgId?: string;
  /**
  * meta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/provisioner#meta DataTanzuMissionControlProvisioner#meta}
  */
  readonly meta?: DataTanzuMissionControlProvisionerProvisionersMeta;
}

export function dataTanzuMissionControlProvisionerProvisionersToTerraform(struct?: DataTanzuMissionControlProvisionerProvisioners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    management_cluster: cdktf.stringToTerraform(struct!.managementCluster),
    name: cdktf.stringToTerraform(struct!.name),
    org_id: cdktf.stringToTerraform(struct!.orgId),
    meta: dataTanzuMissionControlProvisionerProvisionersMetaToTerraform(struct!.meta),
  }
}


export function dataTanzuMissionControlProvisionerProvisionersToHclTerraform(struct?: DataTanzuMissionControlProvisionerProvisioners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    management_cluster: {
      value: cdktf.stringToHclTerraform(struct!.managementCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    org_id: {
      value: cdktf.stringToHclTerraform(struct!.orgId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    meta: {
      value: dataTanzuMissionControlProvisionerProvisionersMetaToHclTerraform(struct!.meta),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlProvisionerProvisionersMetaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlProvisionerProvisionersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTanzuMissionControlProvisionerProvisioners | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managementCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementCluster = this._managementCluster;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._orgId !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgId = this._orgId;
    }
    if (this._meta?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.meta = this._meta?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlProvisionerProvisioners | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._managementCluster = undefined;
      this._name = undefined;
      this._orgId = undefined;
      this._meta.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._managementCluster = value.managementCluster;
      this._name = value.name;
      this._orgId = value.orgId;
      this._meta.internalValue = value.meta;
    }
  }

  // management_cluster - computed: false, optional: false, required: true
  private _managementCluster?: string; 
  public get managementCluster() {
    return this.getStringAttribute('management_cluster');
  }
  public set managementCluster(value: string) {
    this._managementCluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementClusterInput() {
    return this._managementCluster;
  }

  // name - computed: false, optional: true, required: false
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

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // meta - computed: false, optional: true, required: false
  private _meta = new DataTanzuMissionControlProvisionerProvisionersMetaOutputReference(this, "meta");
  public get meta() {
    return this._meta;
  }
  public putMeta(value: DataTanzuMissionControlProvisionerProvisionersMeta) {
    this._meta.internalValue = value;
  }
  public resetMeta() {
    this._meta.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaInput() {
    return this._meta.internalValue;
  }
}

export class DataTanzuMissionControlProvisionerProvisionersList extends cdktf.ComplexList {
  public internalValue? : DataTanzuMissionControlProvisionerProvisioners[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTanzuMissionControlProvisionerProvisionersOutputReference {
    return new DataTanzuMissionControlProvisionerProvisionersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/provisioner tanzu-mission-control_provisioner}
*/
export class DataTanzuMissionControlProvisioner extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tanzu-mission-control_provisioner";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTanzuMissionControlProvisioner resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTanzuMissionControlProvisioner to import
  * @param importFromId The id of the existing DataTanzuMissionControlProvisioner that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/provisioner#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTanzuMissionControlProvisioner to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tanzu-mission-control_provisioner", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/provisioner tanzu-mission-control_provisioner} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTanzuMissionControlProvisionerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTanzuMissionControlProvisionerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tanzu-mission-control_provisioner',
      terraformGeneratorMetadata: {
        providerName: 'tanzu-mission-control',
        providerVersion: '1.4.9'
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
    this._provisioners.internalValue = config.provisioners;
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

  // provisioners - computed: false, optional: true, required: false
  private _provisioners = new DataTanzuMissionControlProvisionerProvisionersList(this, "provisioners", false);
  public get provisioners() {
    return this._provisioners;
  }
  public putProvisioners(value: DataTanzuMissionControlProvisionerProvisioners[] | cdktf.IResolvable) {
    this._provisioners.internalValue = value;
  }
  public resetProvisioners() {
    this._provisioners.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionersInput() {
    return this._provisioners.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      provisioners: cdktf.listMapper(dataTanzuMissionControlProvisionerProvisionersToTerraform, true)(this._provisioners.internalValue),
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
      provisioners: {
        value: cdktf.listMapperHcl(dataTanzuMissionControlProvisionerProvisionersToHclTerraform, true)(this._provisioners.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTanzuMissionControlProvisionerProvisionersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
