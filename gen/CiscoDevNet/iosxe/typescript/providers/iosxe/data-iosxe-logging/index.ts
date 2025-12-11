// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/logging
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeLoggingConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/logging#device DataIosxeLogging#device}
  */
  readonly device?: string;
}
export interface DataIosxeLoggingIpv4Hosts {
}

export function dataIosxeLoggingIpv4HostsToTerraform(struct?: DataIosxeLoggingIpv4Hosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeLoggingIpv4HostsToHclTerraform(struct?: DataIosxeLoggingIpv4Hosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeLoggingIpv4HostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeLoggingIpv4Hosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeLoggingIpv4Hosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4_host - computed: true, optional: false, required: false
  public get ipv4Host() {
    return this.getStringAttribute('ipv4_host');
  }
}

export class DataIosxeLoggingIpv4HostsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeLoggingIpv4HostsOutputReference {
    return new DataIosxeLoggingIpv4HostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeLoggingIpv4HostsTransportTransportTcpPorts {
}

export function dataIosxeLoggingIpv4HostsTransportTransportTcpPortsToTerraform(struct?: DataIosxeLoggingIpv4HostsTransportTransportTcpPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeLoggingIpv4HostsTransportTransportTcpPortsToHclTerraform(struct?: DataIosxeLoggingIpv4HostsTransportTransportTcpPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeLoggingIpv4HostsTransportTransportTcpPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeLoggingIpv4HostsTransportTransportTcpPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeLoggingIpv4HostsTransportTransportTcpPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port_number - computed: true, optional: false, required: false
  public get portNumber() {
    return this.getNumberAttribute('port_number');
  }
}

export class DataIosxeLoggingIpv4HostsTransportTransportTcpPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeLoggingIpv4HostsTransportTransportTcpPortsOutputReference {
    return new DataIosxeLoggingIpv4HostsTransportTransportTcpPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeLoggingIpv4HostsTransportTransportTlsPorts {
}

export function dataIosxeLoggingIpv4HostsTransportTransportTlsPortsToTerraform(struct?: DataIosxeLoggingIpv4HostsTransportTransportTlsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeLoggingIpv4HostsTransportTransportTlsPortsToHclTerraform(struct?: DataIosxeLoggingIpv4HostsTransportTransportTlsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeLoggingIpv4HostsTransportTransportTlsPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeLoggingIpv4HostsTransportTransportTlsPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeLoggingIpv4HostsTransportTransportTlsPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port_number - computed: true, optional: false, required: false
  public get portNumber() {
    return this.getNumberAttribute('port_number');
  }

  // profile - computed: true, optional: false, required: false
  public get profile() {
    return this.getStringAttribute('profile');
  }
}

export class DataIosxeLoggingIpv4HostsTransportTransportTlsPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeLoggingIpv4HostsTransportTransportTlsPortsOutputReference {
    return new DataIosxeLoggingIpv4HostsTransportTransportTlsPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeLoggingIpv4HostsTransportTransportUdpPorts {
}

export function dataIosxeLoggingIpv4HostsTransportTransportUdpPortsToTerraform(struct?: DataIosxeLoggingIpv4HostsTransportTransportUdpPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeLoggingIpv4HostsTransportTransportUdpPortsToHclTerraform(struct?: DataIosxeLoggingIpv4HostsTransportTransportUdpPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeLoggingIpv4HostsTransportTransportUdpPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeLoggingIpv4HostsTransportTransportUdpPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeLoggingIpv4HostsTransportTransportUdpPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port_number - computed: true, optional: false, required: false
  public get portNumber() {
    return this.getNumberAttribute('port_number');
  }
}

export class DataIosxeLoggingIpv4HostsTransportTransportUdpPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeLoggingIpv4HostsTransportTransportUdpPortsOutputReference {
    return new DataIosxeLoggingIpv4HostsTransportTransportUdpPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeLoggingIpv4HostsTransport {
}

export function dataIosxeLoggingIpv4HostsTransportToTerraform(struct?: DataIosxeLoggingIpv4HostsTransport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeLoggingIpv4HostsTransportToHclTerraform(struct?: DataIosxeLoggingIpv4HostsTransport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeLoggingIpv4HostsTransportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeLoggingIpv4HostsTransport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeLoggingIpv4HostsTransport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4_host - computed: true, optional: false, required: false
  public get ipv4Host() {
    return this.getStringAttribute('ipv4_host');
  }

  // transport_tcp_ports - computed: true, optional: false, required: false
  private _transportTcpPorts = new DataIosxeLoggingIpv4HostsTransportTransportTcpPortsList(this, "transport_tcp_ports", false);
  public get transportTcpPorts() {
    return this._transportTcpPorts;
  }

  // transport_tls_ports - computed: true, optional: false, required: false
  private _transportTlsPorts = new DataIosxeLoggingIpv4HostsTransportTransportTlsPortsList(this, "transport_tls_ports", false);
  public get transportTlsPorts() {
    return this._transportTlsPorts;
  }

  // transport_udp_ports - computed: true, optional: false, required: false
  private _transportUdpPorts = new DataIosxeLoggingIpv4HostsTransportTransportUdpPortsList(this, "transport_udp_ports", false);
  public get transportUdpPorts() {
    return this._transportUdpPorts;
  }
}

export class DataIosxeLoggingIpv4HostsTransportList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeLoggingIpv4HostsTransportOutputReference {
    return new DataIosxeLoggingIpv4HostsTransportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeLoggingIpv4VrfHosts {
}

export function dataIosxeLoggingIpv4VrfHostsToTerraform(struct?: DataIosxeLoggingIpv4VrfHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeLoggingIpv4VrfHostsToHclTerraform(struct?: DataIosxeLoggingIpv4VrfHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeLoggingIpv4VrfHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeLoggingIpv4VrfHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeLoggingIpv4VrfHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4_host - computed: true, optional: false, required: false
  public get ipv4Host() {
    return this.getStringAttribute('ipv4_host');
  }

  // vrf - computed: true, optional: false, required: false
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
}

export class DataIosxeLoggingIpv4VrfHostsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeLoggingIpv4VrfHostsOutputReference {
    return new DataIosxeLoggingIpv4VrfHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeLoggingIpv4VrfHostsTransportTransportTcpPorts {
}

export function dataIosxeLoggingIpv4VrfHostsTransportTransportTcpPortsToTerraform(struct?: DataIosxeLoggingIpv4VrfHostsTransportTransportTcpPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeLoggingIpv4VrfHostsTransportTransportTcpPortsToHclTerraform(struct?: DataIosxeLoggingIpv4VrfHostsTransportTransportTcpPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeLoggingIpv4VrfHostsTransportTransportTcpPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeLoggingIpv4VrfHostsTransportTransportTcpPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeLoggingIpv4VrfHostsTransportTransportTcpPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port_number - computed: true, optional: false, required: false
  public get portNumber() {
    return this.getNumberAttribute('port_number');
  }
}

export class DataIosxeLoggingIpv4VrfHostsTransportTransportTcpPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeLoggingIpv4VrfHostsTransportTransportTcpPortsOutputReference {
    return new DataIosxeLoggingIpv4VrfHostsTransportTransportTcpPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeLoggingIpv4VrfHostsTransportTransportTlsPorts {
}

export function dataIosxeLoggingIpv4VrfHostsTransportTransportTlsPortsToTerraform(struct?: DataIosxeLoggingIpv4VrfHostsTransportTransportTlsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeLoggingIpv4VrfHostsTransportTransportTlsPortsToHclTerraform(struct?: DataIosxeLoggingIpv4VrfHostsTransportTransportTlsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeLoggingIpv4VrfHostsTransportTransportTlsPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeLoggingIpv4VrfHostsTransportTransportTlsPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeLoggingIpv4VrfHostsTransportTransportTlsPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port_number - computed: true, optional: false, required: false
  public get portNumber() {
    return this.getNumberAttribute('port_number');
  }

  // profile - computed: true, optional: false, required: false
  public get profile() {
    return this.getStringAttribute('profile');
  }
}

export class DataIosxeLoggingIpv4VrfHostsTransportTransportTlsPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeLoggingIpv4VrfHostsTransportTransportTlsPortsOutputReference {
    return new DataIosxeLoggingIpv4VrfHostsTransportTransportTlsPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeLoggingIpv4VrfHostsTransportTransportUdpPorts {
}

export function dataIosxeLoggingIpv4VrfHostsTransportTransportUdpPortsToTerraform(struct?: DataIosxeLoggingIpv4VrfHostsTransportTransportUdpPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeLoggingIpv4VrfHostsTransportTransportUdpPortsToHclTerraform(struct?: DataIosxeLoggingIpv4VrfHostsTransportTransportUdpPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeLoggingIpv4VrfHostsTransportTransportUdpPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeLoggingIpv4VrfHostsTransportTransportUdpPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeLoggingIpv4VrfHostsTransportTransportUdpPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port_number - computed: true, optional: false, required: false
  public get portNumber() {
    return this.getNumberAttribute('port_number');
  }
}

export class DataIosxeLoggingIpv4VrfHostsTransportTransportUdpPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeLoggingIpv4VrfHostsTransportTransportUdpPortsOutputReference {
    return new DataIosxeLoggingIpv4VrfHostsTransportTransportUdpPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeLoggingIpv4VrfHostsTransport {
}

export function dataIosxeLoggingIpv4VrfHostsTransportToTerraform(struct?: DataIosxeLoggingIpv4VrfHostsTransport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeLoggingIpv4VrfHostsTransportToHclTerraform(struct?: DataIosxeLoggingIpv4VrfHostsTransport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeLoggingIpv4VrfHostsTransportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeLoggingIpv4VrfHostsTransport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeLoggingIpv4VrfHostsTransport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4_host - computed: true, optional: false, required: false
  public get ipv4Host() {
    return this.getStringAttribute('ipv4_host');
  }

  // transport_tcp_ports - computed: true, optional: false, required: false
  private _transportTcpPorts = new DataIosxeLoggingIpv4VrfHostsTransportTransportTcpPortsList(this, "transport_tcp_ports", false);
  public get transportTcpPorts() {
    return this._transportTcpPorts;
  }

  // transport_tls_ports - computed: true, optional: false, required: false
  private _transportTlsPorts = new DataIosxeLoggingIpv4VrfHostsTransportTransportTlsPortsList(this, "transport_tls_ports", false);
  public get transportTlsPorts() {
    return this._transportTlsPorts;
  }

  // transport_udp_ports - computed: true, optional: false, required: false
  private _transportUdpPorts = new DataIosxeLoggingIpv4VrfHostsTransportTransportUdpPortsList(this, "transport_udp_ports", false);
  public get transportUdpPorts() {
    return this._transportUdpPorts;
  }

  // vrf - computed: true, optional: false, required: false
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
}

export class DataIosxeLoggingIpv4VrfHostsTransportList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeLoggingIpv4VrfHostsTransportOutputReference {
    return new DataIosxeLoggingIpv4VrfHostsTransportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeLoggingIpv6Hosts {
}

export function dataIosxeLoggingIpv6HostsToTerraform(struct?: DataIosxeLoggingIpv6Hosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeLoggingIpv6HostsToHclTerraform(struct?: DataIosxeLoggingIpv6Hosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeLoggingIpv6HostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeLoggingIpv6Hosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeLoggingIpv6Hosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv6_host - computed: true, optional: false, required: false
  public get ipv6Host() {
    return this.getStringAttribute('ipv6_host');
  }
}

export class DataIosxeLoggingIpv6HostsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeLoggingIpv6HostsOutputReference {
    return new DataIosxeLoggingIpv6HostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeLoggingIpv6HostsTransportTransportTcpPorts {
}

export function dataIosxeLoggingIpv6HostsTransportTransportTcpPortsToTerraform(struct?: DataIosxeLoggingIpv6HostsTransportTransportTcpPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeLoggingIpv6HostsTransportTransportTcpPortsToHclTerraform(struct?: DataIosxeLoggingIpv6HostsTransportTransportTcpPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeLoggingIpv6HostsTransportTransportTcpPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeLoggingIpv6HostsTransportTransportTcpPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeLoggingIpv6HostsTransportTransportTcpPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port_number - computed: true, optional: false, required: false
  public get portNumber() {
    return this.getNumberAttribute('port_number');
  }
}

export class DataIosxeLoggingIpv6HostsTransportTransportTcpPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeLoggingIpv6HostsTransportTransportTcpPortsOutputReference {
    return new DataIosxeLoggingIpv6HostsTransportTransportTcpPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeLoggingIpv6HostsTransportTransportTlsPorts {
}

export function dataIosxeLoggingIpv6HostsTransportTransportTlsPortsToTerraform(struct?: DataIosxeLoggingIpv6HostsTransportTransportTlsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeLoggingIpv6HostsTransportTransportTlsPortsToHclTerraform(struct?: DataIosxeLoggingIpv6HostsTransportTransportTlsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeLoggingIpv6HostsTransportTransportTlsPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeLoggingIpv6HostsTransportTransportTlsPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeLoggingIpv6HostsTransportTransportTlsPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port_number - computed: true, optional: false, required: false
  public get portNumber() {
    return this.getNumberAttribute('port_number');
  }

  // profile - computed: true, optional: false, required: false
  public get profile() {
    return this.getStringAttribute('profile');
  }
}

export class DataIosxeLoggingIpv6HostsTransportTransportTlsPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeLoggingIpv6HostsTransportTransportTlsPortsOutputReference {
    return new DataIosxeLoggingIpv6HostsTransportTransportTlsPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeLoggingIpv6HostsTransportTransportUdpPorts {
}

export function dataIosxeLoggingIpv6HostsTransportTransportUdpPortsToTerraform(struct?: DataIosxeLoggingIpv6HostsTransportTransportUdpPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeLoggingIpv6HostsTransportTransportUdpPortsToHclTerraform(struct?: DataIosxeLoggingIpv6HostsTransportTransportUdpPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeLoggingIpv6HostsTransportTransportUdpPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeLoggingIpv6HostsTransportTransportUdpPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeLoggingIpv6HostsTransportTransportUdpPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port_number - computed: true, optional: false, required: false
  public get portNumber() {
    return this.getNumberAttribute('port_number');
  }
}

export class DataIosxeLoggingIpv6HostsTransportTransportUdpPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeLoggingIpv6HostsTransportTransportUdpPortsOutputReference {
    return new DataIosxeLoggingIpv6HostsTransportTransportUdpPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeLoggingIpv6HostsTransport {
}

export function dataIosxeLoggingIpv6HostsTransportToTerraform(struct?: DataIosxeLoggingIpv6HostsTransport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeLoggingIpv6HostsTransportToHclTerraform(struct?: DataIosxeLoggingIpv6HostsTransport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeLoggingIpv6HostsTransportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeLoggingIpv6HostsTransport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeLoggingIpv6HostsTransport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv6_host - computed: true, optional: false, required: false
  public get ipv6Host() {
    return this.getStringAttribute('ipv6_host');
  }

  // transport_tcp_ports - computed: true, optional: false, required: false
  private _transportTcpPorts = new DataIosxeLoggingIpv6HostsTransportTransportTcpPortsList(this, "transport_tcp_ports", false);
  public get transportTcpPorts() {
    return this._transportTcpPorts;
  }

  // transport_tls_ports - computed: true, optional: false, required: false
  private _transportTlsPorts = new DataIosxeLoggingIpv6HostsTransportTransportTlsPortsList(this, "transport_tls_ports", false);
  public get transportTlsPorts() {
    return this._transportTlsPorts;
  }

  // transport_udp_ports - computed: true, optional: false, required: false
  private _transportUdpPorts = new DataIosxeLoggingIpv6HostsTransportTransportUdpPortsList(this, "transport_udp_ports", false);
  public get transportUdpPorts() {
    return this._transportUdpPorts;
  }
}

export class DataIosxeLoggingIpv6HostsTransportList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeLoggingIpv6HostsTransportOutputReference {
    return new DataIosxeLoggingIpv6HostsTransportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeLoggingIpv6VrfHosts {
}

export function dataIosxeLoggingIpv6VrfHostsToTerraform(struct?: DataIosxeLoggingIpv6VrfHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeLoggingIpv6VrfHostsToHclTerraform(struct?: DataIosxeLoggingIpv6VrfHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeLoggingIpv6VrfHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeLoggingIpv6VrfHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeLoggingIpv6VrfHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv6_host - computed: true, optional: false, required: false
  public get ipv6Host() {
    return this.getStringAttribute('ipv6_host');
  }

  // vrf - computed: true, optional: false, required: false
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
}

export class DataIosxeLoggingIpv6VrfHostsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeLoggingIpv6VrfHostsOutputReference {
    return new DataIosxeLoggingIpv6VrfHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeLoggingIpv6VrfHostsTransportTransportTcpPorts {
}

export function dataIosxeLoggingIpv6VrfHostsTransportTransportTcpPortsToTerraform(struct?: DataIosxeLoggingIpv6VrfHostsTransportTransportTcpPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeLoggingIpv6VrfHostsTransportTransportTcpPortsToHclTerraform(struct?: DataIosxeLoggingIpv6VrfHostsTransportTransportTcpPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeLoggingIpv6VrfHostsTransportTransportTcpPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeLoggingIpv6VrfHostsTransportTransportTcpPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeLoggingIpv6VrfHostsTransportTransportTcpPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port_number - computed: true, optional: false, required: false
  public get portNumber() {
    return this.getNumberAttribute('port_number');
  }
}

export class DataIosxeLoggingIpv6VrfHostsTransportTransportTcpPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeLoggingIpv6VrfHostsTransportTransportTcpPortsOutputReference {
    return new DataIosxeLoggingIpv6VrfHostsTransportTransportTcpPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeLoggingIpv6VrfHostsTransportTransportTlsPorts {
}

export function dataIosxeLoggingIpv6VrfHostsTransportTransportTlsPortsToTerraform(struct?: DataIosxeLoggingIpv6VrfHostsTransportTransportTlsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeLoggingIpv6VrfHostsTransportTransportTlsPortsToHclTerraform(struct?: DataIosxeLoggingIpv6VrfHostsTransportTransportTlsPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeLoggingIpv6VrfHostsTransportTransportTlsPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeLoggingIpv6VrfHostsTransportTransportTlsPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeLoggingIpv6VrfHostsTransportTransportTlsPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port_number - computed: true, optional: false, required: false
  public get portNumber() {
    return this.getNumberAttribute('port_number');
  }

  // profile - computed: true, optional: false, required: false
  public get profile() {
    return this.getStringAttribute('profile');
  }
}

export class DataIosxeLoggingIpv6VrfHostsTransportTransportTlsPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeLoggingIpv6VrfHostsTransportTransportTlsPortsOutputReference {
    return new DataIosxeLoggingIpv6VrfHostsTransportTransportTlsPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeLoggingIpv6VrfHostsTransportTransportUdpPorts {
}

export function dataIosxeLoggingIpv6VrfHostsTransportTransportUdpPortsToTerraform(struct?: DataIosxeLoggingIpv6VrfHostsTransportTransportUdpPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeLoggingIpv6VrfHostsTransportTransportUdpPortsToHclTerraform(struct?: DataIosxeLoggingIpv6VrfHostsTransportTransportUdpPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeLoggingIpv6VrfHostsTransportTransportUdpPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeLoggingIpv6VrfHostsTransportTransportUdpPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeLoggingIpv6VrfHostsTransportTransportUdpPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port_number - computed: true, optional: false, required: false
  public get portNumber() {
    return this.getNumberAttribute('port_number');
  }
}

export class DataIosxeLoggingIpv6VrfHostsTransportTransportUdpPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeLoggingIpv6VrfHostsTransportTransportUdpPortsOutputReference {
    return new DataIosxeLoggingIpv6VrfHostsTransportTransportUdpPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeLoggingIpv6VrfHostsTransport {
}

export function dataIosxeLoggingIpv6VrfHostsTransportToTerraform(struct?: DataIosxeLoggingIpv6VrfHostsTransport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeLoggingIpv6VrfHostsTransportToHclTerraform(struct?: DataIosxeLoggingIpv6VrfHostsTransport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeLoggingIpv6VrfHostsTransportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeLoggingIpv6VrfHostsTransport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeLoggingIpv6VrfHostsTransport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv6_host - computed: true, optional: false, required: false
  public get ipv6Host() {
    return this.getStringAttribute('ipv6_host');
  }

  // transport_tcp_ports - computed: true, optional: false, required: false
  private _transportTcpPorts = new DataIosxeLoggingIpv6VrfHostsTransportTransportTcpPortsList(this, "transport_tcp_ports", false);
  public get transportTcpPorts() {
    return this._transportTcpPorts;
  }

  // transport_tls_ports - computed: true, optional: false, required: false
  private _transportTlsPorts = new DataIosxeLoggingIpv6VrfHostsTransportTransportTlsPortsList(this, "transport_tls_ports", false);
  public get transportTlsPorts() {
    return this._transportTlsPorts;
  }

  // transport_udp_ports - computed: true, optional: false, required: false
  private _transportUdpPorts = new DataIosxeLoggingIpv6VrfHostsTransportTransportUdpPortsList(this, "transport_udp_ports", false);
  public get transportUdpPorts() {
    return this._transportUdpPorts;
  }

  // vrf - computed: true, optional: false, required: false
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
}

export class DataIosxeLoggingIpv6VrfHostsTransportList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeLoggingIpv6VrfHostsTransportOutputReference {
    return new DataIosxeLoggingIpv6VrfHostsTransportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeLoggingSourceInterfacesVrf {
}

export function dataIosxeLoggingSourceInterfacesVrfToTerraform(struct?: DataIosxeLoggingSourceInterfacesVrf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeLoggingSourceInterfacesVrfToHclTerraform(struct?: DataIosxeLoggingSourceInterfacesVrf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeLoggingSourceInterfacesVrfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeLoggingSourceInterfacesVrf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeLoggingSourceInterfacesVrf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interface_name - computed: true, optional: false, required: false
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }

  // vrf - computed: true, optional: false, required: false
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
}

export class DataIosxeLoggingSourceInterfacesVrfList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeLoggingSourceInterfacesVrfOutputReference {
    return new DataIosxeLoggingSourceInterfacesVrfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/logging iosxe_logging}
*/
export class DataIosxeLogging extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_logging";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeLogging resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeLogging to import
  * @param importFromId The id of the existing DataIosxeLogging that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/logging#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeLogging to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_logging", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/logging iosxe_logging} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeLoggingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIosxeLoggingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_logging',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.13.0',
        providerVersionConstraint: '0.13.0'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // buffered_severity - computed: true, optional: false, required: false
  public get bufferedSeverity() {
    return this.getStringAttribute('buffered_severity');
  }

  // buffered_size - computed: true, optional: false, required: false
  public get bufferedSize() {
    return this.getNumberAttribute('buffered_size');
  }

  // console - computed: true, optional: false, required: false
  public get console() {
    return this.getBooleanAttribute('console');
  }

  // console_severity - computed: true, optional: false, required: false
  public get consoleSeverity() {
    return this.getStringAttribute('console_severity');
  }

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

  // facility - computed: true, optional: false, required: false
  public get facility() {
    return this.getStringAttribute('facility');
  }

  // file_max_size - computed: true, optional: false, required: false
  public get fileMaxSize() {
    return this.getNumberAttribute('file_max_size');
  }

  // file_min_size - computed: true, optional: false, required: false
  public get fileMinSize() {
    return this.getNumberAttribute('file_min_size');
  }

  // file_name - computed: true, optional: false, required: false
  public get fileName() {
    return this.getStringAttribute('file_name');
  }

  // file_severity - computed: true, optional: false, required: false
  public get fileSeverity() {
    return this.getStringAttribute('file_severity');
  }

  // history_severity - computed: true, optional: false, required: false
  public get historySeverity() {
    return this.getStringAttribute('history_severity');
  }

  // history_size - computed: true, optional: false, required: false
  public get historySize() {
    return this.getNumberAttribute('history_size');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv4_hosts - computed: true, optional: false, required: false
  private _ipv4Hosts = new DataIosxeLoggingIpv4HostsList(this, "ipv4_hosts", false);
  public get ipv4Hosts() {
    return this._ipv4Hosts;
  }

  // ipv4_hosts_transport - computed: true, optional: false, required: false
  private _ipv4HostsTransport = new DataIosxeLoggingIpv4HostsTransportList(this, "ipv4_hosts_transport", false);
  public get ipv4HostsTransport() {
    return this._ipv4HostsTransport;
  }

  // ipv4_vrf_hosts - computed: true, optional: false, required: false
  private _ipv4VrfHosts = new DataIosxeLoggingIpv4VrfHostsList(this, "ipv4_vrf_hosts", false);
  public get ipv4VrfHosts() {
    return this._ipv4VrfHosts;
  }

  // ipv4_vrf_hosts_transport - computed: true, optional: false, required: false
  private _ipv4VrfHostsTransport = new DataIosxeLoggingIpv4VrfHostsTransportList(this, "ipv4_vrf_hosts_transport", false);
  public get ipv4VrfHostsTransport() {
    return this._ipv4VrfHostsTransport;
  }

  // ipv6_hosts - computed: true, optional: false, required: false
  private _ipv6Hosts = new DataIosxeLoggingIpv6HostsList(this, "ipv6_hosts", false);
  public get ipv6Hosts() {
    return this._ipv6Hosts;
  }

  // ipv6_hosts_transport - computed: true, optional: false, required: false
  private _ipv6HostsTransport = new DataIosxeLoggingIpv6HostsTransportList(this, "ipv6_hosts_transport", false);
  public get ipv6HostsTransport() {
    return this._ipv6HostsTransport;
  }

  // ipv6_vrf_hosts - computed: true, optional: false, required: false
  private _ipv6VrfHosts = new DataIosxeLoggingIpv6VrfHostsList(this, "ipv6_vrf_hosts", false);
  public get ipv6VrfHosts() {
    return this._ipv6VrfHosts;
  }

  // ipv6_vrf_hosts_transport - computed: true, optional: false, required: false
  private _ipv6VrfHostsTransport = new DataIosxeLoggingIpv6VrfHostsTransportList(this, "ipv6_vrf_hosts_transport", false);
  public get ipv6VrfHostsTransport() {
    return this._ipv6VrfHostsTransport;
  }

  // logging_count - computed: true, optional: false, required: false
  public get loggingCount() {
    return this.getBooleanAttribute('logging_count');
  }

  // monitor_severity - computed: true, optional: false, required: false
  public get monitorSeverity() {
    return this.getStringAttribute('monitor_severity');
  }

  // origin_id_name - computed: true, optional: false, required: false
  public get originIdName() {
    return this.getStringAttribute('origin_id_name');
  }

  // origin_id_type - computed: true, optional: false, required: false
  public get originIdType() {
    return this.getStringAttribute('origin_id_type');
  }

  // persistent_batch - computed: true, optional: false, required: false
  public get persistentBatch() {
    return this.getNumberAttribute('persistent_batch');
  }

  // persistent_filesize - computed: true, optional: false, required: false
  public get persistentFilesize() {
    return this.getNumberAttribute('persistent_filesize');
  }

  // persistent_immediate - computed: true, optional: false, required: false
  public get persistentImmediate() {
    return this.getBooleanAttribute('persistent_immediate');
  }

  // persistent_notify - computed: true, optional: false, required: false
  public get persistentNotify() {
    return this.getBooleanAttribute('persistent_notify');
  }

  // persistent_protected - computed: true, optional: false, required: false
  public get persistentProtected() {
    return this.getBooleanAttribute('persistent_protected');
  }

  // persistent_size - computed: true, optional: false, required: false
  public get persistentSize() {
    return this.getNumberAttribute('persistent_size');
  }

  // persistent_threshold - computed: true, optional: false, required: false
  public get persistentThreshold() {
    return this.getNumberAttribute('persistent_threshold');
  }

  // persistent_url - computed: true, optional: false, required: false
  public get persistentUrl() {
    return this.getStringAttribute('persistent_url');
  }

  // rate_limit_all - computed: true, optional: false, required: false
  public get rateLimitAll() {
    return this.getNumberAttribute('rate_limit_all');
  }

  // rate_limit_all_except_severity - computed: true, optional: false, required: false
  public get rateLimitAllExceptSeverity() {
    return this.getStringAttribute('rate_limit_all_except_severity');
  }

  // rate_limit_console - computed: true, optional: false, required: false
  public get rateLimitConsole() {
    return this.getNumberAttribute('rate_limit_console');
  }

  // rate_limit_console_all - computed: true, optional: false, required: false
  public get rateLimitConsoleAll() {
    return this.getNumberAttribute('rate_limit_console_all');
  }

  // rate_limit_console_all_except_severity - computed: true, optional: false, required: false
  public get rateLimitConsoleAllExceptSeverity() {
    return this.getStringAttribute('rate_limit_console_all_except_severity');
  }

  // rate_limit_console_except_severity - computed: true, optional: false, required: false
  public get rateLimitConsoleExceptSeverity() {
    return this.getStringAttribute('rate_limit_console_except_severity');
  }

  // source_interface - computed: true, optional: false, required: false
  public get sourceInterface() {
    return this.getStringAttribute('source_interface');
  }

  // source_interfaces_vrf - computed: true, optional: false, required: false
  private _sourceInterfacesVrf = new DataIosxeLoggingSourceInterfacesVrfList(this, "source_interfaces_vrf", false);
  public get sourceInterfacesVrf() {
    return this._sourceInterfacesVrf;
  }

  // trap - computed: true, optional: false, required: false
  public get trap() {
    return this.getBooleanAttribute('trap');
  }

  // trap_severity - computed: true, optional: false, required: false
  public get trapSeverity() {
    return this.getStringAttribute('trap_severity');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
