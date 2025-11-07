// https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_registered
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterRegisteredConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_registered#cluster_type ClusterRegistered#cluster_type}
  */
  readonly clusterType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_registered#controller_yamls_folder ClusterRegistered#controller_yamls_folder}
  */
  readonly controllerYamlsFolder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_registered#delete_action ClusterRegistered#delete_action}
  */
  readonly deleteAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_registered#endpoint ClusterRegistered#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_registered#id ClusterRegistered#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_registered#labels ClusterRegistered#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_registered#name ClusterRegistered#name}
  */
  readonly name: string;
  /**
  * access_control_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_registered#access_control_list ClusterRegistered#access_control_list}
  */
  readonly accessControlList?: ClusterRegisteredAccessControlListStruct[] | cdktf.IResolvable;
  /**
  * owner_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_registered#owner_info ClusterRegistered#owner_info}
  */
  readonly ownerInfo?: ClusterRegisteredOwnerInfo;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_registered#timeouts ClusterRegistered#timeouts}
  */
  readonly timeouts?: ClusterRegisteredTimeouts;
}
export interface ClusterRegisteredAccessControlListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_registered#entity_type ClusterRegistered#entity_type}
  */
  readonly entityType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_registered#name ClusterRegistered#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_registered#permission ClusterRegistered#permission}
  */
  readonly permission: string;
}

export function clusterRegisteredAccessControlListStructToTerraform(struct?: ClusterRegisteredAccessControlListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_type: cdktf.stringToTerraform(struct!.entityType),
    name: cdktf.stringToTerraform(struct!.name),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}


export function clusterRegisteredAccessControlListStructToHclTerraform(struct?: ClusterRegisteredAccessControlListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_type: {
      value: cdktf.stringToHclTerraform(struct!.entityType),
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
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterRegisteredAccessControlListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterRegisteredAccessControlListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityType = this._entityType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterRegisteredAccessControlListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entityType = undefined;
      this._name = undefined;
      this._permission = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entityType = value.entityType;
      this._name = value.name;
      this._permission = value.permission;
    }
  }

  // entity_type - computed: false, optional: false, required: true
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // permission - computed: false, optional: false, required: true
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }
}

export class ClusterRegisteredAccessControlListStructList extends cdktf.ComplexList {
  public internalValue? : ClusterRegisteredAccessControlListStruct[] | cdktf.IResolvable

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
  public get(index: number): ClusterRegisteredAccessControlListStructOutputReference {
    return new ClusterRegisteredAccessControlListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterRegisteredOwnerInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_registered#owner_name ClusterRegistered#owner_name}
  */
  readonly ownerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_registered#owner_type ClusterRegistered#owner_type}
  */
  readonly ownerType: string;
}

export function clusterRegisteredOwnerInfoToTerraform(struct?: ClusterRegisteredOwnerInfoOutputReference | ClusterRegisteredOwnerInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    owner_name: cdktf.stringToTerraform(struct!.ownerName),
    owner_type: cdktf.stringToTerraform(struct!.ownerType),
  }
}


export function clusterRegisteredOwnerInfoToHclTerraform(struct?: ClusterRegisteredOwnerInfoOutputReference | ClusterRegisteredOwnerInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    owner_name: {
      value: cdktf.stringToHclTerraform(struct!.ownerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner_type: {
      value: cdktf.stringToHclTerraform(struct!.ownerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterRegisteredOwnerInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterRegisteredOwnerInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ownerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerName = this._ownerName;
    }
    if (this._ownerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerType = this._ownerType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterRegisteredOwnerInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ownerName = undefined;
      this._ownerType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ownerName = value.ownerName;
      this._ownerType = value.ownerType;
    }
  }

  // owner_name - computed: false, optional: false, required: true
  private _ownerName?: string; 
  public get ownerName() {
    return this.getStringAttribute('owner_name');
  }
  public set ownerName(value: string) {
    this._ownerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerNameInput() {
    return this._ownerName;
  }

  // owner_type - computed: false, optional: false, required: true
  private _ownerType?: string; 
  public get ownerType() {
    return this.getStringAttribute('owner_type');
  }
  public set ownerType(value: string) {
    this._ownerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerTypeInput() {
    return this._ownerType;
  }
}
export interface ClusterRegisteredTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_registered#create ClusterRegistered#create}
  */
  readonly create?: string;
}

export function clusterRegisteredTimeoutsToTerraform(struct?: ClusterRegisteredTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function clusterRegisteredTimeoutsToHclTerraform(struct?: ClusterRegisteredTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterRegisteredTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterRegisteredTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterRegisteredTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_registered nirmata_cluster_registered}
*/
export class ClusterRegistered extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nirmata_cluster_registered";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClusterRegistered resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClusterRegistered to import
  * @param importFromId The id of the existing ClusterRegistered that should be imported. Refer to the {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_registered#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClusterRegistered to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nirmata_cluster_registered", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_registered nirmata_cluster_registered} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterRegisteredConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterRegisteredConfig) {
    super(scope, id, {
      terraformResourceType: 'nirmata_cluster_registered',
      terraformGeneratorMetadata: {
        providerName: 'nirmata',
        providerVersion: '1.1.13'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterType = config.clusterType;
    this._controllerYamlsFolder = config.controllerYamlsFolder;
    this._deleteAction = config.deleteAction;
    this._endpoint = config.endpoint;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._accessControlList.internalValue = config.accessControlList;
    this._ownerInfo.internalValue = config.ownerInfo;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_type - computed: false, optional: false, required: true
  private _clusterType?: string; 
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }
  public set clusterType(value: string) {
    this._clusterType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTypeInput() {
    return this._clusterType;
  }

  // controller_crd_yamls_count - computed: true, optional: false, required: false
  public get controllerCrdYamlsCount() {
    return this.getNumberAttribute('controller_crd_yamls_count');
  }

  // controller_deploy_yamls_count - computed: true, optional: false, required: false
  public get controllerDeployYamlsCount() {
    return this.getNumberAttribute('controller_deploy_yamls_count');
  }

  // controller_ns_yamls_count - computed: true, optional: false, required: false
  public get controllerNsYamlsCount() {
    return this.getNumberAttribute('controller_ns_yamls_count');
  }

  // controller_sa_yamls_count - computed: true, optional: false, required: false
  public get controllerSaYamlsCount() {
    return this.getNumberAttribute('controller_sa_yamls_count');
  }

  // controller_yamls - computed: true, optional: false, required: false
  public get controllerYamls() {
    return this.getStringAttribute('controller_yamls');
  }

  // controller_yamls_count - computed: true, optional: false, required: false
  public get controllerYamlsCount() {
    return this.getNumberAttribute('controller_yamls_count');
  }

  // controller_yamls_folder - computed: true, optional: true, required: false
  private _controllerYamlsFolder?: string; 
  public get controllerYamlsFolder() {
    return this.getStringAttribute('controller_yamls_folder');
  }
  public set controllerYamlsFolder(value: string) {
    this._controllerYamlsFolder = value;
  }
  public resetControllerYamlsFolder() {
    this._controllerYamlsFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerYamlsFolderInput() {
    return this._controllerYamlsFolder;
  }

  // delete_action - computed: false, optional: true, required: false
  private _deleteAction?: string; 
  public get deleteAction() {
    return this.getStringAttribute('delete_action');
  }
  public set deleteAction(value: string) {
    this._deleteAction = value;
  }
  public resetDeleteAction() {
    this._deleteAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteActionInput() {
    return this._deleteAction;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // access_control_list - computed: false, optional: true, required: false
  private _accessControlList = new ClusterRegisteredAccessControlListStructList(this, "access_control_list", false);
  public get accessControlList() {
    return this._accessControlList;
  }
  public putAccessControlList(value: ClusterRegisteredAccessControlListStruct[] | cdktf.IResolvable) {
    this._accessControlList.internalValue = value;
  }
  public resetAccessControlList() {
    this._accessControlList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlListInput() {
    return this._accessControlList.internalValue;
  }

  // owner_info - computed: false, optional: true, required: false
  private _ownerInfo = new ClusterRegisteredOwnerInfoOutputReference(this, "owner_info");
  public get ownerInfo() {
    return this._ownerInfo;
  }
  public putOwnerInfo(value: ClusterRegisteredOwnerInfo) {
    this._ownerInfo.internalValue = value;
  }
  public resetOwnerInfo() {
    this._ownerInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInfoInput() {
    return this._ownerInfo.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ClusterRegisteredTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ClusterRegisteredTimeouts) {
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
      cluster_type: cdktf.stringToTerraform(this._clusterType),
      controller_yamls_folder: cdktf.stringToTerraform(this._controllerYamlsFolder),
      delete_action: cdktf.stringToTerraform(this._deleteAction),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      access_control_list: cdktf.listMapper(clusterRegisteredAccessControlListStructToTerraform, true)(this._accessControlList.internalValue),
      owner_info: clusterRegisteredOwnerInfoToTerraform(this._ownerInfo.internalValue),
      timeouts: clusterRegisteredTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_type: {
        value: cdktf.stringToHclTerraform(this._clusterType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      controller_yamls_folder: {
        value: cdktf.stringToHclTerraform(this._controllerYamlsFolder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_action: {
        value: cdktf.stringToHclTerraform(this._deleteAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_control_list: {
        value: cdktf.listMapperHcl(clusterRegisteredAccessControlListStructToHclTerraform, true)(this._accessControlList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterRegisteredAccessControlListStructList",
      },
      owner_info: {
        value: clusterRegisteredOwnerInfoToHclTerraform(this._ownerInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterRegisteredOwnerInfoList",
      },
      timeouts: {
        value: clusterRegisteredTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterRegisteredTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
