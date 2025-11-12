// https://registry.terraform.io/providers/nullstone-io/awsex/0.1.3/docs/resources/cloudfront_distribution_invalidation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudfrontDistributionInvalidationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Cloudfront Distribution ID where an invalidation should be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nullstone-io/awsex/0.1.3/docs/resources/cloudfront_distribution_invalidation#distribution_id CloudfrontDistributionInvalidation#distribution_id}
  */
  readonly distributionId: string;
  /**
  * A list of paths to invalidate. Each path *must* start with `/`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nullstone-io/awsex/0.1.3/docs/resources/cloudfront_distribution_invalidation#paths CloudfrontDistributionInvalidation#paths}
  */
  readonly paths: string[];
  /**
  * A map of triggers that, when changed, will force Terraform to create a new invalidation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nullstone-io/awsex/0.1.3/docs/resources/cloudfront_distribution_invalidation#triggers CloudfrontDistributionInvalidation#triggers}
  */
  readonly triggers?: { [key: string]: string };
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nullstone-io/awsex/0.1.3/docs/resources/cloudfront_distribution_invalidation#timeouts CloudfrontDistributionInvalidation#timeouts}
  */
  readonly timeouts?: CloudfrontDistributionInvalidationTimeouts;
}
export interface CloudfrontDistributionInvalidationTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nullstone-io/awsex/0.1.3/docs/resources/cloudfront_distribution_invalidation#create CloudfrontDistributionInvalidation#create}
  */
  readonly create?: string;
}

export function cloudfrontDistributionInvalidationTimeoutsToTerraform(struct?: CloudfrontDistributionInvalidationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function cloudfrontDistributionInvalidationTimeoutsToHclTerraform(struct?: CloudfrontDistributionInvalidationTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontDistributionInvalidationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudfrontDistributionInvalidationTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontDistributionInvalidationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/nullstone-io/awsex/0.1.3/docs/resources/cloudfront_distribution_invalidation awsex_cloudfront_distribution_invalidation}
*/
export class CloudfrontDistributionInvalidation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awsex_cloudfront_distribution_invalidation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudfrontDistributionInvalidation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudfrontDistributionInvalidation to import
  * @param importFromId The id of the existing CloudfrontDistributionInvalidation that should be imported. Refer to the {@link https://registry.terraform.io/providers/nullstone-io/awsex/0.1.3/docs/resources/cloudfront_distribution_invalidation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudfrontDistributionInvalidation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "awsex_cloudfront_distribution_invalidation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nullstone-io/awsex/0.1.3/docs/resources/cloudfront_distribution_invalidation awsex_cloudfront_distribution_invalidation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudfrontDistributionInvalidationConfig
  */
  public constructor(scope: Construct, id: string, config: CloudfrontDistributionInvalidationConfig) {
    super(scope, id, {
      terraformResourceType: 'awsex_cloudfront_distribution_invalidation',
      terraformGeneratorMetadata: {
        providerName: 'awsex',
        providerVersion: '0.1.3',
        providerVersionConstraint: '0.1.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._distributionId = config.distributionId;
    this._paths = config.paths;
    this._triggers = config.triggers;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // distribution_id - computed: false, optional: false, required: true
  private _distributionId?: string; 
  public get distributionId() {
    return this.getStringAttribute('distribution_id');
  }
  public set distributionId(value: string) {
    this._distributionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionIdInput() {
    return this._distributionId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // paths - computed: false, optional: false, required: true
  private _paths?: string[]; 
  public get paths() {
    return cdktf.Fn.tolist(this.getListAttribute('paths'));
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // triggers - computed: true, optional: true, required: false
  private _triggers?: { [key: string]: string }; 
  public get triggers() {
    return this.getStringMapAttribute('triggers');
  }
  public set triggers(value: { [key: string]: string }) {
    this._triggers = value;
  }
  public resetTriggers() {
    this._triggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudfrontDistributionInvalidationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudfrontDistributionInvalidationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      distribution_id: cdktf.stringToTerraform(this._distributionId),
      paths: cdktf.listMapper(cdktf.stringToTerraform, false)(this._paths),
      triggers: cdktf.hashMapper(cdktf.stringToTerraform)(this._triggers),
      timeouts: cloudfrontDistributionInvalidationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      distribution_id: {
        value: cdktf.stringToHclTerraform(this._distributionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      paths: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._paths),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      triggers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._triggers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      timeouts: {
        value: cloudfrontDistributionInvalidationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudfrontDistributionInvalidationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
