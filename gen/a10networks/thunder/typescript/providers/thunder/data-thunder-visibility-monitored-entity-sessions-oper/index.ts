// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_sessions_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVisibilityMonitoredEntitySessionsOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_sessions_oper#id DataThunderVisibilityMonitoredEntitySessionsOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_sessions_oper#oper DataThunderVisibilityMonitoredEntitySessionsOper#oper}
  */
  readonly oper?: DataThunderVisibilityMonitoredEntitySessionsOperOper;
}
export interface DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSecEntityListSessionListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_sessions_oper#fwd_dst_ip DataThunderVisibilityMonitoredEntitySessionsOper#fwd_dst_ip}
  */
  readonly fwdDstIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_sessions_oper#fwd_dst_port DataThunderVisibilityMonitoredEntitySessionsOper#fwd_dst_port}
  */
  readonly fwdDstPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_sessions_oper#fwd_src_ip DataThunderVisibilityMonitoredEntitySessionsOper#fwd_src_ip}
  */
  readonly fwdSrcIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_sessions_oper#fwd_src_port DataThunderVisibilityMonitoredEntitySessionsOper#fwd_src_port}
  */
  readonly fwdSrcPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_sessions_oper#proto DataThunderVisibilityMonitoredEntitySessionsOper#proto}
  */
  readonly proto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_sessions_oper#rev_dst_ip DataThunderVisibilityMonitoredEntitySessionsOper#rev_dst_ip}
  */
  readonly revDstIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_sessions_oper#rev_dst_port DataThunderVisibilityMonitoredEntitySessionsOper#rev_dst_port}
  */
  readonly revDstPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_sessions_oper#rev_src_ip DataThunderVisibilityMonitoredEntitySessionsOper#rev_src_ip}
  */
  readonly revSrcIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_sessions_oper#rev_src_port DataThunderVisibilityMonitoredEntitySessionsOper#rev_src_port}
  */
  readonly revSrcPort?: number;
}

export function dataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSecEntityListSessionListStructToTerraform(struct?: DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSecEntityListSessionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fwd_dst_ip: cdktf.stringToTerraform(struct!.fwdDstIp),
    fwd_dst_port: cdktf.numberToTerraform(struct!.fwdDstPort),
    fwd_src_ip: cdktf.stringToTerraform(struct!.fwdSrcIp),
    fwd_src_port: cdktf.numberToTerraform(struct!.fwdSrcPort),
    proto: cdktf.stringToTerraform(struct!.proto),
    rev_dst_ip: cdktf.stringToTerraform(struct!.revDstIp),
    rev_dst_port: cdktf.numberToTerraform(struct!.revDstPort),
    rev_src_ip: cdktf.stringToTerraform(struct!.revSrcIp),
    rev_src_port: cdktf.numberToTerraform(struct!.revSrcPort),
  }
}


export function dataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSecEntityListSessionListStructToHclTerraform(struct?: DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSecEntityListSessionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fwd_dst_ip: {
      value: cdktf.stringToHclTerraform(struct!.fwdDstIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fwd_dst_port: {
      value: cdktf.numberToHclTerraform(struct!.fwdDstPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_src_ip: {
      value: cdktf.stringToHclTerraform(struct!.fwdSrcIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fwd_src_port: {
      value: cdktf.numberToHclTerraform(struct!.fwdSrcPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proto: {
      value: cdktf.stringToHclTerraform(struct!.proto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rev_dst_ip: {
      value: cdktf.stringToHclTerraform(struct!.revDstIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rev_dst_port: {
      value: cdktf.numberToHclTerraform(struct!.revDstPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rev_src_ip: {
      value: cdktf.stringToHclTerraform(struct!.revSrcIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rev_src_port: {
      value: cdktf.numberToHclTerraform(struct!.revSrcPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSecEntityListSessionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSecEntityListSessionListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fwdDstIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdDstIp = this._fwdDstIp;
    }
    if (this._fwdDstPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdDstPort = this._fwdDstPort;
    }
    if (this._fwdSrcIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdSrcIp = this._fwdSrcIp;
    }
    if (this._fwdSrcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdSrcPort = this._fwdSrcPort;
    }
    if (this._proto !== undefined) {
      hasAnyValues = true;
      internalValueResult.proto = this._proto;
    }
    if (this._revDstIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.revDstIp = this._revDstIp;
    }
    if (this._revDstPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.revDstPort = this._revDstPort;
    }
    if (this._revSrcIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.revSrcIp = this._revSrcIp;
    }
    if (this._revSrcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.revSrcPort = this._revSrcPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSecEntityListSessionListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fwdDstIp = undefined;
      this._fwdDstPort = undefined;
      this._fwdSrcIp = undefined;
      this._fwdSrcPort = undefined;
      this._proto = undefined;
      this._revDstIp = undefined;
      this._revDstPort = undefined;
      this._revSrcIp = undefined;
      this._revSrcPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fwdDstIp = value.fwdDstIp;
      this._fwdDstPort = value.fwdDstPort;
      this._fwdSrcIp = value.fwdSrcIp;
      this._fwdSrcPort = value.fwdSrcPort;
      this._proto = value.proto;
      this._revDstIp = value.revDstIp;
      this._revDstPort = value.revDstPort;
      this._revSrcIp = value.revSrcIp;
      this._revSrcPort = value.revSrcPort;
    }
  }

  // fwd_dst_ip - computed: false, optional: true, required: false
  private _fwdDstIp?: string; 
  public get fwdDstIp() {
    return this.getStringAttribute('fwd_dst_ip');
  }
  public set fwdDstIp(value: string) {
    this._fwdDstIp = value;
  }
  public resetFwdDstIp() {
    this._fwdDstIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdDstIpInput() {
    return this._fwdDstIp;
  }

  // fwd_dst_port - computed: false, optional: true, required: false
  private _fwdDstPort?: number; 
  public get fwdDstPort() {
    return this.getNumberAttribute('fwd_dst_port');
  }
  public set fwdDstPort(value: number) {
    this._fwdDstPort = value;
  }
  public resetFwdDstPort() {
    this._fwdDstPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdDstPortInput() {
    return this._fwdDstPort;
  }

  // fwd_src_ip - computed: false, optional: true, required: false
  private _fwdSrcIp?: string; 
  public get fwdSrcIp() {
    return this.getStringAttribute('fwd_src_ip');
  }
  public set fwdSrcIp(value: string) {
    this._fwdSrcIp = value;
  }
  public resetFwdSrcIp() {
    this._fwdSrcIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdSrcIpInput() {
    return this._fwdSrcIp;
  }

  // fwd_src_port - computed: false, optional: true, required: false
  private _fwdSrcPort?: number; 
  public get fwdSrcPort() {
    return this.getNumberAttribute('fwd_src_port');
  }
  public set fwdSrcPort(value: number) {
    this._fwdSrcPort = value;
  }
  public resetFwdSrcPort() {
    this._fwdSrcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdSrcPortInput() {
    return this._fwdSrcPort;
  }

  // proto - computed: false, optional: true, required: false
  private _proto?: string; 
  public get proto() {
    return this.getStringAttribute('proto');
  }
  public set proto(value: string) {
    this._proto = value;
  }
  public resetProto() {
    this._proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoInput() {
    return this._proto;
  }

  // rev_dst_ip - computed: false, optional: true, required: false
  private _revDstIp?: string; 
  public get revDstIp() {
    return this.getStringAttribute('rev_dst_ip');
  }
  public set revDstIp(value: string) {
    this._revDstIp = value;
  }
  public resetRevDstIp() {
    this._revDstIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revDstIpInput() {
    return this._revDstIp;
  }

  // rev_dst_port - computed: false, optional: true, required: false
  private _revDstPort?: number; 
  public get revDstPort() {
    return this.getNumberAttribute('rev_dst_port');
  }
  public set revDstPort(value: number) {
    this._revDstPort = value;
  }
  public resetRevDstPort() {
    this._revDstPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revDstPortInput() {
    return this._revDstPort;
  }

  // rev_src_ip - computed: false, optional: true, required: false
  private _revSrcIp?: string; 
  public get revSrcIp() {
    return this.getStringAttribute('rev_src_ip');
  }
  public set revSrcIp(value: string) {
    this._revSrcIp = value;
  }
  public resetRevSrcIp() {
    this._revSrcIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revSrcIpInput() {
    return this._revSrcIp;
  }

  // rev_src_port - computed: false, optional: true, required: false
  private _revSrcPort?: number; 
  public get revSrcPort() {
    return this.getNumberAttribute('rev_src_port');
  }
  public set revSrcPort(value: number) {
    this._revSrcPort = value;
  }
  public resetRevSrcPort() {
    this._revSrcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revSrcPortInput() {
    return this._revSrcPort;
  }
}

export class DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSecEntityListSessionListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSecEntityListSessionListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSecEntityListSessionListStructOutputReference {
    return new DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSecEntityListSessionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSecEntityListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_sessions_oper#entity_key DataThunderVisibilityMonitoredEntitySessionsOper#entity_key}
  */
  readonly entityKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_sessions_oper#ipv4_addr DataThunderVisibilityMonitoredEntitySessionsOper#ipv4_addr}
  */
  readonly ipv4Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_sessions_oper#ipv6_addr DataThunderVisibilityMonitoredEntitySessionsOper#ipv6_addr}
  */
  readonly ipv6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_sessions_oper#l4_port DataThunderVisibilityMonitoredEntitySessionsOper#l4_port}
  */
  readonly l4Port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_sessions_oper#l4_proto DataThunderVisibilityMonitoredEntitySessionsOper#l4_proto}
  */
  readonly l4Proto?: string;
  /**
  * session_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_sessions_oper#session_list DataThunderVisibilityMonitoredEntitySessionsOper#session_list}
  */
  readonly sessionList?: DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSecEntityListSessionListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSecEntityListStructToTerraform(struct?: DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSecEntityListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_key: cdktf.stringToTerraform(struct!.entityKey),
    ipv4_addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    ipv6_addr: cdktf.stringToTerraform(struct!.ipv6Addr),
    l4_port: cdktf.numberToTerraform(struct!.l4Port),
    l4_proto: cdktf.stringToTerraform(struct!.l4Proto),
    session_list: cdktf.listMapper(dataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSecEntityListSessionListStructToTerraform, true)(struct!.sessionList),
  }
}


export function dataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSecEntityListStructToHclTerraform(struct?: DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSecEntityListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_key: {
      value: cdktf.stringToHclTerraform(struct!.entityKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    l4_port: {
      value: cdktf.numberToHclTerraform(struct!.l4Port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_proto: {
      value: cdktf.stringToHclTerraform(struct!.l4Proto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSecEntityListSessionListStructToHclTerraform, true)(struct!.sessionList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSecEntityListSessionListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSecEntityListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSecEntityListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityKey = this._entityKey;
    }
    if (this._ipv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Addr = this._ipv4Addr;
    }
    if (this._ipv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addr = this._ipv6Addr;
    }
    if (this._l4Port !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4Port = this._l4Port;
    }
    if (this._l4Proto !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4Proto = this._l4Proto;
    }
    if (this._sessionList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionList = this._sessionList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSecEntityListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entityKey = undefined;
      this._ipv4Addr = undefined;
      this._ipv6Addr = undefined;
      this._l4Port = undefined;
      this._l4Proto = undefined;
      this._sessionList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entityKey = value.entityKey;
      this._ipv4Addr = value.ipv4Addr;
      this._ipv6Addr = value.ipv6Addr;
      this._l4Port = value.l4Port;
      this._l4Proto = value.l4Proto;
      this._sessionList.internalValue = value.sessionList;
    }
  }

  // entity_key - computed: false, optional: true, required: false
  private _entityKey?: string; 
  public get entityKey() {
    return this.getStringAttribute('entity_key');
  }
  public set entityKey(value: string) {
    this._entityKey = value;
  }
  public resetEntityKey() {
    this._entityKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityKeyInput() {
    return this._entityKey;
  }

  // ipv4_addr - computed: false, optional: true, required: false
  private _ipv4Addr?: string; 
  public get ipv4Addr() {
    return this.getStringAttribute('ipv4_addr');
  }
  public set ipv4Addr(value: string) {
    this._ipv4Addr = value;
  }
  public resetIpv4Addr() {
    this._ipv4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrInput() {
    return this._ipv4Addr;
  }

  // ipv6_addr - computed: false, optional: true, required: false
  private _ipv6Addr?: string; 
  public get ipv6Addr() {
    return this.getStringAttribute('ipv6_addr');
  }
  public set ipv6Addr(value: string) {
    this._ipv6Addr = value;
  }
  public resetIpv6Addr() {
    this._ipv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddrInput() {
    return this._ipv6Addr;
  }

  // l4_port - computed: false, optional: true, required: false
  private _l4Port?: number; 
  public get l4Port() {
    return this.getNumberAttribute('l4_port');
  }
  public set l4Port(value: number) {
    this._l4Port = value;
  }
  public resetL4Port() {
    this._l4Port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4PortInput() {
    return this._l4Port;
  }

  // l4_proto - computed: false, optional: true, required: false
  private _l4Proto?: string; 
  public get l4Proto() {
    return this.getStringAttribute('l4_proto');
  }
  public set l4Proto(value: string) {
    this._l4Proto = value;
  }
  public resetL4Proto() {
    this._l4Proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4ProtoInput() {
    return this._l4Proto;
  }

  // session_list - computed: false, optional: true, required: false
  private _sessionList = new DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSecEntityListSessionListStructList(this, "session_list", false);
  public get sessionList() {
    return this._sessionList;
  }
  public putSessionList(value: DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSecEntityListSessionListStruct[] | cdktf.IResolvable) {
    this._sessionList.internalValue = value;
  }
  public resetSessionList() {
    this._sessionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionListInput() {
    return this._sessionList.internalValue;
  }
}

export class DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSecEntityListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSecEntityListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSecEntityListStructOutputReference {
    return new DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSecEntityListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSessionListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_sessions_oper#fwd_dst_ip DataThunderVisibilityMonitoredEntitySessionsOper#fwd_dst_ip}
  */
  readonly fwdDstIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_sessions_oper#fwd_dst_port DataThunderVisibilityMonitoredEntitySessionsOper#fwd_dst_port}
  */
  readonly fwdDstPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_sessions_oper#fwd_src_ip DataThunderVisibilityMonitoredEntitySessionsOper#fwd_src_ip}
  */
  readonly fwdSrcIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_sessions_oper#fwd_src_port DataThunderVisibilityMonitoredEntitySessionsOper#fwd_src_port}
  */
  readonly fwdSrcPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_sessions_oper#proto DataThunderVisibilityMonitoredEntitySessionsOper#proto}
  */
  readonly proto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_sessions_oper#rev_dst_ip DataThunderVisibilityMonitoredEntitySessionsOper#rev_dst_ip}
  */
  readonly revDstIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_sessions_oper#rev_dst_port DataThunderVisibilityMonitoredEntitySessionsOper#rev_dst_port}
  */
  readonly revDstPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_sessions_oper#rev_src_ip DataThunderVisibilityMonitoredEntitySessionsOper#rev_src_ip}
  */
  readonly revSrcIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_sessions_oper#rev_src_port DataThunderVisibilityMonitoredEntitySessionsOper#rev_src_port}
  */
  readonly revSrcPort?: number;
}

export function dataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSessionListStructToTerraform(struct?: DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSessionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fwd_dst_ip: cdktf.stringToTerraform(struct!.fwdDstIp),
    fwd_dst_port: cdktf.numberToTerraform(struct!.fwdDstPort),
    fwd_src_ip: cdktf.stringToTerraform(struct!.fwdSrcIp),
    fwd_src_port: cdktf.numberToTerraform(struct!.fwdSrcPort),
    proto: cdktf.stringToTerraform(struct!.proto),
    rev_dst_ip: cdktf.stringToTerraform(struct!.revDstIp),
    rev_dst_port: cdktf.numberToTerraform(struct!.revDstPort),
    rev_src_ip: cdktf.stringToTerraform(struct!.revSrcIp),
    rev_src_port: cdktf.numberToTerraform(struct!.revSrcPort),
  }
}


export function dataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSessionListStructToHclTerraform(struct?: DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSessionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fwd_dst_ip: {
      value: cdktf.stringToHclTerraform(struct!.fwdDstIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fwd_dst_port: {
      value: cdktf.numberToHclTerraform(struct!.fwdDstPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_src_ip: {
      value: cdktf.stringToHclTerraform(struct!.fwdSrcIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fwd_src_port: {
      value: cdktf.numberToHclTerraform(struct!.fwdSrcPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proto: {
      value: cdktf.stringToHclTerraform(struct!.proto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rev_dst_ip: {
      value: cdktf.stringToHclTerraform(struct!.revDstIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rev_dst_port: {
      value: cdktf.numberToHclTerraform(struct!.revDstPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rev_src_ip: {
      value: cdktf.stringToHclTerraform(struct!.revSrcIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rev_src_port: {
      value: cdktf.numberToHclTerraform(struct!.revSrcPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSessionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSessionListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fwdDstIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdDstIp = this._fwdDstIp;
    }
    if (this._fwdDstPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdDstPort = this._fwdDstPort;
    }
    if (this._fwdSrcIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdSrcIp = this._fwdSrcIp;
    }
    if (this._fwdSrcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdSrcPort = this._fwdSrcPort;
    }
    if (this._proto !== undefined) {
      hasAnyValues = true;
      internalValueResult.proto = this._proto;
    }
    if (this._revDstIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.revDstIp = this._revDstIp;
    }
    if (this._revDstPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.revDstPort = this._revDstPort;
    }
    if (this._revSrcIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.revSrcIp = this._revSrcIp;
    }
    if (this._revSrcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.revSrcPort = this._revSrcPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSessionListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fwdDstIp = undefined;
      this._fwdDstPort = undefined;
      this._fwdSrcIp = undefined;
      this._fwdSrcPort = undefined;
      this._proto = undefined;
      this._revDstIp = undefined;
      this._revDstPort = undefined;
      this._revSrcIp = undefined;
      this._revSrcPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fwdDstIp = value.fwdDstIp;
      this._fwdDstPort = value.fwdDstPort;
      this._fwdSrcIp = value.fwdSrcIp;
      this._fwdSrcPort = value.fwdSrcPort;
      this._proto = value.proto;
      this._revDstIp = value.revDstIp;
      this._revDstPort = value.revDstPort;
      this._revSrcIp = value.revSrcIp;
      this._revSrcPort = value.revSrcPort;
    }
  }

  // fwd_dst_ip - computed: false, optional: true, required: false
  private _fwdDstIp?: string; 
  public get fwdDstIp() {
    return this.getStringAttribute('fwd_dst_ip');
  }
  public set fwdDstIp(value: string) {
    this._fwdDstIp = value;
  }
  public resetFwdDstIp() {
    this._fwdDstIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdDstIpInput() {
    return this._fwdDstIp;
  }

  // fwd_dst_port - computed: false, optional: true, required: false
  private _fwdDstPort?: number; 
  public get fwdDstPort() {
    return this.getNumberAttribute('fwd_dst_port');
  }
  public set fwdDstPort(value: number) {
    this._fwdDstPort = value;
  }
  public resetFwdDstPort() {
    this._fwdDstPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdDstPortInput() {
    return this._fwdDstPort;
  }

  // fwd_src_ip - computed: false, optional: true, required: false
  private _fwdSrcIp?: string; 
  public get fwdSrcIp() {
    return this.getStringAttribute('fwd_src_ip');
  }
  public set fwdSrcIp(value: string) {
    this._fwdSrcIp = value;
  }
  public resetFwdSrcIp() {
    this._fwdSrcIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdSrcIpInput() {
    return this._fwdSrcIp;
  }

  // fwd_src_port - computed: false, optional: true, required: false
  private _fwdSrcPort?: number; 
  public get fwdSrcPort() {
    return this.getNumberAttribute('fwd_src_port');
  }
  public set fwdSrcPort(value: number) {
    this._fwdSrcPort = value;
  }
  public resetFwdSrcPort() {
    this._fwdSrcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdSrcPortInput() {
    return this._fwdSrcPort;
  }

  // proto - computed: false, optional: true, required: false
  private _proto?: string; 
  public get proto() {
    return this.getStringAttribute('proto');
  }
  public set proto(value: string) {
    this._proto = value;
  }
  public resetProto() {
    this._proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoInput() {
    return this._proto;
  }

  // rev_dst_ip - computed: false, optional: true, required: false
  private _revDstIp?: string; 
  public get revDstIp() {
    return this.getStringAttribute('rev_dst_ip');
  }
  public set revDstIp(value: string) {
    this._revDstIp = value;
  }
  public resetRevDstIp() {
    this._revDstIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revDstIpInput() {
    return this._revDstIp;
  }

  // rev_dst_port - computed: false, optional: true, required: false
  private _revDstPort?: number; 
  public get revDstPort() {
    return this.getNumberAttribute('rev_dst_port');
  }
  public set revDstPort(value: number) {
    this._revDstPort = value;
  }
  public resetRevDstPort() {
    this._revDstPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revDstPortInput() {
    return this._revDstPort;
  }

  // rev_src_ip - computed: false, optional: true, required: false
  private _revSrcIp?: string; 
  public get revSrcIp() {
    return this.getStringAttribute('rev_src_ip');
  }
  public set revSrcIp(value: string) {
    this._revSrcIp = value;
  }
  public resetRevSrcIp() {
    this._revSrcIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revSrcIpInput() {
    return this._revSrcIp;
  }

  // rev_src_port - computed: false, optional: true, required: false
  private _revSrcPort?: number; 
  public get revSrcPort() {
    return this.getNumberAttribute('rev_src_port');
  }
  public set revSrcPort(value: number) {
    this._revSrcPort = value;
  }
  public resetRevSrcPort() {
    this._revSrcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revSrcPortInput() {
    return this._revSrcPort;
  }
}

export class DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSessionListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSessionListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSessionListStructOutputReference {
    return new DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSessionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_sessions_oper#entity_key DataThunderVisibilityMonitoredEntitySessionsOper#entity_key}
  */
  readonly entityKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_sessions_oper#ipv4_addr DataThunderVisibilityMonitoredEntitySessionsOper#ipv4_addr}
  */
  readonly ipv4Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_sessions_oper#ipv6_addr DataThunderVisibilityMonitoredEntitySessionsOper#ipv6_addr}
  */
  readonly ipv6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_sessions_oper#l4_port DataThunderVisibilityMonitoredEntitySessionsOper#l4_port}
  */
  readonly l4Port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_sessions_oper#l4_proto DataThunderVisibilityMonitoredEntitySessionsOper#l4_proto}
  */
  readonly l4Proto?: string;
  /**
  * sec_entity_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_sessions_oper#sec_entity_list DataThunderVisibilityMonitoredEntitySessionsOper#sec_entity_list}
  */
  readonly secEntityList?: DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSecEntityListStruct[] | cdktf.IResolvable;
  /**
  * session_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_sessions_oper#session_list DataThunderVisibilityMonitoredEntitySessionsOper#session_list}
  */
  readonly sessionList?: DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSessionListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListStructToTerraform(struct?: DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_key: cdktf.stringToTerraform(struct!.entityKey),
    ipv4_addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    ipv6_addr: cdktf.stringToTerraform(struct!.ipv6Addr),
    l4_port: cdktf.numberToTerraform(struct!.l4Port),
    l4_proto: cdktf.stringToTerraform(struct!.l4Proto),
    sec_entity_list: cdktf.listMapper(dataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSecEntityListStructToTerraform, true)(struct!.secEntityList),
    session_list: cdktf.listMapper(dataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSessionListStructToTerraform, true)(struct!.sessionList),
  }
}


export function dataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListStructToHclTerraform(struct?: DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_key: {
      value: cdktf.stringToHclTerraform(struct!.entityKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    l4_port: {
      value: cdktf.numberToHclTerraform(struct!.l4Port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_proto: {
      value: cdktf.stringToHclTerraform(struct!.l4Proto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sec_entity_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSecEntityListStructToHclTerraform, true)(struct!.secEntityList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSecEntityListStructList",
    },
    session_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSessionListStructToHclTerraform, true)(struct!.sessionList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSessionListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityKey = this._entityKey;
    }
    if (this._ipv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Addr = this._ipv4Addr;
    }
    if (this._ipv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addr = this._ipv6Addr;
    }
    if (this._l4Port !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4Port = this._l4Port;
    }
    if (this._l4Proto !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4Proto = this._l4Proto;
    }
    if (this._secEntityList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secEntityList = this._secEntityList?.internalValue;
    }
    if (this._sessionList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionList = this._sessionList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entityKey = undefined;
      this._ipv4Addr = undefined;
      this._ipv6Addr = undefined;
      this._l4Port = undefined;
      this._l4Proto = undefined;
      this._secEntityList.internalValue = undefined;
      this._sessionList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entityKey = value.entityKey;
      this._ipv4Addr = value.ipv4Addr;
      this._ipv6Addr = value.ipv6Addr;
      this._l4Port = value.l4Port;
      this._l4Proto = value.l4Proto;
      this._secEntityList.internalValue = value.secEntityList;
      this._sessionList.internalValue = value.sessionList;
    }
  }

  // entity_key - computed: false, optional: true, required: false
  private _entityKey?: string; 
  public get entityKey() {
    return this.getStringAttribute('entity_key');
  }
  public set entityKey(value: string) {
    this._entityKey = value;
  }
  public resetEntityKey() {
    this._entityKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityKeyInput() {
    return this._entityKey;
  }

  // ipv4_addr - computed: false, optional: true, required: false
  private _ipv4Addr?: string; 
  public get ipv4Addr() {
    return this.getStringAttribute('ipv4_addr');
  }
  public set ipv4Addr(value: string) {
    this._ipv4Addr = value;
  }
  public resetIpv4Addr() {
    this._ipv4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrInput() {
    return this._ipv4Addr;
  }

  // ipv6_addr - computed: false, optional: true, required: false
  private _ipv6Addr?: string; 
  public get ipv6Addr() {
    return this.getStringAttribute('ipv6_addr');
  }
  public set ipv6Addr(value: string) {
    this._ipv6Addr = value;
  }
  public resetIpv6Addr() {
    this._ipv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddrInput() {
    return this._ipv6Addr;
  }

  // l4_port - computed: false, optional: true, required: false
  private _l4Port?: number; 
  public get l4Port() {
    return this.getNumberAttribute('l4_port');
  }
  public set l4Port(value: number) {
    this._l4Port = value;
  }
  public resetL4Port() {
    this._l4Port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4PortInput() {
    return this._l4Port;
  }

  // l4_proto - computed: false, optional: true, required: false
  private _l4Proto?: string; 
  public get l4Proto() {
    return this.getStringAttribute('l4_proto');
  }
  public set l4Proto(value: string) {
    this._l4Proto = value;
  }
  public resetL4Proto() {
    this._l4Proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4ProtoInput() {
    return this._l4Proto;
  }

  // sec_entity_list - computed: false, optional: true, required: false
  private _secEntityList = new DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSecEntityListStructList(this, "sec_entity_list", false);
  public get secEntityList() {
    return this._secEntityList;
  }
  public putSecEntityList(value: DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSecEntityListStruct[] | cdktf.IResolvable) {
    this._secEntityList.internalValue = value;
  }
  public resetSecEntityList() {
    this._secEntityList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secEntityListInput() {
    return this._secEntityList.internalValue;
  }

  // session_list - computed: false, optional: true, required: false
  private _sessionList = new DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSessionListStructList(this, "session_list", false);
  public get sessionList() {
    return this._sessionList;
  }
  public putSessionList(value: DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListSessionListStruct[] | cdktf.IResolvable) {
    this._sessionList.internalValue = value;
  }
  public resetSessionList() {
    this._sessionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionListInput() {
    return this._sessionList.internalValue;
  }
}

export class DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListStructOutputReference {
    return new DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityMonitoredEntitySessionsOperOper {
  /**
  * mon_entity_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_sessions_oper#mon_entity_list DataThunderVisibilityMonitoredEntitySessionsOper#mon_entity_list}
  */
  readonly monEntityList?: DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityMonitoredEntitySessionsOperOperToTerraform(struct?: DataThunderVisibilityMonitoredEntitySessionsOperOperOutputReference | DataThunderVisibilityMonitoredEntitySessionsOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mon_entity_list: cdktf.listMapper(dataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListStructToTerraform, true)(struct!.monEntityList),
  }
}


export function dataThunderVisibilityMonitoredEntitySessionsOperOperToHclTerraform(struct?: DataThunderVisibilityMonitoredEntitySessionsOperOperOutputReference | DataThunderVisibilityMonitoredEntitySessionsOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mon_entity_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListStructToHclTerraform, true)(struct!.monEntityList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitoredEntitySessionsOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityMonitoredEntitySessionsOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._monEntityList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monEntityList = this._monEntityList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityMonitoredEntitySessionsOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._monEntityList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._monEntityList.internalValue = value.monEntityList;
    }
  }

  // mon_entity_list - computed: false, optional: true, required: false
  private _monEntityList = new DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListStructList(this, "mon_entity_list", false);
  public get monEntityList() {
    return this._monEntityList;
  }
  public putMonEntityList(value: DataThunderVisibilityMonitoredEntitySessionsOperOperMonEntityListStruct[] | cdktf.IResolvable) {
    this._monEntityList.internalValue = value;
  }
  public resetMonEntityList() {
    this._monEntityList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monEntityListInput() {
    return this._monEntityList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_sessions_oper thunder_visibility_monitored_entity_sessions_oper}
*/
export class DataThunderVisibilityMonitoredEntitySessionsOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_monitored_entity_sessions_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVisibilityMonitoredEntitySessionsOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVisibilityMonitoredEntitySessionsOper to import
  * @param importFromId The id of the existing DataThunderVisibilityMonitoredEntitySessionsOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_sessions_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVisibilityMonitoredEntitySessionsOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_monitored_entity_sessions_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitored_entity_sessions_oper thunder_visibility_monitored_entity_sessions_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVisibilityMonitoredEntitySessionsOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVisibilityMonitoredEntitySessionsOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_monitored_entity_sessions_oper',
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
    this._id = config.id;
    this._oper.internalValue = config.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderVisibilityMonitoredEntitySessionsOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVisibilityMonitoredEntitySessionsOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderVisibilityMonitoredEntitySessionsOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderVisibilityMonitoredEntitySessionsOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVisibilityMonitoredEntitySessionsOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
