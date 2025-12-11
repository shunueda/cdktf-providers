// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_ddos_protection_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeoDdosProtectionConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_ddos_protection_config#id TeoDdosProtectionConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Zone ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_ddos_protection_config#zone_id TeoDdosProtectionConfig#zone_id}
  */
  readonly zoneId: string;
  /**
  * ddos_protection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_ddos_protection_config#ddos_protection TeoDdosProtectionConfig#ddos_protection}
  */
  readonly ddosProtection: TeoDdosProtectionConfigDdosProtection;
}
export interface TeoDdosProtectionConfigDdosProtectionSharedCnameDdosProtections {
}

export function teoDdosProtectionConfigDdosProtectionSharedCnameDdosProtectionsToTerraform(struct?: TeoDdosProtectionConfigDdosProtectionSharedCnameDdosProtections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function teoDdosProtectionConfigDdosProtectionSharedCnameDdosProtectionsToHclTerraform(struct?: TeoDdosProtectionConfigDdosProtectionSharedCnameDdosProtections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TeoDdosProtectionConfigDdosProtectionSharedCnameDdosProtectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeoDdosProtectionConfigDdosProtectionSharedCnameDdosProtections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoDdosProtectionConfigDdosProtectionSharedCnameDdosProtections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // switch - computed: true, optional: false, required: false
  public get switch() {
    return this.getStringAttribute('switch');
  }
}

export class TeoDdosProtectionConfigDdosProtectionSharedCnameDdosProtectionsList extends cdktf.ComplexList {

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
  public get(index: number): TeoDdosProtectionConfigDdosProtectionSharedCnameDdosProtectionsOutputReference {
    return new TeoDdosProtectionConfigDdosProtectionSharedCnameDdosProtectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeoDdosProtectionConfigDdosProtectionDomainDdosProtections {
  /**
  * Domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_ddos_protection_config#domain TeoDdosProtectionConfig#domain}
  */
  readonly domain: string;
  /**
  * Standalone DDoS switch of the domain. valid values:.
  * <li>on: enabled;</li>.
  * <li>off: closed.</li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_ddos_protection_config#switch TeoDdosProtectionConfig#switch}
  */
  readonly switch: string;
}

export function teoDdosProtectionConfigDdosProtectionDomainDdosProtectionsToTerraform(struct?: TeoDdosProtectionConfigDdosProtectionDomainDdosProtections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoDdosProtectionConfigDdosProtectionDomainDdosProtectionsToHclTerraform(struct?: TeoDdosProtectionConfigDdosProtectionDomainDdosProtections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoDdosProtectionConfigDdosProtectionDomainDdosProtectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeoDdosProtectionConfigDdosProtectionDomainDdosProtections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoDdosProtectionConfigDdosProtectionDomainDdosProtections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._switch = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._switch = value.switch;
    }
  }

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

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}

export class TeoDdosProtectionConfigDdosProtectionDomainDdosProtectionsList extends cdktf.ComplexList {
  public internalValue? : TeoDdosProtectionConfigDdosProtectionDomainDdosProtections[] | cdktf.IResolvable

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
  public get(index: number): TeoDdosProtectionConfigDdosProtectionDomainDdosProtectionsOutputReference {
    return new TeoDdosProtectionConfigDdosProtectionDomainDdosProtectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeoDdosProtectionConfigDdosProtection {
  /**
  * Specifies the protection scope of standalone DDoS. valid values:.
  * <li>protect_all_domains: specifies exclusive Anti-DDoS protection for all domain names in the site. newly added domain names automatically enable exclusive Anti-DDoS protection. when this parameter is specified, DomainDDoSProtections will not be processed.</li>.
  * <li>protect_specified_domains: only applicable to specified domains. specific scope can be set via DomainDDoSProtection parameter.</li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_ddos_protection_config#protection_option TeoDdosProtectionConfig#protection_option}
  */
  readonly protectionOption: string;
  /**
  * domain_ddos_protections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_ddos_protection_config#domain_ddos_protections TeoDdosProtectionConfig#domain_ddos_protections}
  */
  readonly domainDdosProtections?: TeoDdosProtectionConfigDdosProtectionDomainDdosProtections[] | cdktf.IResolvable;
}

export function teoDdosProtectionConfigDdosProtectionToTerraform(struct?: TeoDdosProtectionConfigDdosProtectionOutputReference | TeoDdosProtectionConfigDdosProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    protection_option: cdktf.stringToTerraform(struct!.protectionOption),
    domain_ddos_protections: cdktf.listMapper(teoDdosProtectionConfigDdosProtectionDomainDdosProtectionsToTerraform, true)(struct!.domainDdosProtections),
  }
}


export function teoDdosProtectionConfigDdosProtectionToHclTerraform(struct?: TeoDdosProtectionConfigDdosProtectionOutputReference | TeoDdosProtectionConfigDdosProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    protection_option: {
      value: cdktf.stringToHclTerraform(struct!.protectionOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_ddos_protections: {
      value: cdktf.listMapperHcl(teoDdosProtectionConfigDdosProtectionDomainDdosProtectionsToHclTerraform, true)(struct!.domainDdosProtections),
      isBlock: true,
      type: "set",
      storageClassType: "TeoDdosProtectionConfigDdosProtectionDomainDdosProtectionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoDdosProtectionConfigDdosProtectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoDdosProtectionConfigDdosProtection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._protectionOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectionOption = this._protectionOption;
    }
    if (this._domainDdosProtections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainDdosProtections = this._domainDdosProtections?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoDdosProtectionConfigDdosProtection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._protectionOption = undefined;
      this._domainDdosProtections.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._protectionOption = value.protectionOption;
      this._domainDdosProtections.internalValue = value.domainDdosProtections;
    }
  }

  // protection_option - computed: false, optional: false, required: true
  private _protectionOption?: string; 
  public get protectionOption() {
    return this.getStringAttribute('protection_option');
  }
  public set protectionOption(value: string) {
    this._protectionOption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionOptionInput() {
    return this._protectionOption;
  }

  // shared_cname_ddos_protections - computed: true, optional: false, required: false
  private _sharedCnameDdosProtections = new TeoDdosProtectionConfigDdosProtectionSharedCnameDdosProtectionsList(this, "shared_cname_ddos_protections", false);
  public get sharedCnameDdosProtections() {
    return this._sharedCnameDdosProtections;
  }

  // domain_ddos_protections - computed: false, optional: true, required: false
  private _domainDdosProtections = new TeoDdosProtectionConfigDdosProtectionDomainDdosProtectionsList(this, "domain_ddos_protections", true);
  public get domainDdosProtections() {
    return this._domainDdosProtections;
  }
  public putDomainDdosProtections(value: TeoDdosProtectionConfigDdosProtectionDomainDdosProtections[] | cdktf.IResolvable) {
    this._domainDdosProtections.internalValue = value;
  }
  public resetDomainDdosProtections() {
    this._domainDdosProtections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainDdosProtectionsInput() {
    return this._domainDdosProtections.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_ddos_protection_config tencentcloud_teo_ddos_protection_config}
*/
export class TeoDdosProtectionConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_teo_ddos_protection_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TeoDdosProtectionConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TeoDdosProtectionConfig to import
  * @param importFromId The id of the existing TeoDdosProtectionConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_ddos_protection_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TeoDdosProtectionConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_teo_ddos_protection_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/teo_ddos_protection_config tencentcloud_teo_ddos_protection_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeoDdosProtectionConfigConfig
  */
  public constructor(scope: Construct, id: string, config: TeoDdosProtectionConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_teo_ddos_protection_config',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
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
    this._zoneId = config.zoneId;
    this._ddosProtection.internalValue = config.ddosProtection;
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

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // ddos_protection - computed: false, optional: false, required: true
  private _ddosProtection = new TeoDdosProtectionConfigDdosProtectionOutputReference(this, "ddos_protection");
  public get ddosProtection() {
    return this._ddosProtection;
  }
  public putDdosProtection(value: TeoDdosProtectionConfigDdosProtection) {
    this._ddosProtection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosProtectionInput() {
    return this._ddosProtection.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      ddos_protection: teoDdosProtectionConfigDdosProtectionToTerraform(this._ddosProtection.internalValue),
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
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddos_protection: {
        value: teoDdosProtectionConfigDdosProtectionToHclTerraform(this._ddosProtection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeoDdosProtectionConfigDdosProtectionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
