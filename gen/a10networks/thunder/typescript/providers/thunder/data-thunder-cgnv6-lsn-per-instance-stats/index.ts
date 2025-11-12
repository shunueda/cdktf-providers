// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_per_instance_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6LsnPerInstanceStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_per_instance_stats#id DataThunderCgnv6LsnPerInstanceStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_per_instance_stats#stats DataThunderCgnv6LsnPerInstanceStats#stats}
  */
  readonly stats?: DataThunderCgnv6LsnPerInstanceStatsStats;
}
export interface DataThunderCgnv6LsnPerInstanceStatsStats {
  /**
  * Data Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_per_instance_stats#data_session_created DataThunderCgnv6LsnPerInstanceStats#data_session_created}
  */
  readonly dataSessionCreated?: number;
  /**
  * Data Session Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_per_instance_stats#data_session_freed DataThunderCgnv6LsnPerInstanceStats#data_session_freed}
  */
  readonly dataSessionFreed?: number;
  /**
  * ICMP Ports Allocated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_per_instance_stats#icmp_allocated DataThunderCgnv6LsnPerInstanceStats#icmp_allocated}
  */
  readonly icmpAllocated?: number;
  /**
  * ICMP Ports Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_per_instance_stats#icmp_freed DataThunderCgnv6LsnPerInstanceStats#icmp_freed}
  */
  readonly icmpFreed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_per_instance_stats#key_name DataThunderCgnv6LsnPerInstanceStats#key_name}
  */
  readonly keyName?: string;
  /**
  * TCP Ports Allocated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_per_instance_stats#tcp_allocated DataThunderCgnv6LsnPerInstanceStats#tcp_allocated}
  */
  readonly tcpAllocated?: number;
  /**
  * TCP Ports Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_per_instance_stats#tcp_freed DataThunderCgnv6LsnPerInstanceStats#tcp_freed}
  */
  readonly tcpFreed?: number;
  /**
  * TCP Full-cone Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_per_instance_stats#tcp_fullcone_created DataThunderCgnv6LsnPerInstanceStats#tcp_fullcone_created}
  */
  readonly tcpFullconeCreated?: number;
  /**
  * TCP Full-cone Session Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_per_instance_stats#tcp_fullcone_freed DataThunderCgnv6LsnPerInstanceStats#tcp_fullcone_freed}
  */
  readonly tcpFullconeFreed?: number;
  /**
  * UDP Ports Allocated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_per_instance_stats#udp_allocated DataThunderCgnv6LsnPerInstanceStats#udp_allocated}
  */
  readonly udpAllocated?: number;
  /**
  * UDP Ports Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_per_instance_stats#udp_freed DataThunderCgnv6LsnPerInstanceStats#udp_freed}
  */
  readonly udpFreed?: number;
  /**
  * UDP Full-cone Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_per_instance_stats#udp_fullcone_created DataThunderCgnv6LsnPerInstanceStats#udp_fullcone_created}
  */
  readonly udpFullconeCreated?: number;
  /**
  * UDP Full-cone Session Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_per_instance_stats#udp_fullcone_freed DataThunderCgnv6LsnPerInstanceStats#udp_fullcone_freed}
  */
  readonly udpFullconeFreed?: number;
  /**
  * User-Quota Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_per_instance_stats#user_quota_created DataThunderCgnv6LsnPerInstanceStats#user_quota_created}
  */
  readonly userQuotaCreated?: number;
  /**
  * User-Quota Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_per_instance_stats#user_quota_put_in_del_q DataThunderCgnv6LsnPerInstanceStats#user_quota_put_in_del_q}
  */
  readonly userQuotaPutInDelQ?: number;
}

export function dataThunderCgnv6LsnPerInstanceStatsStatsToTerraform(struct?: DataThunderCgnv6LsnPerInstanceStatsStatsOutputReference | DataThunderCgnv6LsnPerInstanceStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_session_created: cdktf.numberToTerraform(struct!.dataSessionCreated),
    data_session_freed: cdktf.numberToTerraform(struct!.dataSessionFreed),
    icmp_allocated: cdktf.numberToTerraform(struct!.icmpAllocated),
    icmp_freed: cdktf.numberToTerraform(struct!.icmpFreed),
    key_name: cdktf.stringToTerraform(struct!.keyName),
    tcp_allocated: cdktf.numberToTerraform(struct!.tcpAllocated),
    tcp_freed: cdktf.numberToTerraform(struct!.tcpFreed),
    tcp_fullcone_created: cdktf.numberToTerraform(struct!.tcpFullconeCreated),
    tcp_fullcone_freed: cdktf.numberToTerraform(struct!.tcpFullconeFreed),
    udp_allocated: cdktf.numberToTerraform(struct!.udpAllocated),
    udp_freed: cdktf.numberToTerraform(struct!.udpFreed),
    udp_fullcone_created: cdktf.numberToTerraform(struct!.udpFullconeCreated),
    udp_fullcone_freed: cdktf.numberToTerraform(struct!.udpFullconeFreed),
    user_quota_created: cdktf.numberToTerraform(struct!.userQuotaCreated),
    user_quota_put_in_del_q: cdktf.numberToTerraform(struct!.userQuotaPutInDelQ),
  }
}


export function dataThunderCgnv6LsnPerInstanceStatsStatsToHclTerraform(struct?: DataThunderCgnv6LsnPerInstanceStatsStatsOutputReference | DataThunderCgnv6LsnPerInstanceStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_session_created: {
      value: cdktf.numberToHclTerraform(struct!.dataSessionCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_session_freed: {
      value: cdktf.numberToHclTerraform(struct!.dataSessionFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_allocated: {
      value: cdktf.numberToHclTerraform(struct!.icmpAllocated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_freed: {
      value: cdktf.numberToHclTerraform(struct!.icmpFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key_name: {
      value: cdktf.stringToHclTerraform(struct!.keyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_allocated: {
      value: cdktf.numberToHclTerraform(struct!.tcpAllocated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_freed: {
      value: cdktf.numberToHclTerraform(struct!.tcpFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_fullcone_created: {
      value: cdktf.numberToHclTerraform(struct!.tcpFullconeCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_fullcone_freed: {
      value: cdktf.numberToHclTerraform(struct!.tcpFullconeFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_allocated: {
      value: cdktf.numberToHclTerraform(struct!.udpAllocated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_freed: {
      value: cdktf.numberToHclTerraform(struct!.udpFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_fullcone_created: {
      value: cdktf.numberToHclTerraform(struct!.udpFullconeCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_fullcone_freed: {
      value: cdktf.numberToHclTerraform(struct!.udpFullconeFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_quota_created: {
      value: cdktf.numberToHclTerraform(struct!.userQuotaCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_quota_put_in_del_q: {
      value: cdktf.numberToHclTerraform(struct!.userQuotaPutInDelQ),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6LsnPerInstanceStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6LsnPerInstanceStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSessionCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSessionCreated = this._dataSessionCreated;
    }
    if (this._dataSessionFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSessionFreed = this._dataSessionFreed;
    }
    if (this._icmpAllocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpAllocated = this._icmpAllocated;
    }
    if (this._icmpFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpFreed = this._icmpFreed;
    }
    if (this._keyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._tcpAllocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpAllocated = this._tcpAllocated;
    }
    if (this._tcpFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFreed = this._tcpFreed;
    }
    if (this._tcpFullconeCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFullconeCreated = this._tcpFullconeCreated;
    }
    if (this._tcpFullconeFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFullconeFreed = this._tcpFullconeFreed;
    }
    if (this._udpAllocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpAllocated = this._udpAllocated;
    }
    if (this._udpFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpFreed = this._udpFreed;
    }
    if (this._udpFullconeCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpFullconeCreated = this._udpFullconeCreated;
    }
    if (this._udpFullconeFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpFullconeFreed = this._udpFullconeFreed;
    }
    if (this._userQuotaCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.userQuotaCreated = this._userQuotaCreated;
    }
    if (this._userQuotaPutInDelQ !== undefined) {
      hasAnyValues = true;
      internalValueResult.userQuotaPutInDelQ = this._userQuotaPutInDelQ;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6LsnPerInstanceStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSessionCreated = undefined;
      this._dataSessionFreed = undefined;
      this._icmpAllocated = undefined;
      this._icmpFreed = undefined;
      this._keyName = undefined;
      this._tcpAllocated = undefined;
      this._tcpFreed = undefined;
      this._tcpFullconeCreated = undefined;
      this._tcpFullconeFreed = undefined;
      this._udpAllocated = undefined;
      this._udpFreed = undefined;
      this._udpFullconeCreated = undefined;
      this._udpFullconeFreed = undefined;
      this._userQuotaCreated = undefined;
      this._userQuotaPutInDelQ = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataSessionCreated = value.dataSessionCreated;
      this._dataSessionFreed = value.dataSessionFreed;
      this._icmpAllocated = value.icmpAllocated;
      this._icmpFreed = value.icmpFreed;
      this._keyName = value.keyName;
      this._tcpAllocated = value.tcpAllocated;
      this._tcpFreed = value.tcpFreed;
      this._tcpFullconeCreated = value.tcpFullconeCreated;
      this._tcpFullconeFreed = value.tcpFullconeFreed;
      this._udpAllocated = value.udpAllocated;
      this._udpFreed = value.udpFreed;
      this._udpFullconeCreated = value.udpFullconeCreated;
      this._udpFullconeFreed = value.udpFullconeFreed;
      this._userQuotaCreated = value.userQuotaCreated;
      this._userQuotaPutInDelQ = value.userQuotaPutInDelQ;
    }
  }

  // data_session_created - computed: false, optional: true, required: false
  private _dataSessionCreated?: number; 
  public get dataSessionCreated() {
    return this.getNumberAttribute('data_session_created');
  }
  public set dataSessionCreated(value: number) {
    this._dataSessionCreated = value;
  }
  public resetDataSessionCreated() {
    this._dataSessionCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSessionCreatedInput() {
    return this._dataSessionCreated;
  }

  // data_session_freed - computed: false, optional: true, required: false
  private _dataSessionFreed?: number; 
  public get dataSessionFreed() {
    return this.getNumberAttribute('data_session_freed');
  }
  public set dataSessionFreed(value: number) {
    this._dataSessionFreed = value;
  }
  public resetDataSessionFreed() {
    this._dataSessionFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSessionFreedInput() {
    return this._dataSessionFreed;
  }

  // icmp_allocated - computed: false, optional: true, required: false
  private _icmpAllocated?: number; 
  public get icmpAllocated() {
    return this.getNumberAttribute('icmp_allocated');
  }
  public set icmpAllocated(value: number) {
    this._icmpAllocated = value;
  }
  public resetIcmpAllocated() {
    this._icmpAllocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpAllocatedInput() {
    return this._icmpAllocated;
  }

  // icmp_freed - computed: false, optional: true, required: false
  private _icmpFreed?: number; 
  public get icmpFreed() {
    return this.getNumberAttribute('icmp_freed');
  }
  public set icmpFreed(value: number) {
    this._icmpFreed = value;
  }
  public resetIcmpFreed() {
    this._icmpFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpFreedInput() {
    return this._icmpFreed;
  }

  // key_name - computed: false, optional: true, required: false
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  public resetKeyName() {
    this._keyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // tcp_allocated - computed: false, optional: true, required: false
  private _tcpAllocated?: number; 
  public get tcpAllocated() {
    return this.getNumberAttribute('tcp_allocated');
  }
  public set tcpAllocated(value: number) {
    this._tcpAllocated = value;
  }
  public resetTcpAllocated() {
    this._tcpAllocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpAllocatedInput() {
    return this._tcpAllocated;
  }

  // tcp_freed - computed: false, optional: true, required: false
  private _tcpFreed?: number; 
  public get tcpFreed() {
    return this.getNumberAttribute('tcp_freed');
  }
  public set tcpFreed(value: number) {
    this._tcpFreed = value;
  }
  public resetTcpFreed() {
    this._tcpFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFreedInput() {
    return this._tcpFreed;
  }

  // tcp_fullcone_created - computed: false, optional: true, required: false
  private _tcpFullconeCreated?: number; 
  public get tcpFullconeCreated() {
    return this.getNumberAttribute('tcp_fullcone_created');
  }
  public set tcpFullconeCreated(value: number) {
    this._tcpFullconeCreated = value;
  }
  public resetTcpFullconeCreated() {
    this._tcpFullconeCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFullconeCreatedInput() {
    return this._tcpFullconeCreated;
  }

  // tcp_fullcone_freed - computed: false, optional: true, required: false
  private _tcpFullconeFreed?: number; 
  public get tcpFullconeFreed() {
    return this.getNumberAttribute('tcp_fullcone_freed');
  }
  public set tcpFullconeFreed(value: number) {
    this._tcpFullconeFreed = value;
  }
  public resetTcpFullconeFreed() {
    this._tcpFullconeFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFullconeFreedInput() {
    return this._tcpFullconeFreed;
  }

  // udp_allocated - computed: false, optional: true, required: false
  private _udpAllocated?: number; 
  public get udpAllocated() {
    return this.getNumberAttribute('udp_allocated');
  }
  public set udpAllocated(value: number) {
    this._udpAllocated = value;
  }
  public resetUdpAllocated() {
    this._udpAllocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpAllocatedInput() {
    return this._udpAllocated;
  }

  // udp_freed - computed: false, optional: true, required: false
  private _udpFreed?: number; 
  public get udpFreed() {
    return this.getNumberAttribute('udp_freed');
  }
  public set udpFreed(value: number) {
    this._udpFreed = value;
  }
  public resetUdpFreed() {
    this._udpFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpFreedInput() {
    return this._udpFreed;
  }

  // udp_fullcone_created - computed: false, optional: true, required: false
  private _udpFullconeCreated?: number; 
  public get udpFullconeCreated() {
    return this.getNumberAttribute('udp_fullcone_created');
  }
  public set udpFullconeCreated(value: number) {
    this._udpFullconeCreated = value;
  }
  public resetUdpFullconeCreated() {
    this._udpFullconeCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpFullconeCreatedInput() {
    return this._udpFullconeCreated;
  }

  // udp_fullcone_freed - computed: false, optional: true, required: false
  private _udpFullconeFreed?: number; 
  public get udpFullconeFreed() {
    return this.getNumberAttribute('udp_fullcone_freed');
  }
  public set udpFullconeFreed(value: number) {
    this._udpFullconeFreed = value;
  }
  public resetUdpFullconeFreed() {
    this._udpFullconeFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpFullconeFreedInput() {
    return this._udpFullconeFreed;
  }

  // user_quota_created - computed: false, optional: true, required: false
  private _userQuotaCreated?: number; 
  public get userQuotaCreated() {
    return this.getNumberAttribute('user_quota_created');
  }
  public set userQuotaCreated(value: number) {
    this._userQuotaCreated = value;
  }
  public resetUserQuotaCreated() {
    this._userQuotaCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userQuotaCreatedInput() {
    return this._userQuotaCreated;
  }

  // user_quota_put_in_del_q - computed: false, optional: true, required: false
  private _userQuotaPutInDelQ?: number; 
  public get userQuotaPutInDelQ() {
    return this.getNumberAttribute('user_quota_put_in_del_q');
  }
  public set userQuotaPutInDelQ(value: number) {
    this._userQuotaPutInDelQ = value;
  }
  public resetUserQuotaPutInDelQ() {
    this._userQuotaPutInDelQ = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userQuotaPutInDelQInput() {
    return this._userQuotaPutInDelQ;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_per_instance_stats thunder_cgnv6_lsn_per_instance_stats}
*/
export class DataThunderCgnv6LsnPerInstanceStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_lsn_per_instance_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6LsnPerInstanceStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6LsnPerInstanceStats to import
  * @param importFromId The id of the existing DataThunderCgnv6LsnPerInstanceStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_per_instance_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6LsnPerInstanceStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_lsn_per_instance_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_per_instance_stats thunder_cgnv6_lsn_per_instance_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6LsnPerInstanceStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6LsnPerInstanceStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_lsn_per_instance_stats',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
    this._stats.internalValue = config.stats;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderCgnv6LsnPerInstanceStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderCgnv6LsnPerInstanceStatsStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      stats: dataThunderCgnv6LsnPerInstanceStatsStatsToTerraform(this._stats.internalValue),
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
      stats: {
        value: dataThunderCgnv6LsnPerInstanceStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6LsnPerInstanceStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
