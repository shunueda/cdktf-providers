// https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SddcGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Short description of the SDDC Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc_group#description SddcGroup#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc_group#dxgw_allowed_prefixes SddcGroup#dxgw_allowed_prefixes}
  */
  readonly dxgwAllowedPrefixes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc_group#dxgw_id SddcGroup#dxgw_id}
  */
  readonly dxgwId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc_group#dxgw_owner SddcGroup#dxgw_owner}
  */
  readonly dxgwOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc_group#dxgw_status SddcGroup#dxgw_status}
  */
  readonly dxgwStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc_group#external_tgw_configured_prefixes SddcGroup#external_tgw_configured_prefixes}
  */
  readonly externalTgwConfiguredPrefixes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc_group#external_tgw_id SddcGroup#external_tgw_id}
  */
  readonly externalTgwId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc_group#external_tgw_owner SddcGroup#external_tgw_owner}
  */
  readonly externalTgwOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc_group#external_tgw_region SddcGroup#external_tgw_region}
  */
  readonly externalTgwRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc_group#id SddcGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the SDDC group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc_group#name SddcGroup#name}
  */
  readonly name: string;
  /**
  * A set of the IDs of SDDC members of the SDDC Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc_group#sddc_member_ids SddcGroup#sddc_member_ids}
  */
  readonly sddcMemberIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc_group#tgw_id SddcGroup#tgw_id}
  */
  readonly tgwId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc_group#tgw_region SddcGroup#tgw_region}
  */
  readonly tgwRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc_group#vpc_attachment_status SddcGroup#vpc_attachment_status}
  */
  readonly vpcAttachmentStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc_group#vpc_aws_account SddcGroup#vpc_aws_account}
  */
  readonly vpcAwsAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc_group#vpc_ram_share_id SddcGroup#vpc_ram_share_id}
  */
  readonly vpcRamShareId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc_group#timeouts SddcGroup#timeouts}
  */
  readonly timeouts?: SddcGroupTimeouts;
  /**
  * vpc_attachments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc_group#vpc_attachments SddcGroup#vpc_attachments}
  */
  readonly vpcAttachments?: SddcGroupVpcAttachments[] | cdktf.IResolvable;
}
export interface SddcGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc_group#create SddcGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc_group#delete SddcGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc_group#update SddcGroup#update}
  */
  readonly update?: string;
}

export function sddcGroupTimeoutsToTerraform(struct?: SddcGroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function sddcGroupTimeoutsToHclTerraform(struct?: SddcGroupTimeouts | cdktf.IResolvable): any {
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
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SddcGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SddcGroupTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SddcGroupTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
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
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface SddcGroupVpcAttachments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc_group#configured_prefixes SddcGroup#configured_prefixes}
  */
  readonly configuredPrefixes?: string;
}

export function sddcGroupVpcAttachmentsToTerraform(struct?: SddcGroupVpcAttachments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configured_prefixes: cdktf.stringToTerraform(struct!.configuredPrefixes),
  }
}


export function sddcGroupVpcAttachmentsToHclTerraform(struct?: SddcGroupVpcAttachments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configured_prefixes: {
      value: cdktf.stringToHclTerraform(struct!.configuredPrefixes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SddcGroupVpcAttachmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SddcGroupVpcAttachments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuredPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuredPrefixes = this._configuredPrefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SddcGroupVpcAttachments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuredPrefixes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuredPrefixes = value.configuredPrefixes;
    }
  }

  // attach_id - computed: true, optional: false, required: false
  public get attachId() {
    return this.getStringAttribute('attach_id');
  }

  // configured_prefixes - computed: true, optional: true, required: false
  private _configuredPrefixes?: string; 
  public get configuredPrefixes() {
    return this.getStringAttribute('configured_prefixes');
  }
  public set configuredPrefixes(value: string) {
    this._configuredPrefixes = value;
  }
  public resetConfiguredPrefixes() {
    this._configuredPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configuredPrefixesInput() {
    return this._configuredPrefixes;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

export class SddcGroupVpcAttachmentsList extends cdktf.ComplexList {
  public internalValue? : SddcGroupVpcAttachments[] | cdktf.IResolvable

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
  public get(index: number): SddcGroupVpcAttachmentsOutputReference {
    return new SddcGroupVpcAttachmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc_group vmc_sddc_group}
*/
export class SddcGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vmc_sddc_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SddcGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SddcGroup to import
  * @param importFromId The id of the existing SddcGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SddcGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vmc_sddc_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc_group vmc_sddc_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SddcGroupConfig
  */
  public constructor(scope: Construct, id: string, config: SddcGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'vmc_sddc_group',
      terraformGeneratorMetadata: {
        providerName: 'vmc',
        providerVersion: '1.15.5',
        providerVersionConstraint: '1.15.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._dxgwAllowedPrefixes = config.dxgwAllowedPrefixes;
    this._dxgwId = config.dxgwId;
    this._dxgwOwner = config.dxgwOwner;
    this._dxgwStatus = config.dxgwStatus;
    this._externalTgwConfiguredPrefixes = config.externalTgwConfiguredPrefixes;
    this._externalTgwId = config.externalTgwId;
    this._externalTgwOwner = config.externalTgwOwner;
    this._externalTgwRegion = config.externalTgwRegion;
    this._id = config.id;
    this._name = config.name;
    this._sddcMemberIds = config.sddcMemberIds;
    this._tgwId = config.tgwId;
    this._tgwRegion = config.tgwRegion;
    this._vpcAttachmentStatus = config.vpcAttachmentStatus;
    this._vpcAwsAccount = config.vpcAwsAccount;
    this._vpcRamShareId = config.vpcRamShareId;
    this._timeouts.internalValue = config.timeouts;
    this._vpcAttachments.internalValue = config.vpcAttachments;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creator - computed: true, optional: false, required: false
  public get creator() {
    return this.getStringAttribute('creator');
  }

  // deleted - computed: true, optional: false, required: false
  public get deleted() {
    return this.getBooleanAttribute('deleted');
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // dxgw_allowed_prefixes - computed: true, optional: true, required: false
  private _dxgwAllowedPrefixes?: string; 
  public get dxgwAllowedPrefixes() {
    return this.getStringAttribute('dxgw_allowed_prefixes');
  }
  public set dxgwAllowedPrefixes(value: string) {
    this._dxgwAllowedPrefixes = value;
  }
  public resetDxgwAllowedPrefixes() {
    this._dxgwAllowedPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dxgwAllowedPrefixesInput() {
    return this._dxgwAllowedPrefixes;
  }

  // dxgw_id - computed: true, optional: true, required: false
  private _dxgwId?: string; 
  public get dxgwId() {
    return this.getStringAttribute('dxgw_id');
  }
  public set dxgwId(value: string) {
    this._dxgwId = value;
  }
  public resetDxgwId() {
    this._dxgwId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dxgwIdInput() {
    return this._dxgwId;
  }

  // dxgw_owner - computed: true, optional: true, required: false
  private _dxgwOwner?: string; 
  public get dxgwOwner() {
    return this.getStringAttribute('dxgw_owner');
  }
  public set dxgwOwner(value: string) {
    this._dxgwOwner = value;
  }
  public resetDxgwOwner() {
    this._dxgwOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dxgwOwnerInput() {
    return this._dxgwOwner;
  }

  // dxgw_status - computed: true, optional: true, required: false
  private _dxgwStatus?: string; 
  public get dxgwStatus() {
    return this.getStringAttribute('dxgw_status');
  }
  public set dxgwStatus(value: string) {
    this._dxgwStatus = value;
  }
  public resetDxgwStatus() {
    this._dxgwStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dxgwStatusInput() {
    return this._dxgwStatus;
  }

  // external_tgw_configured_prefixes - computed: true, optional: true, required: false
  private _externalTgwConfiguredPrefixes?: string; 
  public get externalTgwConfiguredPrefixes() {
    return this.getStringAttribute('external_tgw_configured_prefixes');
  }
  public set externalTgwConfiguredPrefixes(value: string) {
    this._externalTgwConfiguredPrefixes = value;
  }
  public resetExternalTgwConfiguredPrefixes() {
    this._externalTgwConfiguredPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalTgwConfiguredPrefixesInput() {
    return this._externalTgwConfiguredPrefixes;
  }

  // external_tgw_id - computed: true, optional: true, required: false
  private _externalTgwId?: string; 
  public get externalTgwId() {
    return this.getStringAttribute('external_tgw_id');
  }
  public set externalTgwId(value: string) {
    this._externalTgwId = value;
  }
  public resetExternalTgwId() {
    this._externalTgwId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalTgwIdInput() {
    return this._externalTgwId;
  }

  // external_tgw_owner - computed: true, optional: true, required: false
  private _externalTgwOwner?: string; 
  public get externalTgwOwner() {
    return this.getStringAttribute('external_tgw_owner');
  }
  public set externalTgwOwner(value: string) {
    this._externalTgwOwner = value;
  }
  public resetExternalTgwOwner() {
    this._externalTgwOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalTgwOwnerInput() {
    return this._externalTgwOwner;
  }

  // external_tgw_region - computed: true, optional: true, required: false
  private _externalTgwRegion?: string; 
  public get externalTgwRegion() {
    return this.getStringAttribute('external_tgw_region');
  }
  public set externalTgwRegion(value: string) {
    this._externalTgwRegion = value;
  }
  public resetExternalTgwRegion() {
    this._externalTgwRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalTgwRegionInput() {
    return this._externalTgwRegion;
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

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getStringAttribute('org_id');
  }

  // sddc_member_ids - computed: false, optional: false, required: true
  private _sddcMemberIds?: string[]; 
  public get sddcMemberIds() {
    return cdktf.Fn.tolist(this.getListAttribute('sddc_member_ids'));
  }
  public set sddcMemberIds(value: string[]) {
    this._sddcMemberIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sddcMemberIdsInput() {
    return this._sddcMemberIds;
  }

  // tgw_id - computed: true, optional: true, required: false
  private _tgwId?: string; 
  public get tgwId() {
    return this.getStringAttribute('tgw_id');
  }
  public set tgwId(value: string) {
    this._tgwId = value;
  }
  public resetTgwId() {
    this._tgwId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgwIdInput() {
    return this._tgwId;
  }

  // tgw_region - computed: true, optional: true, required: false
  private _tgwRegion?: string; 
  public get tgwRegion() {
    return this.getStringAttribute('tgw_region');
  }
  public set tgwRegion(value: string) {
    this._tgwRegion = value;
  }
  public resetTgwRegion() {
    this._tgwRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgwRegionInput() {
    return this._tgwRegion;
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // vpc_attachment_status - computed: true, optional: true, required: false
  private _vpcAttachmentStatus?: string; 
  public get vpcAttachmentStatus() {
    return this.getStringAttribute('vpc_attachment_status');
  }
  public set vpcAttachmentStatus(value: string) {
    this._vpcAttachmentStatus = value;
  }
  public resetVpcAttachmentStatus() {
    this._vpcAttachmentStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcAttachmentStatusInput() {
    return this._vpcAttachmentStatus;
  }

  // vpc_aws_account - computed: true, optional: true, required: false
  private _vpcAwsAccount?: string; 
  public get vpcAwsAccount() {
    return this.getStringAttribute('vpc_aws_account');
  }
  public set vpcAwsAccount(value: string) {
    this._vpcAwsAccount = value;
  }
  public resetVpcAwsAccount() {
    this._vpcAwsAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcAwsAccountInput() {
    return this._vpcAwsAccount;
  }

  // vpc_ram_share_id - computed: true, optional: true, required: false
  private _vpcRamShareId?: string; 
  public get vpcRamShareId() {
    return this.getStringAttribute('vpc_ram_share_id');
  }
  public set vpcRamShareId(value: string) {
    this._vpcRamShareId = value;
  }
  public resetVpcRamShareId() {
    this._vpcRamShareId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcRamShareIdInput() {
    return this._vpcRamShareId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SddcGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SddcGroupTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vpc_attachments - computed: false, optional: true, required: false
  private _vpcAttachments = new SddcGroupVpcAttachmentsList(this, "vpc_attachments", false);
  public get vpcAttachments() {
    return this._vpcAttachments;
  }
  public putVpcAttachments(value: SddcGroupVpcAttachments[] | cdktf.IResolvable) {
    this._vpcAttachments.internalValue = value;
  }
  public resetVpcAttachments() {
    this._vpcAttachments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcAttachmentsInput() {
    return this._vpcAttachments.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      dxgw_allowed_prefixes: cdktf.stringToTerraform(this._dxgwAllowedPrefixes),
      dxgw_id: cdktf.stringToTerraform(this._dxgwId),
      dxgw_owner: cdktf.stringToTerraform(this._dxgwOwner),
      dxgw_status: cdktf.stringToTerraform(this._dxgwStatus),
      external_tgw_configured_prefixes: cdktf.stringToTerraform(this._externalTgwConfiguredPrefixes),
      external_tgw_id: cdktf.stringToTerraform(this._externalTgwId),
      external_tgw_owner: cdktf.stringToTerraform(this._externalTgwOwner),
      external_tgw_region: cdktf.stringToTerraform(this._externalTgwRegion),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      sddc_member_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sddcMemberIds),
      tgw_id: cdktf.stringToTerraform(this._tgwId),
      tgw_region: cdktf.stringToTerraform(this._tgwRegion),
      vpc_attachment_status: cdktf.stringToTerraform(this._vpcAttachmentStatus),
      vpc_aws_account: cdktf.stringToTerraform(this._vpcAwsAccount),
      vpc_ram_share_id: cdktf.stringToTerraform(this._vpcRamShareId),
      timeouts: sddcGroupTimeoutsToTerraform(this._timeouts.internalValue),
      vpc_attachments: cdktf.listMapper(sddcGroupVpcAttachmentsToTerraform, true)(this._vpcAttachments.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dxgw_allowed_prefixes: {
        value: cdktf.stringToHclTerraform(this._dxgwAllowedPrefixes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dxgw_id: {
        value: cdktf.stringToHclTerraform(this._dxgwId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dxgw_owner: {
        value: cdktf.stringToHclTerraform(this._dxgwOwner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dxgw_status: {
        value: cdktf.stringToHclTerraform(this._dxgwStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_tgw_configured_prefixes: {
        value: cdktf.stringToHclTerraform(this._externalTgwConfiguredPrefixes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_tgw_id: {
        value: cdktf.stringToHclTerraform(this._externalTgwId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_tgw_owner: {
        value: cdktf.stringToHclTerraform(this._externalTgwOwner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_tgw_region: {
        value: cdktf.stringToHclTerraform(this._externalTgwRegion),
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
      sddc_member_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sddcMemberIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tgw_id: {
        value: cdktf.stringToHclTerraform(this._tgwId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tgw_region: {
        value: cdktf.stringToHclTerraform(this._tgwRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_attachment_status: {
        value: cdktf.stringToHclTerraform(this._vpcAttachmentStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_aws_account: {
        value: cdktf.stringToHclTerraform(this._vpcAwsAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_ram_share_id: {
        value: cdktf.stringToHclTerraform(this._vpcRamShareId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: sddcGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SddcGroupTimeouts",
      },
      vpc_attachments: {
        value: cdktf.listMapperHcl(sddcGroupVpcAttachmentsToHclTerraform, true)(this._vpcAttachments.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SddcGroupVpcAttachmentsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
