// https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/ingress_rule_mongodb
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IngressRuleMongodbConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Ably application ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/ingress_rule_mongodb#app_id IngressRuleMongodb#app_id}
  */
  readonly appId: string;
  /**
  * The status of the rule. Rules can be enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/ingress_rule_mongodb#status IngressRuleMongodb#status}
  */
  readonly status?: string;
  /**
  * object (rule_source)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/ingress_rule_mongodb#target IngressRuleMongodb#target}
  */
  readonly target: IngressRuleMongodbTarget;
}
export interface IngressRuleMongodbTarget {
  /**
  * What the connector should watch within the database. The connector only supports watching collections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/ingress_rule_mongodb#collection IngressRuleMongodb#collection}
  */
  readonly collection: string;
  /**
  * The MongoDB Database Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/ingress_rule_mongodb#database IngressRuleMongodb#database}
  */
  readonly database: string;
  /**
  * Controls whether the full document should be included in the published change events. Full Document is not available by default in all types of change event. Possible values are `updateLookup`, `whenAvailable`, `off`. The default is `off`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/ingress_rule_mongodb#full_document IngressRuleMongodb#full_document}
  */
  readonly fullDocument: string;
  /**
  * Controls whether the full document before the change should be included in the change event. Full Document before change is not available on all types of change event. Possible values are `whenAvailable` or `off`. The default is `off`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/ingress_rule_mongodb#full_document_before_change IngressRuleMongodb#full_document_before_change}
  */
  readonly fullDocumentBeforeChange: string;
  /**
  * A MongoDB pipeline to pass to the Change Stream API. This field allows you to control which types of change events are published, and which channel the change event should be published to. The pipeline must set the _ablyChannel field on the root of the change event. It must also be a valid JSON array of pipeline operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/ingress_rule_mongodb#pipeline IngressRuleMongodb#pipeline}
  */
  readonly pipeline: string;
  /**
  * The primary site that the connector will run in. You should choose a site that is close to your database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/ingress_rule_mongodb#primary_site IngressRuleMongodb#primary_site}
  */
  readonly primarySite: string;
  /**
  * The connection string of your MongoDB instance. (e.g. mongodb://user:pass@myhost.com)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/ingress_rule_mongodb#url IngressRuleMongodb#url}
  */
  readonly url: string;
}

export function ingressRuleMongodbTargetToTerraform(struct?: IngressRuleMongodbTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collection: cdktf.stringToTerraform(struct!.collection),
    database: cdktf.stringToTerraform(struct!.database),
    full_document: cdktf.stringToTerraform(struct!.fullDocument),
    full_document_before_change: cdktf.stringToTerraform(struct!.fullDocumentBeforeChange),
    pipeline: cdktf.stringToTerraform(struct!.pipeline),
    primary_site: cdktf.stringToTerraform(struct!.primarySite),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function ingressRuleMongodbTargetToHclTerraform(struct?: IngressRuleMongodbTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collection: {
      value: cdktf.stringToHclTerraform(struct!.collection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    full_document: {
      value: cdktf.stringToHclTerraform(struct!.fullDocument),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    full_document_before_change: {
      value: cdktf.stringToHclTerraform(struct!.fullDocumentBeforeChange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pipeline: {
      value: cdktf.stringToHclTerraform(struct!.pipeline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_site: {
      value: cdktf.stringToHclTerraform(struct!.primarySite),
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

export class IngressRuleMongodbTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IngressRuleMongodbTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collection !== undefined) {
      hasAnyValues = true;
      internalValueResult.collection = this._collection;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._fullDocument !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullDocument = this._fullDocument;
    }
    if (this._fullDocumentBeforeChange !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullDocumentBeforeChange = this._fullDocumentBeforeChange;
    }
    if (this._pipeline !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipeline = this._pipeline;
    }
    if (this._primarySite !== undefined) {
      hasAnyValues = true;
      internalValueResult.primarySite = this._primarySite;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IngressRuleMongodbTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collection = undefined;
      this._database = undefined;
      this._fullDocument = undefined;
      this._fullDocumentBeforeChange = undefined;
      this._pipeline = undefined;
      this._primarySite = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collection = value.collection;
      this._database = value.database;
      this._fullDocument = value.fullDocument;
      this._fullDocumentBeforeChange = value.fullDocumentBeforeChange;
      this._pipeline = value.pipeline;
      this._primarySite = value.primarySite;
      this._url = value.url;
    }
  }

  // collection - computed: false, optional: false, required: true
  private _collection?: string; 
  public get collection() {
    return this.getStringAttribute('collection');
  }
  public set collection(value: string) {
    this._collection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionInput() {
    return this._collection;
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // full_document - computed: false, optional: false, required: true
  private _fullDocument?: string; 
  public get fullDocument() {
    return this.getStringAttribute('full_document');
  }
  public set fullDocument(value: string) {
    this._fullDocument = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fullDocumentInput() {
    return this._fullDocument;
  }

  // full_document_before_change - computed: false, optional: false, required: true
  private _fullDocumentBeforeChange?: string; 
  public get fullDocumentBeforeChange() {
    return this.getStringAttribute('full_document_before_change');
  }
  public set fullDocumentBeforeChange(value: string) {
    this._fullDocumentBeforeChange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fullDocumentBeforeChangeInput() {
    return this._fullDocumentBeforeChange;
  }

  // pipeline - computed: false, optional: false, required: true
  private _pipeline?: string; 
  public get pipeline() {
    return this.getStringAttribute('pipeline');
  }
  public set pipeline(value: string) {
    this._pipeline = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineInput() {
    return this._pipeline;
  }

  // primary_site - computed: false, optional: false, required: true
  private _primarySite?: string; 
  public get primarySite() {
    return this.getStringAttribute('primary_site');
  }
  public set primarySite(value: string) {
    this._primarySite = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primarySiteInput() {
    return this._primarySite;
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

/**
* Represents a {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/ingress_rule_mongodb ably_ingress_rule_mongodb}
*/
export class IngressRuleMongodb extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ably_ingress_rule_mongodb";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IngressRuleMongodb resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IngressRuleMongodb to import
  * @param importFromId The id of the existing IngressRuleMongodb that should be imported. Refer to the {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/ingress_rule_mongodb#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IngressRuleMongodb to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ably_ingress_rule_mongodb", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/ingress_rule_mongodb ably_ingress_rule_mongodb} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IngressRuleMongodbConfig
  */
  public constructor(scope: Construct, id: string, config: IngressRuleMongodbConfig) {
    super(scope, id, {
      terraformResourceType: 'ably_ingress_rule_mongodb',
      terraformGeneratorMetadata: {
        providerName: 'ably',
        providerVersion: '0.11.1',
        providerVersionConstraint: '0.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appId = config.appId;
    this._status = config.status;
    this._target.internalValue = config.target;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_id - computed: false, optional: false, required: true
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // target - computed: false, optional: false, required: true
  private _target = new IngressRuleMongodbTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: IngressRuleMongodbTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_id: cdktf.stringToTerraform(this._appId),
      status: cdktf.stringToTerraform(this._status),
      target: ingressRuleMongodbTargetToTerraform(this._target.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_id: {
        value: cdktf.stringToHclTerraform(this._appId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target: {
        value: ingressRuleMongodbTargetToHclTerraform(this._target.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IngressRuleMongodbTarget",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
