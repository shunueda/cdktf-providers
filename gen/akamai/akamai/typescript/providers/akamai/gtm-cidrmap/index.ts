// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_cidrmap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GtmCidrmapConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_cidrmap#domain GtmCidrmap#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_cidrmap#id GtmCidrmap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_cidrmap#name GtmCidrmap#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_cidrmap#wait_on_complete GtmCidrmap#wait_on_complete}
  */
  readonly waitOnComplete?: boolean | cdktf.IResolvable;
  /**
  * assignment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_cidrmap#assignment GtmCidrmap#assignment}
  */
  readonly assignment?: GtmCidrmapAssignment[] | cdktf.IResolvable;
  /**
  * default_datacenter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_cidrmap#default_datacenter GtmCidrmap#default_datacenter}
  */
  readonly defaultDatacenter: GtmCidrmapDefaultDatacenter;
}
export interface GtmCidrmapAssignment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_cidrmap#blocks GtmCidrmap#blocks}
  */
  readonly blocks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_cidrmap#datacenter_id GtmCidrmap#datacenter_id}
  */
  readonly datacenterId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_cidrmap#nickname GtmCidrmap#nickname}
  */
  readonly nickname: string;
}

export function gtmCidrmapAssignmentToTerraform(struct?: GtmCidrmapAssignment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.blocks),
    datacenter_id: cdktf.numberToTerraform(struct!.datacenterId),
    nickname: cdktf.stringToTerraform(struct!.nickname),
  }
}


export function gtmCidrmapAssignmentToHclTerraform(struct?: GtmCidrmapAssignment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.blocks),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    datacenter_id: {
      value: cdktf.numberToHclTerraform(struct!.datacenterId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nickname: {
      value: cdktf.stringToHclTerraform(struct!.nickname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GtmCidrmapAssignmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GtmCidrmapAssignment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.blocks = this._blocks;
    }
    if (this._datacenterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenterId = this._datacenterId;
    }
    if (this._nickname !== undefined) {
      hasAnyValues = true;
      internalValueResult.nickname = this._nickname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GtmCidrmapAssignment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blocks = undefined;
      this._datacenterId = undefined;
      this._nickname = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blocks = value.blocks;
      this._datacenterId = value.datacenterId;
      this._nickname = value.nickname;
    }
  }

  // blocks - computed: false, optional: true, required: false
  private _blocks?: string[]; 
  public get blocks() {
    return cdktf.Fn.tolist(this.getListAttribute('blocks'));
  }
  public set blocks(value: string[]) {
    this._blocks = value;
  }
  public resetBlocks() {
    this._blocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blocksInput() {
    return this._blocks;
  }

  // datacenter_id - computed: false, optional: false, required: true
  private _datacenterId?: number; 
  public get datacenterId() {
    return this.getNumberAttribute('datacenter_id');
  }
  public set datacenterId(value: number) {
    this._datacenterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterIdInput() {
    return this._datacenterId;
  }

  // nickname - computed: false, optional: false, required: true
  private _nickname?: string; 
  public get nickname() {
    return this.getStringAttribute('nickname');
  }
  public set nickname(value: string) {
    this._nickname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nicknameInput() {
    return this._nickname;
  }
}

export class GtmCidrmapAssignmentList extends cdktf.ComplexList {
  public internalValue? : GtmCidrmapAssignment[] | cdktf.IResolvable

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
  public get(index: number): GtmCidrmapAssignmentOutputReference {
    return new GtmCidrmapAssignmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GtmCidrmapDefaultDatacenter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_cidrmap#datacenter_id GtmCidrmap#datacenter_id}
  */
  readonly datacenterId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_cidrmap#nickname GtmCidrmap#nickname}
  */
  readonly nickname?: string;
}

export function gtmCidrmapDefaultDatacenterToTerraform(struct?: GtmCidrmapDefaultDatacenterOutputReference | GtmCidrmapDefaultDatacenter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datacenter_id: cdktf.numberToTerraform(struct!.datacenterId),
    nickname: cdktf.stringToTerraform(struct!.nickname),
  }
}


export function gtmCidrmapDefaultDatacenterToHclTerraform(struct?: GtmCidrmapDefaultDatacenterOutputReference | GtmCidrmapDefaultDatacenter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datacenter_id: {
      value: cdktf.numberToHclTerraform(struct!.datacenterId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nickname: {
      value: cdktf.stringToHclTerraform(struct!.nickname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GtmCidrmapDefaultDatacenterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GtmCidrmapDefaultDatacenter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datacenterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenterId = this._datacenterId;
    }
    if (this._nickname !== undefined) {
      hasAnyValues = true;
      internalValueResult.nickname = this._nickname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GtmCidrmapDefaultDatacenter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datacenterId = undefined;
      this._nickname = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datacenterId = value.datacenterId;
      this._nickname = value.nickname;
    }
  }

  // datacenter_id - computed: false, optional: false, required: true
  private _datacenterId?: number; 
  public get datacenterId() {
    return this.getNumberAttribute('datacenter_id');
  }
  public set datacenterId(value: number) {
    this._datacenterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterIdInput() {
    return this._datacenterId;
  }

  // nickname - computed: false, optional: true, required: false
  private _nickname?: string; 
  public get nickname() {
    return this.getStringAttribute('nickname');
  }
  public set nickname(value: string) {
    this._nickname = value;
  }
  public resetNickname() {
    this._nickname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicknameInput() {
    return this._nickname;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_cidrmap akamai_gtm_cidrmap}
*/
export class GtmCidrmap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_gtm_cidrmap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GtmCidrmap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GtmCidrmap to import
  * @param importFromId The id of the existing GtmCidrmap that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_cidrmap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GtmCidrmap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_gtm_cidrmap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_cidrmap akamai_gtm_cidrmap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GtmCidrmapConfig
  */
  public constructor(scope: Construct, id: string, config: GtmCidrmapConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_gtm_cidrmap',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0',
        providerVersionConstraint: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domain = config.domain;
    this._id = config.id;
    this._name = config.name;
    this._waitOnComplete = config.waitOnComplete;
    this._assignment.internalValue = config.assignment;
    this._defaultDatacenter.internalValue = config.defaultDatacenter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // wait_on_complete - computed: false, optional: true, required: false
  private _waitOnComplete?: boolean | cdktf.IResolvable; 
  public get waitOnComplete() {
    return this.getBooleanAttribute('wait_on_complete');
  }
  public set waitOnComplete(value: boolean | cdktf.IResolvable) {
    this._waitOnComplete = value;
  }
  public resetWaitOnComplete() {
    this._waitOnComplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitOnCompleteInput() {
    return this._waitOnComplete;
  }

  // assignment - computed: false, optional: true, required: false
  private _assignment = new GtmCidrmapAssignmentList(this, "assignment", false);
  public get assignment() {
    return this._assignment;
  }
  public putAssignment(value: GtmCidrmapAssignment[] | cdktf.IResolvable) {
    this._assignment.internalValue = value;
  }
  public resetAssignment() {
    this._assignment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignmentInput() {
    return this._assignment.internalValue;
  }

  // default_datacenter - computed: false, optional: false, required: true
  private _defaultDatacenter = new GtmCidrmapDefaultDatacenterOutputReference(this, "default_datacenter");
  public get defaultDatacenter() {
    return this._defaultDatacenter;
  }
  public putDefaultDatacenter(value: GtmCidrmapDefaultDatacenter) {
    this._defaultDatacenter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDatacenterInput() {
    return this._defaultDatacenter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      wait_on_complete: cdktf.booleanToTerraform(this._waitOnComplete),
      assignment: cdktf.listMapper(gtmCidrmapAssignmentToTerraform, true)(this._assignment.internalValue),
      default_datacenter: gtmCidrmapDefaultDatacenterToTerraform(this._defaultDatacenter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_on_complete: {
        value: cdktf.booleanToHclTerraform(this._waitOnComplete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      assignment: {
        value: cdktf.listMapperHcl(gtmCidrmapAssignmentToHclTerraform, true)(this._assignment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GtmCidrmapAssignmentList",
      },
      default_datacenter: {
        value: gtmCidrmapDefaultDatacenterToHclTerraform(this._defaultDatacenter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GtmCidrmapDefaultDatacenterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
