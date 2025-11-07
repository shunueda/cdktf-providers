// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxrInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/interface#device DataIosxrInterface#device}
  */
  readonly device?: string;
  /**
  * Interface configuration subcommands
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/interface#interface_name DataIosxrInterface#interface_name}
  */
  readonly interfaceName: string;
}
export interface DataIosxrInterfaceFlowIpv4EgressMonitorSamplers {
}

export function dataIosxrInterfaceFlowIpv4EgressMonitorSamplersToTerraform(struct?: DataIosxrInterfaceFlowIpv4EgressMonitorSamplers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrInterfaceFlowIpv4EgressMonitorSamplersToHclTerraform(struct?: DataIosxrInterfaceFlowIpv4EgressMonitorSamplers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrInterfaceFlowIpv4EgressMonitorSamplersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrInterfaceFlowIpv4EgressMonitorSamplers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrInterfaceFlowIpv4EgressMonitorSamplers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // monitor_map_name - computed: true, optional: false, required: false
  public get monitorMapName() {
    return this.getStringAttribute('monitor_map_name');
  }

  // sampler_map_name - computed: true, optional: false, required: false
  public get samplerMapName() {
    return this.getStringAttribute('sampler_map_name');
  }
}

export class DataIosxrInterfaceFlowIpv4EgressMonitorSamplersList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrInterfaceFlowIpv4EgressMonitorSamplersOutputReference {
    return new DataIosxrInterfaceFlowIpv4EgressMonitorSamplersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrInterfaceFlowIpv4EgressMonitors {
}

export function dataIosxrInterfaceFlowIpv4EgressMonitorsToTerraform(struct?: DataIosxrInterfaceFlowIpv4EgressMonitors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrInterfaceFlowIpv4EgressMonitorsToHclTerraform(struct?: DataIosxrInterfaceFlowIpv4EgressMonitors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrInterfaceFlowIpv4EgressMonitorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrInterfaceFlowIpv4EgressMonitors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrInterfaceFlowIpv4EgressMonitors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // monitor_map_name - computed: true, optional: false, required: false
  public get monitorMapName() {
    return this.getStringAttribute('monitor_map_name');
  }
}

export class DataIosxrInterfaceFlowIpv4EgressMonitorsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrInterfaceFlowIpv4EgressMonitorsOutputReference {
    return new DataIosxrInterfaceFlowIpv4EgressMonitorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrInterfaceFlowIpv4IngressMonitorSamplers {
}

export function dataIosxrInterfaceFlowIpv4IngressMonitorSamplersToTerraform(struct?: DataIosxrInterfaceFlowIpv4IngressMonitorSamplers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrInterfaceFlowIpv4IngressMonitorSamplersToHclTerraform(struct?: DataIosxrInterfaceFlowIpv4IngressMonitorSamplers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrInterfaceFlowIpv4IngressMonitorSamplersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrInterfaceFlowIpv4IngressMonitorSamplers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrInterfaceFlowIpv4IngressMonitorSamplers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // monitor_map_name - computed: true, optional: false, required: false
  public get monitorMapName() {
    return this.getStringAttribute('monitor_map_name');
  }

  // sampler_map_name - computed: true, optional: false, required: false
  public get samplerMapName() {
    return this.getStringAttribute('sampler_map_name');
  }
}

export class DataIosxrInterfaceFlowIpv4IngressMonitorSamplersList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrInterfaceFlowIpv4IngressMonitorSamplersOutputReference {
    return new DataIosxrInterfaceFlowIpv4IngressMonitorSamplersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrInterfaceFlowIpv4IngressMonitors {
}

export function dataIosxrInterfaceFlowIpv4IngressMonitorsToTerraform(struct?: DataIosxrInterfaceFlowIpv4IngressMonitors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrInterfaceFlowIpv4IngressMonitorsToHclTerraform(struct?: DataIosxrInterfaceFlowIpv4IngressMonitors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrInterfaceFlowIpv4IngressMonitorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrInterfaceFlowIpv4IngressMonitors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrInterfaceFlowIpv4IngressMonitors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // monitor_map_name - computed: true, optional: false, required: false
  public get monitorMapName() {
    return this.getStringAttribute('monitor_map_name');
  }
}

export class DataIosxrInterfaceFlowIpv4IngressMonitorsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrInterfaceFlowIpv4IngressMonitorsOutputReference {
    return new DataIosxrInterfaceFlowIpv4IngressMonitorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrInterfaceFlowIpv6EgressMonitorSamplers {
}

export function dataIosxrInterfaceFlowIpv6EgressMonitorSamplersToTerraform(struct?: DataIosxrInterfaceFlowIpv6EgressMonitorSamplers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrInterfaceFlowIpv6EgressMonitorSamplersToHclTerraform(struct?: DataIosxrInterfaceFlowIpv6EgressMonitorSamplers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrInterfaceFlowIpv6EgressMonitorSamplersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrInterfaceFlowIpv6EgressMonitorSamplers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrInterfaceFlowIpv6EgressMonitorSamplers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // monitor_map_name - computed: true, optional: false, required: false
  public get monitorMapName() {
    return this.getStringAttribute('monitor_map_name');
  }

  // sampler_map_name - computed: true, optional: false, required: false
  public get samplerMapName() {
    return this.getStringAttribute('sampler_map_name');
  }
}

export class DataIosxrInterfaceFlowIpv6EgressMonitorSamplersList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrInterfaceFlowIpv6EgressMonitorSamplersOutputReference {
    return new DataIosxrInterfaceFlowIpv6EgressMonitorSamplersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrInterfaceFlowIpv6EgressMonitors {
}

export function dataIosxrInterfaceFlowIpv6EgressMonitorsToTerraform(struct?: DataIosxrInterfaceFlowIpv6EgressMonitors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrInterfaceFlowIpv6EgressMonitorsToHclTerraform(struct?: DataIosxrInterfaceFlowIpv6EgressMonitors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrInterfaceFlowIpv6EgressMonitorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrInterfaceFlowIpv6EgressMonitors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrInterfaceFlowIpv6EgressMonitors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // monitor_map_name - computed: true, optional: false, required: false
  public get monitorMapName() {
    return this.getStringAttribute('monitor_map_name');
  }
}

export class DataIosxrInterfaceFlowIpv6EgressMonitorsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrInterfaceFlowIpv6EgressMonitorsOutputReference {
    return new DataIosxrInterfaceFlowIpv6EgressMonitorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrInterfaceFlowIpv6IngressMonitorSamplers {
}

export function dataIosxrInterfaceFlowIpv6IngressMonitorSamplersToTerraform(struct?: DataIosxrInterfaceFlowIpv6IngressMonitorSamplers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrInterfaceFlowIpv6IngressMonitorSamplersToHclTerraform(struct?: DataIosxrInterfaceFlowIpv6IngressMonitorSamplers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrInterfaceFlowIpv6IngressMonitorSamplersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrInterfaceFlowIpv6IngressMonitorSamplers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrInterfaceFlowIpv6IngressMonitorSamplers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // monitor_map_name - computed: true, optional: false, required: false
  public get monitorMapName() {
    return this.getStringAttribute('monitor_map_name');
  }

  // sampler_map_name - computed: true, optional: false, required: false
  public get samplerMapName() {
    return this.getStringAttribute('sampler_map_name');
  }
}

export class DataIosxrInterfaceFlowIpv6IngressMonitorSamplersList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrInterfaceFlowIpv6IngressMonitorSamplersOutputReference {
    return new DataIosxrInterfaceFlowIpv6IngressMonitorSamplersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrInterfaceFlowIpv6IngressMonitors {
}

export function dataIosxrInterfaceFlowIpv6IngressMonitorsToTerraform(struct?: DataIosxrInterfaceFlowIpv6IngressMonitors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrInterfaceFlowIpv6IngressMonitorsToHclTerraform(struct?: DataIosxrInterfaceFlowIpv6IngressMonitors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrInterfaceFlowIpv6IngressMonitorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrInterfaceFlowIpv6IngressMonitors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrInterfaceFlowIpv6IngressMonitors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // monitor_map_name - computed: true, optional: false, required: false
  public get monitorMapName() {
    return this.getStringAttribute('monitor_map_name');
  }
}

export class DataIosxrInterfaceFlowIpv6IngressMonitorsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrInterfaceFlowIpv6IngressMonitorsOutputReference {
    return new DataIosxrInterfaceFlowIpv6IngressMonitorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrInterfaceIpv6Addresses {
}

export function dataIosxrInterfaceIpv6AddressesToTerraform(struct?: DataIosxrInterfaceIpv6Addresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrInterfaceIpv6AddressesToHclTerraform(struct?: DataIosxrInterfaceIpv6Addresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrInterfaceIpv6AddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrInterfaceIpv6Addresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrInterfaceIpv6Addresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class DataIosxrInterfaceIpv6AddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrInterfaceIpv6AddressesOutputReference {
    return new DataIosxrInterfaceIpv6AddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrInterfaceServicePolicyInput {
}

export function dataIosxrInterfaceServicePolicyInputToTerraform(struct?: DataIosxrInterfaceServicePolicyInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrInterfaceServicePolicyInputToHclTerraform(struct?: DataIosxrInterfaceServicePolicyInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrInterfaceServicePolicyInputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrInterfaceServicePolicyInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrInterfaceServicePolicyInput | undefined) {
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

export class DataIosxrInterfaceServicePolicyInputList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrInterfaceServicePolicyInputOutputReference {
    return new DataIosxrInterfaceServicePolicyInputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrInterfaceServicePolicyOutput {
}

export function dataIosxrInterfaceServicePolicyOutputToTerraform(struct?: DataIosxrInterfaceServicePolicyOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrInterfaceServicePolicyOutputToHclTerraform(struct?: DataIosxrInterfaceServicePolicyOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrInterfaceServicePolicyOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrInterfaceServicePolicyOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrInterfaceServicePolicyOutput | undefined) {
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

export class DataIosxrInterfaceServicePolicyOutputList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrInterfaceServicePolicyOutputOutputReference {
    return new DataIosxrInterfaceServicePolicyOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/interface iosxr_interface}
*/
export class DataIosxrInterface extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxrInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxrInterface to import
  * @param importFromId The id of the existing DataIosxrInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxrInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/interface iosxr_interface} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxrInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxrInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_interface',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0'
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
    this._interfaceName = config.interfaceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth - computed: true, optional: false, required: false
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }

  // bfd_mode_ietf - computed: true, optional: false, required: false
  public get bfdModeIetf() {
    return this.getBooleanAttribute('bfd_mode_ietf');
  }

  // bundle_id - computed: true, optional: false, required: false
  public get bundleId() {
    return this.getNumberAttribute('bundle_id');
  }

  // bundle_id_mode - computed: true, optional: false, required: false
  public get bundleIdMode() {
    return this.getStringAttribute('bundle_id_mode');
  }

  // bundle_load_balancing_hash_dst_ip - computed: true, optional: false, required: false
  public get bundleLoadBalancingHashDstIp() {
    return this.getBooleanAttribute('bundle_load_balancing_hash_dst_ip');
  }

  // bundle_load_balancing_hash_src_ip - computed: true, optional: false, required: false
  public get bundleLoadBalancingHashSrcIp() {
    return this.getBooleanAttribute('bundle_load_balancing_hash_src_ip');
  }

  // bundle_maximum_active_links - computed: true, optional: false, required: false
  public get bundleMaximumActiveLinks() {
    return this.getNumberAttribute('bundle_maximum_active_links');
  }

  // bundle_minimum_active_links - computed: true, optional: false, required: false
  public get bundleMinimumActiveLinks() {
    return this.getNumberAttribute('bundle_minimum_active_links');
  }

  // bundle_port_priority - computed: true, optional: false, required: false
  public get bundlePortPriority() {
    return this.getNumberAttribute('bundle_port_priority');
  }

  // bundle_shutdown - computed: true, optional: false, required: false
  public get bundleShutdown() {
    return this.getBooleanAttribute('bundle_shutdown');
  }

  // cdp - computed: true, optional: false, required: false
  public get cdp() {
    return this.getBooleanAttribute('cdp');
  }

  // dampening - computed: true, optional: false, required: false
  public get dampening() {
    return this.getBooleanAttribute('dampening');
  }

  // dampening_decay_half_life_value - computed: true, optional: false, required: false
  public get dampeningDecayHalfLifeValue() {
    return this.getNumberAttribute('dampening_decay_half_life_value');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // encapsulation_dot1q_vlan_id - computed: true, optional: false, required: false
  public get encapsulationDot1QVlanId() {
    return this.getNumberAttribute('encapsulation_dot1q_vlan_id');
  }

  // flow_ipv4_egress_monitor_samplers - computed: true, optional: false, required: false
  private _flowIpv4EgressMonitorSamplers = new DataIosxrInterfaceFlowIpv4EgressMonitorSamplersList(this, "flow_ipv4_egress_monitor_samplers", false);
  public get flowIpv4EgressMonitorSamplers() {
    return this._flowIpv4EgressMonitorSamplers;
  }

  // flow_ipv4_egress_monitors - computed: true, optional: false, required: false
  private _flowIpv4EgressMonitors = new DataIosxrInterfaceFlowIpv4EgressMonitorsList(this, "flow_ipv4_egress_monitors", false);
  public get flowIpv4EgressMonitors() {
    return this._flowIpv4EgressMonitors;
  }

  // flow_ipv4_ingress_monitor_samplers - computed: true, optional: false, required: false
  private _flowIpv4IngressMonitorSamplers = new DataIosxrInterfaceFlowIpv4IngressMonitorSamplersList(this, "flow_ipv4_ingress_monitor_samplers", false);
  public get flowIpv4IngressMonitorSamplers() {
    return this._flowIpv4IngressMonitorSamplers;
  }

  // flow_ipv4_ingress_monitors - computed: true, optional: false, required: false
  private _flowIpv4IngressMonitors = new DataIosxrInterfaceFlowIpv4IngressMonitorsList(this, "flow_ipv4_ingress_monitors", false);
  public get flowIpv4IngressMonitors() {
    return this._flowIpv4IngressMonitors;
  }

  // flow_ipv6_egress_monitor_samplers - computed: true, optional: false, required: false
  private _flowIpv6EgressMonitorSamplers = new DataIosxrInterfaceFlowIpv6EgressMonitorSamplersList(this, "flow_ipv6_egress_monitor_samplers", false);
  public get flowIpv6EgressMonitorSamplers() {
    return this._flowIpv6EgressMonitorSamplers;
  }

  // flow_ipv6_egress_monitors - computed: true, optional: false, required: false
  private _flowIpv6EgressMonitors = new DataIosxrInterfaceFlowIpv6EgressMonitorsList(this, "flow_ipv6_egress_monitors", false);
  public get flowIpv6EgressMonitors() {
    return this._flowIpv6EgressMonitors;
  }

  // flow_ipv6_ingress_monitor_samplers - computed: true, optional: false, required: false
  private _flowIpv6IngressMonitorSamplers = new DataIosxrInterfaceFlowIpv6IngressMonitorSamplersList(this, "flow_ipv6_ingress_monitor_samplers", false);
  public get flowIpv6IngressMonitorSamplers() {
    return this._flowIpv6IngressMonitorSamplers;
  }

  // flow_ipv6_ingress_monitors - computed: true, optional: false, required: false
  private _flowIpv6IngressMonitors = new DataIosxrInterfaceFlowIpv6IngressMonitorsList(this, "flow_ipv6_ingress_monitors", false);
  public get flowIpv6IngressMonitors() {
    return this._flowIpv6IngressMonitors;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_name - computed: false, optional: false, required: true
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // ipv4_access_group_egress_acl - computed: true, optional: false, required: false
  public get ipv4AccessGroupEgressAcl() {
    return this.getStringAttribute('ipv4_access_group_egress_acl');
  }

  // ipv4_access_group_egress_compress - computed: true, optional: false, required: false
  public get ipv4AccessGroupEgressCompress() {
    return this.getNumberAttribute('ipv4_access_group_egress_compress');
  }

  // ipv4_access_group_egress_hardware_count - computed: true, optional: false, required: false
  public get ipv4AccessGroupEgressHardwareCount() {
    return this.getBooleanAttribute('ipv4_access_group_egress_hardware_count');
  }

  // ipv4_access_group_egress_interface_statistics - computed: true, optional: false, required: false
  public get ipv4AccessGroupEgressInterfaceStatistics() {
    return this.getBooleanAttribute('ipv4_access_group_egress_interface_statistics');
  }

  // ipv4_access_group_ingress_acl1 - computed: true, optional: false, required: false
  public get ipv4AccessGroupIngressAcl1() {
    return this.getStringAttribute('ipv4_access_group_ingress_acl1');
  }

  // ipv4_access_group_ingress_compress - computed: true, optional: false, required: false
  public get ipv4AccessGroupIngressCompress() {
    return this.getNumberAttribute('ipv4_access_group_ingress_compress');
  }

  // ipv4_access_group_ingress_hardware_count - computed: true, optional: false, required: false
  public get ipv4AccessGroupIngressHardwareCount() {
    return this.getBooleanAttribute('ipv4_access_group_ingress_hardware_count');
  }

  // ipv4_access_group_ingress_interface_statistics - computed: true, optional: false, required: false
  public get ipv4AccessGroupIngressInterfaceStatistics() {
    return this.getBooleanAttribute('ipv4_access_group_ingress_interface_statistics');
  }

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }

  // ipv4_netmask - computed: true, optional: false, required: false
  public get ipv4Netmask() {
    return this.getStringAttribute('ipv4_netmask');
  }

  // ipv4_point_to_point - computed: true, optional: false, required: false
  public get ipv4PointToPoint() {
    return this.getBooleanAttribute('ipv4_point_to_point');
  }

  // ipv4_verify_unicast_source_reachable_via_allow_default - computed: true, optional: false, required: false
  public get ipv4VerifyUnicastSourceReachableViaAllowDefault() {
    return this.getBooleanAttribute('ipv4_verify_unicast_source_reachable_via_allow_default');
  }

  // ipv4_verify_unicast_source_reachable_via_allow_self_ping - computed: true, optional: false, required: false
  public get ipv4VerifyUnicastSourceReachableViaAllowSelfPing() {
    return this.getBooleanAttribute('ipv4_verify_unicast_source_reachable_via_allow_self_ping');
  }

  // ipv4_verify_unicast_source_reachable_via_type - computed: true, optional: false, required: false
  public get ipv4VerifyUnicastSourceReachableViaType() {
    return this.getStringAttribute('ipv4_verify_unicast_source_reachable_via_type');
  }

  // ipv6_access_group_egress_acl - computed: true, optional: false, required: false
  public get ipv6AccessGroupEgressAcl() {
    return this.getStringAttribute('ipv6_access_group_egress_acl');
  }

  // ipv6_access_group_egress_compress - computed: true, optional: false, required: false
  public get ipv6AccessGroupEgressCompress() {
    return this.getNumberAttribute('ipv6_access_group_egress_compress');
  }

  // ipv6_access_group_egress_interface_statistics - computed: true, optional: false, required: false
  public get ipv6AccessGroupEgressInterfaceStatistics() {
    return this.getBooleanAttribute('ipv6_access_group_egress_interface_statistics');
  }

  // ipv6_access_group_ingress_acl1 - computed: true, optional: false, required: false
  public get ipv6AccessGroupIngressAcl1() {
    return this.getStringAttribute('ipv6_access_group_ingress_acl1');
  }

  // ipv6_access_group_ingress_compress - computed: true, optional: false, required: false
  public get ipv6AccessGroupIngressCompress() {
    return this.getNumberAttribute('ipv6_access_group_ingress_compress');
  }

  // ipv6_access_group_ingress_interface_statistics - computed: true, optional: false, required: false
  public get ipv6AccessGroupIngressInterfaceStatistics() {
    return this.getBooleanAttribute('ipv6_access_group_ingress_interface_statistics');
  }

  // ipv6_addresses - computed: true, optional: false, required: false
  private _ipv6Addresses = new DataIosxrInterfaceIpv6AddressesList(this, "ipv6_addresses", false);
  public get ipv6Addresses() {
    return this._ipv6Addresses;
  }

  // ipv6_autoconfig - computed: true, optional: false, required: false
  public get ipv6Autoconfig() {
    return this.getBooleanAttribute('ipv6_autoconfig');
  }

  // ipv6_enable - computed: true, optional: false, required: false
  public get ipv6Enable() {
    return this.getBooleanAttribute('ipv6_enable');
  }

  // ipv6_link_local_address - computed: true, optional: false, required: false
  public get ipv6LinkLocalAddress() {
    return this.getStringAttribute('ipv6_link_local_address');
  }

  // ipv6_link_local_zone - computed: true, optional: false, required: false
  public get ipv6LinkLocalZone() {
    return this.getStringAttribute('ipv6_link_local_zone');
  }

  // ipv6_verify_unicast_source_reachable_via_allow_default - computed: true, optional: false, required: false
  public get ipv6VerifyUnicastSourceReachableViaAllowDefault() {
    return this.getBooleanAttribute('ipv6_verify_unicast_source_reachable_via_allow_default');
  }

  // ipv6_verify_unicast_source_reachable_via_allow_self_ping - computed: true, optional: false, required: false
  public get ipv6VerifyUnicastSourceReachableViaAllowSelfPing() {
    return this.getBooleanAttribute('ipv6_verify_unicast_source_reachable_via_allow_self_ping');
  }

  // ipv6_verify_unicast_source_reachable_via_type - computed: true, optional: false, required: false
  public get ipv6VerifyUnicastSourceReachableViaType() {
    return this.getStringAttribute('ipv6_verify_unicast_source_reachable_via_type');
  }

  // l2transport - computed: true, optional: false, required: false
  public get l2Transport() {
    return this.getBooleanAttribute('l2transport');
  }

  // l2transport_encapsulation_dot1q_second_dot1q - computed: true, optional: false, required: false
  public get l2TransportEncapsulationDot1QSecondDot1Q() {
    return this.getStringAttribute('l2transport_encapsulation_dot1q_second_dot1q');
  }

  // l2transport_encapsulation_dot1q_vlan_id - computed: true, optional: false, required: false
  public get l2TransportEncapsulationDot1QVlanId() {
    return this.getStringAttribute('l2transport_encapsulation_dot1q_vlan_id');
  }

  // load_interval - computed: true, optional: false, required: false
  public get loadInterval() {
    return this.getNumberAttribute('load_interval');
  }

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }

  // multipoint - computed: true, optional: false, required: false
  public get multipoint() {
    return this.getBooleanAttribute('multipoint');
  }

  // point_to_point - computed: true, optional: false, required: false
  public get pointToPoint() {
    return this.getBooleanAttribute('point_to_point');
  }

  // rewrite_ingress_tag_pop_one - computed: true, optional: false, required: false
  public get rewriteIngressTagPopOne() {
    return this.getBooleanAttribute('rewrite_ingress_tag_pop_one');
  }

  // rewrite_ingress_tag_pop_two - computed: true, optional: false, required: false
  public get rewriteIngressTagPopTwo() {
    return this.getBooleanAttribute('rewrite_ingress_tag_pop_two');
  }

  // service_policy_input - computed: true, optional: false, required: false
  private _servicePolicyInput = new DataIosxrInterfaceServicePolicyInputList(this, "service_policy_input", false);
  public get servicePolicyInput() {
    return this._servicePolicyInput;
  }

  // service_policy_output - computed: true, optional: false, required: false
  private _servicePolicyOutput = new DataIosxrInterfaceServicePolicyOutputList(this, "service_policy_output", false);
  public get servicePolicyOutput() {
    return this._servicePolicyOutput;
  }

  // shutdown - computed: true, optional: false, required: false
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
  }

  // unnumbered - computed: true, optional: false, required: false
  public get unnumbered() {
    return this.getStringAttribute('unnumbered');
  }

  // vrf - computed: true, optional: false, required: false
  public get vrf() {
    return this.getStringAttribute('vrf');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      interface_name: cdktf.stringToTerraform(this._interfaceName),
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
      interface_name: {
        value: cdktf.stringToHclTerraform(this._interfaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
