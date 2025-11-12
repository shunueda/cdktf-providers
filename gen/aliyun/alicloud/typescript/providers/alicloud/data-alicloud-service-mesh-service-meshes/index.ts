// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/service_mesh_service_meshes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudServiceMeshServiceMeshesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/service_mesh_service_meshes#enable_details DataAlicloudServiceMeshServiceMeshes#enable_details}
  */
  readonly enableDetails?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/service_mesh_service_meshes#id DataAlicloudServiceMeshServiceMeshes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/service_mesh_service_meshes#ids DataAlicloudServiceMeshServiceMeshes#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/service_mesh_service_meshes#name_regex DataAlicloudServiceMeshServiceMeshes#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/service_mesh_service_meshes#output_file DataAlicloudServiceMeshServiceMeshes#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/service_mesh_service_meshes#status DataAlicloudServiceMeshServiceMeshes#status}
  */
  readonly status?: string;
}
export interface DataAlicloudServiceMeshServiceMeshesMeshesEndpoints {
}

export function dataAlicloudServiceMeshServiceMeshesMeshesEndpointsToTerraform(struct?: DataAlicloudServiceMeshServiceMeshesMeshesEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudServiceMeshServiceMeshesMeshesEndpointsToHclTerraform(struct?: DataAlicloudServiceMeshServiceMeshesMeshesEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudServiceMeshServiceMeshesMeshesEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudServiceMeshServiceMeshesMeshesEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudServiceMeshServiceMeshesMeshesEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // intranet_api_server_endpoint - computed: true, optional: false, required: false
  public get intranetApiServerEndpoint() {
    return this.getStringAttribute('intranet_api_server_endpoint');
  }

  // intranet_pilot_endpoint - computed: true, optional: false, required: false
  public get intranetPilotEndpoint() {
    return this.getStringAttribute('intranet_pilot_endpoint');
  }

  // public_api_server_endpoint - computed: true, optional: false, required: false
  public get publicApiServerEndpoint() {
    return this.getStringAttribute('public_api_server_endpoint');
  }

  // public_pilot_endpoint - computed: true, optional: false, required: false
  public get publicPilotEndpoint() {
    return this.getStringAttribute('public_pilot_endpoint');
  }
}

export class DataAlicloudServiceMeshServiceMeshesMeshesEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudServiceMeshServiceMeshesMeshesEndpointsOutputReference {
    return new DataAlicloudServiceMeshServiceMeshesMeshesEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudServiceMeshServiceMeshesMeshesLoadBalancer {
}

export function dataAlicloudServiceMeshServiceMeshesMeshesLoadBalancerToTerraform(struct?: DataAlicloudServiceMeshServiceMeshesMeshesLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudServiceMeshServiceMeshesMeshesLoadBalancerToHclTerraform(struct?: DataAlicloudServiceMeshServiceMeshesMeshesLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudServiceMeshServiceMeshesMeshesLoadBalancerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudServiceMeshServiceMeshesMeshesLoadBalancer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudServiceMeshServiceMeshesMeshesLoadBalancer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_server_loadbalancer_id - computed: true, optional: false, required: false
  public get apiServerLoadbalancerId() {
    return this.getStringAttribute('api_server_loadbalancer_id');
  }

  // api_server_public_eip - computed: true, optional: false, required: false
  public get apiServerPublicEip() {
    return this.getBooleanAttribute('api_server_public_eip');
  }

  // pilot_public_eip - computed: true, optional: false, required: false
  public get pilotPublicEip() {
    return this.getBooleanAttribute('pilot_public_eip');
  }

  // pilot_public_loadbalancer_id - computed: true, optional: false, required: false
  public get pilotPublicLoadbalancerId() {
    return this.getStringAttribute('pilot_public_loadbalancer_id');
  }
}

export class DataAlicloudServiceMeshServiceMeshesMeshesLoadBalancerList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudServiceMeshServiceMeshesMeshesLoadBalancerOutputReference {
    return new DataAlicloudServiceMeshServiceMeshesMeshesLoadBalancerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigAccessLog {
}

export function dataAlicloudServiceMeshServiceMeshesMeshesMeshConfigAccessLogToTerraform(struct?: DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigAccessLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudServiceMeshServiceMeshesMeshesMeshConfigAccessLogToHclTerraform(struct?: DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigAccessLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigAccessLogOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigAccessLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigAccessLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // project - computed: true, optional: false, required: false
  public get project() {
    return this.getStringAttribute('project');
  }
}

export class DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigAccessLogList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigAccessLogOutputReference {
    return new DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigAccessLogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigAudit {
}

export function dataAlicloudServiceMeshServiceMeshesMeshesMeshConfigAuditToTerraform(struct?: DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigAudit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudServiceMeshServiceMeshesMeshesMeshConfigAuditToHclTerraform(struct?: DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigAudit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigAuditOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigAudit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigAudit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // project - computed: true, optional: false, required: false
  public get project() {
    return this.getStringAttribute('project');
  }
}

export class DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigAuditList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigAuditOutputReference {
    return new DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigAuditOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigControlPlaneLog {
}

export function dataAlicloudServiceMeshServiceMeshesMeshesMeshConfigControlPlaneLogToTerraform(struct?: DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigControlPlaneLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudServiceMeshServiceMeshesMeshesMeshConfigControlPlaneLogToHclTerraform(struct?: DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigControlPlaneLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigControlPlaneLogOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigControlPlaneLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigControlPlaneLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // project - computed: true, optional: false, required: false
  public get project() {
    return this.getStringAttribute('project');
  }
}

export class DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigControlPlaneLogList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigControlPlaneLogOutputReference {
    return new DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigControlPlaneLogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigKiali {
}

export function dataAlicloudServiceMeshServiceMeshesMeshesMeshConfigKialiToTerraform(struct?: DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigKiali): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudServiceMeshServiceMeshesMeshesMeshConfigKialiToHclTerraform(struct?: DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigKiali): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigKialiOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigKiali | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigKiali | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigKialiList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigKialiOutputReference {
    return new DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigKialiOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigOpa {
}

export function dataAlicloudServiceMeshServiceMeshesMeshesMeshConfigOpaToTerraform(struct?: DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigOpa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudServiceMeshServiceMeshesMeshesMeshConfigOpaToHclTerraform(struct?: DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigOpa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigOpaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigOpa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigOpa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // limit_cpu - computed: true, optional: false, required: false
  public get limitCpu() {
    return this.getStringAttribute('limit_cpu');
  }

  // limit_memory - computed: true, optional: false, required: false
  public get limitMemory() {
    return this.getStringAttribute('limit_memory');
  }

  // log_level - computed: true, optional: false, required: false
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }

  // request_cpu - computed: true, optional: false, required: false
  public get requestCpu() {
    return this.getStringAttribute('request_cpu');
  }

  // request_memory - computed: true, optional: false, required: false
  public get requestMemory() {
    return this.getStringAttribute('request_memory');
  }
}

export class DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigOpaList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigOpaOutputReference {
    return new DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigOpaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigPilot {
}

export function dataAlicloudServiceMeshServiceMeshesMeshesMeshConfigPilotToTerraform(struct?: DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigPilot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudServiceMeshServiceMeshesMeshesMeshConfigPilotToHclTerraform(struct?: DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigPilot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigPilotOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigPilot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigPilot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // http10_enabled - computed: true, optional: false, required: false
  public get http10Enabled() {
    return this.getBooleanAttribute('http10_enabled');
  }

  // trace_sampling - computed: true, optional: false, required: false
  public get traceSampling() {
    return this.getNumberAttribute('trace_sampling');
  }
}

export class DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigPilotList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigPilotOutputReference {
    return new DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigPilotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigPrometheus {
}

export function dataAlicloudServiceMeshServiceMeshesMeshesMeshConfigPrometheusToTerraform(struct?: DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigPrometheus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudServiceMeshServiceMeshesMeshesMeshConfigPrometheusToHclTerraform(struct?: DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigPrometheus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigPrometheusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigPrometheus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigPrometheus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // external_url - computed: true, optional: false, required: false
  public get externalUrl() {
    return this.getStringAttribute('external_url');
  }

  // use_external - computed: true, optional: false, required: false
  public get useExternal() {
    return this.getBooleanAttribute('use_external');
  }
}

export class DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigPrometheusList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigPrometheusOutputReference {
    return new DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigPrometheusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigProxy {
}

export function dataAlicloudServiceMeshServiceMeshesMeshesMeshConfigProxyToTerraform(struct?: DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudServiceMeshServiceMeshesMeshesMeshConfigProxyToHclTerraform(struct?: DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigProxyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigProxy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigProxy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_domain - computed: true, optional: false, required: false
  public get clusterDomain() {
    return this.getStringAttribute('cluster_domain');
  }

  // limit_cpu - computed: true, optional: false, required: false
  public get limitCpu() {
    return this.getStringAttribute('limit_cpu');
  }

  // limit_memory - computed: true, optional: false, required: false
  public get limitMemory() {
    return this.getStringAttribute('limit_memory');
  }

  // request_cpu - computed: true, optional: false, required: false
  public get requestCpu() {
    return this.getStringAttribute('request_cpu');
  }

  // request_memory - computed: true, optional: false, required: false
  public get requestMemory() {
    return this.getStringAttribute('request_memory');
  }
}

export class DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigProxyList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigProxyOutputReference {
    return new DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigProxyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigSidecarInjectorInitCniConfiguration {
}

export function dataAlicloudServiceMeshServiceMeshesMeshesMeshConfigSidecarInjectorInitCniConfigurationToTerraform(struct?: DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigSidecarInjectorInitCniConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudServiceMeshServiceMeshesMeshesMeshConfigSidecarInjectorInitCniConfigurationToHclTerraform(struct?: DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigSidecarInjectorInitCniConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigSidecarInjectorInitCniConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigSidecarInjectorInitCniConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigSidecarInjectorInitCniConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // exclude_namespaces - computed: true, optional: false, required: false
  public get excludeNamespaces() {
    return this.getStringAttribute('exclude_namespaces');
  }
}

export class DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigSidecarInjectorInitCniConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigSidecarInjectorInitCniConfigurationOutputReference {
    return new DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigSidecarInjectorInitCniConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigSidecarInjector {
}

export function dataAlicloudServiceMeshServiceMeshesMeshesMeshConfigSidecarInjectorToTerraform(struct?: DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigSidecarInjector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudServiceMeshServiceMeshesMeshesMeshConfigSidecarInjectorToHclTerraform(struct?: DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigSidecarInjector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigSidecarInjectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigSidecarInjector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigSidecarInjector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_injection_policy_enabled - computed: true, optional: false, required: false
  public get autoInjectionPolicyEnabled() {
    return this.getBooleanAttribute('auto_injection_policy_enabled');
  }

  // enable_namespaces_by_default - computed: true, optional: false, required: false
  public get enableNamespacesByDefault() {
    return this.getBooleanAttribute('enable_namespaces_by_default');
  }

  // init_cni_configuration - computed: true, optional: false, required: false
  private _initCniConfiguration = new DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigSidecarInjectorInitCniConfigurationList(this, "init_cni_configuration", false);
  public get initCniConfiguration() {
    return this._initCniConfiguration;
  }

  // limit_cpu - computed: true, optional: false, required: false
  public get limitCpu() {
    return this.getStringAttribute('limit_cpu');
  }

  // limit_memory - computed: true, optional: false, required: false
  public get limitMemory() {
    return this.getStringAttribute('limit_memory');
  }

  // request_cpu - computed: true, optional: false, required: false
  public get requestCpu() {
    return this.getStringAttribute('request_cpu');
  }

  // request_memory - computed: true, optional: false, required: false
  public get requestMemory() {
    return this.getStringAttribute('request_memory');
  }

  // sidecar_injector_webhook_as_yaml - computed: true, optional: false, required: false
  public get sidecarInjectorWebhookAsYaml() {
    return this.getStringAttribute('sidecar_injector_webhook_as_yaml');
  }
}

export class DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigSidecarInjectorList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigSidecarInjectorOutputReference {
    return new DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigSidecarInjectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudServiceMeshServiceMeshesMeshesMeshConfig {
}

export function dataAlicloudServiceMeshServiceMeshesMeshesMeshConfigToTerraform(struct?: DataAlicloudServiceMeshServiceMeshesMeshesMeshConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudServiceMeshServiceMeshesMeshesMeshConfigToHclTerraform(struct?: DataAlicloudServiceMeshServiceMeshesMeshesMeshConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudServiceMeshServiceMeshesMeshesMeshConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudServiceMeshServiceMeshesMeshesMeshConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_log - computed: true, optional: false, required: false
  private _accessLog = new DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigAccessLogList(this, "access_log", false);
  public get accessLog() {
    return this._accessLog;
  }

  // audit - computed: true, optional: false, required: false
  private _audit = new DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigAuditList(this, "audit", false);
  public get audit() {
    return this._audit;
  }

  // control_plane_log - computed: true, optional: false, required: false
  private _controlPlaneLog = new DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigControlPlaneLogList(this, "control_plane_log", false);
  public get controlPlaneLog() {
    return this._controlPlaneLog;
  }

  // customized_zipkin - computed: true, optional: false, required: false
  public get customizedZipkin() {
    return this.getBooleanAttribute('customized_zipkin');
  }

  // enable_locality_lb - computed: true, optional: false, required: false
  public get enableLocalityLb() {
    return this.getBooleanAttribute('enable_locality_lb');
  }

  // include_ip_ranges - computed: true, optional: false, required: false
  public get includeIpRanges() {
    return this.getStringAttribute('include_ip_ranges');
  }

  // kiali - computed: true, optional: false, required: false
  private _kiali = new DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigKialiList(this, "kiali", false);
  public get kiali() {
    return this._kiali;
  }

  // opa - computed: true, optional: false, required: false
  private _opa = new DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigOpaList(this, "opa", false);
  public get opa() {
    return this._opa;
  }

  // outbound_traffic_policy - computed: true, optional: false, required: false
  public get outboundTrafficPolicy() {
    return this.getStringAttribute('outbound_traffic_policy');
  }

  // pilot - computed: true, optional: false, required: false
  private _pilot = new DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigPilotList(this, "pilot", false);
  public get pilot() {
    return this._pilot;
  }

  // prometheus - computed: true, optional: false, required: false
  private _prometheus = new DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigPrometheusList(this, "prometheus", false);
  public get prometheus() {
    return this._prometheus;
  }

  // proxy - computed: true, optional: false, required: false
  private _proxy = new DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigProxyList(this, "proxy", false);
  public get proxy() {
    return this._proxy;
  }

  // sidecar_injector - computed: true, optional: false, required: false
  private _sidecarInjector = new DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigSidecarInjectorList(this, "sidecar_injector", false);
  public get sidecarInjector() {
    return this._sidecarInjector;
  }

  // telemetry - computed: true, optional: false, required: false
  public get telemetry() {
    return this.getBooleanAttribute('telemetry');
  }

  // tracing - computed: true, optional: false, required: false
  public get tracing() {
    return this.getBooleanAttribute('tracing');
  }
}

export class DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigOutputReference {
    return new DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudServiceMeshServiceMeshesMeshesNetwork {
}

export function dataAlicloudServiceMeshServiceMeshesMeshesNetworkToTerraform(struct?: DataAlicloudServiceMeshServiceMeshesMeshesNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudServiceMeshServiceMeshesMeshesNetworkToHclTerraform(struct?: DataAlicloudServiceMeshServiceMeshesMeshesNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudServiceMeshServiceMeshesMeshesNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudServiceMeshServiceMeshesMeshesNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudServiceMeshServiceMeshesMeshesNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // security_group_id - computed: true, optional: false, required: false
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // vswitche_list - computed: true, optional: false, required: false
  public get vswitcheList() {
    return this.getListAttribute('vswitche_list');
  }
}

export class DataAlicloudServiceMeshServiceMeshesMeshesNetworkList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudServiceMeshServiceMeshesMeshesNetworkOutputReference {
    return new DataAlicloudServiceMeshServiceMeshesMeshesNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudServiceMeshServiceMeshesMeshes {
}

export function dataAlicloudServiceMeshServiceMeshesMeshesToTerraform(struct?: DataAlicloudServiceMeshServiceMeshesMeshes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudServiceMeshServiceMeshesMeshesToHclTerraform(struct?: DataAlicloudServiceMeshServiceMeshesMeshes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudServiceMeshServiceMeshesMeshesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudServiceMeshServiceMeshesMeshes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudServiceMeshServiceMeshesMeshes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clusters - computed: true, optional: false, required: false
  public get clusters() {
    return this.getListAttribute('clusters');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // edition - computed: true, optional: false, required: false
  public get edition() {
    return this.getStringAttribute('edition');
  }

  // endpoints - computed: true, optional: false, required: false
  private _endpoints = new DataAlicloudServiceMeshServiceMeshesMeshesEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // istio_operator_version - computed: true, optional: false, required: false
  public get istioOperatorVersion() {
    return this.getStringAttribute('istio_operator_version');
  }

  // kube_config - computed: true, optional: false, required: false
  public get kubeConfig() {
    return this.getStringAttribute('kube_config');
  }

  // load_balancer - computed: true, optional: false, required: false
  private _loadBalancer = new DataAlicloudServiceMeshServiceMeshesMeshesLoadBalancerList(this, "load_balancer", false);
  public get loadBalancer() {
    return this._loadBalancer;
  }

  // mesh_config - computed: true, optional: false, required: false
  private _meshConfig = new DataAlicloudServiceMeshServiceMeshesMeshesMeshConfigList(this, "mesh_config", false);
  public get meshConfig() {
    return this._meshConfig;
  }

  // network - computed: true, optional: false, required: false
  private _network = new DataAlicloudServiceMeshServiceMeshesMeshesNetworkList(this, "network", false);
  public get network() {
    return this._network;
  }

  // service_mesh_id - computed: true, optional: false, required: false
  public get serviceMeshId() {
    return this.getStringAttribute('service_mesh_id');
  }

  // service_mesh_name - computed: true, optional: false, required: false
  public get serviceMeshName() {
    return this.getStringAttribute('service_mesh_name');
  }

  // sidecar_version - computed: true, optional: false, required: false
  public get sidecarVersion() {
    return this.getStringAttribute('sidecar_version');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataAlicloudServiceMeshServiceMeshesMeshesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudServiceMeshServiceMeshesMeshesOutputReference {
    return new DataAlicloudServiceMeshServiceMeshesMeshesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/service_mesh_service_meshes alicloud_service_mesh_service_meshes}
*/
export class DataAlicloudServiceMeshServiceMeshes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_service_mesh_service_meshes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudServiceMeshServiceMeshes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudServiceMeshServiceMeshes to import
  * @param importFromId The id of the existing DataAlicloudServiceMeshServiceMeshes that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/service_mesh_service_meshes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudServiceMeshServiceMeshes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_service_mesh_service_meshes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/service_mesh_service_meshes alicloud_service_mesh_service_meshes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudServiceMeshServiceMeshesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudServiceMeshServiceMeshesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_service_mesh_service_meshes',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableDetails = config.enableDetails;
    this._id = config.id;
    this._ids = config.ids;
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_details - computed: false, optional: true, required: false
  private _enableDetails?: boolean | cdktf.IResolvable; 
  public get enableDetails() {
    return this.getBooleanAttribute('enable_details');
  }
  public set enableDetails(value: boolean | cdktf.IResolvable) {
    this._enableDetails = value;
  }
  public resetEnableDetails() {
    this._enableDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDetailsInput() {
    return this._enableDetails;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // meshes - computed: true, optional: false, required: false
  private _meshes = new DataAlicloudServiceMeshServiceMeshesMeshesList(this, "meshes", false);
  public get meshes() {
    return this._meshes;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // status - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_details: cdktf.booleanToTerraform(this._enableDetails),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_details: {
        value: cdktf.booleanToHclTerraform(this._enableDetails),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
