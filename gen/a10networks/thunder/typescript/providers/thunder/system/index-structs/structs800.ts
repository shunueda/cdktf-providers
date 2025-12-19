import * as cdktf from 'cdktf';
export interface SystemSyslogTimeMsec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#enable_flag System#enable_flag}
  */
  readonly enableFlag?: number;
}

export function systemSyslogTimeMsecToTerraform(struct?: SystemSyslogTimeMsecOutputReference | SystemSyslogTimeMsec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_flag: cdktf.numberToTerraform(struct!.enableFlag),
  }
}


export function systemSyslogTimeMsecToHclTerraform(struct?: SystemSyslogTimeMsecOutputReference | SystemSyslogTimeMsec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_flag: {
      value: cdktf.numberToHclTerraform(struct!.enableFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSyslogTimeMsecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemSyslogTimeMsec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableFlag = this._enableFlag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSyslogTimeMsec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableFlag = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableFlag = value.enableFlag;
    }
  }

  // enable_flag - computed: false, optional: true, required: false
  private _enableFlag?: number; 
  public get enableFlag() {
    return this.getNumberAttribute('enable_flag');
  }
  public set enableFlag(value: number) {
    this._enableFlag = value;
  }
  public resetEnableFlag() {
    this._enableFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFlagInput() {
    return this._enableFlag;
  }
}
export interface SystemTableIntegritySamplingEnable {
  /**
  * 'all': all; 'arp-tbl-sync-start-ts-m-1st': arp table sync start time stamp master; 'nd6-tbl-sync-start-ts-m-1st': nd6 table sync start time stamp master; 'ipv4-fib-tbl-sync-start-ts-m-1st': ipv4-fib table sync start time stamp master; 'ipv6-fib-tbl-sync-start-ts-m-1st': ipv6-fib table sync start time stamp master; 'mac-tbl-sync-start-ts-m-1st': mac table sync start time stamp master; 'arp-tbl-sync-start-ts-b-1st': arp table sync start time stamp blade; 'nd6-tbl-sync-start-ts-b-1st': nd6 table sync start time stamp blade; 'ipv4-fib-tbl-sync-start-ts-b-1st': ipv4-fib table sync start time stamp blade; 'ipv6-fib-tbl-sync-start-ts-b-1st': ipv6-fib table sync start time stamp blade; 'mac-tbl-sync-start-ts-b-1st': mac table sync start time stamp blade; 'arp-tbl-sync-entries-sent-m-1st': arp table entries sent from master for T0 synchronization; 'nd6-tbl-sync-entries-sent-m-1st': nd6 table entries sent from master for T0 synchronization; 'ipv4-fib-tbl-sync-entries-sent-m-1st': ipv4-fib table entries sent from master for T0 synchronization; 'ipv6-fib-tbl-sync-entries-sent-m-1st': ipv6-fib table entries sent from master for T0 synchronization; 'mac-tbl-sync-entries-sent-m-1st': mac table entries sent from master for T0 synchronization; 'arp-tbl-sync-entries-rcvd-b-1st': arp table entries received on blade for T0 synchronization; 'nd6-tbl-sync-entries-rcvd-b-1st': nd6 table entries received on blade for T0 synchronization; 'ipv4-fib-tbl-sync-entries-rcvd-b-1st': ipv4-fib table entries received on blade for T0 synchronization; 'ipv6-fib-tbl-sync-entries-rcvd-b-1st': ipv6-fib table entries received on blade for T0 synchronization; 'mac-tbl-sync-entries-rcvd-b-1st': mac table entries received on blade for T0 synchronization; 'arp-tbl-sync-entries-added-b-1st': arp table entries added on blade for T0 synchronization; 'nd6-tbl-sync-entries-added-b-1st': nd6 table entries added on blade for T0 synchronization; 'ipv4-fib-tbl-sync-entries-added-b-1st': ipv4-fib table entries added on blade for T0 synchronization; 'ipv6-fib-tbl-sync-entries-added-b-1st': ipv6-fib table entries added on blade for T0 synchronization; 'mac-tbl-sync-entries-added-b-1st': mac table entries added on blade for T0 synchronization; 'arp-tbl-sync-entries-removed-b-1st': arp table entries removed on blade for T0 synchronization; 'nd6-tbl-sync-entries-removed-b-1st': arp table entries removed on blade for T0 synchronization; 'ipv4-fib-tbl-sync-entries-removed-b-1st': arp table entries removed on blade for T0 synchronization; 'ipv6-fib-tbl-sync-entries-removed-b-1st': arp table entries removed on blade for T0 synchronization; 'mac-tbl-sync-entries-removed-b-1st': arp table entries removed on blade for T0 synchronization; 'arp-tbl-sync-end-ts-m-1st': arp table sync end time stamp master for T0 synchronization; 'nd6-tbl-sync-end-ts-m-1st': nd6 table sync end time stamp master for T0 synchronization; 'ipv4-fib-tbl-sync-end-ts-m-1st': ipv4-fib table sync end time stamp master for T0 synchronization; 'ipv6-fib-tbl-sync-end-ts-m-1st': ipv6-fib table sync end time stamp master for T0 synchronization; 'mac-tbl-sync-end-ts-m-1st': mac table sync end time stamp master for T0 synchronization; 'arp-tbl-sync-end-ts-b-1st': arp table sync end time stamp blade for T0 synchronization; 'nd6-tbl-sync-end-ts-b-1st': nd6 table sync end time stamp blade for T0 synchronization; 'ipv4-fib-tbl-sync-end-ts-b-1st': ipv4-fib table sync end time stamp blade for T0 synchronization; 'ipv6-fib-tbl-sync-end-ts-b-1st': ipv6-fib table sync end time stamp blade for T0 synchronization; 'mac-tbl-sync-end-ts-b-1st': mac table sync end time stamp blade for T0 synchronization; 'arp-tbl-sync-start-ts-m-2nd': arp table sync start time stamp master for T-1 synchronization; 'nd6-tbl-sync-start-ts-m-2nd': nd6 table sync start time stamp master for T-1 synchronization; 'ipv4-fib-tbl-sync-start-ts-m-2nd': ipv4-fib table sync start time stamp master for T-1 synchronization; 'ipv6-fib-tbl-sync-start-ts-m-2nd': ipv6-fib table sync start time stamp master for T-1 synchronization; 'mac-tbl-sync-start-ts-m-2nd': mac table sync start time stamp master for T-1 synchronization; 'arp-tbl-sync-start-ts-b-2nd': arp table sync start time stamp blade for T-1 synchronization; 'nd6-tbl-sync-start-ts-b-2nd': nd6 table sync start time stamp blade for T-1 synchronization; 'ipv4-fib-tbl-sync-start-ts-b-2nd': ipv4-fib table sync start time stamp blade for T-1 synchronization; 'ipv6-fib-tbl-sync-start-ts-b-2nd': ipv6-fib table sync start time stamp blade for T-1 synchronization; 'mac-tbl-sync-start-ts-b-2nd': mac table sync start time stamp blade for T-1 synchronization; 'arp-tbl-sync-entries-sent-m-2nd': arp table entries sent from master for T-1 synchronization; 'nd6-tbl-sync-entries-sent-m-2nd': nd6 table entries sent from master for T-1 synchronization; 'ipv4-fib-tbl-sync-entries-sent-m-2nd': ipv4-fib table entries sent from master for T-1 synchronization; 'ipv6-fib-tbl-sync-entries-sent-m-2nd': ipv6-fib table entries sent from master for T-1 synchronization; 'mac-tbl-sync-entries-sent-m-2nd': mac table entries sent from master for T-1 synchronization; 'arp-tbl-sync-entries-rcvd-b-2nd': arp table entries received in blade for T-1 synchronization; 'nd6-tbl-sync-entries-rcvd-b-2nd': nd6 table entries received in blade for T-1 synchronization; 'ipv4-fib-tbl-sync-entries-rcvd-b-2nd': ipv4-fib table entries received in blade for T-1 synchronization; 'ipv6-fib-tbl-sync-entries-rcvd-b-2nd': ipv6-fib table entries received in blade for T-1 synchronization; 'mac-tbl-sync-entries-rcvd-b-2nd': mac table entries received in blade for T-1 synchronization; 'arp-tbl-sync-entries-added-b-2nd': arp table entries added in blade for T-1 synchronization; 'nd6-tbl-sync-entries-added-b-2nd': nd6 table entries added in blade for T-1 synchronization; 'ipv4-fib-tbl-sync-entries-added-b-2nd': ipv4-fib table entries added in blade for T-1 synchronization; 'ipv6-fib-tbl-sync-entries-added-b-2nd': ipv6-fib table entries added in blade for T-1 synchronization; 'mac-tbl-sync-entries-added-b-2nd': mac table entries added in blade for T-1 synchronization; 'arp-tbl-sync-entries-removed-b-2nd': arp table entries removed in blade for T-1 synchronization; 'nd6-tbl-sync-entries-removed-b-2nd': nd6 table entries removed in blade for T-1 synchronization; 'ipv4-fib-tbl-sync-entries-removed-b-2nd': ipv4-fib table entries removed in blade for T-1 synchronization; 'ipv6-fib-tbl-sync-entries-removed-b-2nd': ipv6-fib table entries removed in blade for T-1 synchronization; 'mac-tbl-sync-entries-removed-b-2nd': mac table entries removed in blade for T-1 synchronization; 'arp-tbl-sync-end-ts-m-2nd': arp table sync end time stamp master for T-1 synchronization; 'nd6-tbl-sync-end-ts-m-2nd': nd6 table sync end time stamp master for T-1 synchronization; 'ipv4-fib-tbl-sync-end-ts-m-2nd': ipv4-fib table sync end time stamp master for T-1 synchronization; 'ipv6-fib-tbl-sync-end-ts-m-2nd': ipv6-fib table sync end time stamp master for T-1 synchronization; 'mac-tbl-sync-end-ts-m-2nd': mac table sync end time stamp master for T-1 synchronization; 'arp-tbl-sync-end-ts-b-2nd': arp table sync end time stamp blade for T-1 synchronization; 'nd6-tbl-sync-end-ts-b-2nd': nd6 table sync end time stamp blade for T-1 synchronization; 'ipv4-fib-tbl-sync-end-ts-b-2nd': ipv4-fib table sync end time stamp blade for T-1 synchronization; 'ipv6-fib-tbl-sync-end-ts-b-2nd': ipv6-fib table sync end time stamp blade for T-1 synchronization; 'mac-tbl-sync-end-ts-b-2nd': mac table sync end time stamp blade for T-1 synchronization; 'arp-tbl-sync-start-ts-m-3rd': arp table sync start time stamp master for T-2 synchronization; 'nd6-tbl-sync-start-ts-m-3rd': nd6 table sync start time stamp master for T-2 synchronization;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#counters1 System#counters1}
  */
  readonly counters1?: string;
  /**
  * 'ipv4-fib-tbl-sync-start-ts-m-3rd': ipv4-fib table sync start time stamp master for T-2 synchronization; 'ipv6-fib-tbl-sync-start-ts-m-3rd': ipv6-fib table sync start time stamp master for T-2 synchronization; 'mac-tbl-sync-start-ts-m-3rd': mac table sync start time stamp master for T-2 synchronization; 'arp-tbl-sync-start-ts-b-3rd': arp table sync start time stamp blade for T-2 synchronization; 'nd6-tbl-sync-start-ts-b-3rd': nd6 table sync start time stamp blade for T-2 synchronization; 'ipv4-fib-tbl-sync-start-ts-b-3rd': ipv4-fib table sync start time stamp blade for T-2 synchronization; 'ipv6-fib-tbl-sync-start-ts-b-3rd': ipv6-fib table sync start time stamp blade for T-2 synchronization; 'mac-tbl-sync-start-ts-b-3rd': mac table sync start time stamp blade for T-2 synchronization; 'arp-tbl-sync-entries-sent-m-3rd': arp table entries sent from master for T-2 synchronization; 'nd6-tbl-sync-entries-sent-m-3rd': nd6 table entries sent from master for T-2 synchronization; 'ipv4-fib-tbl-sync-entries-sent-m-3rd': ipv4-fib table entries sent from master for T-2 synchronization; 'ipv6-fib-tbl-sync-entries-sent-m-3rd': ipv6-fib table entries sent from master for T-2 synchronization; 'mac-tbl-sync-entries-sent-m-3rd': mac table entries sent from master for T-2 synchronization; 'arp-tbl-sync-entries-rcvd-b-3rd': arp table entries received in blade for T-2 synchronization; 'nd6-tbl-sync-entries-rcvd-b-3rd': nd6 table entries received in blade for T-2 synchronization; 'ipv4-fib-tbl-sync-entries-rcvd-b-3rd': ipv4-fib table entries received in blade for T-2 synchronization; 'ipv6-fib-tbl-sync-entries-rcvd-b-3rd': ipv6-fib table entries received in blade for T-2 synchronization; 'mac-tbl-sync-entries-rcvd-b-3rd': mac table entries received in blade for T-2 synchronization; 'arp-tbl-sync-entries-added-b-3rd': arp table entries added in blade for T-2 synchronization; 'nd6-tbl-sync-entries-added-b-3rd': nd6 table entries added in blade for T-2 synchronization; 'ipv4-fib-tbl-sync-entries-added-b-3rd': ipv4-fib table entries added in blade for T-2 synchronization; 'ipv6-fib-tbl-sync-entries-added-b-3rd': ipv6-fib table entries added in blade for T-2 synchronization; 'mac-tbl-sync-entries-added-b-3rd': mac table entries added in blade for T-2 synchronization; 'arp-tbl-sync-entries-removed-b-3rd': arp table entries removed in blade for T-2 synchronization; 'nd6-tbl-sync-entries-removed-b-3rd': nd6 table entries removed in blade for T-2 synchronization; 'ipv4-fib-tbl-sync-entries-removed-b-3rd': ipv4-fib table entries removed in blade for T-2 synchronization; 'ipv6-fib-tbl-sync-entries-removed-b-3rd': ipv6-fib table entries removed in blade for T-2 synchronization; 'mac-tbl-sync-entries-removed-b-3rd': mac table entries removed in blade for T-2 synchronization; 'arp-tbl-sync-end-ts-m-3rd': arp table sync end time stamp master for T-2 synchronization; 'nd6-tbl-sync-end-ts-m-3rd': nd6 table sync end time stamp master for T-2 synchronization; 'ipv4-fib-tbl-sync-end-ts-m-3rd': ipv4-fib table sync end time stamp master for T-2 synchronization; 'ipv6-fib-tbl-sync-end-ts-m-3rd': ipv6-fib table sync end time stamp master for T-2 synchronization; 'mac-tbl-sync-end-ts-m-3rd': mac table sync end time stamp master for T-2 synchronization; 'arp-tbl-sync-end-ts-b-3rd': arp table sync end time stamp blade for T-2 synchronization; 'nd6-tbl-sync-end-ts-b-3rd': nd6 table sync end time stamp blade for T-2 synchronization; 'ipv4-fib-tbl-sync-end-ts-b-3rd': ipv4-fib table sync end time stamp blade for T-2 synchronization; 'ipv6-fib-tbl-sync-end-ts-b-3rd': ipv6-fib table sync end time stamp blade for T-2 synchronization; 'mac-tbl-sync-end-ts-b-3rd': mac table sync end time stamp blade for T-2 synchronization; 'arp-tbl-sync-start-ts-m-4th': arp table sync start time stamp master for T-3 synchronization; 'nd6-tbl-sync-start-ts-m-4th': nd6 table sync start time stamp master for T-3 synchronization; 'ipv4-fib-tbl-sync-start-ts-m-4th': ipv4-fib table sync start time stamp master for T-3 synchronization; 'ipv6-fib-tbl-sync-start-ts-m-4th': ipv6-fib table sync start time stamp master for T-3 synchronization; 'mac-tbl-sync-start-ts-m-4th': mac table sync start time stamp master for T-3 synchronization; 'arp-tbl-sync-start-ts-b-4th': arp table sync start time stamp blade for T-3 synchronization; 'nd6-tbl-sync-start-ts-b-4th': nd6 table sync start time stamp blade for T-3 synchronization; 'ipv4-fib-tbl-sync-start-ts-b-4th': ipv4-fib table sync start time stamp blade for T-3 synchronization; 'ipv6-fib-tbl-sync-start-ts-b-4th': ipv6-fib table sync start time stamp blade for T-3 synchronization; 'mac-tbl-sync-start-ts-b-4th': mac table sync start time stamp blade for T-3 synchronization; 'arp-tbl-sync-entries-sent-m-4th': arp table entries sent from master for T-3 synchronization; 'nd6-tbl-sync-entries-sent-m-4th': nd6 table entries sent from master for T-3 synchronization; 'ipv4-fib-tbl-sync-entries-sent-m-4th': ipv4-fib table entries sent from master for T-3 synchronization; 'ipv6-fib-tbl-sync-entries-sent-m-4th': ipv6-fib table entries sent from master for T-3 synchronization; 'mac-tbl-sync-entries-sent-m-4th': mac table entries sent from master for T-3 synchronization; 'arp-tbl-sync-entries-rcvd-b-4th': arp table entries received in blade for T-3 synchronization; 'nd6-tbl-sync-entries-rcvd-b-4th': nd6 table entries received in blade for T-3 synchronization; 'ipv4-fib-tbl-sync-entries-rcvd-b-4th': ipv4-fib table entries received in blade for T-3 synchronization; 'ipv6-fib-tbl-sync-entries-rcvd-b-4th': ipv6-fib table entries received in blade for T-3 synchronization; 'mac-tbl-sync-entries-rcvd-b-4th': mac table entries received in blade for T-3 synchronization; 'arp-tbl-sync-entries-added-b-4th': arp table entries added in blade for T-3 synchronization; 'nd6-tbl-sync-entries-added-b-4th': nd6 table entries added in blade for T-3 synchronization; 'ipv4-fib-tbl-sync-entries-added-b-4th': ipv4-fib table entries added in blade for T-3 synchronization; 'ipv6-fib-tbl-sync-entries-added-b-4th': ipv6-fib table entries added in blade for T-3 synchronization; 'mac-tbl-sync-entries-added-b-4th': mac table entries added in blade for T-3 synchronization; 'arp-tbl-sync-entries-removed-b-4th': arp table entries removed in blade for T-3 synchronization; 'nd6-tbl-sync-entries-removed-b-4th': nd6 table entries removed in blade for T-3 synchronization; 'ipv4-fib-tbl-sync-entries-removed-b-4th': ipv4-fib table entries removed in blade for T-3 synchronization; 'ipv6-fib-tbl-sync-entries-removed-b-4th': ipv6-fib table entries removed in blade for T-3 synchronization; 'mac-tbl-sync-entries-removed-b-4th': mac table entries removed in blade for T-3 synchronization; 'arp-tbl-sync-end-ts-m-4th': arp table sync end time stamp master for T-3 synchronization; 'nd6-tbl-sync-end-ts-m-4th': nd6 table sync end time stamp master for T-3 synchronization; 'ipv4-fib-tbl-sync-end-ts-m-4th': ipv4-fib table sync end time stamp master for T-3 synchronization; 'ipv6-fib-tbl-sync-end-ts-m-4th': ipv6-fib table sync end time stamp master for T-3 synchronization; 'mac-tbl-sync-end-ts-m-4th': mac table sync end time stamp master for T-3 synchronization; 'arp-tbl-sync-end-ts-b-4th': arp table sync end time stamp blade for T-3 synchronization; 'nd6-tbl-sync-end-ts-b-4th': nd6 table sync end time stamp blade for T-3 synchronization; 'ipv4-fib-tbl-sync-end-ts-b-4th': ipv4-fib table sync end time stamp blade for T-3 synchronization; 'ipv6-fib-tbl-sync-end-ts-b-4th': ipv6-fib table sync end time stamp blade for T-3 synchronization; 'mac-tbl-sync-end-ts-b-4th': mac table sync end time stamp blade for T-3 synchronization; 'arp-tbl-sync-start-ts-m-5th': arp table sync start time stamp master for T-4 synchronization;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#counters2 System#counters2}
  */
  readonly counters2?: string;
  /**
  * 'nd6-tbl-sync-start-ts-m-5th': nd6 table sync start time stamp master for T-4 synchronization; 'ipv4-fib-tbl-sync-start-ts-m-5th': ipv4-fib table sync start time stamp master for T-4 synchronization; 'ipv6-fib-tbl-sync-start-ts-m-5th': ipv6-fib table sync start time stamp master for T-4 synchronization; 'mac-tbl-sync-start-ts-m-5th': mac table sync start time stamp master for T-4 synchronization; 'arp-tbl-sync-start-ts-b-5th': arp table sync start time stamp blade for T-4 synchronization; 'nd6-tbl-sync-start-ts-b-5th': nd6 table sync start time stamp blade for T-4 synchronization; 'ipv4-fib-tbl-sync-start-ts-b-5th': ipv4-fib table sync start time stamp blade for T-4 synchronization; 'ipv6-fib-tbl-sync-start-ts-b-5th': ipv6-fib table sync start time stamp blade for T-4 synchronization; 'mac-tbl-sync-start-ts-b-5th': mac table sync start time stamp blade for T-4 synchronization; 'arp-tbl-sync-entries-sent-m-5th': arp table sync start time stamp blade for T-4 synchronization; 'nd6-tbl-sync-entries-sent-m-5th': nd6 table sync start time stamp blade for T-4 synchronization; 'ipv4-fib-tbl-sync-entries-sent-m-5th': ipv4-fib table sync start time stamp blade for T-4 synchronization; 'ipv6-fib-tbl-sync-entries-sent-m-5th': ipv6-fib table sync start time stamp blade for T-4 synchronization; 'mac-tbl-sync-entries-sent-m-5th': mac table sync start time stamp blade for T-4 synchronization; 'arp-tbl-sync-entries-rcvd-b-5th': arp table entries received in blade for T-4 synchronization; 'nd6-tbl-sync-entries-rcvd-b-5th': nd6 table entries received in blade for T-4 synchronization; 'ipv4-fib-tbl-sync-entries-rcvd-b-5th': ipv4-fib table entries received in blade for T-4 synchronization; 'ipv6-fib-tbl-sync-entries-rcvd-b-5th': ipv6-fib table entries received in blade for T-4 synchronization; 'mac-tbl-sync-entries-rcvd-b-5th': mac table entries received in blade for T-4 synchronization; 'arp-tbl-sync-entries-added-b-5th': arp table entries added in blade for T-4 synchronization; 'nd6-tbl-sync-entries-added-b-5th': nd6 table entries added in blade for T-4 synchronization; 'ipv4-fib-tbl-sync-entries-added-b-5th': ipv4-fib table entries added in blade for T-4 synchronization; 'ipv6-fib-tbl-sync-entries-added-b-5th': ipv6-fib table entries added in blade for T-4 synchronization; 'mac-tbl-sync-entries-added-b-5th': mac table entries added in blade for T-4 synchronization; 'arp-tbl-sync-entries-removed-b-5th': arp table entries removed in blade for T-4 synchronization; 'nd6-tbl-sync-entries-removed-b-5th': nd6 table entries removed in blade for T-4 synchronization; 'ipv4-fib-tbl-sync-entries-removed-b-5th': ipv4-fib table entries removed in blade for T-4 synchronization; 'ipv6-fib-tbl-sync-entries-removed-b-5th': ipv6-fib table entries removed in blade for T-4 synchronization; 'mac-tbl-sync-entries-removed-b-5th': mac table entries removed in blade for T-4 synchronization; 'arp-tbl-sync-end-ts-m-5th': arp table sync end time stamp master for T-4 synchronization; 'nd6-tbl-sync-end-ts-m-5th': nd6 table sync end time stamp master for T-4 synchronization; 'ipv4-fib-tbl-sync-end-ts-m-5th': ipv4-fib table sync end time stamp master for T-4 synchronization; 'ipv6-fib-tbl-sync-end-ts-m-5th': ipv6-fib table sync end time stamp master for T-4 synchronization; 'mac-tbl-sync-end-ts-m-5th': mac table sync end time stamp master for T-4 synchronization; 'arp-tbl-sync-end-ts-b-5th': arp table sync end time stamp blade for T-4 synchronization; 'nd6-tbl-sync-end-ts-b-5th': nd6 table sync end time stamp blade for T-4 synchronization; 'ipv4-fib-tbl-sync-end-ts-b-5th': ipv4-fib table sync end time stamp blade for T-4 synchronization; 'ipv6-fib-tbl-sync-end-ts-b-5th': ipv6-fib table sync end time stamp blade for T-4 synchronization; 'mac-tbl-sync-end-ts-b-5th': mac table sync end time stamp blade for T-4 synchronization; 'arp-tbl-sync-m': arp table sync count in master; 'nd6-tbl-sync-m': nd6 table sync count in master; 'ipv4-fib-tbl-sync-m': ipv4-fib table sync count in master; 'ipv6-fib-tbl-sync-m': ipv6-fib table sync count in master; 'mac-tbl-sync-m': mac table sync count in master; 'arp-tbl-sync-b': arp table sync count in blade; 'nd6-tbl-sync-b': nd6 table sync count in blade; 'ipv4-fib-tbl-sync-b': ipv4-fib table sync count in blade; 'ipv6-fib-tbl-sync-b': ipv6-fib table sync count in blade; 'mac-tbl-sync-b': mac table sync count in blade; 'arp-tbl-cksum-m': arp table checksum count in master; 'nd6-tbl-cksum-m': nd6 table checksum count in master; 'ipv4-fib-tbl-cksum-m': ipv4-fib table checksum count in master; 'ipv6-fib-tbl-cksum-m': ipv6-fib table checksum count in master; 'mac-tbl-cksum-m': mac table checksum count in master; 'arp-tbl-cksum-b': arp table checksum count in blade; 'nd6-tbl-cksum-b': nd6 table checksum count in blade; 'ipv4-fib-tbl-cksum-b': ipv4-fib table checksum count in blade; 'ipv6-fib-tbl-cksum-b': ipv6-fib table checksum count in blade; 'mac-tbl-cksum-b': mac table checksum count in blade; 'arp-tbl-cksum-mismatch-b': arp table checksum mismatch count in blade; 'nd6-tbl-cksum-mismatch-b': nd6 table checksum mismatch count in blade; 'ipv4-fib-tbl-cksum-mismatch-b': ipv4-fib table checksum mismatch count in blade; 'ipv6-fib-tbl-cksum-mismatch-b': ipv6-fib table checksum mismatch count in blade; 'mac-tbl-cksum-mismatch-b': mac table checksum mismatch count in blade; 'arp-tbl-cksum-cancel-m': arp table checksum cancelled count in master; 'nd6-tbl-cksum-cancel-m': nd6 table checksum cancelled count in master; 'ipv4-fib-tbl-cksum-cancel-m': ipv4-fib table checksum cancelled count in master; 'ipv6-fib-tbl-cksum-cancel-m': ipv6-fib table checksum cancelled count in master; 'mac-tbl-cksum-cancel-m': mac table checksum cancelled count in master;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#counters3 System#counters3}
  */
  readonly counters3?: string;
}

export function systemTableIntegritySamplingEnableToTerraform(struct?: SystemTableIntegritySamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
    counters2: cdktf.stringToTerraform(struct!.counters2),
    counters3: cdktf.stringToTerraform(struct!.counters3),
  }
}


export function systemTableIntegritySamplingEnableToHclTerraform(struct?: SystemTableIntegritySamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    counters2: {
      value: cdktf.stringToHclTerraform(struct!.counters2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    counters3: {
      value: cdktf.stringToHclTerraform(struct!.counters3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemTableIntegritySamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemTableIntegritySamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    if (this._counters2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters2 = this._counters2;
    }
    if (this._counters3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters3 = this._counters3;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTableIntegritySamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
      this._counters2 = undefined;
      this._counters3 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
      this._counters2 = value.counters2;
      this._counters3 = value.counters3;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }

  // counters2 - computed: false, optional: true, required: false
  private _counters2?: string; 
  public get counters2() {
    return this.getStringAttribute('counters2');
  }
  public set counters2(value: string) {
    this._counters2 = value;
  }
  public resetCounters2() {
    this._counters2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters2Input() {
    return this._counters2;
  }

  // counters3 - computed: false, optional: true, required: false
  private _counters3?: string; 
  public get counters3() {
    return this.getStringAttribute('counters3');
  }
  public set counters3(value: string) {
    this._counters3 = value;
  }
  public resetCounters3() {
    this._counters3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters3Input() {
    return this._counters3;
  }
}

export class SystemTableIntegritySamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SystemTableIntegritySamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SystemTableIntegritySamplingEnableOutputReference {
    return new SystemTableIntegritySamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemTableIntegrity {
  /**
  * 'enable': Enable table integrity audit; 'disable': Disable table integrity audit;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#audit_action System#audit_action}
  */
  readonly auditAction?: string;
  /**
  * 'enable': Enable auto-sync; 'disable': Disable auto-sync;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#auto_sync_action System#auto_sync_action}
  */
  readonly autoSyncAction?: string;
  /**
  * 'all': All tables;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#table System#table}
  */
  readonly table?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#sampling_enable System#sampling_enable}
  */
  readonly samplingEnable?: SystemTableIntegritySamplingEnable[] | cdktf.IResolvable;
}

export function systemTableIntegrityToTerraform(struct?: SystemTableIntegrityOutputReference | SystemTableIntegrity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit_action: cdktf.stringToTerraform(struct!.auditAction),
    auto_sync_action: cdktf.stringToTerraform(struct!.autoSyncAction),
    table: cdktf.stringToTerraform(struct!.table),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(systemTableIntegritySamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function systemTableIntegrityToHclTerraform(struct?: SystemTableIntegrityOutputReference | SystemTableIntegrity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audit_action: {
      value: cdktf.stringToHclTerraform(struct!.auditAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_sync_action: {
      value: cdktf.stringToHclTerraform(struct!.autoSyncAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table: {
      value: cdktf.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(systemTableIntegritySamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "SystemTableIntegritySamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemTableIntegrityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemTableIntegrity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auditAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditAction = this._auditAction;
    }
    if (this._autoSyncAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoSyncAction = this._autoSyncAction;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTableIntegrity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._auditAction = undefined;
      this._autoSyncAction = undefined;
      this._table = undefined;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._auditAction = value.auditAction;
      this._autoSyncAction = value.autoSyncAction;
      this._table = value.table;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // audit_action - computed: false, optional: true, required: false
  private _auditAction?: string; 
  public get auditAction() {
    return this.getStringAttribute('audit_action');
  }
  public set auditAction(value: string) {
    this._auditAction = value;
  }
  public resetAuditAction() {
    this._auditAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditActionInput() {
    return this._auditAction;
  }

  // auto_sync_action - computed: false, optional: true, required: false
  private _autoSyncAction?: string; 
  public get autoSyncAction() {
    return this.getStringAttribute('auto_sync_action');
  }
  public set autoSyncAction(value: string) {
    this._autoSyncAction = value;
  }
  public resetAutoSyncAction() {
    this._autoSyncAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSyncActionInput() {
    return this._autoSyncAction;
  }

  // table - computed: false, optional: true, required: false
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  public resetTable() {
    this._table = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SystemTableIntegritySamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SystemTableIntegritySamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface SystemTcpRateLimitResetUnknownConn {
  /**
  * Log when rate exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#log_for_reset_unknown_conn System#log_for_reset_unknown_conn}
  */
  readonly logForResetUnknownConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#pkt_rate_for_reset_unknown_conn System#pkt_rate_for_reset_unknown_conn}
  */
  readonly pktRateForResetUnknownConn?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemTcpRateLimitResetUnknownConnToTerraform(struct?: SystemTcpRateLimitResetUnknownConnOutputReference | SystemTcpRateLimitResetUnknownConn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_for_reset_unknown_conn: cdktf.numberToTerraform(struct!.logForResetUnknownConn),
    pkt_rate_for_reset_unknown_conn: cdktf.numberToTerraform(struct!.pktRateForResetUnknownConn),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemTcpRateLimitResetUnknownConnToHclTerraform(struct?: SystemTcpRateLimitResetUnknownConnOutputReference | SystemTcpRateLimitResetUnknownConn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_for_reset_unknown_conn: {
      value: cdktf.numberToHclTerraform(struct!.logForResetUnknownConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkt_rate_for_reset_unknown_conn: {
      value: cdktf.numberToHclTerraform(struct!.pktRateForResetUnknownConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemTcpRateLimitResetUnknownConnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemTcpRateLimitResetUnknownConn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logForResetUnknownConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.logForResetUnknownConn = this._logForResetUnknownConn;
    }
    if (this._pktRateForResetUnknownConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktRateForResetUnknownConn = this._pktRateForResetUnknownConn;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTcpRateLimitResetUnknownConn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logForResetUnknownConn = undefined;
      this._pktRateForResetUnknownConn = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logForResetUnknownConn = value.logForResetUnknownConn;
      this._pktRateForResetUnknownConn = value.pktRateForResetUnknownConn;
      this._uuid = value.uuid;
    }
  }

  // log_for_reset_unknown_conn - computed: false, optional: true, required: false
  private _logForResetUnknownConn?: number; 
  public get logForResetUnknownConn() {
    return this.getNumberAttribute('log_for_reset_unknown_conn');
  }
  public set logForResetUnknownConn(value: number) {
    this._logForResetUnknownConn = value;
  }
  public resetLogForResetUnknownConn() {
    this._logForResetUnknownConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logForResetUnknownConnInput() {
    return this._logForResetUnknownConn;
  }

  // pkt_rate_for_reset_unknown_conn - computed: false, optional: true, required: false
  private _pktRateForResetUnknownConn?: number; 
  public get pktRateForResetUnknownConn() {
    return this.getNumberAttribute('pkt_rate_for_reset_unknown_conn');
  }
  public set pktRateForResetUnknownConn(value: number) {
    this._pktRateForResetUnknownConn = value;
  }
  public resetPktRateForResetUnknownConn() {
    this._pktRateForResetUnknownConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktRateForResetUnknownConnInput() {
    return this._pktRateForResetUnknownConn;
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
}
export interface SystemTcpSamplingEnable {
  /**
  * 'all': all; 'activeopens': Active open conns; 'passiveopens': Passive open conns; 'attemptfails': Connect attemp failures; 'estabresets': Resets rcvd on EST conn; 'insegs': Total in TCP packets; 'outsegs': Total out TCP packets; 'retranssegs': Retransmited packets; 'inerrs': Input errors; 'outrsts': Reset Sent; 'sock_alloc': Sockets allocated; 'orphan_count': Orphan sockets; 'mem_alloc': Memory alloc; 'recv_mem': Total rx buffer; 'send_mem': Total tx buffer; 'currestab': Currently EST conns; 'currsyssnt': TCP in SYN-SNT state; 'currsynrcv': TCP in SYN-RCV state; 'currfinw1': TCP in FIN-W1 state; 'currfinw2': TCP FIN-W2 state; 'currtimew': TCP TimeW state; 'currclose': TCP in Close state; 'currclsw': TCP in CloseW state; 'currlack': TCP in LastACK state; 'currlstn': TCP in Listen state; 'currclsg': TCP in Closing state; 'pawsactiverejected': TCP paw active rej; 'syn_rcv_rstack': Rcv RST|ACK on SYN; 'syn_rcv_rst': Rcv RST on SYN; 'syn_rcv_ack': Rcv ACK on SYN; 'ax_rexmit_syn': TCP rexmit SYN; 'tcpabortontimeout': TCP abort on timeout; 'noroute': TCPIP out noroute; 'exceedmss': MSS exceeded pkt dropped; 'tfo_conns': TFO Total Connections; 'tfo_actives': TFO Current Actives; 'tfo_denied': TFO Denied; 'syn_rcv_rexmit': Rcv SYN rexmit; 'sock_init': Socket init; 'invalid_drop': Invalid packet drop; 'delayed_free': Delayed free return;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#counters1 System#counters1}
  */
  readonly counters1?: string;
}

export function systemTcpSamplingEnableToTerraform(struct?: SystemTcpSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function systemTcpSamplingEnableToHclTerraform(struct?: SystemTcpSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemTcpSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemTcpSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTcpSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class SystemTcpSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SystemTcpSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SystemTcpSamplingEnableOutputReference {
    return new SystemTcpSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemTcp {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * rate_limit_reset_unknown_conn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#rate_limit_reset_unknown_conn System#rate_limit_reset_unknown_conn}
  */
  readonly rateLimitResetUnknownConn?: SystemTcpRateLimitResetUnknownConn;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#sampling_enable System#sampling_enable}
  */
  readonly samplingEnable?: SystemTcpSamplingEnable[] | cdktf.IResolvable;
}

export function systemTcpToTerraform(struct?: SystemTcpOutputReference | SystemTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    rate_limit_reset_unknown_conn: systemTcpRateLimitResetUnknownConnToTerraform(struct!.rateLimitResetUnknownConn),
    sampling_enable: cdktf.listMapper(systemTcpSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function systemTcpToHclTerraform(struct?: SystemTcpOutputReference | SystemTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate_limit_reset_unknown_conn: {
      value: systemTcpRateLimitResetUnknownConnToHclTerraform(struct!.rateLimitResetUnknownConn),
      isBlock: true,
      type: "list",
      storageClassType: "SystemTcpRateLimitResetUnknownConnList",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(systemTcpSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "SystemTcpSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemTcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._rateLimitResetUnknownConn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimitResetUnknownConn = this._rateLimitResetUnknownConn?.internalValue;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._rateLimitResetUnknownConn.internalValue = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._rateLimitResetUnknownConn.internalValue = value.rateLimitResetUnknownConn;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
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

  // rate_limit_reset_unknown_conn - computed: false, optional: true, required: false
  private _rateLimitResetUnknownConn = new SystemTcpRateLimitResetUnknownConnOutputReference(this, "rate_limit_reset_unknown_conn");
  public get rateLimitResetUnknownConn() {
    return this._rateLimitResetUnknownConn;
  }
  public putRateLimitResetUnknownConn(value: SystemTcpRateLimitResetUnknownConn) {
    this._rateLimitResetUnknownConn.internalValue = value;
  }
  public resetRateLimitResetUnknownConn() {
    this._rateLimitResetUnknownConn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitResetUnknownConnInput() {
    return this._rateLimitResetUnknownConn.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SystemTcpSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SystemTcpSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface SystemTcpStatsSamplingEnable {
  /**
  * 'all': all; 'connattempt': Connect initiated; 'connects': Connect established; 'drops': Connect dropped; 'conndrops': Embryonic connect dropped; 'closed': Connect closed; 'segstimed': Segs to get RTT; 'rttupdated': Update RTT; 'delack': Delayed acks sent; 'timeoutdrop': Conn dropped in rxmt timeout; 'rexmttimeo': Retransmit timeout; 'persisttimeo': Persist timeout; 'keeptimeo': Keepalive timeout; 'keepprobe': Keepalive probe sent; 'keepdrops': Connect dropped in keepalive; 'sndtotal': Total packet sent; 'sndpack': Data packet sent; 'sndbyte': Data bytes sent; 'sndrexmitpack': Data packet retransmit; 'sndrexmitbyte': Data byte retransmit; 'sndrexmitbad': Unnecessary packet retransmit; 'sndacks': Ack packet sent; 'sndprobe': Window probe sent; 'sndurg': URG packet sent; 'sndwinup': Window update packet sent; 'sndctrl': SYN|FIN|RST packet sent; 'sndrst': RST packet sent; 'sndfin': FIN packet sent; 'sndsyn': SYN packet sent; 'rcvtotal': Total packet received; 'rcvpack': Packet received; 'rcvbyte': Bytes received; 'rcvbadoff': Packet received with bad offset; 'rcvmemdrop': Packet dropped for lack of memory; 'rcvduppack': Duplicate packet received; 'rcvdupbyte': Duplicate bytes received; 'rcvpartduppack': Packet with some duplicate data; 'rcvpartdupbyte': Dup. bytes in part-dup. packets; 'rcvoopack': Out-of-order packet received; 'rcvoobyte': Out-of-order bytes received; 'rcvpackafterwin': Packets with data after window; 'rcvbyteafterwin': Bytes rcvd after window; 'rcvwinprobe': Rcvd window probe packet; 'rcvdupack': Rcvd duplicate acks; 'rcvacktoomuch': Rcvd acks for unsent data; 'rcvackpack': Rcvd ack packets; 'rcvackbyte': Bytes acked by rcvd acks; 'rcvwinupd': Rcvd window update packets; 'pawsdrop': Segments dropped due to PAWS; 'predack': Hdr predict for acks; 'preddat': Hdr predict for data pkts; 'persistdrop': Timeout in persist state; 'badrst': Ignored RST; 'finwait2_drops': Drop FIN_WAIT_2 connection after time limit; 'sack_recovery_episode': SACK recovery episodes; 'sack_rexmits': SACK rexmit segments; 'sack_rexmit_bytes': SACK rexmit bytes; 'sack_rcv_blocks': SACK received; 'sack_send_blocks': SACK sent; 'sndcack': Challenge ACK sent; 'cacklim': Challenge ACK limited; 'reassmemdrop': Packet dropped during reassembly; 'reasstimeout': Reassembly Time Out; 'cc_idle': Congestion control window set do to idle; 'cc_reduce': Congestion control window reduced by event; 'rcvdsack': Rcvd DSACK packets; 'a2brcvwnd': ATCP to BTCP receive window; 'a2bsackpresent': ATCP to BTCP SACK options present; 'a2bdupack': ATCP to BTCP Dup/OO ACK; 'a2brxdata': ATCP to BTCP Rxmitted data; 'a2btcpoptions': ATCP to BTCP unsupported TCP options; 'a2boodata': ATCP to BTCP oo data received; 'a2bpartialack': ATCP to BTCP partial ack received; 'a2bfsmtransition': ATCP to BTCP state machine transition; 'a2btransitionnum': ATCP to BTCP total transitions; 'b2atransitionnum': ATCP to BTCP total transitions; 'bad_iochan': IO Channel Modified; 'atcpforward': Adaptive TCP forward; 'atcpsent': Adaptive TCP sent; 'atcprexmitsadrop': Adaptive TCP transmit SA drops; 'atcpsendbackack': Adaptive TCP sendback ACK; 'atcprexmit': Adaptive TCP retransmits; 'atcpbuffallocfail': Adaptive TCP buffer allocation fails; 'a2bappbuffering': Transition to full stack on when application buffers too much data; 'atcpsendfail': Adaptive TCP sent fails; 'earlyrexmit': Early Retransmission sent; 'mburstlim': Maxburst limited tx; 'a2bsndwnd': ATCP to BTCP send window; 'proxyheaderv1': Proxy header v1; 'proxyheaderv2': Proxy header v2;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#counters1 System#counters1}
  */
  readonly counters1?: string;
}

export function systemTcpStatsSamplingEnableToTerraform(struct?: SystemTcpStatsSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function systemTcpStatsSamplingEnableToHclTerraform(struct?: SystemTcpStatsSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemTcpStatsSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemTcpStatsSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTcpStatsSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class SystemTcpStatsSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SystemTcpStatsSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SystemTcpStatsSamplingEnableOutputReference {
    return new SystemTcpStatsSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemTcpStats {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#sampling_enable System#sampling_enable}
  */
  readonly samplingEnable?: SystemTcpStatsSamplingEnable[] | cdktf.IResolvable;
}

export function systemTcpStatsToTerraform(struct?: SystemTcpStatsOutputReference | SystemTcpStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(systemTcpStatsSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function systemTcpStatsToHclTerraform(struct?: SystemTcpStatsOutputReference | SystemTcpStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(systemTcpStatsSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "SystemTcpStatsSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemTcpStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemTcpStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTcpStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SystemTcpStatsSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SystemTcpStatsSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface SystemTcpSynPerSec {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemTcpSynPerSecToTerraform(struct?: SystemTcpSynPerSecOutputReference | SystemTcpSynPerSec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemTcpSynPerSecToHclTerraform(struct?: SystemTcpSynPerSecOutputReference | SystemTcpSynPerSec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemTcpSynPerSecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemTcpSynPerSec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTcpSynPerSec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
}
export interface SystemTelemetryLogDeviceStatus {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemTelemetryLogDeviceStatusToTerraform(struct?: SystemTelemetryLogDeviceStatusOutputReference | SystemTelemetryLogDeviceStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemTelemetryLogDeviceStatusToHclTerraform(struct?: SystemTelemetryLogDeviceStatusOutputReference | SystemTelemetryLogDeviceStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemTelemetryLogDeviceStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemTelemetryLogDeviceStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTelemetryLogDeviceStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
}
export interface SystemTelemetryLogEnvironment {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemTelemetryLogEnvironmentToTerraform(struct?: SystemTelemetryLogEnvironmentOutputReference | SystemTelemetryLogEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemTelemetryLogEnvironmentToHclTerraform(struct?: SystemTelemetryLogEnvironmentOutputReference | SystemTelemetryLogEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemTelemetryLogEnvironmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemTelemetryLogEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTelemetryLogEnvironment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
}
export interface SystemTelemetryLogPartitionMetrics {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemTelemetryLogPartitionMetricsToTerraform(struct?: SystemTelemetryLogPartitionMetricsOutputReference | SystemTelemetryLogPartitionMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemTelemetryLogPartitionMetricsToHclTerraform(struct?: SystemTelemetryLogPartitionMetricsOutputReference | SystemTelemetryLogPartitionMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemTelemetryLogPartitionMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemTelemetryLogPartitionMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTelemetryLogPartitionMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
}
export interface SystemTelemetryLogTopKAppSvcListStruct {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemTelemetryLogTopKAppSvcListStructToTerraform(struct?: SystemTelemetryLogTopKAppSvcListStructOutputReference | SystemTelemetryLogTopKAppSvcListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemTelemetryLogTopKAppSvcListStructToHclTerraform(struct?: SystemTelemetryLogTopKAppSvcListStructOutputReference | SystemTelemetryLogTopKAppSvcListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemTelemetryLogTopKAppSvcListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemTelemetryLogTopKAppSvcListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTelemetryLogTopKAppSvcListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
}
export interface SystemTelemetryLogTopKSourceListStruct {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemTelemetryLogTopKSourceListStructToTerraform(struct?: SystemTelemetryLogTopKSourceListStructOutputReference | SystemTelemetryLogTopKSourceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemTelemetryLogTopKSourceListStructToHclTerraform(struct?: SystemTelemetryLogTopKSourceListStructOutputReference | SystemTelemetryLogTopKSourceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemTelemetryLogTopKSourceListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemTelemetryLogTopKSourceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTelemetryLogTopKSourceListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
}
export interface SystemTelemetryLog {
  /**
  * device_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#device_status System#device_status}
  */
  readonly deviceStatus?: SystemTelemetryLogDeviceStatus;
  /**
  * environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#environment System#environment}
  */
  readonly environment?: SystemTelemetryLogEnvironment;
  /**
  * partition_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#partition_metrics System#partition_metrics}
  */
  readonly partitionMetrics?: SystemTelemetryLogPartitionMetrics;
  /**
  * top_k_app_svc_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#top_k_app_svc_list System#top_k_app_svc_list}
  */
  readonly topKAppSvcList?: SystemTelemetryLogTopKAppSvcListStruct;
  /**
  * top_k_source_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#top_k_source_list System#top_k_source_list}
  */
  readonly topKSourceList?: SystemTelemetryLogTopKSourceListStruct;
}

export function systemTelemetryLogToTerraform(struct?: SystemTelemetryLogOutputReference | SystemTelemetryLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_status: systemTelemetryLogDeviceStatusToTerraform(struct!.deviceStatus),
    environment: systemTelemetryLogEnvironmentToTerraform(struct!.environment),
    partition_metrics: systemTelemetryLogPartitionMetricsToTerraform(struct!.partitionMetrics),
    top_k_app_svc_list: systemTelemetryLogTopKAppSvcListStructToTerraform(struct!.topKAppSvcList),
    top_k_source_list: systemTelemetryLogTopKSourceListStructToTerraform(struct!.topKSourceList),
  }
}


export function systemTelemetryLogToHclTerraform(struct?: SystemTelemetryLogOutputReference | SystemTelemetryLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_status: {
      value: systemTelemetryLogDeviceStatusToHclTerraform(struct!.deviceStatus),
      isBlock: true,
      type: "list",
      storageClassType: "SystemTelemetryLogDeviceStatusList",
    },
    environment: {
      value: systemTelemetryLogEnvironmentToHclTerraform(struct!.environment),
      isBlock: true,
      type: "list",
      storageClassType: "SystemTelemetryLogEnvironmentList",
    },
    partition_metrics: {
      value: systemTelemetryLogPartitionMetricsToHclTerraform(struct!.partitionMetrics),
      isBlock: true,
      type: "list",
      storageClassType: "SystemTelemetryLogPartitionMetricsList",
    },
    top_k_app_svc_list: {
      value: systemTelemetryLogTopKAppSvcListStructToHclTerraform(struct!.topKAppSvcList),
      isBlock: true,
      type: "list",
      storageClassType: "SystemTelemetryLogTopKAppSvcListStructList",
    },
    top_k_source_list: {
      value: systemTelemetryLogTopKSourceListStructToHclTerraform(struct!.topKSourceList),
      isBlock: true,
      type: "list",
      storageClassType: "SystemTelemetryLogTopKSourceListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemTelemetryLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemTelemetryLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceStatus = this._deviceStatus?.internalValue;
    }
    if (this._environment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment?.internalValue;
    }
    if (this._partitionMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionMetrics = this._partitionMetrics?.internalValue;
    }
    if (this._topKAppSvcList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topKAppSvcList = this._topKAppSvcList?.internalValue;
    }
    if (this._topKSourceList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topKSourceList = this._topKSourceList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTelemetryLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deviceStatus.internalValue = undefined;
      this._environment.internalValue = undefined;
      this._partitionMetrics.internalValue = undefined;
      this._topKAppSvcList.internalValue = undefined;
      this._topKSourceList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deviceStatus.internalValue = value.deviceStatus;
      this._environment.internalValue = value.environment;
      this._partitionMetrics.internalValue = value.partitionMetrics;
      this._topKAppSvcList.internalValue = value.topKAppSvcList;
      this._topKSourceList.internalValue = value.topKSourceList;
    }
  }

  // device_status - computed: false, optional: true, required: false
  private _deviceStatus = new SystemTelemetryLogDeviceStatusOutputReference(this, "device_status");
  public get deviceStatus() {
    return this._deviceStatus;
  }
  public putDeviceStatus(value: SystemTelemetryLogDeviceStatus) {
    this._deviceStatus.internalValue = value;
  }
  public resetDeviceStatus() {
    this._deviceStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceStatusInput() {
    return this._deviceStatus.internalValue;
  }

  // environment - computed: false, optional: true, required: false
  private _environment = new SystemTelemetryLogEnvironmentOutputReference(this, "environment");
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: SystemTelemetryLogEnvironment) {
    this._environment.internalValue = value;
  }
  public resetEnvironment() {
    this._environment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }

  // partition_metrics - computed: false, optional: true, required: false
  private _partitionMetrics = new SystemTelemetryLogPartitionMetricsOutputReference(this, "partition_metrics");
  public get partitionMetrics() {
    return this._partitionMetrics;
  }
  public putPartitionMetrics(value: SystemTelemetryLogPartitionMetrics) {
    this._partitionMetrics.internalValue = value;
  }
  public resetPartitionMetrics() {
    this._partitionMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionMetricsInput() {
    return this._partitionMetrics.internalValue;
  }

  // top_k_app_svc_list - computed: false, optional: true, required: false
  private _topKAppSvcList = new SystemTelemetryLogTopKAppSvcListStructOutputReference(this, "top_k_app_svc_list");
  public get topKAppSvcList() {
    return this._topKAppSvcList;
  }
  public putTopKAppSvcList(value: SystemTelemetryLogTopKAppSvcListStruct) {
    this._topKAppSvcList.internalValue = value;
  }
  public resetTopKAppSvcList() {
    this._topKAppSvcList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topKAppSvcListInput() {
    return this._topKAppSvcList.internalValue;
  }

  // top_k_source_list - computed: false, optional: true, required: false
  private _topKSourceList = new SystemTelemetryLogTopKSourceListStructOutputReference(this, "top_k_source_list");
  public get topKSourceList() {
    return this._topKSourceList;
  }
  public putTopKSourceList(value: SystemTelemetryLogTopKSourceListStruct) {
    this._topKSourceList.internalValue = value;
  }
  public resetTopKSourceList() {
    this._topKSourceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topKSourceListInput() {
    return this._topKSourceList.internalValue;
  }
}
export interface SystemTemplate {
  /**
  * Apply policy template to the whole system (Policy template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#template_policy System#template_policy}
  */
  readonly templatePolicy?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemTemplateToTerraform(struct?: SystemTemplateOutputReference | SystemTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template_policy: cdktf.stringToTerraform(struct!.templatePolicy),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemTemplateToHclTerraform(struct?: SystemTemplateOutputReference | SystemTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template_policy: {
      value: cdktf.stringToHclTerraform(struct!.templatePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._templatePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.templatePolicy = this._templatePolicy;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._templatePolicy = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._templatePolicy = value.templatePolicy;
      this._uuid = value.uuid;
    }
  }

  // template_policy - computed: false, optional: true, required: false
  private _templatePolicy?: string; 
  public get templatePolicy() {
    return this.getStringAttribute('template_policy');
  }
  public set templatePolicy(value: string) {
    this._templatePolicy = value;
  }
  public resetTemplatePolicy() {
    this._templatePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatePolicyInput() {
    return this._templatePolicy;
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
}
export interface SystemTemplateBindMonitorListStruct {
  /**
  * Monitor template ID Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#template_monitor System#template_monitor}
  */
  readonly templateMonitor: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemTemplateBindMonitorListStructToTerraform(struct?: SystemTemplateBindMonitorListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template_monitor: cdktf.numberToTerraform(struct!.templateMonitor),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemTemplateBindMonitorListStructToHclTerraform(struct?: SystemTemplateBindMonitorListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template_monitor: {
      value: cdktf.numberToHclTerraform(struct!.templateMonitor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemTemplateBindMonitorListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemTemplateBindMonitorListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._templateMonitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateMonitor = this._templateMonitor;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTemplateBindMonitorListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._templateMonitor = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._templateMonitor = value.templateMonitor;
      this._uuid = value.uuid;
    }
  }

  // template_monitor - computed: false, optional: false, required: true
  private _templateMonitor?: number; 
  public get templateMonitor() {
    return this.getNumberAttribute('template_monitor');
  }
  public set templateMonitor(value: number) {
    this._templateMonitor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateMonitorInput() {
    return this._templateMonitor;
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
}

export class SystemTemplateBindMonitorListStructList extends cdktf.ComplexList {
  public internalValue? : SystemTemplateBindMonitorListStruct[] | cdktf.IResolvable

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
  public get(index: number): SystemTemplateBindMonitorListStructOutputReference {
    return new SystemTemplateBindMonitorListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemTemplateBind {
  /**
  * monitor_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#monitor_list System#monitor_list}
  */
  readonly monitorList?: SystemTemplateBindMonitorListStruct[] | cdktf.IResolvable;
}

export function systemTemplateBindToTerraform(struct?: SystemTemplateBindOutputReference | SystemTemplateBind): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    monitor_list: cdktf.listMapper(systemTemplateBindMonitorListStructToTerraform, true)(struct!.monitorList),
  }
}


export function systemTemplateBindToHclTerraform(struct?: SystemTemplateBindOutputReference | SystemTemplateBind): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    monitor_list: {
      value: cdktf.listMapperHcl(systemTemplateBindMonitorListStructToHclTerraform, true)(struct!.monitorList),
      isBlock: true,
      type: "list",
      storageClassType: "SystemTemplateBindMonitorListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemTemplateBindOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemTemplateBind | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._monitorList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorList = this._monitorList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTemplateBind | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._monitorList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._monitorList.internalValue = value.monitorList;
    }
  }

  // monitor_list - computed: false, optional: true, required: false
  private _monitorList = new SystemTemplateBindMonitorListStructList(this, "monitor_list", false);
  public get monitorList() {
    return this._monitorList;
  }
  public putMonitorList(value: SystemTemplateBindMonitorListStruct[] | cdktf.IResolvable) {
    this._monitorList.internalValue = value;
  }
  public resetMonitorList() {
    this._monitorList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorListInput() {
    return this._monitorList.internalValue;
  }
}
export interface SystemThroughputSamplingEnable {
  /**
  * 'all': all; 'global-system-throughput-bits-per-sec': Global System throughput in bits/sec; 'per-part-throughput-bits-per-sec': Partition throughput in bits/sec;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#counters1 System#counters1}
  */
  readonly counters1?: string;
}

export function systemThroughputSamplingEnableToTerraform(struct?: SystemThroughputSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function systemThroughputSamplingEnableToHclTerraform(struct?: SystemThroughputSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemThroughputSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemThroughputSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemThroughputSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class SystemThroughputSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SystemThroughputSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SystemThroughputSamplingEnableOutputReference {
    return new SystemThroughputSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemThroughput {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#sampling_enable System#sampling_enable}
  */
  readonly samplingEnable?: SystemThroughputSamplingEnable[] | cdktf.IResolvable;
}

export function systemThroughputToTerraform(struct?: SystemThroughputOutputReference | SystemThroughput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(systemThroughputSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function systemThroughputToHclTerraform(struct?: SystemThroughputOutputReference | SystemThroughput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(systemThroughputSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "SystemThroughputSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemThroughputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemThroughput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemThroughput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SystemThroughputSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SystemThroughputSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface SystemTimeoutValue {
  /**
  * set timeout to stop ftp transfer in seconds, 0 is no limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#ftp System#ftp}
  */
  readonly ftp?: number;
  /**
  * set timeout to stop http transfer in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#http System#http}
  */
  readonly http?: number;
  /**
  * set timeout to stop https transfer in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#https System#https}
  */
  readonly https?: number;
  /**
  * set timeout to stop scp transfer in seconds, 0 is no limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#scp System#scp}
  */
  readonly scp?: number;
  /**
  * set timeout to stop sftp transfer in seconds, 0 is no limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#sftp System#sftp}
  */
  readonly sftp?: number;
  /**
  * set timeout to stop tftp transfer in seconds, 0 is no limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#tftp System#tftp}
  */
  readonly tftp?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemTimeoutValueToTerraform(struct?: SystemTimeoutValueOutputReference | SystemTimeoutValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ftp: cdktf.numberToTerraform(struct!.ftp),
    http: cdktf.numberToTerraform(struct!.http),
    https: cdktf.numberToTerraform(struct!.https),
    scp: cdktf.numberToTerraform(struct!.scp),
    sftp: cdktf.numberToTerraform(struct!.sftp),
    tftp: cdktf.numberToTerraform(struct!.tftp),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemTimeoutValueToHclTerraform(struct?: SystemTimeoutValueOutputReference | SystemTimeoutValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ftp: {
      value: cdktf.numberToHclTerraform(struct!.ftp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http: {
      value: cdktf.numberToHclTerraform(struct!.http),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    https: {
      value: cdktf.numberToHclTerraform(struct!.https),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scp: {
      value: cdktf.numberToHclTerraform(struct!.scp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sftp: {
      value: cdktf.numberToHclTerraform(struct!.sftp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tftp: {
      value: cdktf.numberToHclTerraform(struct!.tftp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemTimeoutValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemTimeoutValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ftp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ftp = this._ftp;
    }
    if (this._http !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http;
    }
    if (this._https !== undefined) {
      hasAnyValues = true;
      internalValueResult.https = this._https;
    }
    if (this._scp !== undefined) {
      hasAnyValues = true;
      internalValueResult.scp = this._scp;
    }
    if (this._sftp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sftp = this._sftp;
    }
    if (this._tftp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tftp = this._tftp;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTimeoutValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ftp = undefined;
      this._http = undefined;
      this._https = undefined;
      this._scp = undefined;
      this._sftp = undefined;
      this._tftp = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ftp = value.ftp;
      this._http = value.http;
      this._https = value.https;
      this._scp = value.scp;
      this._sftp = value.sftp;
      this._tftp = value.tftp;
      this._uuid = value.uuid;
    }
  }

  // ftp - computed: false, optional: true, required: false
  private _ftp?: number; 
  public get ftp() {
    return this.getNumberAttribute('ftp');
  }
  public set ftp(value: number) {
    this._ftp = value;
  }
  public resetFtp() {
    this._ftp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpInput() {
    return this._ftp;
  }

  // http - computed: false, optional: true, required: false
  private _http?: number; 
  public get http() {
    return this.getNumberAttribute('http');
  }
  public set http(value: number) {
    this._http = value;
  }
  public resetHttp() {
    this._http = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http;
  }

  // https - computed: false, optional: true, required: false
  private _https?: number; 
  public get https() {
    return this.getNumberAttribute('https');
  }
  public set https(value: number) {
    this._https = value;
  }
  public resetHttps() {
    this._https = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsInput() {
    return this._https;
  }

  // scp - computed: false, optional: true, required: false
  private _scp?: number; 
  public get scp() {
    return this.getNumberAttribute('scp');
  }
  public set scp(value: number) {
    this._scp = value;
  }
  public resetScp() {
    this._scp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scpInput() {
    return this._scp;
  }

  // sftp - computed: false, optional: true, required: false
  private _sftp?: number; 
  public get sftp() {
    return this.getNumberAttribute('sftp');
  }
  public set sftp(value: number) {
    this._sftp = value;
  }
  public resetSftp() {
    this._sftp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sftpInput() {
    return this._sftp;
  }

  // tftp - computed: false, optional: true, required: false
  private _tftp?: number; 
  public get tftp() {
    return this.getNumberAttribute('tftp');
  }
  public set tftp(value: number) {
    this._tftp = value;
  }
  public resetTftp() {
    this._tftp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tftpInput() {
    return this._tftp;
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
}
export interface SystemTrunkLoadBalance {
  /**
  * Layer-3 Header based load balancing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#use_l3 System#use_l3}
  */
  readonly useL3?: number;
  /**
  * Layer-3/4 Header based load balancing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#use_l4 System#use_l4}
  */
  readonly useL4?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemTrunkLoadBalanceToTerraform(struct?: SystemTrunkLoadBalanceOutputReference | SystemTrunkLoadBalance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    use_l3: cdktf.numberToTerraform(struct!.useL3),
    use_l4: cdktf.numberToTerraform(struct!.useL4),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemTrunkLoadBalanceToHclTerraform(struct?: SystemTrunkLoadBalanceOutputReference | SystemTrunkLoadBalance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    use_l3: {
      value: cdktf.numberToHclTerraform(struct!.useL3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_l4: {
      value: cdktf.numberToHclTerraform(struct!.useL4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemTrunkLoadBalanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemTrunkLoadBalance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._useL3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.useL3 = this._useL3;
    }
    if (this._useL4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.useL4 = this._useL4;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTrunkLoadBalance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._useL3 = undefined;
      this._useL4 = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._useL3 = value.useL3;
      this._useL4 = value.useL4;
      this._uuid = value.uuid;
    }
  }

  // use_l3 - computed: false, optional: true, required: false
  private _useL3?: number; 
  public get useL3() {
    return this.getNumberAttribute('use_l3');
  }
  public set useL3(value: number) {
    this._useL3 = value;
  }
  public resetUseL3() {
    this._useL3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useL3Input() {
    return this._useL3;
  }

  // use_l4 - computed: false, optional: true, required: false
  private _useL4?: number; 
  public get useL4() {
    return this.getNumberAttribute('use_l4');
  }
  public set useL4(value: number) {
    this._useL4 = value;
  }
  public resetUseL4() {
    this._useL4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useL4Input() {
    return this._useL4;
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
}
export interface SystemTrunk {
  /**
  * load_balance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#load_balance System#load_balance}
  */
  readonly loadBalance?: SystemTrunkLoadBalance;
}

export function systemTrunkToTerraform(struct?: SystemTrunkOutputReference | SystemTrunk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    load_balance: systemTrunkLoadBalanceToTerraform(struct!.loadBalance),
  }
}


export function systemTrunkToHclTerraform(struct?: SystemTrunkOutputReference | SystemTrunk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    load_balance: {
      value: systemTrunkLoadBalanceToHclTerraform(struct!.loadBalance),
      isBlock: true,
      type: "list",
      storageClassType: "SystemTrunkLoadBalanceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemTrunkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemTrunk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loadBalance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalance = this._loadBalance?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTrunk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._loadBalance.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._loadBalance.internalValue = value.loadBalance;
    }
  }

  // load_balance - computed: false, optional: true, required: false
  private _loadBalance = new SystemTrunkLoadBalanceOutputReference(this, "load_balance");
  public get loadBalance() {
    return this._loadBalance;
  }
  public putLoadBalance(value: SystemTrunkLoadBalance) {
    this._loadBalance.internalValue = value;
  }
  public resetLoadBalance() {
    this._loadBalance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalanceInput() {
    return this._loadBalance.internalValue;
  }
}
export interface SystemTrunkHwHash {
  /**
  * Set HW hash mode, default is 6 (1:dst-mac 2:src-mac 3:src-dst-mac 4:src-ip 5:dst-ip 6:rtag6 7:rtag7)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#mode System#mode}
  */
  readonly mode?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemTrunkHwHashToTerraform(struct?: SystemTrunkHwHashOutputReference | SystemTrunkHwHash): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.numberToTerraform(struct!.mode),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemTrunkHwHashToHclTerraform(struct?: SystemTrunkHwHashOutputReference | SystemTrunkHwHash): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemTrunkHwHashOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemTrunkHwHash | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTrunkHwHash | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._uuid = value.uuid;
    }
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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
}
export interface SystemTrunkXauiHwHash {
  /**
  * Set HW hash mode, default is 6 (1:dst-mac 2:src-mac 3:src-dst-mac 4:src-ip 5:dst-ip 6:rtag6 7:rtag7)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#mode System#mode}
  */
  readonly mode?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemTrunkXauiHwHashToTerraform(struct?: SystemTrunkXauiHwHashOutputReference | SystemTrunkXauiHwHash): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.numberToTerraform(struct!.mode),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemTrunkXauiHwHashToHclTerraform(struct?: SystemTrunkXauiHwHashOutputReference | SystemTrunkXauiHwHash): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemTrunkXauiHwHashOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemTrunkXauiHwHash | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTrunkXauiHwHash | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._uuid = value.uuid;
    }
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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
}
export interface SystemTso {
  /**
  * Disable TCP Segmentation Offload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#disable System#disable}
  */
  readonly disable?: number;
  /**
  * Enable TCP Segmentation Offload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#enable System#enable}
  */
  readonly enable?: number;
}

export function systemTsoToTerraform(struct?: SystemTsoOutputReference | SystemTso): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.numberToTerraform(struct!.disable),
    enable: cdktf.numberToTerraform(struct!.enable),
  }
}


export function systemTsoToHclTerraform(struct?: SystemTsoOutputReference | SystemTso): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.numberToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable: {
      value: cdktf.numberToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemTsoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemTso | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTso | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disable = undefined;
      this._enable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disable = value.disable;
      this._enable = value.enable;
    }
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }
}
export interface SystemUdp {
  /**
  * When enabled, the system does not modify the L4 checksum if the original passthrough packet was received with UDP checksum valu
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#skip_checksum_when_zero System#skip_checksum_when_zero}
  */
  readonly skipChecksumWhenZero?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemUdpToTerraform(struct?: SystemUdpOutputReference | SystemUdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    skip_checksum_when_zero: cdktf.numberToTerraform(struct!.skipChecksumWhenZero),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemUdpToHclTerraform(struct?: SystemUdpOutputReference | SystemUdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    skip_checksum_when_zero: {
      value: cdktf.numberToHclTerraform(struct!.skipChecksumWhenZero),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemUdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemUdp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._skipChecksumWhenZero !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipChecksumWhenZero = this._skipChecksumWhenZero;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemUdp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._skipChecksumWhenZero = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._skipChecksumWhenZero = value.skipChecksumWhenZero;
      this._uuid = value.uuid;
    }
  }

  // skip_checksum_when_zero - computed: false, optional: true, required: false
  private _skipChecksumWhenZero?: number; 
  public get skipChecksumWhenZero() {
    return this.getNumberAttribute('skip_checksum_when_zero');
  }
  public set skipChecksumWhenZero(value: number) {
    this._skipChecksumWhenZero = value;
  }
  public resetSkipChecksumWhenZero() {
    this._skipChecksumWhenZero = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipChecksumWhenZeroInput() {
    return this._skipChecksumWhenZero;
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
}
export interface SystemUpgradeStatus {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemUpgradeStatusToTerraform(struct?: SystemUpgradeStatusOutputReference | SystemUpgradeStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemUpgradeStatusToHclTerraform(struct?: SystemUpgradeStatusOutputReference | SystemUpgradeStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemUpgradeStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemUpgradeStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemUpgradeStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
}
export interface SystemVeMacScheme {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * 'hash-based': Hash-based using the VE number; 'round-robin': Round Robin scheme; 'system-mac': Use system MAC address;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#ve_mac_scheme_val System#ve_mac_scheme_val}
  */
  readonly veMacSchemeVal?: string;
}

export function systemVeMacSchemeToTerraform(struct?: SystemVeMacSchemeOutputReference | SystemVeMacScheme): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    ve_mac_scheme_val: cdktf.stringToTerraform(struct!.veMacSchemeVal),
  }
}


export function systemVeMacSchemeToHclTerraform(struct?: SystemVeMacSchemeOutputReference | SystemVeMacScheme): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ve_mac_scheme_val: {
      value: cdktf.stringToHclTerraform(struct!.veMacSchemeVal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemVeMacSchemeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemVeMacScheme | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._veMacSchemeVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.veMacSchemeVal = this._veMacSchemeVal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemVeMacScheme | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._veMacSchemeVal = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._veMacSchemeVal = value.veMacSchemeVal;
    }
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

  // ve_mac_scheme_val - computed: false, optional: true, required: false
  private _veMacSchemeVal?: string; 
  public get veMacSchemeVal() {
    return this.getStringAttribute('ve_mac_scheme_val');
  }
  public set veMacSchemeVal(value: string) {
    this._veMacSchemeVal = value;
  }
  public resetVeMacSchemeVal() {
    this._veMacSchemeVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veMacSchemeValInput() {
    return this._veMacSchemeVal;
  }
}
export interface SystemXauiDlbMode {
  /**
  * Enable/Disable Dynamic Load Balancing traffic distribution support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#enable System#enable}
  */
  readonly enable?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemXauiDlbModeToTerraform(struct?: SystemXauiDlbModeOutputReference | SystemXauiDlbMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.numberToTerraform(struct!.enable),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemXauiDlbModeToHclTerraform(struct?: SystemXauiDlbModeOutputReference | SystemXauiDlbMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.numberToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemXauiDlbModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemXauiDlbMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemXauiDlbMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._uuid = value.uuid;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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
}
