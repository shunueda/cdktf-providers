// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_timeout
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SessionTimeoutConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_timeout#device SessionTimeout#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_timeout#folder SessionTimeout#folder}
  */
  readonly folder?: string;
  /**
  * Session timeouts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_timeout#session_timeouts SessionTimeout#session_timeouts}
  */
  readonly sessionTimeouts?: SessionTimeoutSessionTimeouts;
  /**
  * The snippet in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_timeout#snippet SessionTimeout#snippet}
  */
  readonly snippet?: string;
}
export interface SessionTimeoutSessionTimeouts {
  /**
  * Captive Portal (seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_timeout#timeout_captive_portal SessionTimeout#timeout_captive_portal}
  */
  readonly timeoutCaptivePortal?: number;
  /**
  * Default timeout (seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_timeout#timeout_default SessionTimeout#timeout_default}
  */
  readonly timeoutDefault?: number;
  /**
  * Discard default (seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_timeout#timeout_discard_default SessionTimeout#timeout_discard_default}
  */
  readonly timeoutDiscardDefault?: number;
  /**
  * Discard TCP (seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_timeout#timeout_discard_tcp SessionTimeout#timeout_discard_tcp}
  */
  readonly timeoutDiscardTcp?: number;
  /**
  * Discard UDP (seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_timeout#timeout_discard_udp SessionTimeout#timeout_discard_udp}
  */
  readonly timeoutDiscardUdp?: number;
  /**
  * ICMP (seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_timeout#timeout_icmp SessionTimeout#timeout_icmp}
  */
  readonly timeoutIcmp?: number;
  /**
  * Scan (seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_timeout#timeout_scan SessionTimeout#timeout_scan}
  */
  readonly timeoutScan?: number;
  /**
  * TCP (seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_timeout#timeout_tcp SessionTimeout#timeout_tcp}
  */
  readonly timeoutTcp?: number;
  /**
  * TCP Half Closed (seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_timeout#timeout_tcp_half_closed SessionTimeout#timeout_tcp_half_closed}
  */
  readonly timeoutTcpHalfClosed?: number;
  /**
  * TCP Time Wait (seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_timeout#timeout_tcp_time_wait SessionTimeout#timeout_tcp_time_wait}
  */
  readonly timeoutTcpTimeWait?: number;
  /**
  * Unverified RST (seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_timeout#timeout_tcp_unverified_rst SessionTimeout#timeout_tcp_unverified_rst}
  */
  readonly timeoutTcpUnverifiedRst?: number;
  /**
  * TCP handshake (seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_timeout#timeout_tcphandshake SessionTimeout#timeout_tcphandshake}
  */
  readonly timeoutTcphandshake?: number;
  /**
  * TCP init (seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_timeout#timeout_tcpinit SessionTimeout#timeout_tcpinit}
  */
  readonly timeoutTcpinit?: number;
  /**
  * UDP (seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_timeout#timeout_udp SessionTimeout#timeout_udp}
  */
  readonly timeoutUdp?: number;
}

export function sessionTimeoutSessionTimeoutsToTerraform(struct?: SessionTimeoutSessionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timeout_captive_portal: cdktf.numberToTerraform(struct!.timeoutCaptivePortal),
    timeout_default: cdktf.numberToTerraform(struct!.timeoutDefault),
    timeout_discard_default: cdktf.numberToTerraform(struct!.timeoutDiscardDefault),
    timeout_discard_tcp: cdktf.numberToTerraform(struct!.timeoutDiscardTcp),
    timeout_discard_udp: cdktf.numberToTerraform(struct!.timeoutDiscardUdp),
    timeout_icmp: cdktf.numberToTerraform(struct!.timeoutIcmp),
    timeout_scan: cdktf.numberToTerraform(struct!.timeoutScan),
    timeout_tcp: cdktf.numberToTerraform(struct!.timeoutTcp),
    timeout_tcp_half_closed: cdktf.numberToTerraform(struct!.timeoutTcpHalfClosed),
    timeout_tcp_time_wait: cdktf.numberToTerraform(struct!.timeoutTcpTimeWait),
    timeout_tcp_unverified_rst: cdktf.numberToTerraform(struct!.timeoutTcpUnverifiedRst),
    timeout_tcphandshake: cdktf.numberToTerraform(struct!.timeoutTcphandshake),
    timeout_tcpinit: cdktf.numberToTerraform(struct!.timeoutTcpinit),
    timeout_udp: cdktf.numberToTerraform(struct!.timeoutUdp),
  }
}


export function sessionTimeoutSessionTimeoutsToHclTerraform(struct?: SessionTimeoutSessionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    timeout_captive_portal: {
      value: cdktf.numberToHclTerraform(struct!.timeoutCaptivePortal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_default: {
      value: cdktf.numberToHclTerraform(struct!.timeoutDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_discard_default: {
      value: cdktf.numberToHclTerraform(struct!.timeoutDiscardDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_discard_tcp: {
      value: cdktf.numberToHclTerraform(struct!.timeoutDiscardTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_discard_udp: {
      value: cdktf.numberToHclTerraform(struct!.timeoutDiscardUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_icmp: {
      value: cdktf.numberToHclTerraform(struct!.timeoutIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_scan: {
      value: cdktf.numberToHclTerraform(struct!.timeoutScan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_tcp: {
      value: cdktf.numberToHclTerraform(struct!.timeoutTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_tcp_half_closed: {
      value: cdktf.numberToHclTerraform(struct!.timeoutTcpHalfClosed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_tcp_time_wait: {
      value: cdktf.numberToHclTerraform(struct!.timeoutTcpTimeWait),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_tcp_unverified_rst: {
      value: cdktf.numberToHclTerraform(struct!.timeoutTcpUnverifiedRst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_tcphandshake: {
      value: cdktf.numberToHclTerraform(struct!.timeoutTcphandshake),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_tcpinit: {
      value: cdktf.numberToHclTerraform(struct!.timeoutTcpinit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_udp: {
      value: cdktf.numberToHclTerraform(struct!.timeoutUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SessionTimeoutSessionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SessionTimeoutSessionTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeoutCaptivePortal !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutCaptivePortal = this._timeoutCaptivePortal;
    }
    if (this._timeoutDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutDefault = this._timeoutDefault;
    }
    if (this._timeoutDiscardDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutDiscardDefault = this._timeoutDiscardDefault;
    }
    if (this._timeoutDiscardTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutDiscardTcp = this._timeoutDiscardTcp;
    }
    if (this._timeoutDiscardUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutDiscardUdp = this._timeoutDiscardUdp;
    }
    if (this._timeoutIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutIcmp = this._timeoutIcmp;
    }
    if (this._timeoutScan !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutScan = this._timeoutScan;
    }
    if (this._timeoutTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutTcp = this._timeoutTcp;
    }
    if (this._timeoutTcpHalfClosed !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutTcpHalfClosed = this._timeoutTcpHalfClosed;
    }
    if (this._timeoutTcpTimeWait !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutTcpTimeWait = this._timeoutTcpTimeWait;
    }
    if (this._timeoutTcpUnverifiedRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutTcpUnverifiedRst = this._timeoutTcpUnverifiedRst;
    }
    if (this._timeoutTcphandshake !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutTcphandshake = this._timeoutTcphandshake;
    }
    if (this._timeoutTcpinit !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutTcpinit = this._timeoutTcpinit;
    }
    if (this._timeoutUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutUdp = this._timeoutUdp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SessionTimeoutSessionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timeoutCaptivePortal = undefined;
      this._timeoutDefault = undefined;
      this._timeoutDiscardDefault = undefined;
      this._timeoutDiscardTcp = undefined;
      this._timeoutDiscardUdp = undefined;
      this._timeoutIcmp = undefined;
      this._timeoutScan = undefined;
      this._timeoutTcp = undefined;
      this._timeoutTcpHalfClosed = undefined;
      this._timeoutTcpTimeWait = undefined;
      this._timeoutTcpUnverifiedRst = undefined;
      this._timeoutTcphandshake = undefined;
      this._timeoutTcpinit = undefined;
      this._timeoutUdp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timeoutCaptivePortal = value.timeoutCaptivePortal;
      this._timeoutDefault = value.timeoutDefault;
      this._timeoutDiscardDefault = value.timeoutDiscardDefault;
      this._timeoutDiscardTcp = value.timeoutDiscardTcp;
      this._timeoutDiscardUdp = value.timeoutDiscardUdp;
      this._timeoutIcmp = value.timeoutIcmp;
      this._timeoutScan = value.timeoutScan;
      this._timeoutTcp = value.timeoutTcp;
      this._timeoutTcpHalfClosed = value.timeoutTcpHalfClosed;
      this._timeoutTcpTimeWait = value.timeoutTcpTimeWait;
      this._timeoutTcpUnverifiedRst = value.timeoutTcpUnverifiedRst;
      this._timeoutTcphandshake = value.timeoutTcphandshake;
      this._timeoutTcpinit = value.timeoutTcpinit;
      this._timeoutUdp = value.timeoutUdp;
    }
  }

  // timeout_captive_portal - computed: true, optional: true, required: false
  private _timeoutCaptivePortal?: number; 
  public get timeoutCaptivePortal() {
    return this.getNumberAttribute('timeout_captive_portal');
  }
  public set timeoutCaptivePortal(value: number) {
    this._timeoutCaptivePortal = value;
  }
  public resetTimeoutCaptivePortal() {
    this._timeoutCaptivePortal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutCaptivePortalInput() {
    return this._timeoutCaptivePortal;
  }

  // timeout_default - computed: true, optional: true, required: false
  private _timeoutDefault?: number; 
  public get timeoutDefault() {
    return this.getNumberAttribute('timeout_default');
  }
  public set timeoutDefault(value: number) {
    this._timeoutDefault = value;
  }
  public resetTimeoutDefault() {
    this._timeoutDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutDefaultInput() {
    return this._timeoutDefault;
  }

  // timeout_discard_default - computed: true, optional: true, required: false
  private _timeoutDiscardDefault?: number; 
  public get timeoutDiscardDefault() {
    return this.getNumberAttribute('timeout_discard_default');
  }
  public set timeoutDiscardDefault(value: number) {
    this._timeoutDiscardDefault = value;
  }
  public resetTimeoutDiscardDefault() {
    this._timeoutDiscardDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutDiscardDefaultInput() {
    return this._timeoutDiscardDefault;
  }

  // timeout_discard_tcp - computed: true, optional: true, required: false
  private _timeoutDiscardTcp?: number; 
  public get timeoutDiscardTcp() {
    return this.getNumberAttribute('timeout_discard_tcp');
  }
  public set timeoutDiscardTcp(value: number) {
    this._timeoutDiscardTcp = value;
  }
  public resetTimeoutDiscardTcp() {
    this._timeoutDiscardTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutDiscardTcpInput() {
    return this._timeoutDiscardTcp;
  }

  // timeout_discard_udp - computed: true, optional: true, required: false
  private _timeoutDiscardUdp?: number; 
  public get timeoutDiscardUdp() {
    return this.getNumberAttribute('timeout_discard_udp');
  }
  public set timeoutDiscardUdp(value: number) {
    this._timeoutDiscardUdp = value;
  }
  public resetTimeoutDiscardUdp() {
    this._timeoutDiscardUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutDiscardUdpInput() {
    return this._timeoutDiscardUdp;
  }

  // timeout_icmp - computed: true, optional: true, required: false
  private _timeoutIcmp?: number; 
  public get timeoutIcmp() {
    return this.getNumberAttribute('timeout_icmp');
  }
  public set timeoutIcmp(value: number) {
    this._timeoutIcmp = value;
  }
  public resetTimeoutIcmp() {
    this._timeoutIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutIcmpInput() {
    return this._timeoutIcmp;
  }

  // timeout_scan - computed: true, optional: true, required: false
  private _timeoutScan?: number; 
  public get timeoutScan() {
    return this.getNumberAttribute('timeout_scan');
  }
  public set timeoutScan(value: number) {
    this._timeoutScan = value;
  }
  public resetTimeoutScan() {
    this._timeoutScan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutScanInput() {
    return this._timeoutScan;
  }

  // timeout_tcp - computed: true, optional: true, required: false
  private _timeoutTcp?: number; 
  public get timeoutTcp() {
    return this.getNumberAttribute('timeout_tcp');
  }
  public set timeoutTcp(value: number) {
    this._timeoutTcp = value;
  }
  public resetTimeoutTcp() {
    this._timeoutTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutTcpInput() {
    return this._timeoutTcp;
  }

  // timeout_tcp_half_closed - computed: true, optional: true, required: false
  private _timeoutTcpHalfClosed?: number; 
  public get timeoutTcpHalfClosed() {
    return this.getNumberAttribute('timeout_tcp_half_closed');
  }
  public set timeoutTcpHalfClosed(value: number) {
    this._timeoutTcpHalfClosed = value;
  }
  public resetTimeoutTcpHalfClosed() {
    this._timeoutTcpHalfClosed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutTcpHalfClosedInput() {
    return this._timeoutTcpHalfClosed;
  }

  // timeout_tcp_time_wait - computed: true, optional: true, required: false
  private _timeoutTcpTimeWait?: number; 
  public get timeoutTcpTimeWait() {
    return this.getNumberAttribute('timeout_tcp_time_wait');
  }
  public set timeoutTcpTimeWait(value: number) {
    this._timeoutTcpTimeWait = value;
  }
  public resetTimeoutTcpTimeWait() {
    this._timeoutTcpTimeWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutTcpTimeWaitInput() {
    return this._timeoutTcpTimeWait;
  }

  // timeout_tcp_unverified_rst - computed: true, optional: true, required: false
  private _timeoutTcpUnverifiedRst?: number; 
  public get timeoutTcpUnverifiedRst() {
    return this.getNumberAttribute('timeout_tcp_unverified_rst');
  }
  public set timeoutTcpUnverifiedRst(value: number) {
    this._timeoutTcpUnverifiedRst = value;
  }
  public resetTimeoutTcpUnverifiedRst() {
    this._timeoutTcpUnverifiedRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutTcpUnverifiedRstInput() {
    return this._timeoutTcpUnverifiedRst;
  }

  // timeout_tcphandshake - computed: true, optional: true, required: false
  private _timeoutTcphandshake?: number; 
  public get timeoutTcphandshake() {
    return this.getNumberAttribute('timeout_tcphandshake');
  }
  public set timeoutTcphandshake(value: number) {
    this._timeoutTcphandshake = value;
  }
  public resetTimeoutTcphandshake() {
    this._timeoutTcphandshake = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutTcphandshakeInput() {
    return this._timeoutTcphandshake;
  }

  // timeout_tcpinit - computed: true, optional: true, required: false
  private _timeoutTcpinit?: number; 
  public get timeoutTcpinit() {
    return this.getNumberAttribute('timeout_tcpinit');
  }
  public set timeoutTcpinit(value: number) {
    this._timeoutTcpinit = value;
  }
  public resetTimeoutTcpinit() {
    this._timeoutTcpinit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutTcpinitInput() {
    return this._timeoutTcpinit;
  }

  // timeout_udp - computed: true, optional: true, required: false
  private _timeoutUdp?: number; 
  public get timeoutUdp() {
    return this.getNumberAttribute('timeout_udp');
  }
  public set timeoutUdp(value: number) {
    this._timeoutUdp = value;
  }
  public resetTimeoutUdp() {
    this._timeoutUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutUdpInput() {
    return this._timeoutUdp;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_timeout scm_session_timeout}
*/
export class SessionTimeout extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_session_timeout";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SessionTimeout resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SessionTimeout to import
  * @param importFromId The id of the existing SessionTimeout that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_timeout#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SessionTimeout to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_session_timeout", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/session_timeout scm_session_timeout} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SessionTimeoutConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SessionTimeoutConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'scm_session_timeout',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.6',
        providerVersionConstraint: '1.0.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._folder = config.folder;
    this._sessionTimeouts.internalValue = config.sessionTimeouts;
    this._snippet = config.snippet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // session_timeouts - computed: false, optional: true, required: false
  private _sessionTimeouts = new SessionTimeoutSessionTimeoutsOutputReference(this, "session_timeouts");
  public get sessionTimeouts() {
    return this._sessionTimeouts;
  }
  public putSessionTimeouts(value: SessionTimeoutSessionTimeouts) {
    this._sessionTimeouts.internalValue = value;
  }
  public resetSessionTimeouts() {
    this._sessionTimeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutsInput() {
    return this._sessionTimeouts.internalValue;
  }

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      session_timeouts: sessionTimeoutSessionTimeoutsToTerraform(this._sessionTimeouts.internalValue),
      snippet: cdktf.stringToTerraform(this._snippet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_timeouts: {
        value: sessionTimeoutSessionTimeoutsToHclTerraform(this._sessionTimeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SessionTimeoutSessionTimeouts",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
