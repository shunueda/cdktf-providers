// https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/data-sources/deployments
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEcDeploymentsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter the result set by the ID of the deployment template the deployment is based off.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/data-sources/deployments#deployment_template_id DataEcDeployments#deployment_template_id}
  */
  readonly deploymentTemplateId?: string;
  /**
  * Filter the result set by their health status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/data-sources/deployments#healthy DataEcDeployments#healthy}
  */
  readonly healthy?: string;
  /**
  * Filter the result by the full deployment name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/data-sources/deployments#name DataEcDeployments#name}
  */
  readonly name?: string;
  /**
  * Prefix to filter the returned deployment list by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/data-sources/deployments#name_prefix DataEcDeployments#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * The maximum number of deployments to return. Defaults to `100`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/data-sources/deployments#size DataEcDeployments#size}
  */
  readonly size?: number;
  /**
  * Filter the result set by their assigned tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/data-sources/deployments#tags DataEcDeployments#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * apm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/data-sources/deployments#apm DataEcDeployments#apm}
  */
  readonly apm?: DataEcDeploymentsApm[] | cdktf.IResolvable;
  /**
  * elasticsearch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/data-sources/deployments#elasticsearch DataEcDeployments#elasticsearch}
  */
  readonly elasticsearch?: DataEcDeploymentsElasticsearch[] | cdktf.IResolvable;
  /**
  * enterprise_search block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/data-sources/deployments#enterprise_search DataEcDeployments#enterprise_search}
  */
  readonly enterpriseSearch?: DataEcDeploymentsEnterpriseSearch[] | cdktf.IResolvable;
  /**
  * integrations_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/data-sources/deployments#integrations_server DataEcDeployments#integrations_server}
  */
  readonly integrationsServer?: DataEcDeploymentsIntegrationsServer[] | cdktf.IResolvable;
  /**
  * kibana block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/data-sources/deployments#kibana DataEcDeployments#kibana}
  */
  readonly kibana?: DataEcDeploymentsKibana[] | cdktf.IResolvable;
}
export interface DataEcDeploymentsDeployments {
}

export function dataEcDeploymentsDeploymentsToTerraform(struct?: DataEcDeploymentsDeployments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEcDeploymentsDeploymentsToHclTerraform(struct?: DataEcDeploymentsDeployments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEcDeploymentsDeploymentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEcDeploymentsDeployments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEcDeploymentsDeployments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // apm_ref_id - computed: true, optional: false, required: false
  public get apmRefId() {
    return this.getStringAttribute('apm_ref_id');
  }

  // apm_resource_id - computed: true, optional: false, required: false
  public get apmResourceId() {
    return this.getStringAttribute('apm_resource_id');
  }

  // deployment_id - computed: true, optional: false, required: false
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }

  // elasticsearch_ref_id - computed: true, optional: false, required: false
  public get elasticsearchRefId() {
    return this.getStringAttribute('elasticsearch_ref_id');
  }

  // elasticsearch_resource_id - computed: true, optional: false, required: false
  public get elasticsearchResourceId() {
    return this.getStringAttribute('elasticsearch_resource_id');
  }

  // enterprise_search_ref_id - computed: true, optional: false, required: false
  public get enterpriseSearchRefId() {
    return this.getStringAttribute('enterprise_search_ref_id');
  }

  // enterprise_search_resource_id - computed: true, optional: false, required: false
  public get enterpriseSearchResourceId() {
    return this.getStringAttribute('enterprise_search_resource_id');
  }

  // integrations_server_ref_id - computed: true, optional: false, required: false
  public get integrationsServerRefId() {
    return this.getStringAttribute('integrations_server_ref_id');
  }

  // integrations_server_resource_id - computed: true, optional: false, required: false
  public get integrationsServerResourceId() {
    return this.getStringAttribute('integrations_server_resource_id');
  }

  // kibana_ref_id - computed: true, optional: false, required: false
  public get kibanaRefId() {
    return this.getStringAttribute('kibana_ref_id');
  }

  // kibana_resource_id - computed: true, optional: false, required: false
  public get kibanaResourceId() {
    return this.getStringAttribute('kibana_resource_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataEcDeploymentsDeploymentsList extends cdktf.ComplexList {

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
  public get(index: number): DataEcDeploymentsDeploymentsOutputReference {
    return new DataEcDeploymentsDeploymentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEcDeploymentsApm {
  /**
  * Overall health status of the resource instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/data-sources/deployments#healthy DataEcDeployments#healthy}
  */
  readonly healthy?: string;
  /**
  * Resource kind status. Can be one of `initializing`, `stopping`, `stopped`, `rebooting`, `restarting`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/data-sources/deployments#status DataEcDeployments#status}
  */
  readonly status?: string;
  /**
  * Elastic stack version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/data-sources/deployments#version DataEcDeployments#version}
  */
  readonly version?: string;
}

export function dataEcDeploymentsApmToTerraform(struct?: DataEcDeploymentsApm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    healthy: cdktf.stringToTerraform(struct!.healthy),
    status: cdktf.stringToTerraform(struct!.status),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataEcDeploymentsApmToHclTerraform(struct?: DataEcDeploymentsApm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    healthy: {
      value: cdktf.stringToHclTerraform(struct!.healthy),
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
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataEcDeploymentsApmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEcDeploymentsApm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthy !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthy = this._healthy;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEcDeploymentsApm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._healthy = undefined;
      this._status = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._healthy = value.healthy;
      this._status = value.status;
      this._version = value.version;
    }
  }

  // healthy - computed: false, optional: true, required: false
  private _healthy?: string; 
  public get healthy() {
    return this.getStringAttribute('healthy');
  }
  public set healthy(value: string) {
    this._healthy = value;
  }
  public resetHealthy() {
    this._healthy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyInput() {
    return this._healthy;
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class DataEcDeploymentsApmList extends cdktf.ComplexList {
  public internalValue? : DataEcDeploymentsApm[] | cdktf.IResolvable

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
  public get(index: number): DataEcDeploymentsApmOutputReference {
    return new DataEcDeploymentsApmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEcDeploymentsElasticsearch {
  /**
  * Overall health status of the resource instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/data-sources/deployments#healthy DataEcDeployments#healthy}
  */
  readonly healthy?: string;
  /**
  * Resource kind status. Can be one of `initializing`, `stopping`, `stopped`, `rebooting`, `restarting`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/data-sources/deployments#status DataEcDeployments#status}
  */
  readonly status?: string;
  /**
  * Elastic stack version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/data-sources/deployments#version DataEcDeployments#version}
  */
  readonly version?: string;
}

export function dataEcDeploymentsElasticsearchToTerraform(struct?: DataEcDeploymentsElasticsearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    healthy: cdktf.stringToTerraform(struct!.healthy),
    status: cdktf.stringToTerraform(struct!.status),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataEcDeploymentsElasticsearchToHclTerraform(struct?: DataEcDeploymentsElasticsearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    healthy: {
      value: cdktf.stringToHclTerraform(struct!.healthy),
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
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataEcDeploymentsElasticsearchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEcDeploymentsElasticsearch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthy !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthy = this._healthy;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEcDeploymentsElasticsearch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._healthy = undefined;
      this._status = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._healthy = value.healthy;
      this._status = value.status;
      this._version = value.version;
    }
  }

  // healthy - computed: false, optional: true, required: false
  private _healthy?: string; 
  public get healthy() {
    return this.getStringAttribute('healthy');
  }
  public set healthy(value: string) {
    this._healthy = value;
  }
  public resetHealthy() {
    this._healthy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyInput() {
    return this._healthy;
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class DataEcDeploymentsElasticsearchList extends cdktf.ComplexList {
  public internalValue? : DataEcDeploymentsElasticsearch[] | cdktf.IResolvable

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
  public get(index: number): DataEcDeploymentsElasticsearchOutputReference {
    return new DataEcDeploymentsElasticsearchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEcDeploymentsEnterpriseSearch {
  /**
  * Overall health status of the resource instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/data-sources/deployments#healthy DataEcDeployments#healthy}
  */
  readonly healthy?: string;
  /**
  * Resource kind status. Can be one of `initializing`, `stopping`, `stopped`, `rebooting`, `restarting`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/data-sources/deployments#status DataEcDeployments#status}
  */
  readonly status?: string;
  /**
  * Elastic stack version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/data-sources/deployments#version DataEcDeployments#version}
  */
  readonly version?: string;
}

export function dataEcDeploymentsEnterpriseSearchToTerraform(struct?: DataEcDeploymentsEnterpriseSearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    healthy: cdktf.stringToTerraform(struct!.healthy),
    status: cdktf.stringToTerraform(struct!.status),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataEcDeploymentsEnterpriseSearchToHclTerraform(struct?: DataEcDeploymentsEnterpriseSearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    healthy: {
      value: cdktf.stringToHclTerraform(struct!.healthy),
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
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataEcDeploymentsEnterpriseSearchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEcDeploymentsEnterpriseSearch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthy !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthy = this._healthy;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEcDeploymentsEnterpriseSearch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._healthy = undefined;
      this._status = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._healthy = value.healthy;
      this._status = value.status;
      this._version = value.version;
    }
  }

  // healthy - computed: false, optional: true, required: false
  private _healthy?: string; 
  public get healthy() {
    return this.getStringAttribute('healthy');
  }
  public set healthy(value: string) {
    this._healthy = value;
  }
  public resetHealthy() {
    this._healthy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyInput() {
    return this._healthy;
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class DataEcDeploymentsEnterpriseSearchList extends cdktf.ComplexList {
  public internalValue? : DataEcDeploymentsEnterpriseSearch[] | cdktf.IResolvable

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
  public get(index: number): DataEcDeploymentsEnterpriseSearchOutputReference {
    return new DataEcDeploymentsEnterpriseSearchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEcDeploymentsIntegrationsServer {
  /**
  * Overall health status of the resource instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/data-sources/deployments#healthy DataEcDeployments#healthy}
  */
  readonly healthy?: string;
  /**
  * Resource kind status. Can be one of `initializing`, `stopping`, `stopped`, `rebooting`, `restarting`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/data-sources/deployments#status DataEcDeployments#status}
  */
  readonly status?: string;
  /**
  * Elastic stack version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/data-sources/deployments#version DataEcDeployments#version}
  */
  readonly version?: string;
}

export function dataEcDeploymentsIntegrationsServerToTerraform(struct?: DataEcDeploymentsIntegrationsServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    healthy: cdktf.stringToTerraform(struct!.healthy),
    status: cdktf.stringToTerraform(struct!.status),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataEcDeploymentsIntegrationsServerToHclTerraform(struct?: DataEcDeploymentsIntegrationsServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    healthy: {
      value: cdktf.stringToHclTerraform(struct!.healthy),
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
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataEcDeploymentsIntegrationsServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEcDeploymentsIntegrationsServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthy !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthy = this._healthy;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEcDeploymentsIntegrationsServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._healthy = undefined;
      this._status = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._healthy = value.healthy;
      this._status = value.status;
      this._version = value.version;
    }
  }

  // healthy - computed: false, optional: true, required: false
  private _healthy?: string; 
  public get healthy() {
    return this.getStringAttribute('healthy');
  }
  public set healthy(value: string) {
    this._healthy = value;
  }
  public resetHealthy() {
    this._healthy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyInput() {
    return this._healthy;
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class DataEcDeploymentsIntegrationsServerList extends cdktf.ComplexList {
  public internalValue? : DataEcDeploymentsIntegrationsServer[] | cdktf.IResolvable

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
  public get(index: number): DataEcDeploymentsIntegrationsServerOutputReference {
    return new DataEcDeploymentsIntegrationsServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEcDeploymentsKibana {
  /**
  * Overall health status of the resource instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/data-sources/deployments#healthy DataEcDeployments#healthy}
  */
  readonly healthy?: string;
  /**
  * Resource kind status. Can be one of `initializing`, `stopping`, `stopped`, `rebooting`, `restarting`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/data-sources/deployments#status DataEcDeployments#status}
  */
  readonly status?: string;
  /**
  * Elastic stack version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/data-sources/deployments#version DataEcDeployments#version}
  */
  readonly version?: string;
}

export function dataEcDeploymentsKibanaToTerraform(struct?: DataEcDeploymentsKibana | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    healthy: cdktf.stringToTerraform(struct!.healthy),
    status: cdktf.stringToTerraform(struct!.status),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataEcDeploymentsKibanaToHclTerraform(struct?: DataEcDeploymentsKibana | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    healthy: {
      value: cdktf.stringToHclTerraform(struct!.healthy),
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
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataEcDeploymentsKibanaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEcDeploymentsKibana | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthy !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthy = this._healthy;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEcDeploymentsKibana | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._healthy = undefined;
      this._status = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._healthy = value.healthy;
      this._status = value.status;
      this._version = value.version;
    }
  }

  // healthy - computed: false, optional: true, required: false
  private _healthy?: string; 
  public get healthy() {
    return this.getStringAttribute('healthy');
  }
  public set healthy(value: string) {
    this._healthy = value;
  }
  public resetHealthy() {
    this._healthy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyInput() {
    return this._healthy;
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class DataEcDeploymentsKibanaList extends cdktf.ComplexList {
  public internalValue? : DataEcDeploymentsKibana[] | cdktf.IResolvable

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
  public get(index: number): DataEcDeploymentsKibanaOutputReference {
    return new DataEcDeploymentsKibanaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/data-sources/deployments ec_deployments}
*/
export class DataEcDeployments extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ec_deployments";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEcDeployments resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEcDeployments to import
  * @param importFromId The id of the existing DataEcDeployments that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/data-sources/deployments#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEcDeployments to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ec_deployments", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/data-sources/deployments ec_deployments} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEcDeploymentsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataEcDeploymentsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ec_deployments',
      terraformGeneratorMetadata: {
        providerName: 'ec',
        providerVersion: '0.12.2',
        providerVersionConstraint: '0.12.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deploymentTemplateId = config.deploymentTemplateId;
    this._healthy = config.healthy;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._size = config.size;
    this._tags = config.tags;
    this._apm.internalValue = config.apm;
    this._elasticsearch.internalValue = config.elasticsearch;
    this._enterpriseSearch.internalValue = config.enterpriseSearch;
    this._integrationsServer.internalValue = config.integrationsServer;
    this._kibana.internalValue = config.kibana;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deployment_template_id - computed: false, optional: true, required: false
  private _deploymentTemplateId?: string; 
  public get deploymentTemplateId() {
    return this.getStringAttribute('deployment_template_id');
  }
  public set deploymentTemplateId(value: string) {
    this._deploymentTemplateId = value;
  }
  public resetDeploymentTemplateId() {
    this._deploymentTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTemplateIdInput() {
    return this._deploymentTemplateId;
  }

  // deployments - computed: true, optional: false, required: false
  private _deployments = new DataEcDeploymentsDeploymentsList(this, "deployments", false);
  public get deployments() {
    return this._deployments;
  }

  // healthy - computed: false, optional: true, required: false
  private _healthy?: string; 
  public get healthy() {
    return this.getStringAttribute('healthy');
  }
  public set healthy(value: string) {
    this._healthy = value;
  }
  public resetHealthy() {
    this._healthy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyInput() {
    return this._healthy;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // return_count - computed: true, optional: false, required: false
  public get returnCount() {
    return this.getNumberAttribute('return_count');
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // apm - computed: false, optional: true, required: false
  private _apm = new DataEcDeploymentsApmList(this, "apm", false);
  public get apm() {
    return this._apm;
  }
  public putApm(value: DataEcDeploymentsApm[] | cdktf.IResolvable) {
    this._apm.internalValue = value;
  }
  public resetApm() {
    this._apm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apmInput() {
    return this._apm.internalValue;
  }

  // elasticsearch - computed: false, optional: true, required: false
  private _elasticsearch = new DataEcDeploymentsElasticsearchList(this, "elasticsearch", false);
  public get elasticsearch() {
    return this._elasticsearch;
  }
  public putElasticsearch(value: DataEcDeploymentsElasticsearch[] | cdktf.IResolvable) {
    this._elasticsearch.internalValue = value;
  }
  public resetElasticsearch() {
    this._elasticsearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchInput() {
    return this._elasticsearch.internalValue;
  }

  // enterprise_search - computed: false, optional: true, required: false
  private _enterpriseSearch = new DataEcDeploymentsEnterpriseSearchList(this, "enterprise_search", false);
  public get enterpriseSearch() {
    return this._enterpriseSearch;
  }
  public putEnterpriseSearch(value: DataEcDeploymentsEnterpriseSearch[] | cdktf.IResolvable) {
    this._enterpriseSearch.internalValue = value;
  }
  public resetEnterpriseSearch() {
    this._enterpriseSearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseSearchInput() {
    return this._enterpriseSearch.internalValue;
  }

  // integrations_server - computed: false, optional: true, required: false
  private _integrationsServer = new DataEcDeploymentsIntegrationsServerList(this, "integrations_server", false);
  public get integrationsServer() {
    return this._integrationsServer;
  }
  public putIntegrationsServer(value: DataEcDeploymentsIntegrationsServer[] | cdktf.IResolvable) {
    this._integrationsServer.internalValue = value;
  }
  public resetIntegrationsServer() {
    this._integrationsServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationsServerInput() {
    return this._integrationsServer.internalValue;
  }

  // kibana - computed: false, optional: true, required: false
  private _kibana = new DataEcDeploymentsKibanaList(this, "kibana", false);
  public get kibana() {
    return this._kibana;
  }
  public putKibana(value: DataEcDeploymentsKibana[] | cdktf.IResolvable) {
    this._kibana.internalValue = value;
  }
  public resetKibana() {
    this._kibana.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kibanaInput() {
    return this._kibana.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deployment_template_id: cdktf.stringToTerraform(this._deploymentTemplateId),
      healthy: cdktf.stringToTerraform(this._healthy),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      size: cdktf.numberToTerraform(this._size),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      apm: cdktf.listMapper(dataEcDeploymentsApmToTerraform, true)(this._apm.internalValue),
      elasticsearch: cdktf.listMapper(dataEcDeploymentsElasticsearchToTerraform, true)(this._elasticsearch.internalValue),
      enterprise_search: cdktf.listMapper(dataEcDeploymentsEnterpriseSearchToTerraform, true)(this._enterpriseSearch.internalValue),
      integrations_server: cdktf.listMapper(dataEcDeploymentsIntegrationsServerToTerraform, true)(this._integrationsServer.internalValue),
      kibana: cdktf.listMapper(dataEcDeploymentsKibanaToTerraform, true)(this._kibana.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deployment_template_id: {
        value: cdktf.stringToHclTerraform(this._deploymentTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      healthy: {
        value: cdktf.stringToHclTerraform(this._healthy),
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
      name_prefix: {
        value: cdktf.stringToHclTerraform(this._namePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      apm: {
        value: cdktf.listMapperHcl(dataEcDeploymentsApmToHclTerraform, true)(this._apm.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataEcDeploymentsApmList",
      },
      elasticsearch: {
        value: cdktf.listMapperHcl(dataEcDeploymentsElasticsearchToHclTerraform, true)(this._elasticsearch.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataEcDeploymentsElasticsearchList",
      },
      enterprise_search: {
        value: cdktf.listMapperHcl(dataEcDeploymentsEnterpriseSearchToHclTerraform, true)(this._enterpriseSearch.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataEcDeploymentsEnterpriseSearchList",
      },
      integrations_server: {
        value: cdktf.listMapperHcl(dataEcDeploymentsIntegrationsServerToHclTerraform, true)(this._integrationsServer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataEcDeploymentsIntegrationsServerList",
      },
      kibana: {
        value: cdktf.listMapperHcl(dataEcDeploymentsKibanaToHclTerraform, true)(this._kibana.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataEcDeploymentsKibanaList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
