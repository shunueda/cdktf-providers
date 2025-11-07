// https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/cloud_account_vmc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudAccountVmcConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to accept self signed certificate when connecting to the vCenter Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/cloud_account_vmc#accept_self_signed_cert CloudAccountVmc#accept_self_signed_cert}
  */
  readonly acceptSelfSignedCert?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/cloud_account_vmc#api_token CloudAccountVmc#api_token}
  */
  readonly apiToken: string;
  /**
  * Identifier of a data collector vm deployed in the on premise infrastructure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/cloud_account_vmc#dc_id CloudAccountVmc#dc_id}
  */
  readonly dcId?: string;
  /**
  * A human-friendly description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/cloud_account_vmc#description CloudAccountVmc#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/cloud_account_vmc#id CloudAccountVmc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of this resource instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/cloud_account_vmc#name CloudAccountVmc#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/cloud_account_vmc#nsx_hostname CloudAccountVmc#nsx_hostname}
  */
  readonly nsxHostname: string;
  /**
  * The set of region ids that will be enabled for this cloud account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/cloud_account_vmc#regions CloudAccountVmc#regions}
  */
  readonly regions: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/cloud_account_vmc#sddc_name CloudAccountVmc#sddc_name}
  */
  readonly sddcName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/cloud_account_vmc#vcenter_hostname CloudAccountVmc#vcenter_hostname}
  */
  readonly vcenterHostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/cloud_account_vmc#vcenter_password CloudAccountVmc#vcenter_password}
  */
  readonly vcenterPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/cloud_account_vmc#vcenter_username CloudAccountVmc#vcenter_username}
  */
  readonly vcenterUsername: string;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/cloud_account_vmc#tags CloudAccountVmc#tags}
  */
  readonly tags?: CloudAccountVmcTags[] | cdktf.IResolvable;
}
export interface CloudAccountVmcLinks {
}

export function cloudAccountVmcLinksToTerraform(struct?: CloudAccountVmcLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudAccountVmcLinksToHclTerraform(struct?: CloudAccountVmcLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudAccountVmcLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudAccountVmcLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAccountVmcLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // hrefs - computed: true, optional: false, required: false
  public get hrefs() {
    return cdktf.Fn.tolist(this.getListAttribute('hrefs'));
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class CloudAccountVmcLinksList extends cdktf.ComplexList {

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
  public get(index: number): CloudAccountVmcLinksOutputReference {
    return new CloudAccountVmcLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudAccountVmcTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/cloud_account_vmc#key CloudAccountVmc#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/cloud_account_vmc#value CloudAccountVmc#value}
  */
  readonly value: string;
}

export function cloudAccountVmcTagsToTerraform(struct?: CloudAccountVmcTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cloudAccountVmcTagsToHclTerraform(struct?: CloudAccountVmcTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class CloudAccountVmcTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudAccountVmcTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAccountVmcTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class CloudAccountVmcTagsList extends cdktf.ComplexList {
  public internalValue? : CloudAccountVmcTags[] | cdktf.IResolvable

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
  public get(index: number): CloudAccountVmcTagsOutputReference {
    return new CloudAccountVmcTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/cloud_account_vmc vra_cloud_account_vmc}
*/
export class CloudAccountVmc extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vra_cloud_account_vmc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudAccountVmc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudAccountVmc to import
  * @param importFromId The id of the existing CloudAccountVmc that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/cloud_account_vmc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudAccountVmc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vra_cloud_account_vmc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/cloud_account_vmc vra_cloud_account_vmc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudAccountVmcConfig
  */
  public constructor(scope: Construct, id: string, config: CloudAccountVmcConfig) {
    super(scope, id, {
      terraformResourceType: 'vra_cloud_account_vmc',
      terraformGeneratorMetadata: {
        providerName: 'vra',
        providerVersion: '0.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acceptSelfSignedCert = config.acceptSelfSignedCert;
    this._apiToken = config.apiToken;
    this._dcId = config.dcId;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._nsxHostname = config.nsxHostname;
    this._regions = config.regions;
    this._sddcName = config.sddcName;
    this._vcenterHostname = config.vcenterHostname;
    this._vcenterPassword = config.vcenterPassword;
    this._vcenterUsername = config.vcenterUsername;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_self_signed_cert - computed: false, optional: true, required: false
  private _acceptSelfSignedCert?: boolean | cdktf.IResolvable; 
  public get acceptSelfSignedCert() {
    return this.getBooleanAttribute('accept_self_signed_cert');
  }
  public set acceptSelfSignedCert(value: boolean | cdktf.IResolvable) {
    this._acceptSelfSignedCert = value;
  }
  public resetAcceptSelfSignedCert() {
    this._acceptSelfSignedCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptSelfSignedCertInput() {
    return this._acceptSelfSignedCert;
  }

  // api_token - computed: false, optional: false, required: true
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // dc_id - computed: false, optional: true, required: false
  private _dcId?: string; 
  public get dcId() {
    return this.getStringAttribute('dc_id');
  }
  public set dcId(value: string) {
    this._dcId = value;
  }
  public resetDcId() {
    this._dcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcIdInput() {
    return this._dcId;
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

  // links - computed: true, optional: false, required: false
  private _links = new CloudAccountVmcLinksList(this, "links", true);
  public get links() {
    return this._links;
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

  // nsx_hostname - computed: false, optional: false, required: true
  private _nsxHostname?: string; 
  public get nsxHostname() {
    return this.getStringAttribute('nsx_hostname');
  }
  public set nsxHostname(value: string) {
    this._nsxHostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxHostnameInput() {
    return this._nsxHostname;
  }

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getStringAttribute('org_id');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // regions - computed: false, optional: false, required: true
  private _regions?: string[]; 
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // sddc_name - computed: false, optional: false, required: true
  private _sddcName?: string; 
  public get sddcName() {
    return this.getStringAttribute('sddc_name');
  }
  public set sddcName(value: string) {
    this._sddcName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sddcNameInput() {
    return this._sddcName;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // vcenter_hostname - computed: false, optional: false, required: true
  private _vcenterHostname?: string; 
  public get vcenterHostname() {
    return this.getStringAttribute('vcenter_hostname');
  }
  public set vcenterHostname(value: string) {
    this._vcenterHostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterHostnameInput() {
    return this._vcenterHostname;
  }

  // vcenter_password - computed: false, optional: false, required: true
  private _vcenterPassword?: string; 
  public get vcenterPassword() {
    return this.getStringAttribute('vcenter_password');
  }
  public set vcenterPassword(value: string) {
    this._vcenterPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterPasswordInput() {
    return this._vcenterPassword;
  }

  // vcenter_username - computed: false, optional: false, required: true
  private _vcenterUsername?: string; 
  public get vcenterUsername() {
    return this.getStringAttribute('vcenter_username');
  }
  public set vcenterUsername(value: string) {
    this._vcenterUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterUsernameInput() {
    return this._vcenterUsername;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new CloudAccountVmcTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: CloudAccountVmcTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accept_self_signed_cert: cdktf.booleanToTerraform(this._acceptSelfSignedCert),
      api_token: cdktf.stringToTerraform(this._apiToken),
      dc_id: cdktf.stringToTerraform(this._dcId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      nsx_hostname: cdktf.stringToTerraform(this._nsxHostname),
      regions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._regions),
      sddc_name: cdktf.stringToTerraform(this._sddcName),
      vcenter_hostname: cdktf.stringToTerraform(this._vcenterHostname),
      vcenter_password: cdktf.stringToTerraform(this._vcenterPassword),
      vcenter_username: cdktf.stringToTerraform(this._vcenterUsername),
      tags: cdktf.listMapper(cloudAccountVmcTagsToTerraform, true)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accept_self_signed_cert: {
        value: cdktf.booleanToHclTerraform(this._acceptSelfSignedCert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      api_token: {
        value: cdktf.stringToHclTerraform(this._apiToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dc_id: {
        value: cdktf.stringToHclTerraform(this._dcId),
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
      nsx_hostname: {
        value: cdktf.stringToHclTerraform(this._nsxHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      regions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._regions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sddc_name: {
        value: cdktf.stringToHclTerraform(this._sddcName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcenter_hostname: {
        value: cdktf.stringToHclTerraform(this._vcenterHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcenter_password: {
        value: cdktf.stringToHclTerraform(this._vcenterPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcenter_username: {
        value: cdktf.stringToHclTerraform(this._vcenterUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cloudAccountVmcTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudAccountVmcTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
