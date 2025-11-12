// https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/data-sources/service_device_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMsoServiceDeviceClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/data-sources/service_device_cluster#id DataMsoServiceDeviceCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/data-sources/service_device_cluster#name DataMsoServiceDeviceCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/data-sources/service_device_cluster#template_id DataMsoServiceDeviceCluster#template_id}
  */
  readonly templateId: string;
}
export interface DataMsoServiceDeviceClusterInterfaceProperties {
}

export function dataMsoServiceDeviceClusterInterfacePropertiesToTerraform(struct?: DataMsoServiceDeviceClusterInterfaceProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMsoServiceDeviceClusterInterfacePropertiesToHclTerraform(struct?: DataMsoServiceDeviceClusterInterfaceProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMsoServiceDeviceClusterInterfacePropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMsoServiceDeviceClusterInterfaceProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMsoServiceDeviceClusterInterfaceProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // anycast - computed: true, optional: false, required: false
  public get anycast() {
    return this.getBooleanAttribute('anycast');
  }

  // bd_uuid - computed: true, optional: false, required: false
  public get bdUuid() {
    return this.getStringAttribute('bd_uuid');
  }

  // config_static_mac - computed: true, optional: false, required: false
  public get configStaticMac() {
    return this.getBooleanAttribute('config_static_mac');
  }

  // external_epg_uuid - computed: true, optional: false, required: false
  public get externalEpgUuid() {
    return this.getStringAttribute('external_epg_uuid');
  }

  // ipsla_monitoring_policy_uuid - computed: true, optional: false, required: false
  public get ipslaMonitoringPolicyUuid() {
    return this.getStringAttribute('ipsla_monitoring_policy_uuid');
  }

  // is_backup_redirect_ip - computed: true, optional: false, required: false
  public get isBackupRedirectIp() {
    return this.getBooleanAttribute('is_backup_redirect_ip');
  }

  // load_balance_hashing - computed: true, optional: false, required: false
  public get loadBalanceHashing() {
    return this.getStringAttribute('load_balance_hashing');
  }

  // max_threshold - computed: true, optional: false, required: false
  public get maxThreshold() {
    return this.getNumberAttribute('max_threshold');
  }

  // min_threshold - computed: true, optional: false, required: false
  public get minThreshold() {
    return this.getNumberAttribute('min_threshold');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pod_aware_redirection - computed: true, optional: false, required: false
  public get podAwareRedirection() {
    return this.getBooleanAttribute('pod_aware_redirection');
  }

  // preferred_group - computed: true, optional: false, required: false
  public get preferredGroup() {
    return this.getBooleanAttribute('preferred_group');
  }

  // qos_policy_uuid - computed: true, optional: false, required: false
  public get qosPolicyUuid() {
    return this.getStringAttribute('qos_policy_uuid');
  }

  // resilient_hashing - computed: true, optional: false, required: false
  public get resilientHashing() {
    return this.getBooleanAttribute('resilient_hashing');
  }

  // rewrite_source_mac - computed: true, optional: false, required: false
  public get rewriteSourceMac() {
    return this.getBooleanAttribute('rewrite_source_mac');
  }

  // tag_based_sorting - computed: true, optional: false, required: false
  public get tagBasedSorting() {
    return this.getBooleanAttribute('tag_based_sorting');
  }

  // threshold_down_action - computed: true, optional: false, required: false
  public get thresholdDownAction() {
    return this.getStringAttribute('threshold_down_action');
  }
}

export class DataMsoServiceDeviceClusterInterfacePropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataMsoServiceDeviceClusterInterfacePropertiesOutputReference {
    return new DataMsoServiceDeviceClusterInterfacePropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/data-sources/service_device_cluster mso_service_device_cluster}
*/
export class DataMsoServiceDeviceCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso_service_device_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMsoServiceDeviceCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMsoServiceDeviceCluster to import
  * @param importFromId The id of the existing DataMsoServiceDeviceCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/data-sources/service_device_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMsoServiceDeviceCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso_service_device_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/data-sources/service_device_cluster mso_service_device_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMsoServiceDeviceClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataMsoServiceDeviceClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'mso_service_device_cluster',
      terraformGeneratorMetadata: {
        providerName: 'mso',
        providerVersion: '1.6.0',
        providerVersionConstraint: '1.6.0'
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
    this._name = config.name;
    this._templateId = config.templateId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device_mode - computed: true, optional: false, required: false
  public get deviceMode() {
    return this.getStringAttribute('device_mode');
  }

  // device_type - computed: true, optional: false, required: false
  public get deviceType() {
    return this.getStringAttribute('device_type');
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

  // interface_properties - computed: true, optional: false, required: false
  private _interfaceProperties = new DataMsoServiceDeviceClusterInterfacePropertiesList(this, "interface_properties", false);
  public get interfaceProperties() {
    return this._interfaceProperties;
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

  // template_id - computed: false, optional: false, required: true
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      template_id: cdktf.stringToTerraform(this._templateId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_id: {
        value: cdktf.stringToHclTerraform(this._templateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
