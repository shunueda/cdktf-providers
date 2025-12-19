// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_local_dns_resolution
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateDnsLocalDnsResolutionAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Dns_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_local_dns_resolution#dns_name SlbTemplateDnsLocalDnsResolutionA#dns_name}
  */
  readonly dnsName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_local_dns_resolution#id SlbTemplateDnsLocalDnsResolutionA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_local_dns_resolution#uuid SlbTemplateDnsLocalDnsResolutionA#uuid}
  */
  readonly uuid?: string;
  /**
  * host_list_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_local_dns_resolution#host_list_cfg SlbTemplateDnsLocalDnsResolutionA#host_list_cfg}
  */
  readonly hostListCfg?: SlbTemplateDnsLocalDnsResolutionHostListCfgA[] | cdktf.IResolvable;
  /**
  * local_resolver_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_local_dns_resolution#local_resolver_cfg SlbTemplateDnsLocalDnsResolutionA#local_resolver_cfg}
  */
  readonly localResolverCfg?: SlbTemplateDnsLocalDnsResolutionLocalResolverCfgA[] | cdktf.IResolvable;
}
export interface SlbTemplateDnsLocalDnsResolutionHostListCfgA {
  /**
  * Hostnames class-list name (dns type)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_local_dns_resolution#hostnames SlbTemplateDnsLocalDnsResolutionA#hostnames}
  */
  readonly hostnames?: string;
}

export function slbTemplateDnsLocalDnsResolutionHostListCfgAToTerraform(struct?: SlbTemplateDnsLocalDnsResolutionHostListCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostnames: cdktf.stringToTerraform(struct!.hostnames),
  }
}


export function slbTemplateDnsLocalDnsResolutionHostListCfgAToHclTerraform(struct?: SlbTemplateDnsLocalDnsResolutionHostListCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostnames: {
      value: cdktf.stringToHclTerraform(struct!.hostnames),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateDnsLocalDnsResolutionHostListCfgAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateDnsLocalDnsResolutionHostListCfgA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostnames !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnames = this._hostnames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateDnsLocalDnsResolutionHostListCfgA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostnames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostnames = value.hostnames;
    }
  }

  // hostnames - computed: false, optional: true, required: false
  private _hostnames?: string; 
  public get hostnames() {
    return this.getStringAttribute('hostnames');
  }
  public set hostnames(value: string) {
    this._hostnames = value;
  }
  public resetHostnames() {
    this._hostnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnamesInput() {
    return this._hostnames;
  }
}

export class SlbTemplateDnsLocalDnsResolutionHostListCfgAList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateDnsLocalDnsResolutionHostListCfgA[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateDnsLocalDnsResolutionHostListCfgAOutputReference {
    return new SlbTemplateDnsLocalDnsResolutionHostListCfgAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateDnsLocalDnsResolutionLocalResolverCfgA {
  /**
  * Local dns servers (address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_local_dns_resolution#local_resolver SlbTemplateDnsLocalDnsResolutionA#local_resolver}
  */
  readonly localResolver?: string;
}

export function slbTemplateDnsLocalDnsResolutionLocalResolverCfgAToTerraform(struct?: SlbTemplateDnsLocalDnsResolutionLocalResolverCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_resolver: cdktf.stringToTerraform(struct!.localResolver),
  }
}


export function slbTemplateDnsLocalDnsResolutionLocalResolverCfgAToHclTerraform(struct?: SlbTemplateDnsLocalDnsResolutionLocalResolverCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_resolver: {
      value: cdktf.stringToHclTerraform(struct!.localResolver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateDnsLocalDnsResolutionLocalResolverCfgAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateDnsLocalDnsResolutionLocalResolverCfgA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localResolver !== undefined) {
      hasAnyValues = true;
      internalValueResult.localResolver = this._localResolver;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateDnsLocalDnsResolutionLocalResolverCfgA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localResolver = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localResolver = value.localResolver;
    }
  }

  // local_resolver - computed: false, optional: true, required: false
  private _localResolver?: string; 
  public get localResolver() {
    return this.getStringAttribute('local_resolver');
  }
  public set localResolver(value: string) {
    this._localResolver = value;
  }
  public resetLocalResolver() {
    this._localResolver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localResolverInput() {
    return this._localResolver;
  }
}

export class SlbTemplateDnsLocalDnsResolutionLocalResolverCfgAList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateDnsLocalDnsResolutionLocalResolverCfgA[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateDnsLocalDnsResolutionLocalResolverCfgAOutputReference {
    return new SlbTemplateDnsLocalDnsResolutionLocalResolverCfgAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_local_dns_resolution thunder_slb_template_dns_local_dns_resolution}
*/
export class SlbTemplateDnsLocalDnsResolutionA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_dns_local_dns_resolution";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateDnsLocalDnsResolutionA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateDnsLocalDnsResolutionA to import
  * @param importFromId The id of the existing SlbTemplateDnsLocalDnsResolutionA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_local_dns_resolution#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateDnsLocalDnsResolutionA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_dns_local_dns_resolution", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_local_dns_resolution thunder_slb_template_dns_local_dns_resolution} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateDnsLocalDnsResolutionAConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateDnsLocalDnsResolutionAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_dns_local_dns_resolution',
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
    this._dnsName = config.dnsName;
    this._id = config.id;
    this._uuid = config.uuid;
    this._hostListCfg.internalValue = config.hostListCfg;
    this._localResolverCfg.internalValue = config.localResolverCfg;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_name - computed: false, optional: false, required: true
  private _dnsName?: string; 
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }
  public set dnsName(value: string) {
    this._dnsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameInput() {
    return this._dnsName;
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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // host_list_cfg - computed: false, optional: true, required: false
  private _hostListCfg = new SlbTemplateDnsLocalDnsResolutionHostListCfgAList(this, "host_list_cfg", false);
  public get hostListCfg() {
    return this._hostListCfg;
  }
  public putHostListCfg(value: SlbTemplateDnsLocalDnsResolutionHostListCfgA[] | cdktf.IResolvable) {
    this._hostListCfg.internalValue = value;
  }
  public resetHostListCfg() {
    this._hostListCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostListCfgInput() {
    return this._hostListCfg.internalValue;
  }

  // local_resolver_cfg - computed: false, optional: true, required: false
  private _localResolverCfg = new SlbTemplateDnsLocalDnsResolutionLocalResolverCfgAList(this, "local_resolver_cfg", false);
  public get localResolverCfg() {
    return this._localResolverCfg;
  }
  public putLocalResolverCfg(value: SlbTemplateDnsLocalDnsResolutionLocalResolverCfgA[] | cdktf.IResolvable) {
    this._localResolverCfg.internalValue = value;
  }
  public resetLocalResolverCfg() {
    this._localResolverCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localResolverCfgInput() {
    return this._localResolverCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dns_name: cdktf.stringToTerraform(this._dnsName),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      host_list_cfg: cdktf.listMapper(slbTemplateDnsLocalDnsResolutionHostListCfgAToTerraform, true)(this._hostListCfg.internalValue),
      local_resolver_cfg: cdktf.listMapper(slbTemplateDnsLocalDnsResolutionLocalResolverCfgAToTerraform, true)(this._localResolverCfg.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dns_name: {
        value: cdktf.stringToHclTerraform(this._dnsName),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_list_cfg: {
        value: cdktf.listMapperHcl(slbTemplateDnsLocalDnsResolutionHostListCfgAToHclTerraform, true)(this._hostListCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateDnsLocalDnsResolutionHostListCfgAList",
      },
      local_resolver_cfg: {
        value: cdktf.listMapperHcl(slbTemplateDnsLocalDnsResolutionLocalResolverCfgAToHclTerraform, true)(this._localResolverCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateDnsLocalDnsResolutionLocalResolverCfgAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
