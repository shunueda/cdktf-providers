// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy_anomaly
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PackagesFirewallDospolicyAnomalyAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy_anomaly#action PackagesFirewallDospolicyAnomalyA#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy_anomaly#adom PackagesFirewallDospolicyAnomalyA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy_anomaly#dos_policy PackagesFirewallDospolicyAnomalyA#dos_policy}
  */
  readonly dosPolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy_anomaly#id PackagesFirewallDospolicyAnomalyA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy_anomaly#log PackagesFirewallDospolicyAnomalyA#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy_anomaly#name PackagesFirewallDospolicyAnomalyA#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy_anomaly#pkg PackagesFirewallDospolicyAnomalyA#pkg}
  */
  readonly pkg: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy_anomaly#pkg_folder_path PackagesFirewallDospolicyAnomalyA#pkg_folder_path}
  */
  readonly pkgFolderPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy_anomaly#quarantine PackagesFirewallDospolicyAnomalyA#quarantine}
  */
  readonly quarantine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy_anomaly#quarantine_expiry PackagesFirewallDospolicyAnomalyA#quarantine_expiry}
  */
  readonly quarantineExpiry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy_anomaly#quarantine_log PackagesFirewallDospolicyAnomalyA#quarantine_log}
  */
  readonly quarantineLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy_anomaly#scopetype PackagesFirewallDospolicyAnomalyA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy_anomaly#status PackagesFirewallDospolicyAnomalyA#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy_anomaly#synproxy_tcp_mss PackagesFirewallDospolicyAnomalyA#synproxy_tcp_mss}
  */
  readonly synproxyTcpMss?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy_anomaly#synproxy_tcp_sack PackagesFirewallDospolicyAnomalyA#synproxy_tcp_sack}
  */
  readonly synproxyTcpSack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy_anomaly#synproxy_tcp_timestamp PackagesFirewallDospolicyAnomalyA#synproxy_tcp_timestamp}
  */
  readonly synproxyTcpTimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy_anomaly#synproxy_tcp_window PackagesFirewallDospolicyAnomalyA#synproxy_tcp_window}
  */
  readonly synproxyTcpWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy_anomaly#synproxy_tcp_windowscale PackagesFirewallDospolicyAnomalyA#synproxy_tcp_windowscale}
  */
  readonly synproxyTcpWindowscale?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy_anomaly#synproxy_tos PackagesFirewallDospolicyAnomalyA#synproxy_tos}
  */
  readonly synproxyTos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy_anomaly#synproxy_ttl PackagesFirewallDospolicyAnomalyA#synproxy_ttl}
  */
  readonly synproxyTtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy_anomaly#threshold PackagesFirewallDospolicyAnomalyA#threshold}
  */
  readonly threshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy_anomaly#thresholddefault PackagesFirewallDospolicyAnomalyA#thresholddefault}
  */
  readonly thresholddefault?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy_anomaly fortimanager_packages_firewall_dospolicy_anomaly}
*/
export class PackagesFirewallDospolicyAnomalyA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_packages_firewall_dospolicy_anomaly";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PackagesFirewallDospolicyAnomalyA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PackagesFirewallDospolicyAnomalyA to import
  * @param importFromId The id of the existing PackagesFirewallDospolicyAnomalyA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy_anomaly#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PackagesFirewallDospolicyAnomalyA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_packages_firewall_dospolicy_anomaly", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_dospolicy_anomaly fortimanager_packages_firewall_dospolicy_anomaly} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PackagesFirewallDospolicyAnomalyAConfig
  */
  public constructor(scope: Construct, id: string, config: PackagesFirewallDospolicyAnomalyAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_packages_firewall_dospolicy_anomaly',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
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
    this._adom = config.adom;
    this._dosPolicy = config.dosPolicy;
    this._id = config.id;
    this._log = config.log;
    this._name = config.name;
    this._pkg = config.pkg;
    this._pkgFolderPath = config.pkgFolderPath;
    this._quarantine = config.quarantine;
    this._quarantineExpiry = config.quarantineExpiry;
    this._quarantineLog = config.quarantineLog;
    this._scopetype = config.scopetype;
    this._status = config.status;
    this._synproxyTcpMss = config.synproxyTcpMss;
    this._synproxyTcpSack = config.synproxyTcpSack;
    this._synproxyTcpTimestamp = config.synproxyTcpTimestamp;
    this._synproxyTcpWindow = config.synproxyTcpWindow;
    this._synproxyTcpWindowscale = config.synproxyTcpWindowscale;
    this._synproxyTos = config.synproxyTos;
    this._synproxyTtl = config.synproxyTtl;
    this._threshold = config.threshold;
    this._thresholddefault = config.thresholddefault;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // dos_policy - computed: false, optional: false, required: true
  private _dosPolicy?: string; 
  public get dosPolicy() {
    return this.getStringAttribute('dos_policy');
  }
  public set dosPolicy(value: string) {
    this._dosPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dosPolicyInput() {
    return this._dosPolicy;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      adom: cdktf.stringToTerraform(this._adom),
      dos_policy: cdktf.stringToTerraform(this._dosPolicy),
      id: cdktf.stringToTerraform(this._id),
      log: cdktf.stringToTerraform(this._log),
      name: cdktf.stringToTerraform(this._name),
      pkg: cdktf.stringToTerraform(this._pkg),
      pkg_folder_path: cdktf.stringToTerraform(this._pkgFolderPath),
      quarantine: cdktf.stringToTerraform(this._quarantine),
      quarantine_expiry: cdktf.stringToTerraform(this._quarantineExpiry),
      quarantine_log: cdktf.stringToTerraform(this._quarantineLog),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      status: cdktf.stringToTerraform(this._status),
      synproxy_tcp_mss: cdktf.stringToTerraform(this._synproxyTcpMss),
      synproxy_tcp_sack: cdktf.stringToTerraform(this._synproxyTcpSack),
      synproxy_tcp_timestamp: cdktf.stringToTerraform(this._synproxyTcpTimestamp),
      synproxy_tcp_window: cdktf.stringToTerraform(this._synproxyTcpWindow),
      synproxy_tcp_windowscale: cdktf.stringToTerraform(this._synproxyTcpWindowscale),
      synproxy_tos: cdktf.stringToTerraform(this._synproxyTos),
      synproxy_ttl: cdktf.stringToTerraform(this._synproxyTtl),
      threshold: cdktf.numberToTerraform(this._threshold),
      thresholddefault: cdktf.numberToTerraform(this._thresholddefault),
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
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dos_policy: {
        value: cdktf.stringToHclTerraform(this._dosPolicy),
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
      log: {
        value: cdktf.stringToHclTerraform(this._log),
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
      quarantine: {
        value: cdktf.stringToHclTerraform(this._quarantine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quarantine_expiry: {
        value: cdktf.stringToHclTerraform(this._quarantineExpiry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quarantine_log: {
        value: cdktf.stringToHclTerraform(this._quarantineLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      synproxy_tcp_mss: {
        value: cdktf.stringToHclTerraform(this._synproxyTcpMss),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      synproxy_tcp_sack: {
        value: cdktf.stringToHclTerraform(this._synproxyTcpSack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      synproxy_tcp_timestamp: {
        value: cdktf.stringToHclTerraform(this._synproxyTcpTimestamp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      synproxy_tcp_window: {
        value: cdktf.stringToHclTerraform(this._synproxyTcpWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      synproxy_tcp_windowscale: {
        value: cdktf.stringToHclTerraform(this._synproxyTcpWindowscale),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      synproxy_tos: {
        value: cdktf.stringToHclTerraform(this._synproxyTos),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      synproxy_ttl: {
        value: cdktf.stringToHclTerraform(this._synproxyTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      threshold: {
        value: cdktf.numberToHclTerraform(this._threshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      thresholddefault: {
        value: cdktf.numberToHclTerraform(this._thresholddefault),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
