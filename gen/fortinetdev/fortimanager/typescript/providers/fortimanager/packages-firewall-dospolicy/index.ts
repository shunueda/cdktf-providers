// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PackagesFirewallDospolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy#adom PackagesFirewallDospolicy#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy#comments PackagesFirewallDospolicy#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy#dstaddr PackagesFirewallDospolicy#dstaddr}
  */
  readonly dstaddr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy#dynamic_sort_subtable PackagesFirewallDospolicy#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy#id PackagesFirewallDospolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy#interface PackagesFirewallDospolicy#interface}
  */
  readonly interface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy#name PackagesFirewallDospolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy#pkg PackagesFirewallDospolicy#pkg}
  */
  readonly pkg: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy#pkg_folder_path PackagesFirewallDospolicy#pkg_folder_path}
  */
  readonly pkgFolderPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy#policyid PackagesFirewallDospolicy#policyid}
  */
  readonly policyid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy#scopetype PackagesFirewallDospolicy#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy#service PackagesFirewallDospolicy#service}
  */
  readonly service?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy#srcaddr PackagesFirewallDospolicy#srcaddr}
  */
  readonly srcaddr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy#status PackagesFirewallDospolicy#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy#uuid PackagesFirewallDospolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * anomaly block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy#anomaly PackagesFirewallDospolicy#anomaly}
  */
  readonly anomaly?: PackagesFirewallDospolicyAnomaly[] | cdktf.IResolvable;
}
export interface PackagesFirewallDospolicyAnomaly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy#action PackagesFirewallDospolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy#log PackagesFirewallDospolicy#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy#name PackagesFirewallDospolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy#quarantine PackagesFirewallDospolicy#quarantine}
  */
  readonly quarantine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy#quarantine_expiry PackagesFirewallDospolicy#quarantine_expiry}
  */
  readonly quarantineExpiry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy#quarantine_log PackagesFirewallDospolicy#quarantine_log}
  */
  readonly quarantineLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy#status PackagesFirewallDospolicy#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy#synproxy_tcp_mss PackagesFirewallDospolicy#synproxy_tcp_mss}
  */
  readonly synproxyTcpMss?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy#synproxy_tcp_sack PackagesFirewallDospolicy#synproxy_tcp_sack}
  */
  readonly synproxyTcpSack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy#synproxy_tcp_timestamp PackagesFirewallDospolicy#synproxy_tcp_timestamp}
  */
  readonly synproxyTcpTimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy#synproxy_tcp_window PackagesFirewallDospolicy#synproxy_tcp_window}
  */
  readonly synproxyTcpWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy#synproxy_tcp_windowscale PackagesFirewallDospolicy#synproxy_tcp_windowscale}
  */
  readonly synproxyTcpWindowscale?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy#synproxy_tos PackagesFirewallDospolicy#synproxy_tos}
  */
  readonly synproxyTos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy#synproxy_ttl PackagesFirewallDospolicy#synproxy_ttl}
  */
  readonly synproxyTtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy#threshold PackagesFirewallDospolicy#threshold}
  */
  readonly threshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy#thresholddefault PackagesFirewallDospolicy#thresholddefault}
  */
  readonly thresholddefault?: number;
}

export function packagesFirewallDospolicyAnomalyToTerraform(struct?: PackagesFirewallDospolicyAnomaly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    log: cdktf.stringToTerraform(struct!.log),
    name: cdktf.stringToTerraform(struct!.name),
    quarantine: cdktf.stringToTerraform(struct!.quarantine),
    quarantine_expiry: cdktf.stringToTerraform(struct!.quarantineExpiry),
    quarantine_log: cdktf.stringToTerraform(struct!.quarantineLog),
    status: cdktf.stringToTerraform(struct!.status),
    synproxy_tcp_mss: cdktf.stringToTerraform(struct!.synproxyTcpMss),
    synproxy_tcp_sack: cdktf.stringToTerraform(struct!.synproxyTcpSack),
    synproxy_tcp_timestamp: cdktf.stringToTerraform(struct!.synproxyTcpTimestamp),
    synproxy_tcp_window: cdktf.stringToTerraform(struct!.synproxyTcpWindow),
    synproxy_tcp_windowscale: cdktf.stringToTerraform(struct!.synproxyTcpWindowscale),
    synproxy_tos: cdktf.stringToTerraform(struct!.synproxyTos),
    synproxy_ttl: cdktf.stringToTerraform(struct!.synproxyTtl),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    thresholddefault: cdktf.numberToTerraform(struct!.thresholddefault),
  }
}


export function packagesFirewallDospolicyAnomalyToHclTerraform(struct?: PackagesFirewallDospolicyAnomaly | cdktf.IResolvable): any {
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
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
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
    quarantine: {
      value: cdktf.stringToHclTerraform(struct!.quarantine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quarantine_expiry: {
      value: cdktf.stringToHclTerraform(struct!.quarantineExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quarantine_log: {
      value: cdktf.stringToHclTerraform(struct!.quarantineLog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synproxy_tcp_mss: {
      value: cdktf.stringToHclTerraform(struct!.synproxyTcpMss),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synproxy_tcp_sack: {
      value: cdktf.stringToHclTerraform(struct!.synproxyTcpSack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synproxy_tcp_timestamp: {
      value: cdktf.stringToHclTerraform(struct!.synproxyTcpTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synproxy_tcp_window: {
      value: cdktf.stringToHclTerraform(struct!.synproxyTcpWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synproxy_tcp_windowscale: {
      value: cdktf.stringToHclTerraform(struct!.synproxyTcpWindowscale),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synproxy_tos: {
      value: cdktf.stringToHclTerraform(struct!.synproxyTos),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synproxy_ttl: {
      value: cdktf.stringToHclTerraform(struct!.synproxyTtl),
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
    thresholddefault: {
      value: cdktf.numberToHclTerraform(struct!.thresholddefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PackagesFirewallDospolicyAnomalyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PackagesFirewallDospolicyAnomaly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._quarantine !== undefined) {
      hasAnyValues = true;
      internalValueResult.quarantine = this._quarantine;
    }
    if (this._quarantineExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.quarantineExpiry = this._quarantineExpiry;
    }
    if (this._quarantineLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.quarantineLog = this._quarantineLog;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._synproxyTcpMss !== undefined) {
      hasAnyValues = true;
      internalValueResult.synproxyTcpMss = this._synproxyTcpMss;
    }
    if (this._synproxyTcpSack !== undefined) {
      hasAnyValues = true;
      internalValueResult.synproxyTcpSack = this._synproxyTcpSack;
    }
    if (this._synproxyTcpTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.synproxyTcpTimestamp = this._synproxyTcpTimestamp;
    }
    if (this._synproxyTcpWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.synproxyTcpWindow = this._synproxyTcpWindow;
    }
    if (this._synproxyTcpWindowscale !== undefined) {
      hasAnyValues = true;
      internalValueResult.synproxyTcpWindowscale = this._synproxyTcpWindowscale;
    }
    if (this._synproxyTos !== undefined) {
      hasAnyValues = true;
      internalValueResult.synproxyTos = this._synproxyTos;
    }
    if (this._synproxyTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.synproxyTtl = this._synproxyTtl;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._thresholddefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholddefault = this._thresholddefault;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PackagesFirewallDospolicyAnomaly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._log = undefined;
      this._name = undefined;
      this._quarantine = undefined;
      this._quarantineExpiry = undefined;
      this._quarantineLog = undefined;
      this._status = undefined;
      this._synproxyTcpMss = undefined;
      this._synproxyTcpSack = undefined;
      this._synproxyTcpTimestamp = undefined;
      this._synproxyTcpWindow = undefined;
      this._synproxyTcpWindowscale = undefined;
      this._synproxyTos = undefined;
      this._synproxyTtl = undefined;
      this._threshold = undefined;
      this._thresholddefault = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._log = value.log;
      this._name = value.name;
      this._quarantine = value.quarantine;
      this._quarantineExpiry = value.quarantineExpiry;
      this._quarantineLog = value.quarantineLog;
      this._status = value.status;
      this._synproxyTcpMss = value.synproxyTcpMss;
      this._synproxyTcpSack = value.synproxyTcpSack;
      this._synproxyTcpTimestamp = value.synproxyTcpTimestamp;
      this._synproxyTcpWindow = value.synproxyTcpWindow;
      this._synproxyTcpWindowscale = value.synproxyTcpWindowscale;
      this._synproxyTos = value.synproxyTos;
      this._synproxyTtl = value.synproxyTtl;
      this._threshold = value.threshold;
      this._thresholddefault = value.thresholddefault;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // log - computed: true, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
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

  // quarantine - computed: true, optional: true, required: false
  private _quarantine?: string; 
  public get quarantine() {
    return this.getStringAttribute('quarantine');
  }
  public set quarantine(value: string) {
    this._quarantine = value;
  }
  public resetQuarantine() {
    this._quarantine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineInput() {
    return this._quarantine;
  }

  // quarantine_expiry - computed: false, optional: true, required: false
  private _quarantineExpiry?: string; 
  public get quarantineExpiry() {
    return this.getStringAttribute('quarantine_expiry');
  }
  public set quarantineExpiry(value: string) {
    this._quarantineExpiry = value;
  }
  public resetQuarantineExpiry() {
    this._quarantineExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineExpiryInput() {
    return this._quarantineExpiry;
  }

  // quarantine_log - computed: false, optional: true, required: false
  private _quarantineLog?: string; 
  public get quarantineLog() {
    return this.getStringAttribute('quarantine_log');
  }
  public set quarantineLog(value: string) {
    this._quarantineLog = value;
  }
  public resetQuarantineLog() {
    this._quarantineLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineLogInput() {
    return this._quarantineLog;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // synproxy_tcp_mss - computed: false, optional: true, required: false
  private _synproxyTcpMss?: string; 
  public get synproxyTcpMss() {
    return this.getStringAttribute('synproxy_tcp_mss');
  }
  public set synproxyTcpMss(value: string) {
    this._synproxyTcpMss = value;
  }
  public resetSynproxyTcpMss() {
    this._synproxyTcpMss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synproxyTcpMssInput() {
    return this._synproxyTcpMss;
  }

  // synproxy_tcp_sack - computed: false, optional: true, required: false
  private _synproxyTcpSack?: string; 
  public get synproxyTcpSack() {
    return this.getStringAttribute('synproxy_tcp_sack');
  }
  public set synproxyTcpSack(value: string) {
    this._synproxyTcpSack = value;
  }
  public resetSynproxyTcpSack() {
    this._synproxyTcpSack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synproxyTcpSackInput() {
    return this._synproxyTcpSack;
  }

  // synproxy_tcp_timestamp - computed: false, optional: true, required: false
  private _synproxyTcpTimestamp?: string; 
  public get synproxyTcpTimestamp() {
    return this.getStringAttribute('synproxy_tcp_timestamp');
  }
  public set synproxyTcpTimestamp(value: string) {
    this._synproxyTcpTimestamp = value;
  }
  public resetSynproxyTcpTimestamp() {
    this._synproxyTcpTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synproxyTcpTimestampInput() {
    return this._synproxyTcpTimestamp;
  }

  // synproxy_tcp_window - computed: false, optional: true, required: false
  private _synproxyTcpWindow?: string; 
  public get synproxyTcpWindow() {
    return this.getStringAttribute('synproxy_tcp_window');
  }
  public set synproxyTcpWindow(value: string) {
    this._synproxyTcpWindow = value;
  }
  public resetSynproxyTcpWindow() {
    this._synproxyTcpWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synproxyTcpWindowInput() {
    return this._synproxyTcpWindow;
  }

  // synproxy_tcp_windowscale - computed: false, optional: true, required: false
  private _synproxyTcpWindowscale?: string; 
  public get synproxyTcpWindowscale() {
    return this.getStringAttribute('synproxy_tcp_windowscale');
  }
  public set synproxyTcpWindowscale(value: string) {
    this._synproxyTcpWindowscale = value;
  }
  public resetSynproxyTcpWindowscale() {
    this._synproxyTcpWindowscale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synproxyTcpWindowscaleInput() {
    return this._synproxyTcpWindowscale;
  }

  // synproxy_tos - computed: false, optional: true, required: false
  private _synproxyTos?: string; 
  public get synproxyTos() {
    return this.getStringAttribute('synproxy_tos');
  }
  public set synproxyTos(value: string) {
    this._synproxyTos = value;
  }
  public resetSynproxyTos() {
    this._synproxyTos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synproxyTosInput() {
    return this._synproxyTos;
  }

  // synproxy_ttl - computed: false, optional: true, required: false
  private _synproxyTtl?: string; 
  public get synproxyTtl() {
    return this.getStringAttribute('synproxy_ttl');
  }
  public set synproxyTtl(value: string) {
    this._synproxyTtl = value;
  }
  public resetSynproxyTtl() {
    this._synproxyTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synproxyTtlInput() {
    return this._synproxyTtl;
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

  // thresholddefault - computed: false, optional: true, required: false
  private _thresholddefault?: number; 
  public get thresholddefault() {
    return this.getNumberAttribute('thresholddefault');
  }
  public set thresholddefault(value: number) {
    this._thresholddefault = value;
  }
  public resetThresholddefault() {
    this._thresholddefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholddefaultInput() {
    return this._thresholddefault;
  }
}

export class PackagesFirewallDospolicyAnomalyList extends cdktf.ComplexList {
  public internalValue? : PackagesFirewallDospolicyAnomaly[] | cdktf.IResolvable

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
  public get(index: number): PackagesFirewallDospolicyAnomalyOutputReference {
    return new PackagesFirewallDospolicyAnomalyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy fortimanager_packages_firewall_dospolicy}
*/
export class PackagesFirewallDospolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_packages_firewall_dospolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PackagesFirewallDospolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PackagesFirewallDospolicy to import
  * @param importFromId The id of the existing PackagesFirewallDospolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PackagesFirewallDospolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_packages_firewall_dospolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy fortimanager_packages_firewall_dospolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PackagesFirewallDospolicyConfig
  */
  public constructor(scope: Construct, id: string, config: PackagesFirewallDospolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_packages_firewall_dospolicy',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._comments = config.comments;
    this._dstaddr = config.dstaddr;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._interface = config.interface;
    this._name = config.name;
    this._pkg = config.pkg;
    this._pkgFolderPath = config.pkgFolderPath;
    this._policyid = config.policyid;
    this._scopetype = config.scopetype;
    this._service = config.service;
    this._srcaddr = config.srcaddr;
    this._status = config.status;
    this._uuid = config.uuid;
    this._anomaly.internalValue = config.anomaly;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // dstaddr - computed: true, optional: true, required: false
  private _dstaddr?: string[]; 
  public get dstaddr() {
    return cdktf.Fn.tolist(this.getListAttribute('dstaddr'));
  }
  public set dstaddr(value: string[]) {
    this._dstaddr = value;
  }
  public resetDstaddr() {
    this._dstaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstaddrInput() {
    return this._dstaddr;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
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

  // interface - computed: true, optional: true, required: false
  private _interface?: string[]; 
  public get interface() {
    return cdktf.Fn.tolist(this.getListAttribute('interface'));
  }
  public set interface(value: string[]) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
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

  // pkg - computed: false, optional: false, required: true
  private _pkg?: string; 
  public get pkg() {
    return this.getStringAttribute('pkg');
  }
  public set pkg(value: string) {
    this._pkg = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pkgInput() {
    return this._pkg;
  }

  // pkg_folder_path - computed: false, optional: true, required: false
  private _pkgFolderPath?: string; 
  public get pkgFolderPath() {
    return this.getStringAttribute('pkg_folder_path');
  }
  public set pkgFolderPath(value: string) {
    this._pkgFolderPath = value;
  }
  public resetPkgFolderPath() {
    this._pkgFolderPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkgFolderPathInput() {
    return this._pkgFolderPath;
  }

  // policyid - computed: true, optional: true, required: false
  private _policyid?: number; 
  public get policyid() {
    return this.getNumberAttribute('policyid');
  }
  public set policyid(value: number) {
    this._policyid = value;
  }
  public resetPolicyid() {
    this._policyid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyidInput() {
    return this._policyid;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // service - computed: true, optional: true, required: false
  private _service?: string[]; 
  public get service() {
    return cdktf.Fn.tolist(this.getListAttribute('service'));
  }
  public set service(value: string[]) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // srcaddr - computed: true, optional: true, required: false
  private _srcaddr?: string[]; 
  public get srcaddr() {
    return cdktf.Fn.tolist(this.getListAttribute('srcaddr'));
  }
  public set srcaddr(value: string[]) {
    this._srcaddr = value;
  }
  public resetSrcaddr() {
    this._srcaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcaddrInput() {
    return this._srcaddr;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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

  // anomaly - computed: false, optional: true, required: false
  private _anomaly = new PackagesFirewallDospolicyAnomalyList(this, "anomaly", false);
  public get anomaly() {
    return this._anomaly;
  }
  public putAnomaly(value: PackagesFirewallDospolicyAnomaly[] | cdktf.IResolvable) {
    this._anomaly.internalValue = value;
  }
  public resetAnomaly() {
    this._anomaly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anomalyInput() {
    return this._anomaly.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      comments: cdktf.stringToTerraform(this._comments),
      dstaddr: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dstaddr),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interface),
      name: cdktf.stringToTerraform(this._name),
      pkg: cdktf.stringToTerraform(this._pkg),
      pkg_folder_path: cdktf.stringToTerraform(this._pkgFolderPath),
      policyid: cdktf.numberToTerraform(this._policyid),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      service: cdktf.listMapper(cdktf.stringToTerraform, false)(this._service),
      srcaddr: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srcaddr),
      status: cdktf.stringToTerraform(this._status),
      uuid: cdktf.stringToTerraform(this._uuid),
      anomaly: cdktf.listMapper(packagesFirewallDospolicyAnomalyToTerraform, true)(this._anomaly.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dstaddr: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dstaddr),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
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
      interface: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._interface),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pkg: {
        value: cdktf.stringToHclTerraform(this._pkg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pkg_folder_path: {
        value: cdktf.stringToHclTerraform(this._pkgFolderPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policyid: {
        value: cdktf.numberToHclTerraform(this._policyid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._service),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      srcaddr: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._srcaddr),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
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
      anomaly: {
        value: cdktf.listMapperHcl(packagesFirewallDospolicyAnomalyToHclTerraform, true)(this._anomaly.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PackagesFirewallDospolicyAnomalyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
