// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vod_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VodDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vod_domain#check_url VodDomain#check_url}
  */
  readonly checkUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vod_domain#domain_name VodDomain#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vod_domain#id VodDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vod_domain#scope VodDomain#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vod_domain#tags VodDomain#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vod_domain#top_level_domain VodDomain#top_level_domain}
  */
  readonly topLevelDomain?: string;
  /**
  * sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vod_domain#sources VodDomain#sources}
  */
  readonly sources: VodDomainSources[] | cdktf.IResolvable;
}
export interface VodDomainSources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vod_domain#source_content VodDomain#source_content}
  */
  readonly sourceContent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vod_domain#source_port VodDomain#source_port}
  */
  readonly sourcePort: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vod_domain#source_priority VodDomain#source_priority}
  */
  readonly sourcePriority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vod_domain#source_type VodDomain#source_type}
  */
  readonly sourceType: string;
}

export function vodDomainSourcesToTerraform(struct?: VodDomainSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_content: cdktf.stringToTerraform(struct!.sourceContent),
    source_port: cdktf.stringToTerraform(struct!.sourcePort),
    source_priority: cdktf.stringToTerraform(struct!.sourcePriority),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
  }
}


export function vodDomainSourcesToHclTerraform(struct?: VodDomainSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_content: {
      value: cdktf.stringToHclTerraform(struct!.sourceContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_port: {
      value: cdktf.stringToHclTerraform(struct!.sourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_priority: {
      value: cdktf.stringToHclTerraform(struct!.sourcePriority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VodDomainSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VodDomainSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceContent = this._sourceContent;
    }
    if (this._sourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort;
    }
    if (this._sourcePriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePriority = this._sourcePriority;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VodDomainSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceContent = undefined;
      this._sourcePort = undefined;
      this._sourcePriority = undefined;
      this._sourceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceContent = value.sourceContent;
      this._sourcePort = value.sourcePort;
      this._sourcePriority = value.sourcePriority;
      this._sourceType = value.sourceType;
    }
  }

  // source_content - computed: false, optional: false, required: true
  private _sourceContent?: string; 
  public get sourceContent() {
    return this.getStringAttribute('source_content');
  }
  public set sourceContent(value: string) {
    this._sourceContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceContentInput() {
    return this._sourceContent;
  }

  // source_port - computed: false, optional: false, required: true
  private _sourcePort?: string; 
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }
  public set sourcePort(value: string) {
    this._sourcePort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }

  // source_priority - computed: true, optional: true, required: false
  private _sourcePriority?: string; 
  public get sourcePriority() {
    return this.getStringAttribute('source_priority');
  }
  public set sourcePriority(value: string) {
    this._sourcePriority = value;
  }
  public resetSourcePriority() {
    this._sourcePriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePriorityInput() {
    return this._sourcePriority;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }
}

export class VodDomainSourcesList extends cdktf.ComplexList {
  public internalValue? : VodDomainSources[] | cdktf.IResolvable

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
  public get(index: number): VodDomainSourcesOutputReference {
    return new VodDomainSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vod_domain alicloud_vod_domain}
*/
export class VodDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_vod_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VodDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VodDomain to import
  * @param importFromId The id of the existing VodDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vod_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VodDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_vod_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vod_domain alicloud_vod_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VodDomainConfig
  */
  public constructor(scope: Construct, id: string, config: VodDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_vod_domain',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._checkUrl = config.checkUrl;
    this._domainName = config.domainName;
    this._id = config.id;
    this._scope = config.scope;
    this._tags = config.tags;
    this._topLevelDomain = config.topLevelDomain;
    this._sources.internalValue = config.sources;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cert_name - computed: true, optional: false, required: false
  public get certName() {
    return this.getStringAttribute('cert_name');
  }

  // check_url - computed: false, optional: true, required: false
  private _checkUrl?: string; 
  public get checkUrl() {
    return this.getStringAttribute('check_url');
  }
  public set checkUrl(value: string) {
    this._checkUrl = value;
  }
  public resetCheckUrl() {
    this._checkUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkUrlInput() {
    return this._checkUrl;
  }

  // cname - computed: true, optional: false, required: false
  public get cname() {
    return this.getStringAttribute('cname');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // gmt_created - computed: true, optional: false, required: false
  public get gmtCreated() {
    return this.getStringAttribute('gmt_created');
  }

  // gmt_modified - computed: true, optional: false, required: false
  public get gmtModified() {
    return this.getStringAttribute('gmt_modified');
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

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // ssl_protocol - computed: true, optional: false, required: false
  public get sslProtocol() {
    return this.getStringAttribute('ssl_protocol');
  }

  // ssl_pub - computed: true, optional: false, required: false
  public get sslPub() {
    return this.getStringAttribute('ssl_pub');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // top_level_domain - computed: false, optional: true, required: false
  private _topLevelDomain?: string; 
  public get topLevelDomain() {
    return this.getStringAttribute('top_level_domain');
  }
  public set topLevelDomain(value: string) {
    this._topLevelDomain = value;
  }
  public resetTopLevelDomain() {
    this._topLevelDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topLevelDomainInput() {
    return this._topLevelDomain;
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getStringAttribute('weight');
  }

  // sources - computed: false, optional: false, required: true
  private _sources = new VodDomainSourcesList(this, "sources", true);
  public get sources() {
    return this._sources;
  }
  public putSources(value: VodDomainSources[] | cdktf.IResolvable) {
    this._sources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      check_url: cdktf.stringToTerraform(this._checkUrl),
      domain_name: cdktf.stringToTerraform(this._domainName),
      id: cdktf.stringToTerraform(this._id),
      scope: cdktf.stringToTerraform(this._scope),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      top_level_domain: cdktf.stringToTerraform(this._topLevelDomain),
      sources: cdktf.listMapper(vodDomainSourcesToTerraform, true)(this._sources.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      check_url: {
        value: cdktf.stringToHclTerraform(this._checkUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
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
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      top_level_domain: {
        value: cdktf.stringToHclTerraform(this._topLevelDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sources: {
        value: cdktf.listMapperHcl(vodDomainSourcesToHclTerraform, true)(this._sources.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VodDomainSourcesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
