// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/fqdn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FqdnConfig extends cdktf.TerraformMetaArguments {
  /**
  * FQDN Filter Tag Status. Valid values: true or false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/fqdn#fqdn_enabled Fqdn#fqdn_enabled}
  */
  readonly fqdnEnabled?: boolean | cdktf.IResolvable;
  /**
  * Specify the tag color to be a white-list tag or black-list tag. 'white' or 'black'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/fqdn#fqdn_mode Fqdn#fqdn_mode}
  */
  readonly fqdnMode?: string;
  /**
  * FQDN Filter Tag Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/fqdn#fqdn_tag Fqdn#fqdn_tag}
  */
  readonly fqdnTag: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/fqdn#id Fqdn#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable to manage domain name rules in-line. If false, domain name rules must be managed using `aviatrix_fqdn_tag_rule` resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/fqdn#manage_domain_names Fqdn#manage_domain_names}
  */
  readonly manageDomainNames?: boolean | cdktf.IResolvable;
  /**
  * domain_names block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/fqdn#domain_names Fqdn#domain_names}
  */
  readonly domainNames?: FqdnDomainNames[] | cdktf.IResolvable;
  /**
  * gw_filter_tag_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/fqdn#gw_filter_tag_list Fqdn#gw_filter_tag_list}
  */
  readonly gwFilterTagList?: FqdnGwFilterTagListStruct[] | cdktf.IResolvable;
}
export interface FqdnDomainNames {
  /**
  * What action should happen to matching requests. Possible values are: 'Base Policy', 'Allow' or 'Deny'. Defaults to 'Base Policy' if no value is provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/fqdn#action Fqdn#action}
  */
  readonly action?: string;
  /**
  * FQDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/fqdn#fqdn Fqdn#fqdn}
  */
  readonly fqdn: string;
  /**
  * Port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/fqdn#port Fqdn#port}
  */
  readonly port: string;
  /**
  * Protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/fqdn#proto Fqdn#proto}
  */
  readonly proto: string;
}

export function fqdnDomainNamesToTerraform(struct?: FqdnDomainNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    port: cdktf.stringToTerraform(struct!.port),
    proto: cdktf.stringToTerraform(struct!.proto),
  }
}


export function fqdnDomainNamesToHclTerraform(struct?: FqdnDomainNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
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
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proto: {
      value: cdktf.stringToHclTerraform(struct!.proto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FqdnDomainNamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FqdnDomainNames | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._proto !== undefined) {
      hasAnyValues = true;
      internalValueResult.proto = this._proto;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FqdnDomainNames | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._fqdn = undefined;
      this._port = undefined;
      this._proto = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._fqdn = value.fqdn;
      this._port = value.port;
      this._proto = value.proto;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // fqdn - computed: false, optional: false, required: true
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // proto - computed: false, optional: false, required: true
  private _proto?: string; 
  public get proto() {
    return this.getStringAttribute('proto');
  }
  public set proto(value: string) {
    this._proto = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protoInput() {
    return this._proto;
  }
}

export class FqdnDomainNamesList extends cdktf.ComplexList {
  public internalValue? : FqdnDomainNames[] | cdktf.IResolvable

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
  public get(index: number): FqdnDomainNamesOutputReference {
    return new FqdnDomainNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FqdnGwFilterTagListStruct {
  /**
  * Name of the gateway to attach to the specific tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/fqdn#gw_name Fqdn#gw_name}
  */
  readonly gwName: string;
  /**
  * List of source IPs in the VPC qualified for a specific tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/fqdn#source_ip_list Fqdn#source_ip_list}
  */
  readonly sourceIpList?: string[];
}

export function fqdnGwFilterTagListStructToTerraform(struct?: FqdnGwFilterTagListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gw_name: cdktf.stringToTerraform(struct!.gwName),
    source_ip_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceIpList),
  }
}


export function fqdnGwFilterTagListStructToHclTerraform(struct?: FqdnGwFilterTagListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gw_name: {
      value: cdktf.stringToHclTerraform(struct!.gwName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ip_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceIpList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FqdnGwFilterTagListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FqdnGwFilterTagListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gwName !== undefined) {
      hasAnyValues = true;
      internalValueResult.gwName = this._gwName;
    }
    if (this._sourceIpList !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIpList = this._sourceIpList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FqdnGwFilterTagListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gwName = undefined;
      this._sourceIpList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gwName = value.gwName;
      this._sourceIpList = value.sourceIpList;
    }
  }

  // gw_name - computed: false, optional: false, required: true
  private _gwName?: string; 
  public get gwName() {
    return this.getStringAttribute('gw_name');
  }
  public set gwName(value: string) {
    this._gwName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gwNameInput() {
    return this._gwName;
  }

  // source_ip_list - computed: false, optional: true, required: false
  private _sourceIpList?: string[]; 
  public get sourceIpList() {
    return cdktf.Fn.tolist(this.getListAttribute('source_ip_list'));
  }
  public set sourceIpList(value: string[]) {
    this._sourceIpList = value;
  }
  public resetSourceIpList() {
    this._sourceIpList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpListInput() {
    return this._sourceIpList;
  }
}

export class FqdnGwFilterTagListStructList extends cdktf.ComplexList {
  public internalValue? : FqdnGwFilterTagListStruct[] | cdktf.IResolvable

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
  public get(index: number): FqdnGwFilterTagListStructOutputReference {
    return new FqdnGwFilterTagListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/fqdn aviatrix_fqdn}
*/
export class Fqdn extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_fqdn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Fqdn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Fqdn to import
  * @param importFromId The id of the existing Fqdn that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/fqdn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Fqdn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_fqdn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/fqdn aviatrix_fqdn} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FqdnConfig
  */
  public constructor(scope: Construct, id: string, config: FqdnConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_fqdn',
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
    this._fqdnEnabled = config.fqdnEnabled;
    this._fqdnMode = config.fqdnMode;
    this._fqdnTag = config.fqdnTag;
    this._id = config.id;
    this._manageDomainNames = config.manageDomainNames;
    this._domainNames.internalValue = config.domainNames;
    this._gwFilterTagList.internalValue = config.gwFilterTagList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fqdn_enabled - computed: false, optional: true, required: false
  private _fqdnEnabled?: boolean | cdktf.IResolvable; 
  public get fqdnEnabled() {
    return this.getBooleanAttribute('fqdn_enabled');
  }
  public set fqdnEnabled(value: boolean | cdktf.IResolvable) {
    this._fqdnEnabled = value;
  }
  public resetFqdnEnabled() {
    this._fqdnEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnEnabledInput() {
    return this._fqdnEnabled;
  }

  // fqdn_mode - computed: false, optional: true, required: false
  private _fqdnMode?: string; 
  public get fqdnMode() {
    return this.getStringAttribute('fqdn_mode');
  }
  public set fqdnMode(value: string) {
    this._fqdnMode = value;
  }
  public resetFqdnMode() {
    this._fqdnMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnModeInput() {
    return this._fqdnMode;
  }

  // fqdn_tag - computed: false, optional: false, required: true
  private _fqdnTag?: string; 
  public get fqdnTag() {
    return this.getStringAttribute('fqdn_tag');
  }
  public set fqdnTag(value: string) {
    this._fqdnTag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnTagInput() {
    return this._fqdnTag;
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

  // manage_domain_names - computed: false, optional: true, required: false
  private _manageDomainNames?: boolean | cdktf.IResolvable; 
  public get manageDomainNames() {
    return this.getBooleanAttribute('manage_domain_names');
  }
  public set manageDomainNames(value: boolean | cdktf.IResolvable) {
    this._manageDomainNames = value;
  }
  public resetManageDomainNames() {
    this._manageDomainNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageDomainNamesInput() {
    return this._manageDomainNames;
  }

  // domain_names - computed: false, optional: true, required: false
  private _domainNames = new FqdnDomainNamesList(this, "domain_names", false);
  public get domainNames() {
    return this._domainNames;
  }
  public putDomainNames(value: FqdnDomainNames[] | cdktf.IResolvable) {
    this._domainNames.internalValue = value;
  }
  public resetDomainNames() {
    this._domainNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNamesInput() {
    return this._domainNames.internalValue;
  }

  // gw_filter_tag_list - computed: false, optional: true, required: false
  private _gwFilterTagList = new FqdnGwFilterTagListStructList(this, "gw_filter_tag_list", false);
  public get gwFilterTagList() {
    return this._gwFilterTagList;
  }
  public putGwFilterTagList(value: FqdnGwFilterTagListStruct[] | cdktf.IResolvable) {
    this._gwFilterTagList.internalValue = value;
  }
  public resetGwFilterTagList() {
    this._gwFilterTagList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gwFilterTagListInput() {
    return this._gwFilterTagList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fqdn_enabled: cdktf.booleanToTerraform(this._fqdnEnabled),
      fqdn_mode: cdktf.stringToTerraform(this._fqdnMode),
      fqdn_tag: cdktf.stringToTerraform(this._fqdnTag),
      id: cdktf.stringToTerraform(this._id),
      manage_domain_names: cdktf.booleanToTerraform(this._manageDomainNames),
      domain_names: cdktf.listMapper(fqdnDomainNamesToTerraform, true)(this._domainNames.internalValue),
      gw_filter_tag_list: cdktf.listMapper(fqdnGwFilterTagListStructToTerraform, true)(this._gwFilterTagList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fqdn_enabled: {
        value: cdktf.booleanToHclTerraform(this._fqdnEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fqdn_mode: {
        value: cdktf.stringToHclTerraform(this._fqdnMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fqdn_tag: {
        value: cdktf.stringToHclTerraform(this._fqdnTag),
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
      manage_domain_names: {
        value: cdktf.booleanToHclTerraform(this._manageDomainNames),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      domain_names: {
        value: cdktf.listMapperHcl(fqdnDomainNamesToHclTerraform, true)(this._domainNames.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FqdnDomainNamesList",
      },
      gw_filter_tag_list: {
        value: cdktf.listMapperHcl(fqdnGwFilterTagListStructToHclTerraform, true)(this._gwFilterTagList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FqdnGwFilterTagListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
