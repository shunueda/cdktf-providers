// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration_ecosystem_k8s
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AcosCloudIntegrationEcosystemK8SAConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'enable': Enable Configuration; 'disable': Disable Configuration;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration_ecosystem_k8s#action AcosCloudIntegrationEcosystemK8SA#action}
  */
  readonly action?: string;
  /**
  * Enter cluster config file name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration_ecosystem_k8s#cluster_config_file AcosCloudIntegrationEcosystemK8SA#cluster_config_file}
  */
  readonly clusterConfigFile?: string;
  /**
  * '5': 5 seconds; '10': 10 seconds; '15': 15 seconds; '20': 20 seconds;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration_ecosystem_k8s#health_check_interval AcosCloudIntegrationEcosystemK8SA#health_check_interval}
  */
  readonly healthCheckInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration_ecosystem_k8s#id AcosCloudIntegrationEcosystemK8SA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration_ecosystem_k8s#uuid AcosCloudIntegrationEcosystemK8SA#uuid}
  */
  readonly uuid?: string;
  /**
  * service_label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration_ecosystem_k8s#service_label AcosCloudIntegrationEcosystemK8SA#service_label}
  */
  readonly serviceLabel?: AcosCloudIntegrationEcosystemK8SServiceLabelA[] | cdktf.IResolvable;
}
export interface AcosCloudIntegrationEcosystemK8SServiceLabelA {
  /**
  * Name service group to be monitored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration_ecosystem_k8s#service_label_name AcosCloudIntegrationEcosystemK8SA#service_label_name}
  */
  readonly serviceLabelName?: string;
}

export function acosCloudIntegrationEcosystemK8SServiceLabelAToTerraform(struct?: AcosCloudIntegrationEcosystemK8SServiceLabelA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_label_name: cdktf.stringToTerraform(struct!.serviceLabelName),
  }
}


export function acosCloudIntegrationEcosystemK8SServiceLabelAToHclTerraform(struct?: AcosCloudIntegrationEcosystemK8SServiceLabelA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_label_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceLabelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AcosCloudIntegrationEcosystemK8SServiceLabelAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AcosCloudIntegrationEcosystemK8SServiceLabelA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceLabelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceLabelName = this._serviceLabelName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AcosCloudIntegrationEcosystemK8SServiceLabelA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceLabelName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceLabelName = value.serviceLabelName;
    }
  }

  // service_label_name - computed: false, optional: true, required: false
  private _serviceLabelName?: string; 
  public get serviceLabelName() {
    return this.getStringAttribute('service_label_name');
  }
  public set serviceLabelName(value: string) {
    this._serviceLabelName = value;
  }
  public resetServiceLabelName() {
    this._serviceLabelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLabelNameInput() {
    return this._serviceLabelName;
  }
}

export class AcosCloudIntegrationEcosystemK8SServiceLabelAList extends cdktf.ComplexList {
  public internalValue? : AcosCloudIntegrationEcosystemK8SServiceLabelA[] | cdktf.IResolvable

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
  public get(index: number): AcosCloudIntegrationEcosystemK8SServiceLabelAOutputReference {
    return new AcosCloudIntegrationEcosystemK8SServiceLabelAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration_ecosystem_k8s thunder_acos_cloud_integration_ecosystem_k8s}
*/
export class AcosCloudIntegrationEcosystemK8SA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_acos_cloud_integration_ecosystem_k8s";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AcosCloudIntegrationEcosystemK8SA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AcosCloudIntegrationEcosystemK8SA to import
  * @param importFromId The id of the existing AcosCloudIntegrationEcosystemK8SA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration_ecosystem_k8s#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AcosCloudIntegrationEcosystemK8SA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_acos_cloud_integration_ecosystem_k8s", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration_ecosystem_k8s thunder_acos_cloud_integration_ecosystem_k8s} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AcosCloudIntegrationEcosystemK8SAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AcosCloudIntegrationEcosystemK8SAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_acos_cloud_integration_ecosystem_k8s',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._clusterConfigFile = config.clusterConfigFile;
    this._healthCheckInterval = config.healthCheckInterval;
    this._id = config.id;
    this._uuid = config.uuid;
    this._serviceLabel.internalValue = config.serviceLabel;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // cluster_config_file - computed: false, optional: true, required: false
  private _clusterConfigFile?: string; 
  public get clusterConfigFile() {
    return this.getStringAttribute('cluster_config_file');
  }
  public set clusterConfigFile(value: string) {
    this._clusterConfigFile = value;
  }
  public resetClusterConfigFile() {
    this._clusterConfigFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterConfigFileInput() {
    return this._clusterConfigFile;
  }

  // health_check_interval - computed: false, optional: true, required: false
  private _healthCheckInterval?: string; 
  public get healthCheckInterval() {
    return this.getStringAttribute('health_check_interval');
  }
  public set healthCheckInterval(value: string) {
    this._healthCheckInterval = value;
  }
  public resetHealthCheckInterval() {
    this._healthCheckInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckIntervalInput() {
    return this._healthCheckInterval;
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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // service_label - computed: false, optional: true, required: false
  private _serviceLabel = new AcosCloudIntegrationEcosystemK8SServiceLabelAList(this, "service_label", false);
  public get serviceLabel() {
    return this._serviceLabel;
  }
  public putServiceLabel(value: AcosCloudIntegrationEcosystemK8SServiceLabelA[] | cdktf.IResolvable) {
    this._serviceLabel.internalValue = value;
  }
  public resetServiceLabel() {
    this._serviceLabel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLabelInput() {
    return this._serviceLabel.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      cluster_config_file: cdktf.stringToTerraform(this._clusterConfigFile),
      health_check_interval: cdktf.stringToTerraform(this._healthCheckInterval),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      service_label: cdktf.listMapper(acosCloudIntegrationEcosystemK8SServiceLabelAToTerraform, true)(this._serviceLabel.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_config_file: {
        value: cdktf.stringToHclTerraform(this._clusterConfigFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_interval: {
        value: cdktf.stringToHclTerraform(this._healthCheckInterval),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_label: {
        value: cdktf.listMapperHcl(acosCloudIntegrationEcosystemK8SServiceLabelAToHclTerraform, true)(this._serviceLabel.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AcosCloudIntegrationEcosystemK8SServiceLabelAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
