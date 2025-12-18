// https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/peering
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PeeringConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Peering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/peering#display_name Peering#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/peering#id Peering#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * aws block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/peering#aws Peering#aws}
  */
  readonly aws?: PeeringAws;
  /**
  * azure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/peering#azure Peering#azure}
  */
  readonly azure?: PeeringAzure;
  /**
  * environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/peering#environment Peering#environment}
  */
  readonly environment: PeeringEnvironment;
  /**
  * gcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/peering#gcp Peering#gcp}
  */
  readonly gcp?: PeeringGcp;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/peering#network Peering#network}
  */
  readonly network: PeeringNetwork;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/peering#timeouts Peering#timeouts}
  */
  readonly timeouts?: PeeringTimeouts;
}
export interface PeeringAws {
  /**
  * AWS account for VPC to peer with the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/peering#account Peering#account}
  */
  readonly account: string;
  /**
  * Region of customer VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/peering#customer_region Peering#customer_region}
  */
  readonly customerRegion: string;
  /**
  * List of routes for the peering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/peering#routes Peering#routes}
  */
  readonly routes: string[];
  /**
  * The id of the AWS VPC to peer with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/peering#vpc Peering#vpc}
  */
  readonly vpc: string;
}

export function peeringAwsToTerraform(struct?: PeeringAwsOutputReference | PeeringAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account: cdktf.stringToTerraform(struct!.account),
    customer_region: cdktf.stringToTerraform(struct!.customerRegion),
    routes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routes),
    vpc: cdktf.stringToTerraform(struct!.vpc),
  }
}


export function peeringAwsToHclTerraform(struct?: PeeringAwsOutputReference | PeeringAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account: {
      value: cdktf.stringToHclTerraform(struct!.account),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    customer_region: {
      value: cdktf.stringToHclTerraform(struct!.customerRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vpc: {
      value: cdktf.stringToHclTerraform(struct!.vpc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PeeringAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PeeringAws | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._account !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account;
    }
    if (this._customerRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerRegion = this._customerRegion;
    }
    if (this._routes !== undefined) {
      hasAnyValues = true;
      internalValueResult.routes = this._routes;
    }
    if (this._vpc !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpc = this._vpc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PeeringAws | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._account = undefined;
      this._customerRegion = undefined;
      this._routes = undefined;
      this._vpc = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._account = value.account;
      this._customerRegion = value.customerRegion;
      this._routes = value.routes;
      this._vpc = value.vpc;
    }
  }

  // account - computed: false, optional: false, required: true
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // customer_region - computed: false, optional: false, required: true
  private _customerRegion?: string; 
  public get customerRegion() {
    return this.getStringAttribute('customer_region');
  }
  public set customerRegion(value: string) {
    this._customerRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customerRegionInput() {
    return this._customerRegion;
  }

  // routes - computed: false, optional: false, required: true
  private _routes?: string[]; 
  public get routes() {
    return this.getListAttribute('routes');
  }
  public set routes(value: string[]) {
    this._routes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routesInput() {
    return this._routes;
  }

  // vpc - computed: false, optional: false, required: true
  private _vpc?: string; 
  public get vpc() {
    return this.getStringAttribute('vpc');
  }
  public set vpc(value: string) {
    this._vpc = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc;
  }
}
export interface PeeringAzure {
  /**
  * Region of customer VNet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/peering#customer_region Peering#customer_region}
  */
  readonly customerRegion: string;
  /**
  * Customer Azure tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/peering#tenant Peering#tenant}
  */
  readonly tenant: string;
  /**
  * Customer VNet to peer with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/peering#vnet Peering#vnet}
  */
  readonly vnet: string;
}

export function peeringAzureToTerraform(struct?: PeeringAzureOutputReference | PeeringAzure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    customer_region: cdktf.stringToTerraform(struct!.customerRegion),
    tenant: cdktf.stringToTerraform(struct!.tenant),
    vnet: cdktf.stringToTerraform(struct!.vnet),
  }
}


export function peeringAzureToHclTerraform(struct?: PeeringAzureOutputReference | PeeringAzure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    customer_region: {
      value: cdktf.stringToHclTerraform(struct!.customerRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnet: {
      value: cdktf.stringToHclTerraform(struct!.vnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PeeringAzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PeeringAzure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customerRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerRegion = this._customerRegion;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    if (this._vnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnet = this._vnet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PeeringAzure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customerRegion = undefined;
      this._tenant = undefined;
      this._vnet = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customerRegion = value.customerRegion;
      this._tenant = value.tenant;
      this._vnet = value.vnet;
    }
  }

  // customer_region - computed: false, optional: false, required: true
  private _customerRegion?: string; 
  public get customerRegion() {
    return this.getStringAttribute('customer_region');
  }
  public set customerRegion(value: string) {
    this._customerRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customerRegionInput() {
    return this._customerRegion;
  }

  // tenant - computed: false, optional: false, required: true
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }

  // vnet - computed: false, optional: false, required: true
  private _vnet?: string; 
  public get vnet() {
    return this.getStringAttribute('vnet');
  }
  public set vnet(value: string) {
    this._vnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetInput() {
    return this._vnet;
  }
}
export interface PeeringEnvironment {
  /**
  * The unique identifier for the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/peering#id Peering#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function peeringEnvironmentToTerraform(struct?: PeeringEnvironmentOutputReference | PeeringEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function peeringEnvironmentToHclTerraform(struct?: PeeringEnvironmentOutputReference | PeeringEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PeeringEnvironmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PeeringEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PeeringEnvironment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
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
}
export interface PeeringGcp {
  /**
  * Enable customer route import. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/peering#import_custom_routes Peering#import_custom_routes}
  */
  readonly importCustomRoutes?: boolean | cdktf.IResolvable;
  /**
  * The name of the GCP project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/peering#project Peering#project}
  */
  readonly project: string;
  /**
  * The name of the GCP VPC network to peer with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/peering#vpc_network Peering#vpc_network}
  */
  readonly vpcNetwork: string;
}

export function peeringGcpToTerraform(struct?: PeeringGcpOutputReference | PeeringGcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    import_custom_routes: cdktf.booleanToTerraform(struct!.importCustomRoutes),
    project: cdktf.stringToTerraform(struct!.project),
    vpc_network: cdktf.stringToTerraform(struct!.vpcNetwork),
  }
}


export function peeringGcpToHclTerraform(struct?: PeeringGcpOutputReference | PeeringGcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    import_custom_routes: {
      value: cdktf.booleanToHclTerraform(struct!.importCustomRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_network: {
      value: cdktf.stringToHclTerraform(struct!.vpcNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PeeringGcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PeeringGcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._importCustomRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.importCustomRoutes = this._importCustomRoutes;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._vpcNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcNetwork = this._vpcNetwork;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PeeringGcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._importCustomRoutes = undefined;
      this._project = undefined;
      this._vpcNetwork = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._importCustomRoutes = value.importCustomRoutes;
      this._project = value.project;
      this._vpcNetwork = value.vpcNetwork;
    }
  }

  // import_custom_routes - computed: false, optional: true, required: false
  private _importCustomRoutes?: boolean | cdktf.IResolvable; 
  public get importCustomRoutes() {
    return this.getBooleanAttribute('import_custom_routes');
  }
  public set importCustomRoutes(value: boolean | cdktf.IResolvable) {
    this._importCustomRoutes = value;
  }
  public resetImportCustomRoutes() {
    this._importCustomRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importCustomRoutesInput() {
    return this._importCustomRoutes;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // vpc_network - computed: false, optional: false, required: true
  private _vpcNetwork?: string; 
  public get vpcNetwork() {
    return this.getStringAttribute('vpc_network');
  }
  public set vpcNetwork(value: string) {
    this._vpcNetwork = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcNetworkInput() {
    return this._vpcNetwork;
  }
}
export interface PeeringNetwork {
  /**
  * The unique identifier for the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/peering#id Peering#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function peeringNetworkToTerraform(struct?: PeeringNetworkOutputReference | PeeringNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function peeringNetworkToHclTerraform(struct?: PeeringNetworkOutputReference | PeeringNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PeeringNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PeeringNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PeeringNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
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
}
export interface PeeringTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/peering#create Peering#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/peering#delete Peering#delete}
  */
  readonly delete?: string;
}

export function peeringTimeoutsToTerraform(struct?: PeeringTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function peeringTimeoutsToHclTerraform(struct?: PeeringTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PeeringTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PeeringTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PeeringTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/peering confluent_peering}
*/
export class Peering extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "confluent_peering";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Peering resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Peering to import
  * @param importFromId The id of the existing Peering that should be imported. Refer to the {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/peering#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Peering to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "confluent_peering", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/peering confluent_peering} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PeeringConfig
  */
  public constructor(scope: Construct, id: string, config: PeeringConfig) {
    super(scope, id, {
      terraformResourceType: 'confluent_peering',
      terraformGeneratorMetadata: {
        providerName: 'confluent',
        providerVersion: '2.57.0',
        providerVersionConstraint: '2.57.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._displayName = config.displayName;
    this._id = config.id;
    this._aws.internalValue = config.aws;
    this._azure.internalValue = config.azure;
    this._environment.internalValue = config.environment;
    this._gcp.internalValue = config.gcp;
    this._network.internalValue = config.network;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // aws - computed: false, optional: true, required: false
  private _aws = new PeeringAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: PeeringAws) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }

  // azure - computed: false, optional: true, required: false
  private _azure = new PeeringAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: PeeringAzure) {
    this._azure.internalValue = value;
  }
  public resetAzure() {
    this._azure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure.internalValue;
  }

  // environment - computed: false, optional: false, required: true
  private _environment = new PeeringEnvironmentOutputReference(this, "environment");
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: PeeringEnvironment) {
    this._environment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }

  // gcp - computed: false, optional: true, required: false
  private _gcp = new PeeringGcpOutputReference(this, "gcp");
  public get gcp() {
    return this._gcp;
  }
  public putGcp(value: PeeringGcp) {
    this._gcp.internalValue = value;
  }
  public resetGcp() {
    this._gcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpInput() {
    return this._gcp.internalValue;
  }

  // network - computed: false, optional: false, required: true
  private _network = new PeeringNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: PeeringNetwork) {
    this._network.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PeeringTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PeeringTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      aws: peeringAwsToTerraform(this._aws.internalValue),
      azure: peeringAzureToTerraform(this._azure.internalValue),
      environment: peeringEnvironmentToTerraform(this._environment.internalValue),
      gcp: peeringGcpToTerraform(this._gcp.internalValue),
      network: peeringNetworkToTerraform(this._network.internalValue),
      timeouts: peeringTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      aws: {
        value: peeringAwsToHclTerraform(this._aws.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PeeringAwsList",
      },
      azure: {
        value: peeringAzureToHclTerraform(this._azure.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PeeringAzureList",
      },
      environment: {
        value: peeringEnvironmentToHclTerraform(this._environment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PeeringEnvironmentList",
      },
      gcp: {
        value: peeringGcpToHclTerraform(this._gcp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PeeringGcpList",
      },
      network: {
        value: peeringNetworkToHclTerraform(this._network.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PeeringNetworkList",
      },
      timeouts: {
        value: peeringTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PeeringTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
