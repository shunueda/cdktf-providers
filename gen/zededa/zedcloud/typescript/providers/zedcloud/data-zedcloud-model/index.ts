// https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/model
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZedcloudModelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Map of <string, string> which defines attr
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/model#attr DataZedcloudModel#attr}
  */
  readonly attr: { [key: string]: string };
  /**
  * System defined universally unique Id of the brand.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/model#brand_id DataZedcloudModel#brand_id}
  */
  readonly brandId: string;
  /**
  * Detailed description of the model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/model#description DataZedcloudModel#description}
  */
  readonly description?: string;
  /**
  * Flag to represent whether sysModel is imported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/model#is_imported DataZedcloudModel#is_imported}
  */
  readonly isImported?: boolean | cdktf.IResolvable;
  /**
  * Map of <string, string> which holds the key:url for the logo artifact of the model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/model#logo DataZedcloudModel#logo}
  */
  readonly logo?: { [key: string]: string };
  /**
  * user defined model name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/model#name DataZedcloudModel#name}
  */
  readonly name: string;
  /**
  * origin of object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/model#origin_type DataZedcloudModel#origin_type}
  */
  readonly originType: string;
  /**
  * Product status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/model#product_status DataZedcloudModel#product_status}
  */
  readonly productStatus?: string;
  /**
  * Product URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/model#product_url DataZedcloudModel#product_url}
  */
  readonly productUrl?: string;
  /**
  * SysModel State which denotes the status of the model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/model#state DataZedcloudModel#state}
  */
  readonly state: string;
  /**
  * User defined title of the model. Title can be changed at any time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/model#title DataZedcloudModel#title}
  */
  readonly title: string;
  /**
  * Defines the Architecture type of the model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/model#type DataZedcloudModel#type}
  */
  readonly type: string;
  /**
  * io_member_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/model#io_member_list DataZedcloudModel#io_member_list}
  */
  readonly ioMemberList?: DataZedcloudModelIoMemberListStruct[] | cdktf.IResolvable;
  /**
  * p_c_r_templates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/model#p_c_r_templates DataZedcloudModel#p_c_r_templates}
  */
  readonly pCRTemplates?: DataZedcloudModelPCRTemplates[] | cdktf.IResolvable;
  /**
  * parent_detail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/model#parent_detail DataZedcloudModel#parent_detail}
  */
  readonly parentDetail?: DataZedcloudModelParentDetail[] | cdktf.IResolvable;
  /**
  * revision block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/model#revision DataZedcloudModel#revision}
  */
  readonly revision?: DataZedcloudModelRevision[] | cdktf.IResolvable;
}
export interface DataZedcloudModelIoMemberListVfs {
  /**
  * The number of Virtual Functions for given Physical Function. Only applies for IO_TYPE_ETH_PF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/model#count DataZedcloudModel#count}
  */
  readonly count?: number;
}

export function dataZedcloudModelIoMemberListVfsToTerraform(struct?: DataZedcloudModelIoMemberListVfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
  }
}


export function dataZedcloudModelIoMemberListVfsToHclTerraform(struct?: DataZedcloudModelIoMemberListVfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudModelIoMemberListVfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudModelIoMemberListVfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudModelIoMemberListVfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }
}

export class DataZedcloudModelIoMemberListVfsList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudModelIoMemberListVfs[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudModelIoMemberListVfsOutputReference {
    return new DataZedcloudModelIoMemberListVfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudModelIoMemberListStruct {
  /**
  * Assign Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/model#assigngrp DataZedcloudModel#assigngrp}
  */
  readonly assigngrp: string;
  /**
  * attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/model#cbattr DataZedcloudModel#cbattr}
  */
  readonly cbattr?: { [key: string]: string };
  /**
  * cost of using this ioMember. Default is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/model#cost DataZedcloudModel#cost}
  */
  readonly cost: number;
  /**
  * Logical Label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/model#logicallabel DataZedcloudModel#logicallabel}
  */
  readonly logicallabel: string;
  /**
  * Parent group for a IoMember. Can be empty if there is no parent group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/model#parentassigngrp DataZedcloudModel#parentassigngrp}
  */
  readonly parentassigngrp?: string;
  /**
  * Map of Physical Addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/model#phyaddrs DataZedcloudModel#phyaddrs}
  */
  readonly phyaddrs: { [key: string]: string };
  /**
  * Physical Label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/model#phylabel DataZedcloudModel#phylabel}
  */
  readonly phylabel: string;
  /**
  * Adopter Usage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/model#usage DataZedcloudModel#usage}
  */
  readonly usage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/model#usage_policy DataZedcloudModel#usage_policy}
  */
  readonly usagePolicy?: { [key: string]: (boolean | cdktf.IResolvable) };
  /**
  * Z Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/model#ztype DataZedcloudModel#ztype}
  */
  readonly ztype: string;
  /**
  * vfs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/model#vfs DataZedcloudModel#vfs}
  */
  readonly vfs?: DataZedcloudModelIoMemberListVfs[] | cdktf.IResolvable;
}

export function dataZedcloudModelIoMemberListStructToTerraform(struct?: DataZedcloudModelIoMemberListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assigngrp: cdktf.stringToTerraform(struct!.assigngrp),
    cbattr: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.cbattr),
    cost: cdktf.numberToTerraform(struct!.cost),
    logicallabel: cdktf.stringToTerraform(struct!.logicallabel),
    parentassigngrp: cdktf.stringToTerraform(struct!.parentassigngrp),
    phyaddrs: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.phyaddrs),
    phylabel: cdktf.stringToTerraform(struct!.phylabel),
    usage: cdktf.stringToTerraform(struct!.usage),
    usage_policy: cdktf.hashMapper(cdktf.booleanToTerraform)(struct!.usagePolicy),
    ztype: cdktf.stringToTerraform(struct!.ztype),
    vfs: cdktf.listMapper(dataZedcloudModelIoMemberListVfsToTerraform, true)(struct!.vfs),
  }
}


export function dataZedcloudModelIoMemberListStructToHclTerraform(struct?: DataZedcloudModelIoMemberListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assigngrp: {
      value: cdktf.stringToHclTerraform(struct!.assigngrp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cbattr: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.cbattr),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    cost: {
      value: cdktf.numberToHclTerraform(struct!.cost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    logicallabel: {
      value: cdktf.stringToHclTerraform(struct!.logicallabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parentassigngrp: {
      value: cdktf.stringToHclTerraform(struct!.parentassigngrp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phyaddrs: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.phyaddrs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    phylabel: {
      value: cdktf.stringToHclTerraform(struct!.phylabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usage: {
      value: cdktf.stringToHclTerraform(struct!.usage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usage_policy: {
      value: cdktf.hashMapperHcl(cdktf.booleanToHclTerraform)(struct!.usagePolicy),
      isBlock: false,
      type: "map",
      storageClassType: "booleanMap",
    },
    ztype: {
      value: cdktf.stringToHclTerraform(struct!.ztype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vfs: {
      value: cdktf.listMapperHcl(dataZedcloudModelIoMemberListVfsToHclTerraform, true)(struct!.vfs),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudModelIoMemberListVfsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudModelIoMemberListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudModelIoMemberListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assigngrp !== undefined) {
      hasAnyValues = true;
      internalValueResult.assigngrp = this._assigngrp;
    }
    if (this._cbattr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cbattr = this._cbattr;
    }
    if (this._cost !== undefined) {
      hasAnyValues = true;
      internalValueResult.cost = this._cost;
    }
    if (this._logicallabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicallabel = this._logicallabel;
    }
    if (this._parentassigngrp !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentassigngrp = this._parentassigngrp;
    }
    if (this._phyaddrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.phyaddrs = this._phyaddrs;
    }
    if (this._phylabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.phylabel = this._phylabel;
    }
    if (this._usage !== undefined) {
      hasAnyValues = true;
      internalValueResult.usage = this._usage;
    }
    if (this._usagePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.usagePolicy = this._usagePolicy;
    }
    if (this._ztype !== undefined) {
      hasAnyValues = true;
      internalValueResult.ztype = this._ztype;
    }
    if (this._vfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vfs = this._vfs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudModelIoMemberListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assigngrp = undefined;
      this._cbattr = undefined;
      this._cost = undefined;
      this._logicallabel = undefined;
      this._parentassigngrp = undefined;
      this._phyaddrs = undefined;
      this._phylabel = undefined;
      this._usage = undefined;
      this._usagePolicy = undefined;
      this._ztype = undefined;
      this._vfs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assigngrp = value.assigngrp;
      this._cbattr = value.cbattr;
      this._cost = value.cost;
      this._logicallabel = value.logicallabel;
      this._parentassigngrp = value.parentassigngrp;
      this._phyaddrs = value.phyaddrs;
      this._phylabel = value.phylabel;
      this._usage = value.usage;
      this._usagePolicy = value.usagePolicy;
      this._ztype = value.ztype;
      this._vfs.internalValue = value.vfs;
    }
  }

  // assigngrp - computed: false, optional: false, required: true
  private _assigngrp?: string; 
  public get assigngrp() {
    return this.getStringAttribute('assigngrp');
  }
  public set assigngrp(value: string) {
    this._assigngrp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assigngrpInput() {
    return this._assigngrp;
  }

  // cbattr - computed: false, optional: true, required: false
  private _cbattr?: { [key: string]: string }; 
  public get cbattr() {
    return this.getStringMapAttribute('cbattr');
  }
  public set cbattr(value: { [key: string]: string }) {
    this._cbattr = value;
  }
  public resetCbattr() {
    this._cbattr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbattrInput() {
    return this._cbattr;
  }

  // cost - computed: false, optional: false, required: true
  private _cost?: number; 
  public get cost() {
    return this.getNumberAttribute('cost');
  }
  public set cost(value: number) {
    this._cost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get costInput() {
    return this._cost;
  }

  // logicallabel - computed: false, optional: false, required: true
  private _logicallabel?: string; 
  public get logicallabel() {
    return this.getStringAttribute('logicallabel');
  }
  public set logicallabel(value: string) {
    this._logicallabel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logicallabelInput() {
    return this._logicallabel;
  }

  // parentassigngrp - computed: false, optional: true, required: false
  private _parentassigngrp?: string; 
  public get parentassigngrp() {
    return this.getStringAttribute('parentassigngrp');
  }
  public set parentassigngrp(value: string) {
    this._parentassigngrp = value;
  }
  public resetParentassigngrp() {
    this._parentassigngrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentassigngrpInput() {
    return this._parentassigngrp;
  }

  // phyaddrs - computed: false, optional: false, required: true
  private _phyaddrs?: { [key: string]: string }; 
  public get phyaddrs() {
    return this.getStringMapAttribute('phyaddrs');
  }
  public set phyaddrs(value: { [key: string]: string }) {
    this._phyaddrs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phyaddrsInput() {
    return this._phyaddrs;
  }

  // phylabel - computed: false, optional: false, required: true
  private _phylabel?: string; 
  public get phylabel() {
    return this.getStringAttribute('phylabel');
  }
  public set phylabel(value: string) {
    this._phylabel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phylabelInput() {
    return this._phylabel;
  }

  // usage - computed: false, optional: true, required: false
  private _usage?: string; 
  public get usage() {
    return this.getStringAttribute('usage');
  }
  public set usage(value: string) {
    this._usage = value;
  }
  public resetUsage() {
    this._usage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageInput() {
    return this._usage;
  }

  // usage_policy - computed: false, optional: true, required: false
  private _usagePolicy?: { [key: string]: (boolean | cdktf.IResolvable) }; 
  public get usagePolicy() {
    return this.getBooleanMapAttribute('usage_policy');
  }
  public set usagePolicy(value: { [key: string]: (boolean | cdktf.IResolvable) }) {
    this._usagePolicy = value;
  }
  public resetUsagePolicy() {
    this._usagePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usagePolicyInput() {
    return this._usagePolicy;
  }

  // ztype - computed: false, optional: false, required: true
  private _ztype?: string; 
  public get ztype() {
    return this.getStringAttribute('ztype');
  }
  public set ztype(value: string) {
    this._ztype = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ztypeInput() {
    return this._ztype;
  }

  // vfs - computed: false, optional: true, required: false
  private _vfs = new DataZedcloudModelIoMemberListVfsList(this, "vfs", false);
  public get vfs() {
    return this._vfs;
  }
  public putVfs(value: DataZedcloudModelIoMemberListVfs[] | cdktf.IResolvable) {
    this._vfs.internalValue = value;
  }
  public resetVfs() {
    this._vfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vfsInput() {
    return this._vfs.internalValue;
  }
}

export class DataZedcloudModelIoMemberListStructList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudModelIoMemberListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudModelIoMemberListStructOutputReference {
    return new DataZedcloudModelIoMemberListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudModelPCRTemplatesPCRValues {
  /**
  * Current index for the PCR item in the list. First element has the index 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/model#index DataZedcloudModel#index}
  */
  readonly index: number;
  /**
  * Type of value for the PCR item. Could be one of the following values: 0 (PCR_TYPE_UNSPECIFIED), 1 (PCR_TYPE_HASH) or 2 (PCR_TYPE_EVENT_LOG)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/model#type DataZedcloudModel#type}
  */
  readonly type: string;
  /**
  * Actual value for the PCR item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/model#value DataZedcloudModel#value}
  */
  readonly value: string;
}

export function dataZedcloudModelPCRTemplatesPCRValuesToTerraform(struct?: DataZedcloudModelPCRTemplatesPCRValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.numberToTerraform(struct!.index),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataZedcloudModelPCRTemplatesPCRValuesToHclTerraform(struct?: DataZedcloudModelPCRTemplatesPCRValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudModelPCRTemplatesPCRValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudModelPCRTemplatesPCRValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudModelPCRTemplatesPCRValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._index = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._index = value.index;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // index - computed: false, optional: false, required: true
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataZedcloudModelPCRTemplatesPCRValuesList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudModelPCRTemplatesPCRValues[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudModelPCRTemplatesPCRValuesOutputReference {
    return new DataZedcloudModelPCRTemplatesPCRValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudModelPCRTemplates {
  /**
  * EVE version related to the PCR template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/model#eve_version DataZedcloudModel#eve_version}
  */
  readonly eveVersion: string;
  /**
  * Firmware version related to the PCR template. If user doesn't set it, it will be set to '*'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/model#firmware_version DataZedcloudModel#firmware_version}
  */
  readonly firmwareVersion?: string;
  /**
  * Name of the PCR template. The name is Unique among PCR templates for that System Model. If it is not specified, a system-generated name will be assigned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/model#name DataZedcloudModel#name}
  */
  readonly name?: string;
  /**
  * p_c_r_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/model#p_c_r_values DataZedcloudModel#p_c_r_values}
  */
  readonly pCRValues: DataZedcloudModelPCRTemplatesPCRValues[] | cdktf.IResolvable;
}

export function dataZedcloudModelPCRTemplatesToTerraform(struct?: DataZedcloudModelPCRTemplates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eve_version: cdktf.stringToTerraform(struct!.eveVersion),
    firmware_version: cdktf.stringToTerraform(struct!.firmwareVersion),
    name: cdktf.stringToTerraform(struct!.name),
    p_c_r_values: cdktf.listMapper(dataZedcloudModelPCRTemplatesPCRValuesToTerraform, true)(struct!.pCRValues),
  }
}


export function dataZedcloudModelPCRTemplatesToHclTerraform(struct?: DataZedcloudModelPCRTemplates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eve_version: {
      value: cdktf.stringToHclTerraform(struct!.eveVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    firmware_version: {
      value: cdktf.stringToHclTerraform(struct!.firmwareVersion),
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
    p_c_r_values: {
      value: cdktf.listMapperHcl(dataZedcloudModelPCRTemplatesPCRValuesToHclTerraform, true)(struct!.pCRValues),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudModelPCRTemplatesPCRValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudModelPCRTemplatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudModelPCRTemplates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eveVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.eveVersion = this._eveVersion;
    }
    if (this._firmwareVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.firmwareVersion = this._firmwareVersion;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pCRValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pCRValues = this._pCRValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudModelPCRTemplates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eveVersion = undefined;
      this._firmwareVersion = undefined;
      this._name = undefined;
      this._pCRValues.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eveVersion = value.eveVersion;
      this._firmwareVersion = value.firmwareVersion;
      this._name = value.name;
      this._pCRValues.internalValue = value.pCRValues;
    }
  }

  // eve_version - computed: false, optional: false, required: true
  private _eveVersion?: string; 
  public get eveVersion() {
    return this.getStringAttribute('eve_version');
  }
  public set eveVersion(value: string) {
    this._eveVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eveVersionInput() {
    return this._eveVersion;
  }

  // firmware_version - computed: false, optional: true, required: false
  private _firmwareVersion?: string; 
  public get firmwareVersion() {
    return this.getStringAttribute('firmware_version');
  }
  public set firmwareVersion(value: string) {
    this._firmwareVersion = value;
  }
  public resetFirmwareVersion() {
    this._firmwareVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firmwareVersionInput() {
    return this._firmwareVersion;
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

  // p_c_r_values - computed: false, optional: false, required: true
  private _pCRValues = new DataZedcloudModelPCRTemplatesPCRValuesList(this, "p_c_r_values", false);
  public get pCRValues() {
    return this._pCRValues;
  }
  public putPCRValues(value: DataZedcloudModelPCRTemplatesPCRValues[] | cdktf.IResolvable) {
    this._pCRValues.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pCRValuesInput() {
    return this._pCRValues.internalValue;
  }
}

export class DataZedcloudModelPCRTemplatesList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudModelPCRTemplates[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudModelPCRTemplatesOutputReference {
    return new DataZedcloudModelPCRTemplatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudModelParentDetail {
  /**
  * Relation with child and parent object exists or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/model#reference_exists DataZedcloudModel#reference_exists}
  */
  readonly referenceExists?: boolean | cdktf.IResolvable;
  /**
  * Update required flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/model#update_available DataZedcloudModel#update_available}
  */
  readonly updateAvailable?: boolean | cdktf.IResolvable;
}

export function dataZedcloudModelParentDetailToTerraform(struct?: DataZedcloudModelParentDetail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reference_exists: cdktf.booleanToTerraform(struct!.referenceExists),
    update_available: cdktf.booleanToTerraform(struct!.updateAvailable),
  }
}


export function dataZedcloudModelParentDetailToHclTerraform(struct?: DataZedcloudModelParentDetail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reference_exists: {
      value: cdktf.booleanToHclTerraform(struct!.referenceExists),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    update_available: {
      value: cdktf.booleanToHclTerraform(struct!.updateAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudModelParentDetailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudModelParentDetail | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._referenceExists !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceExists = this._referenceExists;
    }
    if (this._updateAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateAvailable = this._updateAvailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudModelParentDetail | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._referenceExists = undefined;
      this._updateAvailable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._referenceExists = value.referenceExists;
      this._updateAvailable = value.updateAvailable;
    }
  }

  // id_of_parent_object - computed: true, optional: false, required: false
  public get idOfParentObject() {
    return this.getStringAttribute('id_of_parent_object');
  }

  // reference_exists - computed: false, optional: true, required: false
  private _referenceExists?: boolean | cdktf.IResolvable; 
  public get referenceExists() {
    return this.getBooleanAttribute('reference_exists');
  }
  public set referenceExists(value: boolean | cdktf.IResolvable) {
    this._referenceExists = value;
  }
  public resetReferenceExists() {
    this._referenceExists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceExistsInput() {
    return this._referenceExists;
  }

  // update_available - computed: false, optional: true, required: false
  private _updateAvailable?: boolean | cdktf.IResolvable; 
  public get updateAvailable() {
    return this.getBooleanAttribute('update_available');
  }
  public set updateAvailable(value: boolean | cdktf.IResolvable) {
    this._updateAvailable = value;
  }
  public resetUpdateAvailable() {
    this._updateAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateAvailableInput() {
    return this._updateAvailable;
  }

  // version_of_parent_object - computed: true, optional: false, required: false
  public get versionOfParentObject() {
    return this.getNumberAttribute('version_of_parent_object');
  }
}

export class DataZedcloudModelParentDetailList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudModelParentDetail[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudModelParentDetailOutputReference {
    return new DataZedcloudModelParentDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudModelRevision {
}

export function dataZedcloudModelRevisionToTerraform(struct?: DataZedcloudModelRevision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudModelRevisionToHclTerraform(struct?: DataZedcloudModelRevision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudModelRevisionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudModelRevision | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudModelRevision | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // curr - computed: true, optional: false, required: false
  public get curr() {
    return this.getStringAttribute('curr');
  }

  // prev - computed: true, optional: false, required: false
  public get prev() {
    return this.getStringAttribute('prev');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }
}

export class DataZedcloudModelRevisionList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudModelRevision[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudModelRevisionOutputReference {
    return new DataZedcloudModelRevisionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/model zedcloud_model}
*/
export class DataZedcloudModel extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zedcloud_model";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZedcloudModel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZedcloudModel to import
  * @param importFromId The id of the existing DataZedcloudModel that should be imported. Refer to the {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/model#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZedcloudModel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zedcloud_model", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/model zedcloud_model} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZedcloudModelConfig
  */
  public constructor(scope: Construct, id: string, config: DataZedcloudModelConfig) {
    super(scope, id, {
      terraformResourceType: 'zedcloud_model',
      terraformGeneratorMetadata: {
        providerName: 'zedcloud',
        providerVersion: '2.6.0',
        providerVersionConstraint: '2.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attr = config.attr;
    this._brandId = config.brandId;
    this._description = config.description;
    this._isImported = config.isImported;
    this._logo = config.logo;
    this._name = config.name;
    this._originType = config.originType;
    this._productStatus = config.productStatus;
    this._productUrl = config.productUrl;
    this._state = config.state;
    this._title = config.title;
    this._type = config.type;
    this._ioMemberList.internalValue = config.ioMemberList;
    this._pCRTemplates.internalValue = config.pCRTemplates;
    this._parentDetail.internalValue = config.parentDetail;
    this._revision.internalValue = config.revision;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attr - computed: false, optional: false, required: true
  private _attr?: { [key: string]: string }; 
  public get attr() {
    return this.getStringMapAttribute('attr');
  }
  public set attr(value: { [key: string]: string }) {
    this._attr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attrInput() {
    return this._attr;
  }

  // brand_id - computed: false, optional: false, required: true
  private _brandId?: string; 
  public get brandId() {
    return this.getStringAttribute('brand_id');
  }
  public set brandId(value: string) {
    this._brandId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get brandIdInput() {
    return this._brandId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_imported - computed: false, optional: true, required: false
  private _isImported?: boolean | cdktf.IResolvable; 
  public get isImported() {
    return this.getBooleanAttribute('is_imported');
  }
  public set isImported(value: boolean | cdktf.IResolvable) {
    this._isImported = value;
  }
  public resetIsImported() {
    this._isImported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isImportedInput() {
    return this._isImported;
  }

  // logo - computed: false, optional: true, required: false
  private _logo?: { [key: string]: string }; 
  public get logo() {
    return this.getStringMapAttribute('logo');
  }
  public set logo(value: { [key: string]: string }) {
    this._logo = value;
  }
  public resetLogo() {
    this._logo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoInput() {
    return this._logo;
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

  // origin_type - computed: false, optional: false, required: true
  private _originType?: string; 
  public get originType() {
    return this.getStringAttribute('origin_type');
  }
  public set originType(value: string) {
    this._originType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originTypeInput() {
    return this._originType;
  }

  // product_status - computed: false, optional: true, required: false
  private _productStatus?: string; 
  public get productStatus() {
    return this.getStringAttribute('product_status');
  }
  public set productStatus(value: string) {
    this._productStatus = value;
  }
  public resetProductStatus() {
    this._productStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productStatusInput() {
    return this._productStatus;
  }

  // product_url - computed: false, optional: true, required: false
  private _productUrl?: string; 
  public get productUrl() {
    return this.getStringAttribute('product_url');
  }
  public set productUrl(value: string) {
    this._productUrl = value;
  }
  public resetProductUrl() {
    this._productUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productUrlInput() {
    return this._productUrl;
  }

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // io_member_list - computed: false, optional: true, required: false
  private _ioMemberList = new DataZedcloudModelIoMemberListStructList(this, "io_member_list", false);
  public get ioMemberList() {
    return this._ioMemberList;
  }
  public putIoMemberList(value: DataZedcloudModelIoMemberListStruct[] | cdktf.IResolvable) {
    this._ioMemberList.internalValue = value;
  }
  public resetIoMemberList() {
    this._ioMemberList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ioMemberListInput() {
    return this._ioMemberList.internalValue;
  }

  // p_c_r_templates - computed: false, optional: true, required: false
  private _pCRTemplates = new DataZedcloudModelPCRTemplatesList(this, "p_c_r_templates", false);
  public get pCRTemplates() {
    return this._pCRTemplates;
  }
  public putPCRTemplates(value: DataZedcloudModelPCRTemplates[] | cdktf.IResolvable) {
    this._pCRTemplates.internalValue = value;
  }
  public resetPCRTemplates() {
    this._pCRTemplates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pCRTemplatesInput() {
    return this._pCRTemplates.internalValue;
  }

  // parent_detail - computed: false, optional: true, required: false
  private _parentDetail = new DataZedcloudModelParentDetailList(this, "parent_detail", false);
  public get parentDetail() {
    return this._parentDetail;
  }
  public putParentDetail(value: DataZedcloudModelParentDetail[] | cdktf.IResolvable) {
    this._parentDetail.internalValue = value;
  }
  public resetParentDetail() {
    this._parentDetail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentDetailInput() {
    return this._parentDetail.internalValue;
  }

  // revision - computed: false, optional: true, required: false
  private _revision = new DataZedcloudModelRevisionList(this, "revision", false);
  public get revision() {
    return this._revision;
  }
  public putRevision(value: DataZedcloudModelRevision[] | cdktf.IResolvable) {
    this._revision.internalValue = value;
  }
  public resetRevision() {
    this._revision.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attr: cdktf.hashMapper(cdktf.stringToTerraform)(this._attr),
      brand_id: cdktf.stringToTerraform(this._brandId),
      description: cdktf.stringToTerraform(this._description),
      is_imported: cdktf.booleanToTerraform(this._isImported),
      logo: cdktf.hashMapper(cdktf.stringToTerraform)(this._logo),
      name: cdktf.stringToTerraform(this._name),
      origin_type: cdktf.stringToTerraform(this._originType),
      product_status: cdktf.stringToTerraform(this._productStatus),
      product_url: cdktf.stringToTerraform(this._productUrl),
      state: cdktf.stringToTerraform(this._state),
      title: cdktf.stringToTerraform(this._title),
      type: cdktf.stringToTerraform(this._type),
      io_member_list: cdktf.listMapper(dataZedcloudModelIoMemberListStructToTerraform, true)(this._ioMemberList.internalValue),
      p_c_r_templates: cdktf.listMapper(dataZedcloudModelPCRTemplatesToTerraform, true)(this._pCRTemplates.internalValue),
      parent_detail: cdktf.listMapper(dataZedcloudModelParentDetailToTerraform, true)(this._parentDetail.internalValue),
      revision: cdktf.listMapper(dataZedcloudModelRevisionToTerraform, true)(this._revision.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attr: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._attr),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      brand_id: {
        value: cdktf.stringToHclTerraform(this._brandId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_imported: {
        value: cdktf.booleanToHclTerraform(this._isImported),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      logo: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._logo),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origin_type: {
        value: cdktf.stringToHclTerraform(this._originType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_status: {
        value: cdktf.stringToHclTerraform(this._productStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_url: {
        value: cdktf.stringToHclTerraform(this._productUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      io_member_list: {
        value: cdktf.listMapperHcl(dataZedcloudModelIoMemberListStructToHclTerraform, true)(this._ioMemberList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataZedcloudModelIoMemberListStructList",
      },
      p_c_r_templates: {
        value: cdktf.listMapperHcl(dataZedcloudModelPCRTemplatesToHclTerraform, true)(this._pCRTemplates.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataZedcloudModelPCRTemplatesList",
      },
      parent_detail: {
        value: cdktf.listMapperHcl(dataZedcloudModelParentDetailToHclTerraform, true)(this._parentDetail.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataZedcloudModelParentDetailList",
      },
      revision: {
        value: cdktf.listMapperHcl(dataZedcloudModelRevisionToHclTerraform, true)(this._revision.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataZedcloudModelRevisionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
