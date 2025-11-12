// https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/arc_job_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ArcJobV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/arc_job_v1#id ArcJobV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/arc_job_v1#region ArcJobV1#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/arc_job_v1#timeout ArcJobV1#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/arc_job_v1#to ArcJobV1#to}
  */
  readonly to: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/arc_job_v1#triggers ArcJobV1#triggers}
  */
  readonly triggers?: { [key: string]: string };
  /**
  * chef block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/arc_job_v1#chef ArcJobV1#chef}
  */
  readonly chef?: ArcJobV1Chef;
  /**
  * execute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/arc_job_v1#execute ArcJobV1#execute}
  */
  readonly execute?: ArcJobV1Execute;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/arc_job_v1#timeouts ArcJobV1#timeouts}
  */
  readonly timeouts?: ArcJobV1Timeouts;
}
export interface ArcJobV1User {
}

export function arcJobV1UserToTerraform(struct?: ArcJobV1User): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function arcJobV1UserToHclTerraform(struct?: ArcJobV1User): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ArcJobV1UserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ArcJobV1User | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcJobV1User | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // roles - computed: true, optional: false, required: false
  public get roles() {
    return this.getListAttribute('roles');
  }
}

export class ArcJobV1UserList extends cdktf.ComplexList {

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
  public get(index: number): ArcJobV1UserOutputReference {
    return new ArcJobV1UserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcJobV1ChefEnable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/arc_job_v1#chef_version ArcJobV1#chef_version}
  */
  readonly chefVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/arc_job_v1#omnitruck_url ArcJobV1#omnitruck_url}
  */
  readonly omnitruckUrl?: string;
}

export function arcJobV1ChefEnableToTerraform(struct?: ArcJobV1ChefEnableOutputReference | ArcJobV1ChefEnable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chef_version: cdktf.stringToTerraform(struct!.chefVersion),
    omnitruck_url: cdktf.stringToTerraform(struct!.omnitruckUrl),
  }
}


export function arcJobV1ChefEnableToHclTerraform(struct?: ArcJobV1ChefEnableOutputReference | ArcJobV1ChefEnable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chef_version: {
      value: cdktf.stringToHclTerraform(struct!.chefVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    omnitruck_url: {
      value: cdktf.stringToHclTerraform(struct!.omnitruckUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcJobV1ChefEnableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArcJobV1ChefEnable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chefVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.chefVersion = this._chefVersion;
    }
    if (this._omnitruckUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.omnitruckUrl = this._omnitruckUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcJobV1ChefEnable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._chefVersion = undefined;
      this._omnitruckUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._chefVersion = value.chefVersion;
      this._omnitruckUrl = value.omnitruckUrl;
    }
  }

  // chef_version - computed: false, optional: true, required: false
  private _chefVersion?: string; 
  public get chefVersion() {
    return this.getStringAttribute('chef_version');
  }
  public set chefVersion(value: string) {
    this._chefVersion = value;
  }
  public resetChefVersion() {
    this._chefVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chefVersionInput() {
    return this._chefVersion;
  }

  // omnitruck_url - computed: false, optional: true, required: false
  private _omnitruckUrl?: string; 
  public get omnitruckUrl() {
    return this.getStringAttribute('omnitruck_url');
  }
  public set omnitruckUrl(value: string) {
    this._omnitruckUrl = value;
  }
  public resetOmnitruckUrl() {
    this._omnitruckUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get omnitruckUrlInput() {
    return this._omnitruckUrl;
  }
}
export interface ArcJobV1ChefZero {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/arc_job_v1#attributes ArcJobV1#attributes}
  */
  readonly attributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/arc_job_v1#chef_version ArcJobV1#chef_version}
  */
  readonly chefVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/arc_job_v1#debug ArcJobV1#debug}
  */
  readonly debug?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/arc_job_v1#node_name ArcJobV1#node_name}
  */
  readonly nodeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/arc_job_v1#nodes ArcJobV1#nodes}
  */
  readonly nodes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/arc_job_v1#omnitruck_url ArcJobV1#omnitruck_url}
  */
  readonly omnitruckUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/arc_job_v1#recipe_url ArcJobV1#recipe_url}
  */
  readonly recipeUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/arc_job_v1#run_list ArcJobV1#run_list}
  */
  readonly runList: string[];
}

export function arcJobV1ChefZeroToTerraform(struct?: ArcJobV1ChefZeroOutputReference | ArcJobV1ChefZero): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktf.stringToTerraform(struct!.attributes),
    chef_version: cdktf.stringToTerraform(struct!.chefVersion),
    debug: cdktf.booleanToTerraform(struct!.debug),
    node_name: cdktf.stringToTerraform(struct!.nodeName),
    nodes: cdktf.stringToTerraform(struct!.nodes),
    omnitruck_url: cdktf.stringToTerraform(struct!.omnitruckUrl),
    recipe_url: cdktf.stringToTerraform(struct!.recipeUrl),
    run_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.runList),
  }
}


export function arcJobV1ChefZeroToHclTerraform(struct?: ArcJobV1ChefZeroOutputReference | ArcJobV1ChefZero): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes: {
      value: cdktf.stringToHclTerraform(struct!.attributes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chef_version: {
      value: cdktf.stringToHclTerraform(struct!.chefVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    debug: {
      value: cdktf.booleanToHclTerraform(struct!.debug),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node_name: {
      value: cdktf.stringToHclTerraform(struct!.nodeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nodes: {
      value: cdktf.stringToHclTerraform(struct!.nodes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    omnitruck_url: {
      value: cdktf.stringToHclTerraform(struct!.omnitruckUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recipe_url: {
      value: cdktf.stringToHclTerraform(struct!.recipeUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.runList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcJobV1ChefZeroOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArcJobV1ChefZero | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._chefVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.chefVersion = this._chefVersion;
    }
    if (this._debug !== undefined) {
      hasAnyValues = true;
      internalValueResult.debug = this._debug;
    }
    if (this._nodeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeName = this._nodeName;
    }
    if (this._nodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodes = this._nodes;
    }
    if (this._omnitruckUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.omnitruckUrl = this._omnitruckUrl;
    }
    if (this._recipeUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipeUrl = this._recipeUrl;
    }
    if (this._runList !== undefined) {
      hasAnyValues = true;
      internalValueResult.runList = this._runList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcJobV1ChefZero | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attributes = undefined;
      this._chefVersion = undefined;
      this._debug = undefined;
      this._nodeName = undefined;
      this._nodes = undefined;
      this._omnitruckUrl = undefined;
      this._recipeUrl = undefined;
      this._runList = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attributes = value.attributes;
      this._chefVersion = value.chefVersion;
      this._debug = value.debug;
      this._nodeName = value.nodeName;
      this._nodes = value.nodes;
      this._omnitruckUrl = value.omnitruckUrl;
      this._recipeUrl = value.recipeUrl;
      this._runList = value.runList;
    }
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: string; 
  public get attributes() {
    return this.getStringAttribute('attributes');
  }
  public set attributes(value: string) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // chef_version - computed: false, optional: true, required: false
  private _chefVersion?: string; 
  public get chefVersion() {
    return this.getStringAttribute('chef_version');
  }
  public set chefVersion(value: string) {
    this._chefVersion = value;
  }
  public resetChefVersion() {
    this._chefVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chefVersionInput() {
    return this._chefVersion;
  }

  // debug - computed: false, optional: true, required: false
  private _debug?: boolean | cdktf.IResolvable; 
  public get debug() {
    return this.getBooleanAttribute('debug');
  }
  public set debug(value: boolean | cdktf.IResolvable) {
    this._debug = value;
  }
  public resetDebug() {
    this._debug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug;
  }

  // node_name - computed: false, optional: true, required: false
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  public resetNodeName() {
    this._nodeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }

  // nodes - computed: false, optional: true, required: false
  private _nodes?: string; 
  public get nodes() {
    return this.getStringAttribute('nodes');
  }
  public set nodes(value: string) {
    this._nodes = value;
  }
  public resetNodes() {
    this._nodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes;
  }

  // omnitruck_url - computed: false, optional: true, required: false
  private _omnitruckUrl?: string; 
  public get omnitruckUrl() {
    return this.getStringAttribute('omnitruck_url');
  }
  public set omnitruckUrl(value: string) {
    this._omnitruckUrl = value;
  }
  public resetOmnitruckUrl() {
    this._omnitruckUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get omnitruckUrlInput() {
    return this._omnitruckUrl;
  }

  // recipe_url - computed: false, optional: false, required: true
  private _recipeUrl?: string; 
  public get recipeUrl() {
    return this.getStringAttribute('recipe_url');
  }
  public set recipeUrl(value: string) {
    this._recipeUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recipeUrlInput() {
    return this._recipeUrl;
  }

  // run_list - computed: false, optional: false, required: true
  private _runList?: string[]; 
  public get runList() {
    return this.getListAttribute('run_list');
  }
  public set runList(value: string[]) {
    this._runList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runListInput() {
    return this._runList;
  }
}
export interface ArcJobV1Chef {
  /**
  * enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/arc_job_v1#enable ArcJobV1#enable}
  */
  readonly enable?: ArcJobV1ChefEnable;
  /**
  * zero block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/arc_job_v1#zero ArcJobV1#zero}
  */
  readonly zero?: ArcJobV1ChefZero;
}

export function arcJobV1ChefToTerraform(struct?: ArcJobV1ChefOutputReference | ArcJobV1Chef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: arcJobV1ChefEnableToTerraform(struct!.enable),
    zero: arcJobV1ChefZeroToTerraform(struct!.zero),
  }
}


export function arcJobV1ChefToHclTerraform(struct?: ArcJobV1ChefOutputReference | ArcJobV1Chef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: arcJobV1ChefEnableToHclTerraform(struct!.enable),
      isBlock: true,
      type: "list",
      storageClassType: "ArcJobV1ChefEnableList",
    },
    zero: {
      value: arcJobV1ChefZeroToHclTerraform(struct!.zero),
      isBlock: true,
      type: "list",
      storageClassType: "ArcJobV1ChefZeroList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcJobV1ChefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArcJobV1Chef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable?.internalValue;
    }
    if (this._zero?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zero = this._zero?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcJobV1Chef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable.internalValue = undefined;
      this._zero.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable.internalValue = value.enable;
      this._zero.internalValue = value.zero;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable = new ArcJobV1ChefEnableOutputReference(this, "enable");
  public get enable() {
    return this._enable;
  }
  public putEnable(value: ArcJobV1ChefEnable) {
    this._enable.internalValue = value;
  }
  public resetEnable() {
    this._enable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable.internalValue;
  }

  // zero - computed: false, optional: true, required: false
  private _zero = new ArcJobV1ChefZeroOutputReference(this, "zero");
  public get zero() {
    return this._zero;
  }
  public putZero(value: ArcJobV1ChefZero) {
    this._zero.internalValue = value;
  }
  public resetZero() {
    this._zero.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroInput() {
    return this._zero.internalValue;
  }
}
export interface ArcJobV1ExecuteTarball {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/arc_job_v1#arguments ArcJobV1#arguments}
  */
  readonly arguments?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/arc_job_v1#environment ArcJobV1#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/arc_job_v1#path ArcJobV1#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/arc_job_v1#url ArcJobV1#url}
  */
  readonly url: string;
}

export function arcJobV1ExecuteTarballToTerraform(struct?: ArcJobV1ExecuteTarballOutputReference | ArcJobV1ExecuteTarball): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arguments: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.arguments),
    environment: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environment),
    path: cdktf.stringToTerraform(struct!.path),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function arcJobV1ExecuteTarballToHclTerraform(struct?: ArcJobV1ExecuteTarballOutputReference | ArcJobV1ExecuteTarball): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arguments: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.arguments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    environment: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.environment),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcJobV1ExecuteTarballOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArcJobV1ExecuteTarball | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.arguments = this._arguments;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcJobV1ExecuteTarball | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arguments = undefined;
      this._environment = undefined;
      this._path = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arguments = value.arguments;
      this._environment = value.environment;
      this._path = value.path;
      this._url = value.url;
    }
  }

  // arguments - computed: false, optional: true, required: false
  private _arguments?: string[]; 
  public get arguments() {
    return this.getListAttribute('arguments');
  }
  public set arguments(value: string[]) {
    this._arguments = value;
  }
  public resetArguments() {
    this._arguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentsInput() {
    return this._arguments;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface ArcJobV1Execute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/arc_job_v1#script ArcJobV1#script}
  */
  readonly script?: string;
  /**
  * tarball block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/arc_job_v1#tarball ArcJobV1#tarball}
  */
  readonly tarball?: ArcJobV1ExecuteTarball;
}

export function arcJobV1ExecuteToTerraform(struct?: ArcJobV1ExecuteOutputReference | ArcJobV1Execute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    script: cdktf.stringToTerraform(struct!.script),
    tarball: arcJobV1ExecuteTarballToTerraform(struct!.tarball),
  }
}


export function arcJobV1ExecuteToHclTerraform(struct?: ArcJobV1ExecuteOutputReference | ArcJobV1Execute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    script: {
      value: cdktf.stringToHclTerraform(struct!.script),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tarball: {
      value: arcJobV1ExecuteTarballToHclTerraform(struct!.tarball),
      isBlock: true,
      type: "list",
      storageClassType: "ArcJobV1ExecuteTarballList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcJobV1ExecuteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArcJobV1Execute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._script !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script;
    }
    if (this._tarball?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tarball = this._tarball?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcJobV1Execute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._script = undefined;
      this._tarball.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._script = value.script;
      this._tarball.internalValue = value.tarball;
    }
  }

  // script - computed: false, optional: true, required: false
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  public resetScript() {
    this._script = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }

  // tarball - computed: false, optional: true, required: false
  private _tarball = new ArcJobV1ExecuteTarballOutputReference(this, "tarball");
  public get tarball() {
    return this._tarball;
  }
  public putTarball(value: ArcJobV1ExecuteTarball) {
    this._tarball.internalValue = value;
  }
  public resetTarball() {
    this._tarball.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tarballInput() {
    return this._tarball.internalValue;
  }
}
export interface ArcJobV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/arc_job_v1#create ArcJobV1#create}
  */
  readonly create?: string;
}

export function arcJobV1TimeoutsToTerraform(struct?: ArcJobV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function arcJobV1TimeoutsToHclTerraform(struct?: ArcJobV1Timeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcJobV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ArcJobV1Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcJobV1Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/arc_job_v1 sci_arc_job_v1}
*/
export class ArcJobV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sci_arc_job_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ArcJobV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ArcJobV1 to import
  * @param importFromId The id of the existing ArcJobV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/arc_job_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ArcJobV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sci_arc_job_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/arc_job_v1 sci_arc_job_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ArcJobV1Config
  */
  public constructor(scope: Construct, id: string, config: ArcJobV1Config) {
    super(scope, id, {
      terraformResourceType: 'sci_arc_job_v1',
      terraformGeneratorMetadata: {
        providerName: 'sci',
        providerVersion: '2.2.1',
        providerVersionConstraint: '2.2.1'
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
    this._region = config.region;
    this._timeout = config.timeout;
    this._to = config.to;
    this._triggers = config.triggers;
    this._chef.internalValue = config.chef;
    this._execute.internalValue = config.execute;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // agent - computed: true, optional: false, required: false
  public get agent() {
    return this.getStringAttribute('agent');
  }

  // agent_id - computed: true, optional: false, required: false
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // log - computed: true, optional: false, required: false
  public get log() {
    return this.getStringAttribute('log');
  }

  // payload - computed: true, optional: false, required: false
  public get payload() {
    return this.getStringAttribute('payload');
  }

  // project - computed: true, optional: false, required: false
  public get project() {
    return this.getStringAttribute('project');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // sender - computed: true, optional: false, required: false
  public get sender() {
    return this.getStringAttribute('sender');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // to - computed: false, optional: false, required: true
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }

  // triggers - computed: false, optional: true, required: false
  private _triggers?: { [key: string]: string }; 
  public get triggers() {
    return this.getStringMapAttribute('triggers');
  }
  public set triggers(value: { [key: string]: string }) {
    this._triggers = value;
  }
  public resetTriggers() {
    this._triggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // user - computed: true, optional: false, required: false
  private _user = new ArcJobV1UserList(this, "user", false);
  public get user() {
    return this._user;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // chef - computed: false, optional: true, required: false
  private _chef = new ArcJobV1ChefOutputReference(this, "chef");
  public get chef() {
    return this._chef;
  }
  public putChef(value: ArcJobV1Chef) {
    this._chef.internalValue = value;
  }
  public resetChef() {
    this._chef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chefInput() {
    return this._chef.internalValue;
  }

  // execute - computed: false, optional: true, required: false
  private _execute = new ArcJobV1ExecuteOutputReference(this, "execute");
  public get execute() {
    return this._execute;
  }
  public putExecute(value: ArcJobV1Execute) {
    this._execute.internalValue = value;
  }
  public resetExecute() {
    this._execute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeInput() {
    return this._execute.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ArcJobV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ArcJobV1Timeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      timeout: cdktf.numberToTerraform(this._timeout),
      to: cdktf.stringToTerraform(this._to),
      triggers: cdktf.hashMapper(cdktf.stringToTerraform)(this._triggers),
      chef: arcJobV1ChefToTerraform(this._chef.internalValue),
      execute: arcJobV1ExecuteToTerraform(this._execute.internalValue),
      timeouts: arcJobV1TimeoutsToTerraform(this._timeouts.internalValue),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      to: {
        value: cdktf.stringToHclTerraform(this._to),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      triggers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._triggers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      chef: {
        value: arcJobV1ChefToHclTerraform(this._chef.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ArcJobV1ChefList",
      },
      execute: {
        value: arcJobV1ExecuteToHclTerraform(this._execute.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ArcJobV1ExecuteList",
      },
      timeouts: {
        value: arcJobV1TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ArcJobV1Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
