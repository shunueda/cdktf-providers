// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/ipsec_tunnel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmIpsecTunnelConfig extends cdktf.TerraformMetaArguments {
  /**
  * UUID of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/ipsec_tunnel#id DataScmIpsecTunnel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Alphanumeric string begin with letter: [0-9a-zA-Z._-]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/ipsec_tunnel#name DataScmIpsecTunnel#name}
  */
  readonly name?: string;
}
export interface DataScmIpsecTunnelAutoKeyIkeGateway {
}

export function dataScmIpsecTunnelAutoKeyIkeGatewayToTerraform(struct?: DataScmIpsecTunnelAutoKeyIkeGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmIpsecTunnelAutoKeyIkeGatewayToHclTerraform(struct?: DataScmIpsecTunnelAutoKeyIkeGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmIpsecTunnelAutoKeyIkeGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataScmIpsecTunnelAutoKeyIkeGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmIpsecTunnelAutoKeyIkeGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataScmIpsecTunnelAutoKeyIkeGatewayList extends cdktf.ComplexList {

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
  public get(index: number): DataScmIpsecTunnelAutoKeyIkeGatewayOutputReference {
    return new DataScmIpsecTunnelAutoKeyIkeGatewayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmIpsecTunnelAutoKeyProxyIdProtocolTcp {
}

export function dataScmIpsecTunnelAutoKeyProxyIdProtocolTcpToTerraform(struct?: DataScmIpsecTunnelAutoKeyProxyIdProtocolTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmIpsecTunnelAutoKeyProxyIdProtocolTcpToHclTerraform(struct?: DataScmIpsecTunnelAutoKeyProxyIdProtocolTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmIpsecTunnelAutoKeyProxyIdProtocolTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmIpsecTunnelAutoKeyProxyIdProtocolTcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmIpsecTunnelAutoKeyProxyIdProtocolTcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // local_port - computed: true, optional: false, required: false
  public get localPort() {
    return this.getNumberAttribute('local_port');
  }

  // remote_port - computed: true, optional: false, required: false
  public get remotePort() {
    return this.getNumberAttribute('remote_port');
  }
}
export interface DataScmIpsecTunnelAutoKeyProxyIdProtocolUdp {
}

export function dataScmIpsecTunnelAutoKeyProxyIdProtocolUdpToTerraform(struct?: DataScmIpsecTunnelAutoKeyProxyIdProtocolUdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmIpsecTunnelAutoKeyProxyIdProtocolUdpToHclTerraform(struct?: DataScmIpsecTunnelAutoKeyProxyIdProtocolUdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmIpsecTunnelAutoKeyProxyIdProtocolUdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmIpsecTunnelAutoKeyProxyIdProtocolUdp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmIpsecTunnelAutoKeyProxyIdProtocolUdp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // local_port - computed: true, optional: false, required: false
  public get localPort() {
    return this.getNumberAttribute('local_port');
  }

  // remote_port - computed: true, optional: false, required: false
  public get remotePort() {
    return this.getNumberAttribute('remote_port');
  }
}
export interface DataScmIpsecTunnelAutoKeyProxyIdProtocol {
}

export function dataScmIpsecTunnelAutoKeyProxyIdProtocolToTerraform(struct?: DataScmIpsecTunnelAutoKeyProxyIdProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmIpsecTunnelAutoKeyProxyIdProtocolToHclTerraform(struct?: DataScmIpsecTunnelAutoKeyProxyIdProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmIpsecTunnelAutoKeyProxyIdProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmIpsecTunnelAutoKeyProxyIdProtocol | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmIpsecTunnelAutoKeyProxyIdProtocol | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getNumberAttribute('number');
  }

  // tcp - computed: true, optional: false, required: false
  private _tcp = new DataScmIpsecTunnelAutoKeyProxyIdProtocolTcpOutputReference(this, "tcp");
  public get tcp() {
    return this._tcp;
  }

  // udp - computed: true, optional: false, required: false
  private _udp = new DataScmIpsecTunnelAutoKeyProxyIdProtocolUdpOutputReference(this, "udp");
  public get udp() {
    return this._udp;
  }
}
export interface DataScmIpsecTunnelAutoKeyProxyId {
}

export function dataScmIpsecTunnelAutoKeyProxyIdToTerraform(struct?: DataScmIpsecTunnelAutoKeyProxyId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmIpsecTunnelAutoKeyProxyIdToHclTerraform(struct?: DataScmIpsecTunnelAutoKeyProxyId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmIpsecTunnelAutoKeyProxyIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataScmIpsecTunnelAutoKeyProxyId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmIpsecTunnelAutoKeyProxyId | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // local - computed: true, optional: false, required: false
  public get local() {
    return this.getStringAttribute('local');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocol - computed: true, optional: false, required: false
  private _protocol = new DataScmIpsecTunnelAutoKeyProxyIdProtocolOutputReference(this, "protocol");
  public get protocol() {
    return this._protocol;
  }

  // remote - computed: true, optional: false, required: false
  public get remote() {
    return this.getStringAttribute('remote');
  }
}

export class DataScmIpsecTunnelAutoKeyProxyIdList extends cdktf.ComplexList {

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
  public get(index: number): DataScmIpsecTunnelAutoKeyProxyIdOutputReference {
    return new DataScmIpsecTunnelAutoKeyProxyIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmIpsecTunnelAutoKeyProxyIdV6ProtocolTcp {
}

export function dataScmIpsecTunnelAutoKeyProxyIdV6ProtocolTcpToTerraform(struct?: DataScmIpsecTunnelAutoKeyProxyIdV6ProtocolTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmIpsecTunnelAutoKeyProxyIdV6ProtocolTcpToHclTerraform(struct?: DataScmIpsecTunnelAutoKeyProxyIdV6ProtocolTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmIpsecTunnelAutoKeyProxyIdV6ProtocolTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmIpsecTunnelAutoKeyProxyIdV6ProtocolTcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmIpsecTunnelAutoKeyProxyIdV6ProtocolTcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // local_port - computed: true, optional: false, required: false
  public get localPort() {
    return this.getNumberAttribute('local_port');
  }

  // remote_port - computed: true, optional: false, required: false
  public get remotePort() {
    return this.getNumberAttribute('remote_port');
  }
}
export interface DataScmIpsecTunnelAutoKeyProxyIdV6ProtocolUdp {
}

export function dataScmIpsecTunnelAutoKeyProxyIdV6ProtocolUdpToTerraform(struct?: DataScmIpsecTunnelAutoKeyProxyIdV6ProtocolUdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmIpsecTunnelAutoKeyProxyIdV6ProtocolUdpToHclTerraform(struct?: DataScmIpsecTunnelAutoKeyProxyIdV6ProtocolUdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmIpsecTunnelAutoKeyProxyIdV6ProtocolUdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmIpsecTunnelAutoKeyProxyIdV6ProtocolUdp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmIpsecTunnelAutoKeyProxyIdV6ProtocolUdp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // local_port - computed: true, optional: false, required: false
  public get localPort() {
    return this.getNumberAttribute('local_port');
  }

  // remote_port - computed: true, optional: false, required: false
  public get remotePort() {
    return this.getNumberAttribute('remote_port');
  }
}
export interface DataScmIpsecTunnelAutoKeyProxyIdV6Protocol {
}

export function dataScmIpsecTunnelAutoKeyProxyIdV6ProtocolToTerraform(struct?: DataScmIpsecTunnelAutoKeyProxyIdV6Protocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmIpsecTunnelAutoKeyProxyIdV6ProtocolToHclTerraform(struct?: DataScmIpsecTunnelAutoKeyProxyIdV6Protocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmIpsecTunnelAutoKeyProxyIdV6ProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmIpsecTunnelAutoKeyProxyIdV6Protocol | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmIpsecTunnelAutoKeyProxyIdV6Protocol | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getNumberAttribute('number');
  }

  // tcp - computed: true, optional: false, required: false
  private _tcp = new DataScmIpsecTunnelAutoKeyProxyIdV6ProtocolTcpOutputReference(this, "tcp");
  public get tcp() {
    return this._tcp;
  }

  // udp - computed: true, optional: false, required: false
  private _udp = new DataScmIpsecTunnelAutoKeyProxyIdV6ProtocolUdpOutputReference(this, "udp");
  public get udp() {
    return this._udp;
  }
}
export interface DataScmIpsecTunnelAutoKeyProxyIdV6 {
}

export function dataScmIpsecTunnelAutoKeyProxyIdV6ToTerraform(struct?: DataScmIpsecTunnelAutoKeyProxyIdV6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmIpsecTunnelAutoKeyProxyIdV6ToHclTerraform(struct?: DataScmIpsecTunnelAutoKeyProxyIdV6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmIpsecTunnelAutoKeyProxyIdV6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataScmIpsecTunnelAutoKeyProxyIdV6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmIpsecTunnelAutoKeyProxyIdV6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // local - computed: true, optional: false, required: false
  public get local() {
    return this.getStringAttribute('local');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocol - computed: true, optional: false, required: false
  private _protocol = new DataScmIpsecTunnelAutoKeyProxyIdV6ProtocolOutputReference(this, "protocol");
  public get protocol() {
    return this._protocol;
  }

  // remote - computed: true, optional: false, required: false
  public get remote() {
    return this.getStringAttribute('remote');
  }
}

export class DataScmIpsecTunnelAutoKeyProxyIdV6List extends cdktf.ComplexList {

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
  public get(index: number): DataScmIpsecTunnelAutoKeyProxyIdV6OutputReference {
    return new DataScmIpsecTunnelAutoKeyProxyIdV6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmIpsecTunnelAutoKey {
}

export function dataScmIpsecTunnelAutoKeyToTerraform(struct?: DataScmIpsecTunnelAutoKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmIpsecTunnelAutoKeyToHclTerraform(struct?: DataScmIpsecTunnelAutoKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmIpsecTunnelAutoKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmIpsecTunnelAutoKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmIpsecTunnelAutoKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ike_gateway - computed: true, optional: false, required: false
  private _ikeGateway = new DataScmIpsecTunnelAutoKeyIkeGatewayList(this, "ike_gateway", false);
  public get ikeGateway() {
    return this._ikeGateway;
  }

  // ipsec_crypto_profile - computed: true, optional: false, required: false
  public get ipsecCryptoProfile() {
    return this.getStringAttribute('ipsec_crypto_profile');
  }

  // proxy_id - computed: true, optional: false, required: false
  private _proxyId = new DataScmIpsecTunnelAutoKeyProxyIdList(this, "proxy_id", false);
  public get proxyId() {
    return this._proxyId;
  }

  // proxy_id_v6 - computed: true, optional: false, required: false
  private _proxyIdV6 = new DataScmIpsecTunnelAutoKeyProxyIdV6List(this, "proxy_id_v6", false);
  public get proxyIdV6() {
    return this._proxyIdV6;
  }
}
export interface DataScmIpsecTunnelTunnelMonitor {
}

export function dataScmIpsecTunnelTunnelMonitorToTerraform(struct?: DataScmIpsecTunnelTunnelMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmIpsecTunnelTunnelMonitorToHclTerraform(struct?: DataScmIpsecTunnelTunnelMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmIpsecTunnelTunnelMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmIpsecTunnelTunnelMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmIpsecTunnelTunnelMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_ip - computed: true, optional: false, required: false
  public get destinationIp() {
    return this.getStringAttribute('destination_ip');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // proxy_id - computed: true, optional: false, required: false
  public get proxyId() {
    return this.getStringAttribute('proxy_id');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/ipsec_tunnel scm_ipsec_tunnel}
*/
export class DataScmIpsecTunnel extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_ipsec_tunnel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataScmIpsecTunnel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataScmIpsecTunnel to import
  * @param importFromId The id of the existing DataScmIpsecTunnel that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/ipsec_tunnel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmIpsecTunnel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_ipsec_tunnel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/ipsec_tunnel scm_ipsec_tunnel} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataScmIpsecTunnelConfig
  */
  public constructor(scope: Construct, id: string, config: DataScmIpsecTunnelConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_ipsec_tunnel',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.5',
        providerVersionConstraint: '1.0.5'
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anti_replay - computed: true, optional: false, required: false
  public get antiReplay() {
    return this.getBooleanAttribute('anti_replay');
  }

  // auto_key - computed: true, optional: false, required: false
  private _autoKey = new DataScmIpsecTunnelAutoKeyOutputReference(this, "auto_key");
  public get autoKey() {
    return this._autoKey;
  }

  // copy_tos - computed: true, optional: false, required: false
  public get copyTos() {
    return this.getBooleanAttribute('copy_tos');
  }

  // device - computed: true, optional: false, required: false
  public get device() {
    return this.getStringAttribute('device');
  }

  // enable_gre_encapsulation - computed: true, optional: false, required: false
  public get enableGreEncapsulation() {
    return this.getBooleanAttribute('enable_gre_encapsulation');
  }

  // folder - computed: true, optional: false, required: false
  public get folder() {
    return this.getStringAttribute('folder');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: true, required: false
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

  // snippet - computed: true, optional: false, required: false
  public get snippet() {
    return this.getStringAttribute('snippet');
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // tunnel_interface - computed: true, optional: false, required: false
  public get tunnelInterface() {
    return this.getStringAttribute('tunnel_interface');
  }

  // tunnel_monitor - computed: true, optional: false, required: false
  private _tunnelMonitor = new DataScmIpsecTunnelTunnelMonitorOutputReference(this, "tunnel_monitor");
  public get tunnelMonitor() {
    return this._tunnelMonitor;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
