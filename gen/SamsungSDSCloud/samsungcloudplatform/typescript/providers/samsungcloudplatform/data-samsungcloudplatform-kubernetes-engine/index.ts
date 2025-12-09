// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_engine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformKubernetesEngineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_engine#id DataSamsungcloudplatformKubernetesEngine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Engine Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_engine#kubernetes_engine_id DataSamsungcloudplatformKubernetesEngine#kubernetes_engine_id}
  */
  readonly kubernetesEngineId: string;
}
export interface DataSamsungcloudplatformKubernetesEnginePrivateEndpointAccessControlResourceListStruct {
}

export function dataSamsungcloudplatformKubernetesEnginePrivateEndpointAccessControlResourceListStructToTerraform(struct?: DataSamsungcloudplatformKubernetesEnginePrivateEndpointAccessControlResourceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformKubernetesEnginePrivateEndpointAccessControlResourceListStructToHclTerraform(struct?: DataSamsungcloudplatformKubernetesEnginePrivateEndpointAccessControlResourceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformKubernetesEnginePrivateEndpointAccessControlResourceListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSamsungcloudplatformKubernetesEnginePrivateEndpointAccessControlResourceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformKubernetesEnginePrivateEndpointAccessControlResourceListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
}

export class DataSamsungcloudplatformKubernetesEnginePrivateEndpointAccessControlResourceListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformKubernetesEnginePrivateEndpointAccessControlResourceListStructOutputReference {
    return new DataSamsungcloudplatformKubernetesEnginePrivateEndpointAccessControlResourceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_engine samsungcloudplatform_kubernetes_engine}
*/
export class DataSamsungcloudplatformKubernetesEngine extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_kubernetes_engine";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformKubernetesEngine resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformKubernetesEngine to import
  * @param importFromId The id of the existing DataSamsungcloudplatformKubernetesEngine that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_engine#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformKubernetesEngine to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_kubernetes_engine", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/kubernetes_engine samsungcloudplatform_kubernetes_engine} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformKubernetesEngineConfig
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformKubernetesEngineConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_kubernetes_engine',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.16.0',
        providerVersionConstraint: '3.16.0'
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
    this._kubernetesEngineId = config.kubernetesEngineId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cifs_volume_id - computed: true, optional: false, required: false
  public get cifsVolumeId() {
    return this.getStringAttribute('cifs_volume_id');
  }

  // cluster_prefix - computed: true, optional: false, required: false
  public get clusterPrefix() {
    return this.getStringAttribute('cluster_prefix');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_dt - computed: true, optional: false, required: false
  public get createdDt() {
    return this.getStringAttribute('created_dt');
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

  // k8s_version - computed: true, optional: false, required: false
  public get k8SVersion() {
    return this.getStringAttribute('k8s_version');
  }

  // kubernetes_engine_id - computed: false, optional: false, required: true
  private _kubernetesEngineId?: string; 
  public get kubernetesEngineId() {
    return this.getStringAttribute('kubernetes_engine_id');
  }
  public set kubernetesEngineId(value: string) {
    this._kubernetesEngineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesEngineIdInput() {
    return this._kubernetesEngineId;
  }

  // kubernetes_engine_name - computed: true, optional: false, required: false
  public get kubernetesEngineName() {
    return this.getStringAttribute('kubernetes_engine_name');
  }

  // kubernetes_engine_status - computed: true, optional: false, required: false
  public get kubernetesEngineStatus() {
    return this.getStringAttribute('kubernetes_engine_status');
  }

  // load_balancer_id - computed: true, optional: false, required: false
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_dt - computed: true, optional: false, required: false
  public get modifiedDt() {
    return this.getStringAttribute('modified_dt');
  }

  // private_endpoint_access_control_resource_list - computed: true, optional: false, required: false
  private _privateEndpointAccessControlResourceList = new DataSamsungcloudplatformKubernetesEnginePrivateEndpointAccessControlResourceListStructList(this, "private_endpoint_access_control_resource_list", false);
  public get privateEndpointAccessControlResourceList() {
    return this._privateEndpointAccessControlResourceList;
  }

  // private_endpoint_url - computed: true, optional: false, required: false
  public get privateEndpointUrl() {
    return this.getStringAttribute('private_endpoint_url');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // public_endpoint_access_control_ip - computed: true, optional: false, required: false
  public get publicEndpointAccessControlIp() {
    return this.getStringAttribute('public_endpoint_access_control_ip');
  }

  // public_endpoint_url - computed: true, optional: false, required: false
  public get publicEndpointUrl() {
    return this.getStringAttribute('public_endpoint_url');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // security_group_id - computed: true, optional: false, required: false
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // volume_id - computed: true, optional: false, required: false
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      kubernetes_engine_id: cdktf.stringToTerraform(this._kubernetesEngineId),
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
      kubernetes_engine_id: {
        value: cdktf.stringToHclTerraform(this._kubernetesEngineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
