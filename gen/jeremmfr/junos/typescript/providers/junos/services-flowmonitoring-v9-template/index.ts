// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_flowmonitoring_v9_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicesFlowmonitoringV9TemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Interval after which active flow is exported (10..600).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_flowmonitoring_v9_template#flow_active_timeout ServicesFlowmonitoringV9Template#flow_active_timeout}
  */
  readonly flowActiveTimeout?: number;
  /**
  * Period of inactivity that marks a flow inactive (10..600).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_flowmonitoring_v9_template#flow_inactive_timeout ServicesFlowmonitoringV9Template#flow_inactive_timeout}
  */
  readonly flowInactiveTimeout?: number;
  /**
  * Include flow direction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_flowmonitoring_v9_template#flow_key_flow_direction ServicesFlowmonitoringV9Template#flow_key_flow_direction}
  */
  readonly flowKeyFlowDirection?: boolean | cdktf.IResolvable;
  /**
  * Include output interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_flowmonitoring_v9_template#flow_key_output_interface ServicesFlowmonitoringV9Template#flow_key_output_interface}
  */
  readonly flowKeyOutputInterface?: boolean | cdktf.IResolvable;
  /**
  * Include vlan ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_flowmonitoring_v9_template#flow_key_vlan_id ServicesFlowmonitoringV9Template#flow_key_vlan_id}
  */
  readonly flowKeyVlanId?: boolean | cdktf.IResolvable;
  /**
  * Export-extension for `ipv4-template`, `ipv6-template` type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_flowmonitoring_v9_template#ip_template_export_extension ServicesFlowmonitoringV9Template#ip_template_export_extension}
  */
  readonly ipTemplateExportExtension?: string[];
  /**
  * One or more MPLS label positions (1..8).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_flowmonitoring_v9_template#mpls_template_label_position ServicesFlowmonitoringV9Template#mpls_template_label_position}
  */
  readonly mplsTemplateLabelPosition?: number[];
  /**
  * Name of flow-monitoring version9 template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_flowmonitoring_v9_template#name ServicesFlowmonitoringV9Template#name}
  */
  readonly name: string;
  /**
  * Disable nexthop learning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_flowmonitoring_v9_template#nexthop_learning_disable ServicesFlowmonitoringV9Template#nexthop_learning_disable}
  */
  readonly nexthopLearningDisable?: boolean | cdktf.IResolvable;
  /**
  * Enable nexthop learning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_flowmonitoring_v9_template#nexthop_learning_enable ServicesFlowmonitoringV9Template#nexthop_learning_enable}
  */
  readonly nexthopLearningEnable?: boolean | cdktf.IResolvable;
  /**
  * Options template id (1024..65535).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_flowmonitoring_v9_template#option_template_id ServicesFlowmonitoringV9Template#option_template_id}
  */
  readonly optionTemplateId?: number;
  /**
  * Source Id (0..255).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_flowmonitoring_v9_template#source_id ServicesFlowmonitoringV9Template#source_id}
  */
  readonly sourceId?: number;
  /**
  * Template id (1024..65535).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_flowmonitoring_v9_template#template_id ServicesFlowmonitoringV9Template#template_id}
  */
  readonly templateId?: number;
  /**
  * Tunnel observation IPv4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_flowmonitoring_v9_template#tunnel_observation_ipv4 ServicesFlowmonitoringV9Template#tunnel_observation_ipv4}
  */
  readonly tunnelObservationIpv4?: boolean | cdktf.IResolvable;
  /**
  * Tunnel observation IPv6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_flowmonitoring_v9_template#tunnel_observation_ipv6 ServicesFlowmonitoringV9Template#tunnel_observation_ipv6}
  */
  readonly tunnelObservationIpv6?: boolean | cdktf.IResolvable;
  /**
  * Type of template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_flowmonitoring_v9_template#type ServicesFlowmonitoringV9Template#type}
  */
  readonly type: string;
  /**
  * option_refresh_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_flowmonitoring_v9_template#option_refresh_rate ServicesFlowmonitoringV9Template#option_refresh_rate}
  */
  readonly optionRefreshRate?: ServicesFlowmonitoringV9TemplateOptionRefreshRate;
  /**
  * template_refresh_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_flowmonitoring_v9_template#template_refresh_rate ServicesFlowmonitoringV9Template#template_refresh_rate}
  */
  readonly templateRefreshRate?: ServicesFlowmonitoringV9TemplateTemplateRefreshRate;
}
export interface ServicesFlowmonitoringV9TemplateOptionRefreshRate {
  /**
  * In number of packets (1..480000)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_flowmonitoring_v9_template#packets ServicesFlowmonitoringV9Template#packets}
  */
  readonly packets?: number;
  /**
  * In number of seconds (10..600).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_flowmonitoring_v9_template#seconds ServicesFlowmonitoringV9Template#seconds}
  */
  readonly seconds?: number;
}

export function servicesFlowmonitoringV9TemplateOptionRefreshRateToTerraform(struct?: ServicesFlowmonitoringV9TemplateOptionRefreshRate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    packets: cdktf.numberToTerraform(struct!.packets),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}


export function servicesFlowmonitoringV9TemplateOptionRefreshRateToHclTerraform(struct?: ServicesFlowmonitoringV9TemplateOptionRefreshRate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    packets: {
      value: cdktf.numberToHclTerraform(struct!.packets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicesFlowmonitoringV9TemplateOptionRefreshRateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServicesFlowmonitoringV9TemplateOptionRefreshRate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._packets !== undefined) {
      hasAnyValues = true;
      internalValueResult.packets = this._packets;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicesFlowmonitoringV9TemplateOptionRefreshRate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._packets = undefined;
      this._seconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._packets = value.packets;
      this._seconds = value.seconds;
    }
  }

  // packets - computed: false, optional: true, required: false
  private _packets?: number; 
  public get packets() {
    return this.getNumberAttribute('packets');
  }
  public set packets(value: number) {
    this._packets = value;
  }
  public resetPackets() {
    this._packets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsInput() {
    return this._packets;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface ServicesFlowmonitoringV9TemplateTemplateRefreshRate {
  /**
  * In number of packets (1..480000)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_flowmonitoring_v9_template#packets ServicesFlowmonitoringV9Template#packets}
  */
  readonly packets?: number;
  /**
  * In number of seconds (10..600).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_flowmonitoring_v9_template#seconds ServicesFlowmonitoringV9Template#seconds}
  */
  readonly seconds?: number;
}

export function servicesFlowmonitoringV9TemplateTemplateRefreshRateToTerraform(struct?: ServicesFlowmonitoringV9TemplateTemplateRefreshRate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    packets: cdktf.numberToTerraform(struct!.packets),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}


export function servicesFlowmonitoringV9TemplateTemplateRefreshRateToHclTerraform(struct?: ServicesFlowmonitoringV9TemplateTemplateRefreshRate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    packets: {
      value: cdktf.numberToHclTerraform(struct!.packets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicesFlowmonitoringV9TemplateTemplateRefreshRateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServicesFlowmonitoringV9TemplateTemplateRefreshRate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._packets !== undefined) {
      hasAnyValues = true;
      internalValueResult.packets = this._packets;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicesFlowmonitoringV9TemplateTemplateRefreshRate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._packets = undefined;
      this._seconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._packets = value.packets;
      this._seconds = value.seconds;
    }
  }

  // packets - computed: false, optional: true, required: false
  private _packets?: number; 
  public get packets() {
    return this.getNumberAttribute('packets');
  }
  public set packets(value: number) {
    this._packets = value;
  }
  public resetPackets() {
    this._packets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsInput() {
    return this._packets;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_flowmonitoring_v9_template junos_services_flowmonitoring_v9_template}
*/
export class ServicesFlowmonitoringV9Template extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_services_flowmonitoring_v9_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServicesFlowmonitoringV9Template resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServicesFlowmonitoringV9Template to import
  * @param importFromId The id of the existing ServicesFlowmonitoringV9Template that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_flowmonitoring_v9_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServicesFlowmonitoringV9Template to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_services_flowmonitoring_v9_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_flowmonitoring_v9_template junos_services_flowmonitoring_v9_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicesFlowmonitoringV9TemplateConfig
  */
  public constructor(scope: Construct, id: string, config: ServicesFlowmonitoringV9TemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_services_flowmonitoring_v9_template',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0',
        providerVersionConstraint: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._flowActiveTimeout = config.flowActiveTimeout;
    this._flowInactiveTimeout = config.flowInactiveTimeout;
    this._flowKeyFlowDirection = config.flowKeyFlowDirection;
    this._flowKeyOutputInterface = config.flowKeyOutputInterface;
    this._flowKeyVlanId = config.flowKeyVlanId;
    this._ipTemplateExportExtension = config.ipTemplateExportExtension;
    this._mplsTemplateLabelPosition = config.mplsTemplateLabelPosition;
    this._name = config.name;
    this._nexthopLearningDisable = config.nexthopLearningDisable;
    this._nexthopLearningEnable = config.nexthopLearningEnable;
    this._optionTemplateId = config.optionTemplateId;
    this._sourceId = config.sourceId;
    this._templateId = config.templateId;
    this._tunnelObservationIpv4 = config.tunnelObservationIpv4;
    this._tunnelObservationIpv6 = config.tunnelObservationIpv6;
    this._type = config.type;
    this._optionRefreshRate.internalValue = config.optionRefreshRate;
    this._templateRefreshRate.internalValue = config.templateRefreshRate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // flow_active_timeout - computed: false, optional: true, required: false
  private _flowActiveTimeout?: number; 
  public get flowActiveTimeout() {
    return this.getNumberAttribute('flow_active_timeout');
  }
  public set flowActiveTimeout(value: number) {
    this._flowActiveTimeout = value;
  }
  public resetFlowActiveTimeout() {
    this._flowActiveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowActiveTimeoutInput() {
    return this._flowActiveTimeout;
  }

  // flow_inactive_timeout - computed: false, optional: true, required: false
  private _flowInactiveTimeout?: number; 
  public get flowInactiveTimeout() {
    return this.getNumberAttribute('flow_inactive_timeout');
  }
  public set flowInactiveTimeout(value: number) {
    this._flowInactiveTimeout = value;
  }
  public resetFlowInactiveTimeout() {
    this._flowInactiveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowInactiveTimeoutInput() {
    return this._flowInactiveTimeout;
  }

  // flow_key_flow_direction - computed: false, optional: true, required: false
  private _flowKeyFlowDirection?: boolean | cdktf.IResolvable; 
  public get flowKeyFlowDirection() {
    return this.getBooleanAttribute('flow_key_flow_direction');
  }
  public set flowKeyFlowDirection(value: boolean | cdktf.IResolvable) {
    this._flowKeyFlowDirection = value;
  }
  public resetFlowKeyFlowDirection() {
    this._flowKeyFlowDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowKeyFlowDirectionInput() {
    return this._flowKeyFlowDirection;
  }

  // flow_key_output_interface - computed: false, optional: true, required: false
  private _flowKeyOutputInterface?: boolean | cdktf.IResolvable; 
  public get flowKeyOutputInterface() {
    return this.getBooleanAttribute('flow_key_output_interface');
  }
  public set flowKeyOutputInterface(value: boolean | cdktf.IResolvable) {
    this._flowKeyOutputInterface = value;
  }
  public resetFlowKeyOutputInterface() {
    this._flowKeyOutputInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowKeyOutputInterfaceInput() {
    return this._flowKeyOutputInterface;
  }

  // flow_key_vlan_id - computed: false, optional: true, required: false
  private _flowKeyVlanId?: boolean | cdktf.IResolvable; 
  public get flowKeyVlanId() {
    return this.getBooleanAttribute('flow_key_vlan_id');
  }
  public set flowKeyVlanId(value: boolean | cdktf.IResolvable) {
    this._flowKeyVlanId = value;
  }
  public resetFlowKeyVlanId() {
    this._flowKeyVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowKeyVlanIdInput() {
    return this._flowKeyVlanId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_template_export_extension - computed: false, optional: true, required: false
  private _ipTemplateExportExtension?: string[]; 
  public get ipTemplateExportExtension() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_template_export_extension'));
  }
  public set ipTemplateExportExtension(value: string[]) {
    this._ipTemplateExportExtension = value;
  }
  public resetIpTemplateExportExtension() {
    this._ipTemplateExportExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTemplateExportExtensionInput() {
    return this._ipTemplateExportExtension;
  }

  // mpls_template_label_position - computed: false, optional: true, required: false
  private _mplsTemplateLabelPosition?: number[]; 
  public get mplsTemplateLabelPosition() {
    return this.getNumberListAttribute('mpls_template_label_position');
  }
  public set mplsTemplateLabelPosition(value: number[]) {
    this._mplsTemplateLabelPosition = value;
  }
  public resetMplsTemplateLabelPosition() {
    this._mplsTemplateLabelPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mplsTemplateLabelPositionInput() {
    return this._mplsTemplateLabelPosition;
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

  // nexthop_learning_disable - computed: false, optional: true, required: false
  private _nexthopLearningDisable?: boolean | cdktf.IResolvable; 
  public get nexthopLearningDisable() {
    return this.getBooleanAttribute('nexthop_learning_disable');
  }
  public set nexthopLearningDisable(value: boolean | cdktf.IResolvable) {
    this._nexthopLearningDisable = value;
  }
  public resetNexthopLearningDisable() {
    this._nexthopLearningDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopLearningDisableInput() {
    return this._nexthopLearningDisable;
  }

  // nexthop_learning_enable - computed: false, optional: true, required: false
  private _nexthopLearningEnable?: boolean | cdktf.IResolvable; 
  public get nexthopLearningEnable() {
    return this.getBooleanAttribute('nexthop_learning_enable');
  }
  public set nexthopLearningEnable(value: boolean | cdktf.IResolvable) {
    this._nexthopLearningEnable = value;
  }
  public resetNexthopLearningEnable() {
    this._nexthopLearningEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopLearningEnableInput() {
    return this._nexthopLearningEnable;
  }

  // option_template_id - computed: false, optional: true, required: false
  private _optionTemplateId?: number; 
  public get optionTemplateId() {
    return this.getNumberAttribute('option_template_id');
  }
  public set optionTemplateId(value: number) {
    this._optionTemplateId = value;
  }
  public resetOptionTemplateId() {
    this._optionTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionTemplateIdInput() {
    return this._optionTemplateId;
  }

  // source_id - computed: false, optional: true, required: false
  private _sourceId?: number; 
  public get sourceId() {
    return this.getNumberAttribute('source_id');
  }
  public set sourceId(value: number) {
    this._sourceId = value;
  }
  public resetSourceId() {
    this._sourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIdInput() {
    return this._sourceId;
  }

  // template_id - computed: false, optional: true, required: false
  private _templateId?: number; 
  public get templateId() {
    return this.getNumberAttribute('template_id');
  }
  public set templateId(value: number) {
    this._templateId = value;
  }
  public resetTemplateId() {
    this._templateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // tunnel_observation_ipv4 - computed: false, optional: true, required: false
  private _tunnelObservationIpv4?: boolean | cdktf.IResolvable; 
  public get tunnelObservationIpv4() {
    return this.getBooleanAttribute('tunnel_observation_ipv4');
  }
  public set tunnelObservationIpv4(value: boolean | cdktf.IResolvable) {
    this._tunnelObservationIpv4 = value;
  }
  public resetTunnelObservationIpv4() {
    this._tunnelObservationIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelObservationIpv4Input() {
    return this._tunnelObservationIpv4;
  }

  // tunnel_observation_ipv6 - computed: false, optional: true, required: false
  private _tunnelObservationIpv6?: boolean | cdktf.IResolvable; 
  public get tunnelObservationIpv6() {
    return this.getBooleanAttribute('tunnel_observation_ipv6');
  }
  public set tunnelObservationIpv6(value: boolean | cdktf.IResolvable) {
    this._tunnelObservationIpv6 = value;
  }
  public resetTunnelObservationIpv6() {
    this._tunnelObservationIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelObservationIpv6Input() {
    return this._tunnelObservationIpv6;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // option_refresh_rate - computed: false, optional: true, required: false
  private _optionRefreshRate = new ServicesFlowmonitoringV9TemplateOptionRefreshRateOutputReference(this, "option_refresh_rate");
  public get optionRefreshRate() {
    return this._optionRefreshRate;
  }
  public putOptionRefreshRate(value: ServicesFlowmonitoringV9TemplateOptionRefreshRate) {
    this._optionRefreshRate.internalValue = value;
  }
  public resetOptionRefreshRate() {
    this._optionRefreshRate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionRefreshRateInput() {
    return this._optionRefreshRate.internalValue;
  }

  // template_refresh_rate - computed: false, optional: true, required: false
  private _templateRefreshRate = new ServicesFlowmonitoringV9TemplateTemplateRefreshRateOutputReference(this, "template_refresh_rate");
  public get templateRefreshRate() {
    return this._templateRefreshRate;
  }
  public putTemplateRefreshRate(value: ServicesFlowmonitoringV9TemplateTemplateRefreshRate) {
    this._templateRefreshRate.internalValue = value;
  }
  public resetTemplateRefreshRate() {
    this._templateRefreshRate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateRefreshRateInput() {
    return this._templateRefreshRate.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      flow_active_timeout: cdktf.numberToTerraform(this._flowActiveTimeout),
      flow_inactive_timeout: cdktf.numberToTerraform(this._flowInactiveTimeout),
      flow_key_flow_direction: cdktf.booleanToTerraform(this._flowKeyFlowDirection),
      flow_key_output_interface: cdktf.booleanToTerraform(this._flowKeyOutputInterface),
      flow_key_vlan_id: cdktf.booleanToTerraform(this._flowKeyVlanId),
      ip_template_export_extension: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipTemplateExportExtension),
      mpls_template_label_position: cdktf.listMapper(cdktf.numberToTerraform, false)(this._mplsTemplateLabelPosition),
      name: cdktf.stringToTerraform(this._name),
      nexthop_learning_disable: cdktf.booleanToTerraform(this._nexthopLearningDisable),
      nexthop_learning_enable: cdktf.booleanToTerraform(this._nexthopLearningEnable),
      option_template_id: cdktf.numberToTerraform(this._optionTemplateId),
      source_id: cdktf.numberToTerraform(this._sourceId),
      template_id: cdktf.numberToTerraform(this._templateId),
      tunnel_observation_ipv4: cdktf.booleanToTerraform(this._tunnelObservationIpv4),
      tunnel_observation_ipv6: cdktf.booleanToTerraform(this._tunnelObservationIpv6),
      type: cdktf.stringToTerraform(this._type),
      option_refresh_rate: servicesFlowmonitoringV9TemplateOptionRefreshRateToTerraform(this._optionRefreshRate.internalValue),
      template_refresh_rate: servicesFlowmonitoringV9TemplateTemplateRefreshRateToTerraform(this._templateRefreshRate.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      flow_active_timeout: {
        value: cdktf.numberToHclTerraform(this._flowActiveTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      flow_inactive_timeout: {
        value: cdktf.numberToHclTerraform(this._flowInactiveTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      flow_key_flow_direction: {
        value: cdktf.booleanToHclTerraform(this._flowKeyFlowDirection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      flow_key_output_interface: {
        value: cdktf.booleanToHclTerraform(this._flowKeyOutputInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      flow_key_vlan_id: {
        value: cdktf.booleanToHclTerraform(this._flowKeyVlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_template_export_extension: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipTemplateExportExtension),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      mpls_template_label_position: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._mplsTemplateLabelPosition),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nexthop_learning_disable: {
        value: cdktf.booleanToHclTerraform(this._nexthopLearningDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nexthop_learning_enable: {
        value: cdktf.booleanToHclTerraform(this._nexthopLearningEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      option_template_id: {
        value: cdktf.numberToHclTerraform(this._optionTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_id: {
        value: cdktf.numberToHclTerraform(this._sourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      template_id: {
        value: cdktf.numberToHclTerraform(this._templateId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tunnel_observation_ipv4: {
        value: cdktf.booleanToHclTerraform(this._tunnelObservationIpv4),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tunnel_observation_ipv6: {
        value: cdktf.booleanToHclTerraform(this._tunnelObservationIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      option_refresh_rate: {
        value: servicesFlowmonitoringV9TemplateOptionRefreshRateToHclTerraform(this._optionRefreshRate.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServicesFlowmonitoringV9TemplateOptionRefreshRate",
      },
      template_refresh_rate: {
        value: servicesFlowmonitoringV9TemplateTemplateRefreshRateToHclTerraform(this._templateRefreshRate.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServicesFlowmonitoringV9TemplateTemplateRefreshRate",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
