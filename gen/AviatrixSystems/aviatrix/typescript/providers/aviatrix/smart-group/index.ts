// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/smart_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SmartGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/smart_group#id SmartGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the Smart Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/smart_group#name SmartGroup#name}
  */
  readonly name: string;
  /**
  * selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/smart_group#selector SmartGroup#selector}
  */
  readonly selector: SmartGroupSelector;
}
export interface SmartGroupSelectorMatchExpressions {
  /**
  * Account ID this expression matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/smart_group#account_id SmartGroup#account_id}
  */
  readonly accountId?: string;
  /**
  * Account name this expression matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/smart_group#account_name SmartGroup#account_name}
  */
  readonly accountName?: string;
  /**
  * CIDR block or IP Address this expression matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/smart_group#cidr SmartGroup#cidr}
  */
  readonly cidr?: string;
  /**
  * Map of external arguments this expression matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/smart_group#ext_args SmartGroup#ext_args}
  */
  readonly extArgs?: { [key: string]: string };
  /**
  * Identifier of remote data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/smart_group#external SmartGroup#external}
  */
  readonly external?: string;
  /**
  * FQDN address this expression matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/smart_group#fqdn SmartGroup#fqdn}
  */
  readonly fqdn?: string;
  /**
  * Kubernetes Cluster ID this expression matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/smart_group#k8s_cluster_id SmartGroup#k8s_cluster_id}
  */
  readonly k8SClusterId?: string;
  /**
  * Name of the Kubernetes Namespace this expression matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/smart_group#k8s_namespace SmartGroup#k8s_namespace}
  */
  readonly k8SNamespace?: string;
  /**
  * Name of the Kubernetes Pod this expression matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/smart_group#k8s_pod SmartGroup#k8s_pod}
  */
  readonly k8SPod?: string;
  /**
  * Name of the Kubernetes Service this expression matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/smart_group#k8s_service SmartGroup#k8s_service}
  */
  readonly k8SService?: string;
  /**
  * Name this expression matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/smart_group#name SmartGroup#name}
  */
  readonly name?: string;
  /**
  * Region this expression matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/smart_group#region SmartGroup#region}
  */
  readonly region?: string;
  /**
  * Resource ID this expression matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/smart_group#res_id SmartGroup#res_id}
  */
  readonly resId?: string;
  /**
  * Name of remote site.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/smart_group#s2c SmartGroup#s2c}
  */
  readonly s2C?: string;
  /**
  * Edge Site-ID this expression matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/smart_group#site SmartGroup#site}
  */
  readonly site?: string;
  /**
  * Map of tags this expression matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/smart_group#tags SmartGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Type of resource this expression matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/smart_group#type SmartGroup#type}
  */
  readonly type?: string;
  /**
  * Zone this expression matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/smart_group#zone SmartGroup#zone}
  */
  readonly zone?: string;
}

export function smartGroupSelectorMatchExpressionsToTerraform(struct?: SmartGroupSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    account_name: cdktf.stringToTerraform(struct!.accountName),
    cidr: cdktf.stringToTerraform(struct!.cidr),
    ext_args: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extArgs),
    external: cdktf.stringToTerraform(struct!.external),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    k8s_cluster_id: cdktf.stringToTerraform(struct!.k8SClusterId),
    k8s_namespace: cdktf.stringToTerraform(struct!.k8SNamespace),
    k8s_pod: cdktf.stringToTerraform(struct!.k8SPod),
    k8s_service: cdktf.stringToTerraform(struct!.k8SService),
    name: cdktf.stringToTerraform(struct!.name),
    region: cdktf.stringToTerraform(struct!.region),
    res_id: cdktf.stringToTerraform(struct!.resId),
    s2c: cdktf.stringToTerraform(struct!.s2C),
    site: cdktf.stringToTerraform(struct!.site),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    type: cdktf.stringToTerraform(struct!.type),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function smartGroupSelectorMatchExpressionsToHclTerraform(struct?: SmartGroupSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_name: {
      value: cdktf.stringToHclTerraform(struct!.accountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ext_args: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extArgs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    external: {
      value: cdktf.stringToHclTerraform(struct!.external),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    k8s_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.k8SClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    k8s_namespace: {
      value: cdktf.stringToHclTerraform(struct!.k8SNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    k8s_pod: {
      value: cdktf.stringToHclTerraform(struct!.k8SPod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    k8s_service: {
      value: cdktf.stringToHclTerraform(struct!.k8SService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    res_id: {
      value: cdktf.stringToHclTerraform(struct!.resId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s2c: {
      value: cdktf.stringToHclTerraform(struct!.s2C),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site: {
      value: cdktf.stringToHclTerraform(struct!.site),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SmartGroupSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SmartGroupSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._accountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountName = this._accountName;
    }
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._extArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extArgs = this._extArgs;
    }
    if (this._external !== undefined) {
      hasAnyValues = true;
      internalValueResult.external = this._external;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._k8SClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.k8SClusterId = this._k8SClusterId;
    }
    if (this._k8SNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.k8SNamespace = this._k8SNamespace;
    }
    if (this._k8SPod !== undefined) {
      hasAnyValues = true;
      internalValueResult.k8SPod = this._k8SPod;
    }
    if (this._k8SService !== undefined) {
      hasAnyValues = true;
      internalValueResult.k8SService = this._k8SService;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._resId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resId = this._resId;
    }
    if (this._s2C !== undefined) {
      hasAnyValues = true;
      internalValueResult.s2C = this._s2C;
    }
    if (this._site !== undefined) {
      hasAnyValues = true;
      internalValueResult.site = this._site;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SmartGroupSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._accountName = undefined;
      this._cidr = undefined;
      this._extArgs = undefined;
      this._external = undefined;
      this._fqdn = undefined;
      this._k8SClusterId = undefined;
      this._k8SNamespace = undefined;
      this._k8SPod = undefined;
      this._k8SService = undefined;
      this._name = undefined;
      this._region = undefined;
      this._resId = undefined;
      this._s2C = undefined;
      this._site = undefined;
      this._tags = undefined;
      this._type = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._accountName = value.accountName;
      this._cidr = value.cidr;
      this._extArgs = value.extArgs;
      this._external = value.external;
      this._fqdn = value.fqdn;
      this._k8SClusterId = value.k8SClusterId;
      this._k8SNamespace = value.k8SNamespace;
      this._k8SPod = value.k8SPod;
      this._k8SService = value.k8SService;
      this._name = value.name;
      this._region = value.region;
      this._resId = value.resId;
      this._s2C = value.s2C;
      this._site = value.site;
      this._tags = value.tags;
      this._type = value.type;
      this._zone = value.zone;
    }
  }

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // account_name - computed: false, optional: true, required: false
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  public resetAccountName() {
    this._accountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // ext_args - computed: false, optional: true, required: false
  private _extArgs?: { [key: string]: string }; 
  public get extArgs() {
    return this.getStringMapAttribute('ext_args');
  }
  public set extArgs(value: { [key: string]: string }) {
    this._extArgs = value;
  }
  public resetExtArgs() {
    this._extArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extArgsInput() {
    return this._extArgs;
  }

  // external - computed: false, optional: true, required: false
  private _external?: string; 
  public get external() {
    return this.getStringAttribute('external');
  }
  public set external(value: string) {
    this._external = value;
  }
  public resetExternal() {
    this._external = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external;
  }

  // fqdn - computed: false, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // k8s_cluster_id - computed: false, optional: true, required: false
  private _k8SClusterId?: string; 
  public get k8SClusterId() {
    return this.getStringAttribute('k8s_cluster_id');
  }
  public set k8SClusterId(value: string) {
    this._k8SClusterId = value;
  }
  public resetK8SClusterId() {
    this._k8SClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SClusterIdInput() {
    return this._k8SClusterId;
  }

  // k8s_namespace - computed: false, optional: true, required: false
  private _k8SNamespace?: string; 
  public get k8SNamespace() {
    return this.getStringAttribute('k8s_namespace');
  }
  public set k8SNamespace(value: string) {
    this._k8SNamespace = value;
  }
  public resetK8SNamespace() {
    this._k8SNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SNamespaceInput() {
    return this._k8SNamespace;
  }

  // k8s_pod - computed: false, optional: true, required: false
  private _k8SPod?: string; 
  public get k8SPod() {
    return this.getStringAttribute('k8s_pod');
  }
  public set k8SPod(value: string) {
    this._k8SPod = value;
  }
  public resetK8SPod() {
    this._k8SPod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SPodInput() {
    return this._k8SPod;
  }

  // k8s_service - computed: false, optional: true, required: false
  private _k8SService?: string; 
  public get k8SService() {
    return this.getStringAttribute('k8s_service');
  }
  public set k8SService(value: string) {
    this._k8SService = value;
  }
  public resetK8SService() {
    this._k8SService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SServiceInput() {
    return this._k8SService;
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

  // region - computed: false, optional: true, required: false
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

  // res_id - computed: false, optional: true, required: false
  private _resId?: string; 
  public get resId() {
    return this.getStringAttribute('res_id');
  }
  public set resId(value: string) {
    this._resId = value;
  }
  public resetResId() {
    this._resId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resIdInput() {
    return this._resId;
  }

  // s2c - computed: false, optional: true, required: false
  private _s2C?: string; 
  public get s2C() {
    return this.getStringAttribute('s2c');
  }
  public set s2C(value: string) {
    this._s2C = value;
  }
  public resetS2C() {
    this._s2C = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s2CInput() {
    return this._s2C;
  }

  // site - computed: false, optional: true, required: false
  private _site?: string; 
  public get site() {
    return this.getStringAttribute('site');
  }
  public set site(value: string) {
    this._site = value;
  }
  public resetSite() {
    this._site = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}

export class SmartGroupSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : SmartGroupSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): SmartGroupSelectorMatchExpressionsOutputReference {
    return new SmartGroupSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SmartGroupSelector {
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/smart_group#match_expressions SmartGroup#match_expressions}
  */
  readonly matchExpressions: SmartGroupSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function smartGroupSelectorToTerraform(struct?: SmartGroupSelectorOutputReference | SmartGroupSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(smartGroupSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function smartGroupSelectorToHclTerraform(struct?: SmartGroupSelectorOutputReference | SmartGroupSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(smartGroupSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "SmartGroupSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SmartGroupSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SmartGroupSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SmartGroupSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_expressions - computed: false, optional: false, required: true
  private _matchExpressions = new SmartGroupSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: SmartGroupSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/smart_group aviatrix_smart_group}
*/
export class SmartGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_smart_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SmartGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SmartGroup to import
  * @param importFromId The id of the existing SmartGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/smart_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SmartGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_smart_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/smart_group aviatrix_smart_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SmartGroupConfig
  */
  public constructor(scope: Construct, id: string, config: SmartGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_smart_group',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.2.0',
        providerVersionConstraint: '8.2.0'
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
    this._selector.internalValue = config.selector;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // selector - computed: false, optional: false, required: true
  private _selector = new SmartGroupSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: SmartGroupSelector) {
    this._selector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      selector: smartGroupSelectorToTerraform(this._selector.internalValue),
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
      selector: {
        value: smartGroupSelectorToHclTerraform(this._selector.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SmartGroupSelectorList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
