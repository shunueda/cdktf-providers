// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device_tracking_template_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScaleoutClusterLocalDeviceTrackingTemplateTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * ClusterId
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device_tracking_template_template#cluster_id ScaleoutClusterLocalDeviceTrackingTemplateTemplate#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device_tracking_template_template#id ScaleoutClusterLocalDeviceTrackingTemplateTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'ipv4': take action for IPv4 traffic-only; 'ipv6': take action for IPv6 traffic-only;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device_tracking_template_template#ip_version ScaleoutClusterLocalDeviceTrackingTemplateTemplate#ip_version}
  */
  readonly ipVersion: string;
  /**
  * bind tracking template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device_tracking_template_template#template ScaleoutClusterLocalDeviceTrackingTemplateTemplate#template}
  */
  readonly template: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device_tracking_template_template#user_tag ScaleoutClusterLocalDeviceTrackingTemplateTemplate#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device_tracking_template_template#uuid ScaleoutClusterLocalDeviceTrackingTemplateTemplate#uuid}
  */
  readonly uuid?: string;
  /**
  * threshold_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device_tracking_template_template#threshold_cfg ScaleoutClusterLocalDeviceTrackingTemplateTemplate#threshold_cfg}
  */
  readonly thresholdCfg?: ScaleoutClusterLocalDeviceTrackingTemplateTemplateThresholdCfg[] | cdktf.IResolvable;
}
export interface ScaleoutClusterLocalDeviceTrackingTemplateTemplateThresholdCfg {
  /**
  * 'down': node stops processing user traffic; 'exit-cluster': node exits scaleout cluster;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device_tracking_template_template#action ScaleoutClusterLocalDeviceTrackingTemplateTemplate#action}
  */
  readonly action?: string;
  /**
  * action triggering threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device_tracking_template_template#threshold ScaleoutClusterLocalDeviceTrackingTemplateTemplate#threshold}
  */
  readonly threshold?: number;
}

export function scaleoutClusterLocalDeviceTrackingTemplateTemplateThresholdCfgToTerraform(struct?: ScaleoutClusterLocalDeviceTrackingTemplateTemplateThresholdCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function scaleoutClusterLocalDeviceTrackingTemplateTemplateThresholdCfgToHclTerraform(struct?: ScaleoutClusterLocalDeviceTrackingTemplateTemplateThresholdCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterLocalDeviceTrackingTemplateTemplateThresholdCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScaleoutClusterLocalDeviceTrackingTemplateTemplateThresholdCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterLocalDeviceTrackingTemplateTemplateThresholdCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._threshold = value.threshold;
    }
  }

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

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}

export class ScaleoutClusterLocalDeviceTrackingTemplateTemplateThresholdCfgList extends cdktf.ComplexList {
  public internalValue? : ScaleoutClusterLocalDeviceTrackingTemplateTemplateThresholdCfg[] | cdktf.IResolvable

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
  public get(index: number): ScaleoutClusterLocalDeviceTrackingTemplateTemplateThresholdCfgOutputReference {
    return new ScaleoutClusterLocalDeviceTrackingTemplateTemplateThresholdCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device_tracking_template_template thunder_scaleout_cluster_local_device_tracking_template_template}
*/
export class ScaleoutClusterLocalDeviceTrackingTemplateTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_scaleout_cluster_local_device_tracking_template_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ScaleoutClusterLocalDeviceTrackingTemplateTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ScaleoutClusterLocalDeviceTrackingTemplateTemplate to import
  * @param importFromId The id of the existing ScaleoutClusterLocalDeviceTrackingTemplateTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device_tracking_template_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ScaleoutClusterLocalDeviceTrackingTemplateTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_scaleout_cluster_local_device_tracking_template_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device_tracking_template_template thunder_scaleout_cluster_local_device_tracking_template_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScaleoutClusterLocalDeviceTrackingTemplateTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: ScaleoutClusterLocalDeviceTrackingTemplateTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_scaleout_cluster_local_device_tracking_template_template',
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
    this._clusterId = config.clusterId;
    this._id = config.id;
    this._ipVersion = config.ipVersion;
    this._template = config.template;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._thresholdCfg.internalValue = config.thresholdCfg;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
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

  // ip_version - computed: false, optional: false, required: true
  private _ipVersion?: string; 
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string) {
    this._ipVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // threshold_cfg - computed: false, optional: true, required: false
  private _thresholdCfg = new ScaleoutClusterLocalDeviceTrackingTemplateTemplateThresholdCfgList(this, "threshold_cfg", false);
  public get thresholdCfg() {
    return this._thresholdCfg;
  }
  public putThresholdCfg(value: ScaleoutClusterLocalDeviceTrackingTemplateTemplateThresholdCfg[] | cdktf.IResolvable) {
    this._thresholdCfg.internalValue = value;
  }
  public resetThresholdCfg() {
    this._thresholdCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdCfgInput() {
    return this._thresholdCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      ip_version: cdktf.stringToTerraform(this._ipVersion),
      template: cdktf.stringToTerraform(this._template),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      threshold_cfg: cdktf.listMapper(scaleoutClusterLocalDeviceTrackingTemplateTemplateThresholdCfgToTerraform, true)(this._thresholdCfg.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
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
      ip_version: {
        value: cdktf.stringToHclTerraform(this._ipVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template: {
        value: cdktf.stringToHclTerraform(this._template),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
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
      threshold_cfg: {
        value: cdktf.listMapperHcl(scaleoutClusterLocalDeviceTrackingTemplateTemplateThresholdCfgToHclTerraform, true)(this._thresholdCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ScaleoutClusterLocalDeviceTrackingTemplateTemplateThresholdCfgList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
