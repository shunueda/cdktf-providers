// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cflowd_policy_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CflowdPolicyDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Active flow timeout in seconds
  *   - Range: `30`-`3600`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cflowd_policy_definition#active_flow_timeout CflowdPolicyDefinition#active_flow_timeout}
  */
  readonly activeFlowTimeout?: number;
  /**
  * List of collectors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cflowd_policy_definition#collectors CflowdPolicyDefinition#collectors}
  */
  readonly collectors: CflowdPolicyDefinitionCollectors[] | cdktf.IResolvable;
  /**
  * The description of the policy definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cflowd_policy_definition#description CflowdPolicyDefinition#description}
  */
  readonly description: string;
  /**
  * Flow refresh in seconds
  *   - Range: `60`-`86400`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cflowd_policy_definition#flow_refresh CflowdPolicyDefinition#flow_refresh}
  */
  readonly flowRefresh?: number;
  /**
  * Inactive flow timeout in seconds
  *   - Range: `1`-`3600`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cflowd_policy_definition#inactive_flow_timeout CflowdPolicyDefinition#inactive_flow_timeout}
  */
  readonly inactiveFlowTimeout?: number;
  /**
  * The name of the policy definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cflowd_policy_definition#name CflowdPolicyDefinition#name}
  */
  readonly name: string;
  /**
  * Protocol, either `ipv4`, `ipv6` or `all`
  *   - Choices: `ipv4`, `ipv6`, `all`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cflowd_policy_definition#protocol CflowdPolicyDefinition#protocol}
  */
  readonly protocol?: string;
  /**
  * Collect remarked DSCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cflowd_policy_definition#remarked_dscp CflowdPolicyDefinition#remarked_dscp}
  */
  readonly remarkedDscp?: boolean | cdktf.IResolvable;
  /**
  * Flow sampling interval
  *   - Range: `1`-`65536`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cflowd_policy_definition#sampling_interval CflowdPolicyDefinition#sampling_interval}
  */
  readonly samplingInterval?: number;
  /**
  * Collect TOS record field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cflowd_policy_definition#tos CflowdPolicyDefinition#tos}
  */
  readonly tos?: boolean | cdktf.IResolvable;
}
export interface CflowdPolicyDefinitionCollectors {
  /**
  * BFD metrics exporting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cflowd_policy_definition#bfd_metrics_exporting CflowdPolicyDefinition#bfd_metrics_exporting}
  */
  readonly bfdMetricsExporting?: boolean | cdktf.IResolvable;
  /**
  * Export spreading
  *   - Choices: `enable`, `disable`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cflowd_policy_definition#export_spreading CflowdPolicyDefinition#export_spreading}
  */
  readonly exportSpreading?: string;
  /**
  * Exporting interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cflowd_policy_definition#exporting_interval CflowdPolicyDefinition#exporting_interval}
  */
  readonly exportingInterval?: number;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cflowd_policy_definition#ip_address CflowdPolicyDefinition#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Port
  *   - Range: `1024`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cflowd_policy_definition#port CflowdPolicyDefinition#port}
  */
  readonly port?: number;
  /**
  * Source interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cflowd_policy_definition#source_interface CflowdPolicyDefinition#source_interface}
  */
  readonly sourceInterface?: string;
  /**
  * Transport protocol
  *   - Choices: `transport_tcp`, `transport_udp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cflowd_policy_definition#transport CflowdPolicyDefinition#transport}
  */
  readonly transport?: string;
  /**
  * VPN ID
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cflowd_policy_definition#vpn_id CflowdPolicyDefinition#vpn_id}
  */
  readonly vpnId?: number;
}

export function cflowdPolicyDefinitionCollectorsToTerraform(struct?: CflowdPolicyDefinitionCollectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bfd_metrics_exporting: cdktf.booleanToTerraform(struct!.bfdMetricsExporting),
    export_spreading: cdktf.stringToTerraform(struct!.exportSpreading),
    exporting_interval: cdktf.numberToTerraform(struct!.exportingInterval),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    port: cdktf.numberToTerraform(struct!.port),
    source_interface: cdktf.stringToTerraform(struct!.sourceInterface),
    transport: cdktf.stringToTerraform(struct!.transport),
    vpn_id: cdktf.numberToTerraform(struct!.vpnId),
  }
}


export function cflowdPolicyDefinitionCollectorsToHclTerraform(struct?: CflowdPolicyDefinitionCollectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bfd_metrics_exporting: {
      value: cdktf.booleanToHclTerraform(struct!.bfdMetricsExporting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    export_spreading: {
      value: cdktf.stringToHclTerraform(struct!.exportSpreading),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exporting_interval: {
      value: cdktf.numberToHclTerraform(struct!.exportingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_interface: {
      value: cdktf.stringToHclTerraform(struct!.sourceInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transport: {
      value: cdktf.stringToHclTerraform(struct!.transport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpn_id: {
      value: cdktf.numberToHclTerraform(struct!.vpnId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CflowdPolicyDefinitionCollectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CflowdPolicyDefinitionCollectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bfdMetricsExporting !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdMetricsExporting = this._bfdMetricsExporting;
    }
    if (this._exportSpreading !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportSpreading = this._exportSpreading;
    }
    if (this._exportingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportingInterval = this._exportingInterval;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._sourceInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInterface = this._sourceInterface;
    }
    if (this._transport !== undefined) {
      hasAnyValues = true;
      internalValueResult.transport = this._transport;
    }
    if (this._vpnId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnId = this._vpnId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CflowdPolicyDefinitionCollectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bfdMetricsExporting = undefined;
      this._exportSpreading = undefined;
      this._exportingInterval = undefined;
      this._ipAddress = undefined;
      this._port = undefined;
      this._sourceInterface = undefined;
      this._transport = undefined;
      this._vpnId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bfdMetricsExporting = value.bfdMetricsExporting;
      this._exportSpreading = value.exportSpreading;
      this._exportingInterval = value.exportingInterval;
      this._ipAddress = value.ipAddress;
      this._port = value.port;
      this._sourceInterface = value.sourceInterface;
      this._transport = value.transport;
      this._vpnId = value.vpnId;
    }
  }

  // bfd_metrics_exporting - computed: false, optional: true, required: false
  private _bfdMetricsExporting?: boolean | cdktf.IResolvable; 
  public get bfdMetricsExporting() {
    return this.getBooleanAttribute('bfd_metrics_exporting');
  }
  public set bfdMetricsExporting(value: boolean | cdktf.IResolvable) {
    this._bfdMetricsExporting = value;
  }
  public resetBfdMetricsExporting() {
    this._bfdMetricsExporting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdMetricsExportingInput() {
    return this._bfdMetricsExporting;
  }

  // export_spreading - computed: false, optional: true, required: false
  private _exportSpreading?: string; 
  public get exportSpreading() {
    return this.getStringAttribute('export_spreading');
  }
  public set exportSpreading(value: string) {
    this._exportSpreading = value;
  }
  public resetExportSpreading() {
    this._exportSpreading = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportSpreadingInput() {
    return this._exportSpreading;
  }

  // exporting_interval - computed: false, optional: true, required: false
  private _exportingInterval?: number; 
  public get exportingInterval() {
    return this.getNumberAttribute('exporting_interval');
  }
  public set exportingInterval(value: number) {
    this._exportingInterval = value;
  }
  public resetExportingInterval() {
    this._exportingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportingIntervalInput() {
    return this._exportingInterval;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // source_interface - computed: false, optional: true, required: false
  private _sourceInterface?: string; 
  public get sourceInterface() {
    return this.getStringAttribute('source_interface');
  }
  public set sourceInterface(value: string) {
    this._sourceInterface = value;
  }
  public resetSourceInterface() {
    this._sourceInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceInput() {
    return this._sourceInterface;
  }

  // transport - computed: false, optional: true, required: false
  private _transport?: string; 
  public get transport() {
    return this.getStringAttribute('transport');
  }
  public set transport(value: string) {
    this._transport = value;
  }
  public resetTransport() {
    this._transport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportInput() {
    return this._transport;
  }

  // vpn_id - computed: false, optional: true, required: false
  private _vpnId?: number; 
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }
  public set vpnId(value: number) {
    this._vpnId = value;
  }
  public resetVpnId() {
    this._vpnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIdInput() {
    return this._vpnId;
  }
}

export class CflowdPolicyDefinitionCollectorsList extends cdktf.ComplexList {
  public internalValue? : CflowdPolicyDefinitionCollectors[] | cdktf.IResolvable

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
  public get(index: number): CflowdPolicyDefinitionCollectorsOutputReference {
    return new CflowdPolicyDefinitionCollectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cflowd_policy_definition sdwan_cflowd_policy_definition}
*/
export class CflowdPolicyDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cflowd_policy_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CflowdPolicyDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CflowdPolicyDefinition to import
  * @param importFromId The id of the existing CflowdPolicyDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cflowd_policy_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CflowdPolicyDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cflowd_policy_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cflowd_policy_definition sdwan_cflowd_policy_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CflowdPolicyDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: CflowdPolicyDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_cflowd_policy_definition',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activeFlowTimeout = config.activeFlowTimeout;
    this._collectors.internalValue = config.collectors;
    this._description = config.description;
    this._flowRefresh = config.flowRefresh;
    this._inactiveFlowTimeout = config.inactiveFlowTimeout;
    this._name = config.name;
    this._protocol = config.protocol;
    this._remarkedDscp = config.remarkedDscp;
    this._samplingInterval = config.samplingInterval;
    this._tos = config.tos;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_flow_timeout - computed: false, optional: true, required: false
  private _activeFlowTimeout?: number; 
  public get activeFlowTimeout() {
    return this.getNumberAttribute('active_flow_timeout');
  }
  public set activeFlowTimeout(value: number) {
    this._activeFlowTimeout = value;
  }
  public resetActiveFlowTimeout() {
    this._activeFlowTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeFlowTimeoutInput() {
    return this._activeFlowTimeout;
  }

  // collectors - computed: false, optional: false, required: true
  private _collectors = new CflowdPolicyDefinitionCollectorsList(this, "collectors", false);
  public get collectors() {
    return this._collectors;
  }
  public putCollectors(value: CflowdPolicyDefinitionCollectors[] | cdktf.IResolvable) {
    this._collectors.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorsInput() {
    return this._collectors.internalValue;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // flow_refresh - computed: false, optional: true, required: false
  private _flowRefresh?: number; 
  public get flowRefresh() {
    return this.getNumberAttribute('flow_refresh');
  }
  public set flowRefresh(value: number) {
    this._flowRefresh = value;
  }
  public resetFlowRefresh() {
    this._flowRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowRefreshInput() {
    return this._flowRefresh;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inactive_flow_timeout - computed: false, optional: true, required: false
  private _inactiveFlowTimeout?: number; 
  public get inactiveFlowTimeout() {
    return this.getNumberAttribute('inactive_flow_timeout');
  }
  public set inactiveFlowTimeout(value: number) {
    this._inactiveFlowTimeout = value;
  }
  public resetInactiveFlowTimeout() {
    this._inactiveFlowTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactiveFlowTimeoutInput() {
    return this._inactiveFlowTimeout;
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // remarked_dscp - computed: false, optional: true, required: false
  private _remarkedDscp?: boolean | cdktf.IResolvable; 
  public get remarkedDscp() {
    return this.getBooleanAttribute('remarked_dscp');
  }
  public set remarkedDscp(value: boolean | cdktf.IResolvable) {
    this._remarkedDscp = value;
  }
  public resetRemarkedDscp() {
    this._remarkedDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remarkedDscpInput() {
    return this._remarkedDscp;
  }

  // sampling_interval - computed: false, optional: true, required: false
  private _samplingInterval?: number; 
  public get samplingInterval() {
    return this.getNumberAttribute('sampling_interval');
  }
  public set samplingInterval(value: number) {
    this._samplingInterval = value;
  }
  public resetSamplingInterval() {
    this._samplingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingIntervalInput() {
    return this._samplingInterval;
  }

  // tos - computed: false, optional: true, required: false
  private _tos?: boolean | cdktf.IResolvable; 
  public get tos() {
    return this.getBooleanAttribute('tos');
  }
  public set tos(value: boolean | cdktf.IResolvable) {
    this._tos = value;
  }
  public resetTos() {
    this._tos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosInput() {
    return this._tos;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_flow_timeout: cdktf.numberToTerraform(this._activeFlowTimeout),
      collectors: cdktf.listMapper(cflowdPolicyDefinitionCollectorsToTerraform, false)(this._collectors.internalValue),
      description: cdktf.stringToTerraform(this._description),
      flow_refresh: cdktf.numberToTerraform(this._flowRefresh),
      inactive_flow_timeout: cdktf.numberToTerraform(this._inactiveFlowTimeout),
      name: cdktf.stringToTerraform(this._name),
      protocol: cdktf.stringToTerraform(this._protocol),
      remarked_dscp: cdktf.booleanToTerraform(this._remarkedDscp),
      sampling_interval: cdktf.numberToTerraform(this._samplingInterval),
      tos: cdktf.booleanToTerraform(this._tos),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_flow_timeout: {
        value: cdktf.numberToHclTerraform(this._activeFlowTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      collectors: {
        value: cdktf.listMapperHcl(cflowdPolicyDefinitionCollectorsToHclTerraform, false)(this._collectors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CflowdPolicyDefinitionCollectorsList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flow_refresh: {
        value: cdktf.numberToHclTerraform(this._flowRefresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      inactive_flow_timeout: {
        value: cdktf.numberToHclTerraform(this._inactiveFlowTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remarked_dscp: {
        value: cdktf.booleanToHclTerraform(this._remarkedDscp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sampling_interval: {
        value: cdktf.numberToHclTerraform(this._samplingInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tos: {
        value: cdktf.booleanToHclTerraform(this._tos),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
